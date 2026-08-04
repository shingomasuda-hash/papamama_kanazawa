import { PrimaryCta, SecondaryCta } from "../components/Cta";

export function CtaSection() {
  return (
    <section className="cta-section" aria-label="予約">
      <div className="container">
        <div className="cta-pair">
          <PrimaryCta>相談予約</PrimaryCta>
          <SecondaryCta>塗装体験予約</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
