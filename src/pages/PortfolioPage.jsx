import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import FooterSection from "../components/FooterSection";
import Projects from "../components/Projects";

function PortfolioPage(){
  return (
    <>
    <HeroSection heading_1=" " heading_2="Portfolio." heading_3="       " heading_4="Here you can see my all work. " />
    <PortfolioSection/>
    <Projects/>
    <FooterSection/>
    </>
  )
}

export default PortfolioPage;