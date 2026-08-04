const stripPhotos = [
  {
    src: "/images/paint-strip/strip-1.jpg",
    alt: "PAPAMAMA CAR'Sの展示車両の前で薪を持つスタッフ",
  },
  {
    src: "/images/paint-strip/strip-2.jpg",
    alt: "PAPAMAMA CAR'S店舗前に集合したスタッフたち",
  },
  {
    src: "/images/paint-strip/strip-3.jpg",
    alt: "展示車両を囲むスタッフ3名",
  },
];

export function PaintEventBanner() {
  return (
    <section className="paint-banner" aria-label="塗装体験イベント開催">
      <div className="paint-banner__inner">
        <p className="paint-banner__copy">
          <span>家族で楽しめる</span>
          <strong>塗装体験</strong>
          <span>イベントも開催！</span>
        </p>
        <div className="paint-banner__photos">
          {stripPhotos.map((photo) => (
            <div key={photo.src} className="paint-banner__photo">
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
