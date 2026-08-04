import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { PaintEventBanner } from "./sections/PaintEventBanner";
import { TicketSection } from "./sections/TicketSection";
import { WhatWeCanSection } from "./sections/WhatWeCanSection";
import { MeritSection } from "./sections/MeritSection";
import { BoothSection } from "./sections/BoothSection";
import { PaintExperienceSection } from "./sections/PaintExperienceSection";
import { AboutSection } from "./sections/AboutSection";
import { StaffSection } from "./sections/StaffSection";
import { ExteriorSection } from "./sections/ExteriorSection";
import { FlowSection } from "./sections/FlowSection";
import { FaqSection } from "./sections/FaqSection";
import { CtaSection } from "./sections/CtaSection";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PaintEventBanner />
        <TicketSection />
        <WhatWeCanSection />
        <MeritSection />
        <BoothSection />
        <PaintExperienceSection />
        <AboutSection />
        <StaffSection />
        <ExteriorSection />
        <FlowSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
