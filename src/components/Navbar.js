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

      <nav className="site-nav dark mb-5 site-navbar-target">
        <div className="container">
          <div className="site-navigation">
            <Link to="/" className="logo m-0">
              Portfolio<span className="text-primary">.</span>
            </Link>

            <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
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
      </nav>
    </>
  );
}
