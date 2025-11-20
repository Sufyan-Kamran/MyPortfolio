import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Services";
import SkillsSection from "../components/SkillsSection";
import OtherSkills from "../components/OtherSkills";
import WorkSection from "../components/WorkSection";
import FooterSection from "../components/FooterSection";
import FrameWork from "../components/FrameWork";
import DataBaseSection from "../components/DatabaseSection";

function AboutPage(){
  return (
    <>
    <HeroSection heading_1=" " heading_2="About." heading_3="" heading_4="" />
    <ServicesSection />
    <WorkSection />
    <SkillsSection />
    <OtherSkills />
    <DataBaseSection />
    <FrameWork />
    
    <FooterSection/>
    </>
  )
}

export default AboutPage;