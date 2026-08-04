import { SectionTitle } from "../components/SectionTitle";
import { StaffCarousel } from "../components/StaffCarousel";

export function StaffSection() {
  return (
    <section className="staff">
      <SectionTitle en="STAFF" ja="スタッフ紹介" size="lg" />
      <img
        src="/images/staff-branch.png"
        alt=""
        width={590}
        height={110}
        className="staff__branch"
      />
      <div className="staff__carousel-wrap">
        <StaffCarousel />
      </div>
    </section>
  );
}
