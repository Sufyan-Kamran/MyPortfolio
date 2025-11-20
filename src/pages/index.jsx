import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/Services";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import OtherSkills from "../components/OtherSkills";
import WorkSection from "../components/WorkSection";
import FooterSection from "../components/FooterSection";
import FrameWork from "../components/FrameWork";
import Projects from "../components/Projects";
import Technologies from "../components/TechnologiesSection";


function Home() {
  return (
    <>
      <HeroSection id="HeroSection" />
      <PortfolioSection id="PortfolioSection" />
      <Projects id="Projects" />
      <AboutSection id="AboutSection" />
      <WorkSection id="WorkSection" />
      <ServicesSection id="ServicesSection" />
      <SkillsSection id="SkillsSection" />
      <OtherSkills id="OtherSkills" />
      <FrameWork id="FrameWork" />
      <Technologies id="Technologies"/>
      <FooterSection id="FooterSection" />
    </>
  );
}

export default Home;
