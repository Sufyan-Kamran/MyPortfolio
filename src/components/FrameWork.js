import SkillsCard from "./SkillsCard";

export default function FrameWork() {
  return (
    <>
      <div className="untree_co-section testimonial-wrap">
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
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGCh7ggq1nBVbuLUsk4Bd1qvu9puEMql-WQ&s" skill="REACT JS" experience="1 Month" paragrapgh="I build fast, interactive, and component-based frontends using React. I work with hooks, state management, API integration, and reusable UI components to create smooth and dynamic user experiences."  />
              <SkillsCard src="https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png" skill="DJANGO" experience="1 Year" paragrapgh="I develop secure and scalable web applications using Django, following best practices in authentication, ORM usage, and modular project architecture. My experience includes building dashboards, admin panels, and complete backend systems."  />
              <SkillsCard src="https://cdn.brandfetch.io/django-rest-framework.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed" skill="DJANGO REST FRAMEWORK" experience="1 Month" paragrapgh="I build clean, well-structured RESTful APIs using DRF, including authentication, permissions, serializers, and pagination. My APIs are optimized for performance and used in production-level applications."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s" skill="FLASK" experience="1 Year" paragrapgh="I use Flask to create lightweight and fast microservices, REST APIs, and small-scale applications. I focus on clean routing, modular structure, and integrating third-party tools to deliver flexible backend solutions."  />
              <SkillsCard src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" skill="Sellenium" experience="1 Year" paragrapgh="I use Selenium to automate browsers, perform web scraping, solve complex interaction flows, and extract structured data. My automation scripts are optimized for stability, speed, and handling dynamic web pages."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s" skill="BOOTSTRAP" experience="2 Years" paragrapgh="I use Bootstrap to quickly build responsive, mobile-friendly interfaces with clean design patterns. I customize components and layouts to match brand identity while keeping the structure scalable.."  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
