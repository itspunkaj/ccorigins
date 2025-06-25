import AboutUs from "./about-us";
import HeroSection from "./hero-section";
import WorkShowcase from "./work-showcase";

export default function MainContent() {
  return (
    <div className="interior-design-page">
      <HeroSection />
      <AboutUs />
      <WorkShowcase />
    </div>
  )
}