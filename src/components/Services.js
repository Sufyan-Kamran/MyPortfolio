export default function ServicesSection(props) {
  return (
    <>
      <div className="untree_co-section pb-0" id={props.id}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Services</strong>
              </h2>
              <p className="gsap-reveal-hero">
                What I bring on the table.
              </p>
              <div className="wave gsap-reveal-hero">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
              <div className="service text-center">
                <div className="gsap-reveal-hero mb-3">
                  <span className="icon-service">
                    <img
                      src="images/svg/service-icon-4.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <h3 className="gsap-reveal-hero">Web Scrapping</h3>
                <p className="gsap-reveal-hero">
                  I extract accurate, structured, and clean data from any website—including eCommerce, social media, marketplaces, and business directories—using Python, Selenium, and API scraping.
                </p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
              <div className="service text-center">
                <div className="gsap-reveal-hero mb-3">
                  <span className="icon-service">
                    <img
                      src="images/svg/service-icon-6.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <h3 className="gsap-reveal-hero">Web Design</h3>
                <p className="gsap-reveal-hero">
                  I build modern, user-friendly, and responsive website layouts using HTML, CSS, Bootstrap, and React to create clean interfaces that match your brand.
                </p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
              <div className="service text-center">
                <div className="gsap-reveal-hero mb-3">
                  <span className="icon-service">
                    <img
                      src="images/svg/service-icon-7.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <h3 className="gsap-reveal-hero">Bot Developement</h3>
                <p className="gsap-reveal-hero">
                  I develop custom bots for automation, data collection, social media actions, and repetitive workflows—built using Python, Selenium, and API-based systems.
                </p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
              <div className="service text-center">
                <div className="gsap-reveal-hero mb-3">
                  <span className="icon-service">
                    <img
                      src="images/svg/service-icon-8.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <h3 className="gsap-reveal-hero">Automation</h3>
                <p className="gsap-reveal-hero">
                  I automate manual business tasks such as data entry, reporting, account management, and scraping workflows to save time, reduce errors, and increase efficiency.
                </p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
              <div className="service text-center">
                <div className="gsap-reveal-hero mb-3">
                  <span className="icon-service">
                    <img
                      src="images/svg/service-icon-1.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <h3 className="gsap-reveal-hero">Backend developement</h3>
                <p className="gsap-reveal-hero">
                  I create secure, efficient, and scalable backends using Python, Django, and REST APIs—complete with authentication, database models, and business logic.
                </p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
              <div className="service text-center">
                <div className="gsap-reveal-hero mb-3">
                  <span className="icon-service">
                    <img
                      src="images/svg/service-icon-5.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <h3 className="gsap-reveal-hero">API Developement & Integration</h3>
                <p className="gsap-reveal-hero">
                  I build robust REST APIs and integrate third-party APIs (Google, YouTube, LinkedIn, Amazon, etc.) to connect your app with external services and automate communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
