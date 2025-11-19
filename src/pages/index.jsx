import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/Services";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import OtherSkills from "../components/OtherSkills";
import WorkSection from "../components/WorkSection";
import FooterSection from "../components/FooterSection";
import FrameWork from "../components/FrameWork";

function Home(){
  return (
    <>
    <HeroSection />
    <PortfolioSection/>
    <AboutSection/>
    <WorkSection />
    <ServicesSection />
    
    <SkillsSection />
    <OtherSkills />
    <FrameWork />
    
    <FooterSection/>
    </>
  )
}

export default Home;