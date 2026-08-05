import { PrimaryCta, SecondaryCta } from "../components/Cta";
import { PAINT_CTA_URL } from "../constants";

export function CtaSection() {
  return (
    <section className="cta-section" aria-label="予約">
      <div className="container">
        <div className="cta-pair">
          <PrimaryCta>相談予約</PrimaryCta>
          <SecondaryCta href={PAINT_CTA_URL}>塗装体験予約</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
