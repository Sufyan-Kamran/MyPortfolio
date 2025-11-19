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

      <nav className="site-nav dark mb-5 site-navbar-target">
        <div className="container">
          <div className="site-navigation">
            <a href="/" className="logo m-0">
              Minimal<span className="text-primary">.</span>
            </a>
            <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
              <li>
                <a href="#HeroSection" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="has-children">
                <a href="#PortfolioSection" className="nav-link">
                  Portfolio
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="#PortfolioSection" className="nav-link">
                      Web Projects
                    </a>
                  </li>
                  <li>
                    <a href="#Projects" className="nav-link">
                      Python Projects
                    </a>
                  </li>
                  <li>
                    <a href="#Projects" className="nav-link">
                      React Js Projects
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#AboutSection" className="nav-link active">
                  About
                </a>
              </li>
              <li>
                <a href="#WorkSection" className="nav-link active">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#ServicesSection" className="nav-link active">
                  Services
                </a>
              </li>
              <li>
                <a href="#SkillsSection" className="nav-link active">
                  Skills Score
                </a>
              </li>
              <li>
                <a href="#OtherSkills" className="nav-link active">
                  Programming Skills
                </a>
              </li>
              <li>
                <a href="#FrameWork" className="nav-link active">
                  FrameWorks
                </a>
              </li>
              <li>
                <a href="#FooterSection" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#FooterSection" rel="noreferrer" className="nav-link active">
                  Footer
                </a>
              </li>
            </ul>

            <a
              href="#"
              rel="noreferrer"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
