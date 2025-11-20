import SkillsCard from "./SkillsCard";

export default function Technologies(props) {
  return (
    <>
      <div className="untree_co-section testimonial-wrap" id={props.id}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Tools & Technologies</strong>
              </h2>
              <p className="gsap-reveal-hero">Tools and Technologies I can use.</p>

              <div className="wave gsap-reveal-hero">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                </svg>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <div className="owl-carousel owl-3-slider">
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3rVUaAQm-cX9raE8hDgrM58Xy6DH25tkNw&s" skill="Intermediate" experience="Intermediate" paragrapgh=""  />
              <SkillsCard src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" skill="Github" experience="Intermediate" paragrapgh=""  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAhhiCOOpJ0lOmTlYvrS2dTnm1QBvM54DRw&s" skill="Jupyter Notebook" experience="Intermediate" paragrapgh=""  />
              <SkillsCard src="https://images.seeklogo.com/logo-png/40/1/power-bi-microsoft-logo-png_seeklogo-400711.png" skill="Power Bi" experience="Entry" paragrapgh=""  />
              <SkillsCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%932025%29.svg.png" skill="MS Excel" experience="Intermediate" paragrapgh=""  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}