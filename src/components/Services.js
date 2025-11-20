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
                <h3 className="gsap-reveal-hero">Web Scraping</h3>
                <p className="gsap-reveal-hero">
                  I extract clean, reliable, and well-structured data from websites of any scale using Python, Selenium, and APIs. Ideal for eCommerce, social platforms, directories, and research workflows.
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
                  I design modern, responsive, and user-friendly website interfaces using HTML, CSS, Bootstrap, and React, ensuring your brand looks sharp on every device.
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
                <h3 className="gsap-reveal-hero">Bot Development</h3>
                <p className="gsap-reveal-hero">
                  I build custom automation bots for data extraction, social media tasks, and repetitive workflows using Python, Selenium, and API integrations.
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
                  I automate routine business tasks such as data entry, reporting, monitoring, and web scraping pipelines to save time and increase operational efficiency.
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
                <h3 className="gsap-reveal-hero">Backend Development</h3>
                <p className="gsap-reveal-hero">
                  I develop secure and scalable backends with Python, Django, and REST APIs, including authentication, database architecture, and business logic.
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
                <h3 className="gsap-reveal-hero">API Development & Integration</h3>
                <p className="gsap-reveal-hero">
                  I create reliable REST APIs and integrate third-party services (Google, YouTube, LinkedIn, Amazon, and more) to streamline data flow and automate processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
