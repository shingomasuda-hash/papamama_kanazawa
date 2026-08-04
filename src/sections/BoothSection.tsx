import { SectionTitle } from "../components/SectionTitle";
import { BoothCarousel } from "../components/BoothCarousel";

export function BoothSection() {
  return (
    <section className="booth">
      <div className="booth__inner">
        <SectionTitle en="BOOTH" ja="ブース紹介" />
        <BoothCarousel />
      </div>
    </section>
  );
}
