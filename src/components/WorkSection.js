import SkillsCard from "./SkillsCard";

export default function WorkSection() {
  return (
    <>
      <div className="untree_co-section" id="contact-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Work Experience</strong>
              </h2>
              <p className="gsap-reveal-hero">
                I bring hands-on experience across multiple real-world projects, and I’m ready to contribute my skills to your team — feel free to reach out.
              </p>

              <div className="wave gsap-reveal-hero">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <SkillsCard src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/raqlolqacevps7eiypi2?ik-sanitizeSvg=true" skill="Junior Python Developer" experience="Present" />
            </div>
            <div className="col-lg-3">
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NKckbOuqPWpdB2aWjua_5FvC0PEbuC-t4w&s" skill="Jr. Software Engineer" experience="3 Months" />
            </div>
            <div className="col-lg-3">
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi6xFEwWEPKuOf-25IJN3AVPPy9aI4s42tg&s" skill="Intern Software Engineer" experience="3 Months" />
            </div>
            <div className="col-lg-3">
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTIvZX2ef_1iKeyJiATN08-QVvW1g8VxKRGg&s" skill="Project Based Automation Developer" experience="1 Year" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
