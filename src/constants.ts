// CTAの遷移先URL(一元管理)
// 相談予約
export const CTA_URL =
  "https://s.lmes.jp/landing-qr/2007227107-GgA3P6zw?uLand=4aqfEl";
// 塗装体験予約
export const PAINT_CTA_URL =
  "https://s.lmes.jp/landing-qr/2007227107-GgA3P6zw?uLand=1oZNne";

// イベント開催情報
// ※メインデザイン画像から読み取れない項目は空文字にしておき、確定後に差し替える
export const eventData = {
  title: "見て 乗って 遊ぶ",
  subTitle: "PAPAMAMA CAR'S イベント出展決定",
  venue: "", // 会場名(デザイン確認後に差し替え)
  venueAddress: "",
  dates: "", // 開催日程(デザイン確認後に差し替え)
  openHours: [] as { day: string; time: string }[],
};

// フッターSNSリンク
export const snsLinks = {
  instagram: "https://www.instagram.com/papamamacars?igsh=MWlleHN0NXNoOWQwdQ==",
  facebook: "https://www.facebook.com/share/1EiAyfkF6t/?mibextid=wwXIfr",
  line: CTA_URL,
};

export const staffMembers = [
  {
    id: 1,
    name: "森行 啓太",
    kana: "モリユキ ケイタ",
    image: "/images/staff/staff-1.png",
  },
  {
    id: 2,
    name: "飯沼 蒼太郎",
    kana: "イイヌマ ソウタロウ",
    image: "/images/staff/staff-2.png",
  },
  {
    id: 3,
    name: "後藤 朱里",
    kana: "ゴトウ アカリ",
    image: "/images/staff/staff-3.png",
  },
  {
    id: 4,
    name: "高木 流星",
    kana: "タカギ リュウセイ",
    image: "/images/staff/staff-4.png",
  },
  {
    id: 5,
    name: "山田 零音",
    kana: "ヤマダ レオト",
    image: "/images/staff/staff-5.png",
  },
  {
    id: 6,
    name: "松浦 加奈",
    kana: "マツウラ カナ",
    image: "/images/staff/staff-6.png",
  },
];

export const boothSlides = [
  {
    id: 1,
    image: "/images/booth/booth-front.jpg",
    alt: "正面から見たPAPAMAMA CAR'S展示ブース。展示車両と中央カウンター",
  },
  {
    id: 2,
    image: "/images/booth/booth-overhead.jpg",
    alt: "俯瞰から見たPAPAMAMA CAR'S展示ブース全体",
  },
];
