import About from "./about-us";
import HeroSection from "./hero-section";
import CounterSection from "./metric-section";
import ProjectsSection from "./projects";
import QuoteSection from "./quote";

export function MainContent () {
  return (
    <>
    <HeroSection/>
    <About/>
    <QuoteSection/>
    <CounterSection/>
    <ProjectsSection/>
    </>
  )
}