# PAPAMAMA CAR'S 北陸オートリミックス2026 in 金沢 イベントLP

PAPAMAMA CAR'Sのイベント出展告知LP(モバイルファースト)。

## 技術構成

- Vite + React + TypeScript
- Swiper(スタッフ紹介・ブース紹介の2カルーセル)
- セルフホストフォント: Noto Sans JP / Anton(@fontsource)

## 開発

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 本番ビルド(dist/)
```

## 構成

- `src/constants.ts` — CTA URL(全ボタン共通・一元管理)、スタッフ/ブースのスライドデータ
- `src/sections/` — LP各セクション
- `src/components/` — 共通CTA・セクションタイトル・カルーセル
- `public/images/` — 使用画像(スタッフ6名分は`Frame 61 (1).png`を等幅6分割したもの)
- `design/` — 元デザイン参照用ファイル
- `scripts/screenshot.mjs` — ビジュアルQA用フルページスクリーンショット(要: 開発サーバー起動)

```bash
node scripts/screenshot.mjs 390 qa/full-390.png
```
