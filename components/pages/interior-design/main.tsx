import AboutUs from "./about-us";
import CatalogueSection from "./catalogue-section";
import ClientCarouselSection from "./client-carousel";
import CTASection from "./cta-section";
import FeatureInSection from "./featured-in-section";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import TestimonialsSection from "./testimonials";
import WorkShowcase from "./work-showcase";

export default function MainContent() {
  return (
    <div className="interior-design-page">
      <HeroSection />
      <AboutUs />
      <ClientCarouselSection/>
      <WorkShowcase />
      <FeaturesSection/>
      <CatalogueSection/>
      <TestimonialsSection/>
      <CTASection/>
      <FeatureInSection/>
    </div>
  )
}