export function PaintEventBanner() {
  return (
    <section className="paint-banner" aria-label="塗装体験イベント開催">
      <div className="paint-banner__inner">
        <p className="paint-banner__copy">
          <span>家族で楽しめる</span>
          <strong>塗装体験</strong>
          <span>イベントも開催！</span>
        </p>
        <img
          src="/images/paint-strip.png"
          alt="過去の塗装体験イベントの様子。子どもたちが車に塗装する写真とスタッフの写真"
          width={422}
          height={172}
          className="paint-banner__photos"
        />
      </div>
    </section>
  );
}
