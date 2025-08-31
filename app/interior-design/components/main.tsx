import ArchitectureThatSpeaksStyleSection from "./architecture-that-speak-styles-section";
import CalculateSection from "./calculate-section";
import CTASection from "./cta-section";
import FAQSection from "./faq-section";
import FeatureInSection from "./featured-in-section";

import GlimpseSection from "./glimpse-section";
import HeroSection from "./hero-section";
import { ThinkInteriorSection } from "./think-interior-section";
import TrustedPartnersSection from "./trusted-partners-section";
import WhyChooseUsSection from "./why-choose-us-section";

export default function MainContent() {
  return (
    <div className="interior-design-page">
      <HeroSection />
      <ThinkInteriorSection/>
      <WhyChooseUsSection/>
      <CalculateSection/>
      <GlimpseSection/>
      <TrustedPartnersSection/>
      <ArchitectureThatSpeaksStyleSection/>
      <FeatureInSection/>
      <FAQSection/>
      <CTASection/>
    </div>
  )
}