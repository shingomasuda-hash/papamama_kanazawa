import { chromium } from "playwright";

const width = Number(process.argv[2] ?? 390);
const out = process.argv[3] ?? `qa/full-${width}.png`;
const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium",
});
const page = await browser.newPage({
  viewport: { width, height: 844 },
});
page.on("requestfailed", (req) =>
  console.log("REQUEST FAILED:", req.url(), req.failure()?.errorText),
);
page.on("response", (res) => {
  if (res.status() >= 400) console.log("HTTP", res.status(), res.url());
});
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
// 全画像のlazy loadを発火させるためページ全体をスクロール
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
});
await page.waitForLoadState("networkidle");
await page.waitForFunction(
  () =>
    [...document.querySelectorAll("img")].every(
      (i) => i.complete && i.naturalWidth > 0,
    ),
  undefined,
  { timeout: 15000 },
).catch(() => console.log("WARN: some images not loaded"));
await page.waitForTimeout(600);
const scroll = await page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
console.log("scrollWidth", scroll.scrollWidth, "clientWidth", scroll.clientWidth,
  scroll.scrollWidth > scroll.clientWidth ? "HORIZONTAL OVERFLOW!" : "ok");
await page.screenshot({ path: out, fullPage: true });
console.log("saved", out);
await browser.close();
