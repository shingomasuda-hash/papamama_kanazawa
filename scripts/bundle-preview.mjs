/**
 * dist/ のビルド成果物を、プレビュー配布用の自己完結型HTML 1ファイルへ固める。
 * - 画像: WebP化してdata URIでインライン
 * - フォント: ページ内で実際に使うグリフを含むサブセットのみdata URIでインライン
 * 使い方: npm run build && node scripts/bundle-preview.mjs [出力パス]
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";
import sharp from "sharp";

const DIST = "dist";
const OUT = process.argv[2] ?? "qa/preview.html";

const assets = readdirSync(join(DIST, "assets"));
const cssFile = assets.find((f) => f.endsWith(".css"));
const jsFile = assets.find((f) => f.endsWith(".js"));
let css = readFileSync(join(DIST, "assets", cssFile), "utf8");
let js = readFileSync(join(DIST, "assets", jsFile), "utf8");

// ---- ページで使用する文字集合(ソースのJSX/表示テキストから収集) ----
const srcTexts = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx|ts)$/.test(f)) srcTexts.push(readFileSync(p, "utf8"));
  }
};
walk("src");
const usedCodepoints = new Set();
for (const ch of srcTexts.join("")) usedCodepoints.add(ch.codePointAt(0));
// 念のためASCII全域を追加
for (let c = 0x20; c < 0x7f; c++) usedCodepoints.add(c);

// ---- @font-face を解析し、必要なサブセットのみ残してwoff2をインライン ----
const parseRanges = (rangeStr) =>
  rangeStr
    .split(",")
    .map((r) => {
      const t = r.trim();
      const wild = t.match(/^U\+([0-9A-Fa-f?]+)$/i);
      if (wild && wild[1].includes("?")) {
        return [
          parseInt(wild[1].replaceAll("?", "0"), 16),
          parseInt(wild[1].replaceAll("?", "F"), 16),
        ];
      }
      const m = t.match(/U\+([0-9A-Fa-f]+)(?:-([0-9A-Fa-f]+))?/i);
      if (!m) return null;
      const start = parseInt(m[1], 16);
      return [start, m[2] ? parseInt(m[2], 16) : start];
    })
    .filter(Boolean);

let keptFonts = 0;
let droppedFonts = 0;
css = css.replace(/@font-face\s*\{[^}]*\}/g, (block) => {
  const rangeMatch = block.match(/unicode-range:\s*([^;}]+)[;}]/);
  const woff2Match = block.match(/url\(([^)]+\.woff2)\)\s*format\(["']?woff2["']?\)/);
  if (!woff2Match) return block;
  let needed = true;
  if (rangeMatch) {
    needed = parseRanges(rangeMatch[1]).some(([a, b]) => {
      for (const cp of usedCodepoints) if (cp >= a && cp <= b) return true;
      return false;
    });
  }
  if (!needed) {
    droppedFonts++;
    return "";
  }
  keptFonts++;
  const rel = woff2Match[1].replace(/^\.\//, "").replace(/^\/?assets\//, "");
  const buf = readFileSync(join(DIST, "assets", rel));
  const dataUri = `data:font/woff2;base64,${buf.toString("base64")}`;
  // woffフォールバック等は落とし、woff2のみに
  return block.replace(
    /src:\s*[^;]+;/,
    `src: url(${dataUri}) format("woff2");`,
  );
});
console.log(`fonts: kept ${keptFonts}, dropped ${droppedFonts}`);

// ---- 画像をWebP化してdata URIに置換(JS・CSSの両方) ----
const imageFiles = [];
const walkImages = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walkImages(p);
    else imageFiles.push(p);
  }
};
walkImages(join(DIST, "images"));

let totalWebp = 0;
for (const file of imageFiles) {
  const url = "/" + relative(DIST, file).replaceAll("\\", "/");
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
  let img = sharp(file);
  const meta = await img.metadata();
  if (meta.width > 1400) img = img.resize(1400);
  const buf = await img.webp({ quality: 78 }).toBuffer();
  totalWebp += buf.length;
  const dataUri = `data:image/webp;base64,${buf.toString("base64")}`;
  js = js.replaceAll(`"${url}"`, JSON.stringify(dataUri));
  js = js.replaceAll("`" + url + "`", "`" + dataUri + "`");
  js = js.replaceAll(`'${url}'`, `'${dataUri}'`);
  css = css.replaceAll(`url(${url})`, `url(${dataUri})`);
  css = css.replaceAll(`url("${url}")`, `url("${dataUri}")`);
}
console.log("webp total:", (totalWebp / 1024 / 1024).toFixed(2), "MB");

const html = `<title>PAPAMAMA CAR'S | 北陸オートリミックス2026 in 金沢 出店決定！</title>
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`;
writeFileSync(OUT, html);
console.log("wrote", OUT, (html.length / 1024 / 1024).toFixed(2), "MB");
