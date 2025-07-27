import About from "./about-us";
import { EmailSection } from "./email";
import HeroSection from "./hero-section-2";
import CounterSection from "./metric-section";
import { ThreeDMarqueeDemo } from "./projects";
import QuoteSection from "./quote";
import ServicesSection from "./services-section";
import TestimonialsSection from "./testimonials-section";

export function MainContent () {
  return (
    <>
    <HeroSection/>
    <About/>
    <QuoteSection/>
    <ServicesSection/>
    <CounterSection/>
    <TestimonialsSection/>
    <ThreeDMarqueeDemo/>
    <EmailSection/>
    </>
  )
}