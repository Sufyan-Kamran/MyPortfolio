export default function SkillsSection(props) {
  return (
    <>
      <div className="untree_co-section pb-0" id={props.id}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>My Skillset</strong>
              </h2>
              <p className="gsap-reveal-hero">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas.
              </p>
              <div className="wave gsap-reveal-hero">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent="80">
                  <div className="number"></div>
                  <p className="caption">Backend Development</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent="85">
                  <div className="number"></div>
                  <p className="caption">Web Design</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent="82">
                  <div className="number"></div>
                  <p className="caption">API Developement & Integration</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent="88">
                  <div className="number"></div>
                  <p className="caption">Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
