import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="widget">
                <h3>Home</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/About">About us</Link>
                  </li>
                  <li>
                    <Link href="/Portfolio">Projects</Link>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Projects</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="/Portfolio">HTML5</a>
                  </li>
                  <li>
                    <a href="/Portfolio">Python</a>
                  </li>
                  <li>
                    <a href="/Portfolio">Django</a>
                  </li>
                  <li>
                    <a href="/Portfolio">ReactJs</a>
                  </li>
                  <li>
                    <a href="/Portfolio">API</a>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Services</h3>
                <ul className="list-unstyled float-left links">
                  <li>API Developement & Integration  </li>
                  <li>Automation</li>
                  <li>Backend developement</li>
                  <li>Bot Developement</li>
                  <li>Web Scrapping</li>
                  <li>Web Design</li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                <address>Karachi, Pakistan</address>
                <ul className="list-unstyled links mb-4">
                  <li>
                    <a href="tel://923122431234">+923122431234</a>
                  </li>
                  <li>
                    <a href="mailto:info@mydomain.com">Sufyankamran171@gmail.com</a>
                  </li>
                </ul>

                <h3>Connect</h3>
                <ul className="list-unstyled social m-1">
                  <li>
                    <a href="https://github.com/Sufyan-Kamran">
                      <span className="icon-git"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sufyan-kamran/">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
