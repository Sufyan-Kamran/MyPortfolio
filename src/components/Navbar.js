import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

       <nav class="site-nav dark mb-5 site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <a href="index.html" class="logo m-0">Minimal<span class="text-primary">.</span></a>
        <ul class="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
          <li><a href="#HeroSection" class="nav-link active">Home</a></li>
          <li class="has-children">
            <a href="#PortfolioSection" class="nav-link">Portfolio</a>
            <ul class="dropdown">
              <li><a href="#PortfolioSection" class="nav-link">Web Projects</a></li>
              <li><a href="#Projects" class="nav-link">Python Projects</a></li>
              <li><a href="#Projects" class="nav-link">React Js Projects</a></li>
            </ul>
          </li>
          <li><a href="#AboutSection" class="nav-link active">About</a></li>
          <li><a href="#WorkSection" class="nav-link active">Work Experience</a></li>
          <li><a href="#ServicesSection" class="nav-link active">Services</a></li>
          <li><a href="#SkillsSection" class="nav-link active">Skills Score</a></li>
          <li><a href="#OtherSkills" class="nav-link active">Programming Skills</a></li>
          <li><a href="#FrameWork" class="nav-link active">FrameWorks</a></li>
          <li><a href="#FooterSection" class="nav-link">Contact</a></li>
          <li><a href="#FooterSection" class="nav-link active">Footer</a></li>          
        </ul>

        <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block" data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>

      </div>
    </div>
  </nav>

      {/* <nav className="site-nav dark mb-5 site-navbar-target">
        <div className="container">
          <div className="site-navigation">
            <a  className="logo m-0">
              Portfolio<span className="text-primary">.</span>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
              <li>
                <button style={{background:"None"}} className="nav- " onClick={() => scrollToSection(refs.portfolioRef)}>Home</button>
              </li>link
              <li>
                <Link to="/About" className="nav-link ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link ">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <button className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block bg-white border-0">
              <span></span>
            </button>
          </div>
        </div>
      </nav> */}
    </>
  );
}
