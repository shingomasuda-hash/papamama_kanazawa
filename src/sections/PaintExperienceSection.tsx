import { PrimaryCta } from "../components/Cta";

export function PaintExperienceSection() {
  return (
    <section className="paint">
      <div className="paint__top">
        <div className="container">
          <h2 className="paint__title">
            <span className="paint__title-main">実際に塗装体験！</span>
            <span className="paint__title-sub">イベント開催中</span>
          </h2>

          <img
            src="/images/paint-suv.png"
            alt="カラフルに塗装されたPAPAMAMA CAR'SのカスタムSUV"
            width={550}
            height={312}
            className="paint__suv"
          />

          <ul className="paint__points">
            <li>●安心安全なインク！</li>
            <li>●実際の車に！</li>
            <li>●親子の思い出作りにも最適！</li>
          </ul>
        </div>
      </div>

      <div className="paint__bottom">
        <div className="container">
          <h3 className="paint__overview-title">塗装概要</h3>
          <div className="paint__overview">
            <dl>
              <dt>●開催日程</dt>
              <dd>
                2026年
                <br />
                <strong>8月29日(土)〜30日(日)</strong>
              </dd>
              <dt>●予約受付期間</dt>
              <dd>
                29日(土) 10:00〜17:00
                <br />
                30日(日) 10:00〜17:00
              </dd>
              <dt>●予約について</dt>
              <dd>
                相談予約には塗装体験が含まれており、塗装体験のみの予約も承っております。
              </dd>
            </dl>
          </div>

          <PrimaryCta arrow className="paint__cta">
            LINEから予約
          </PrimaryCta>

          <div className="paint__safety">
            <h3 className="paint__safety-title">
              お子様の
              <br />
              安全面にも配慮
            </h3>
            <ul className="paint__safety-points">
              <li>●無害・無臭の安全な塗料</li>
              <li>●スタッフが丁寧にご案内</li>
              <li>●親子で参加しやすい</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
