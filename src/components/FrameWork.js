import SkillsCard from "./SkillsCard";

export default function FrameWork(props) {
  return (
    <>
      <div className="untree_co-section testimonial-wrap" id={props.id}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Frameworks</strong>
              </h2>
              <p className="gsap-reveal-hero">Area of expertise...</p>

              <div className="wave gsap-reveal-hero">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                </svg>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <div className="owl-carousel owl-3-slider">
              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGCh7ggq1nBVbuLUsk4Bd1qvu9puEMql-WQ&s"
                skill="React JS"
                experience="1 Month"
                paragrapgh="I build interactive, component-based frontends with React, handling hooks, state, API integration, and reusable UI for smooth experiences."
              />

              <SkillsCard
                src="https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png"
                skill="Django"
                experience="1 Year"
                paragrapgh="I develop secure, scalable web apps with Django, implementing authentication, ORM, and modular architecture for production-ready systems."
              />

              <SkillsCard
                src="https://cdn.brandfetch.io/django-rest-framework.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed"
                skill="Django REST Framework"
                experience="1 Month"
                paragrapgh="I create clean REST APIs with DRF, handling authentication, permissions, and serializers, optimized for real-world applications."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s"
                skill="Flask"
                experience="1 Year"
                paragrapgh="I build lightweight APIs and microservices with Flask, using modular code and third-party integrations for fast, flexible backends."
              />

              <SkillsCard
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"
                skill="Selenium"
                experience="1 Year"
                paragrapgh="I automate browsers and web tasks with Selenium, extracting data and handling interactions efficiently for real projects."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s"
                skill="Bootstrap"
                experience="2 Years"
                paragrapgh="I design responsive interfaces with Bootstrap, customizing components and layouts to create polished, scalable web pages."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
