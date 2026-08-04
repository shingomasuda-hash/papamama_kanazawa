export function HeroSection() {
  return (
    <section className="hero" aria-label="イベント告知">
      <div className="container">
        <p className="hero__badge">
          <span aria-hidden="true">＼</span> 北陸初上陸！！{" "}
          <span aria-hidden="true">／</span>
        </p>
        <h1 className="hero__title">
          <span className="hero__brand">PAPAMAMA CAR&rsquo;S</span>
          <span className="hero__event">
            北陸オートリミックス<em>2026</em> in 金沢に
          </span>
          <span className="hero__decision">出店決定！</span>
        </h1>
        <p className="hero__info">
          <span className="hero__info-item">
            <svg
              className="hero__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2Zm12 8H5v10h14V10ZM8 13h3v3H8v-3Z" />
            </svg>
            8.29 <small>(土)</small>・8.30 <small>(日)</small>
          </span>
          <span className="hero__info-divider" aria-hidden="true" />
          <span className="hero__info-item">
            <svg
              className="hero__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5Z" />
            </svg>
            石川県産業展示会4号館
          </span>
        </p>
      </div>
      <img
        src="/images/hero-vehicles.png"
        alt="PAPAMAMA CAR'Sのカスタム展示車両2台(ブラックSUVとベージュのバン)"
        width={590}
        height={248}
        className="hero__vehicles"
      />
    </section>
  );
}
