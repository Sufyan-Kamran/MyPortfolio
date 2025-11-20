import SkillsCard from "./SkillsCard";

export default function OtherSkills(props) {
  return (
    <>
      <div className="untree_co-section testimonial-wrap" id={props.id}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Programming Skills</strong>
              </h2>
              <p className="gsap-reveal-hero">
                Core technologies I use to build efficient, scalable, and
                maintainable software solutions
              </p>

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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
                skill="Python"
                experience="2 Years"
                paragrapgh="I build automation scripts, data pipelines, and backend systems in Python, focusing on clean, scalable solutions for real-world projects."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s"
                skill="JavaScript"
                experience="2 Years"
                paragrapgh="I develop interactive web interfaces and client-side features in JavaScript, writing clean, reusable code for responsive and smooth experiences."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk594AhSKw5Eb3iHkPHs_XmpCqaRVgu0mvg&s"
                skill="HTML"
                experience="2 Years"
                paragrapgh="I create semantic and accessible HTML layouts that are responsive, SEO-friendly, and reliable across devices."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE28KyPTWnZhWewY-0s5NqxUtZYnw6kr2ag&s"
                skill="CSS"
                experience="2 Years"
                paragrapgh="I design modern, responsive, and visually consistent interfaces with CSS, ensuring usability and polished layouts on all screens."
              />

              <SkillsCard
                src="https://images.seeklogo.com/logo-png/27/2/php-logo-png_seeklogo-273796.png"
                skill="PHP"
                experience="1 Year"
                paragrapgh="I develop dynamic server-side applications in PHP, efficiently handling backend logic and database operations for production systems."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAwqwvSNTSboFCD_oTtadczluDSGdbu_QGQ&s"
                skill="MySQL"
                experience="1 Year"
                paragrapgh="I design and manage MySQL databases, building optimized schemas, queries, and CRUD operations to support scalable applications."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvC-NeCYAj3IWCY5SIrGP5EjYYjzDXFQWw&s"
                skill="MongoDB"
                experience="1 Year"
                paragrapgh="I implement document-based databases with MongoDB, designing collections and pipelines to handle dynamic and scalable data efficiently."
              />

              <SkillsCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsC9Zl9jYsLYXA9lhxDCiJD0Y_PQakXzpzMA&s"
                skill="PostgreSQL"
                experience="6 Months"
                paragrapgh="I build high-performance PostgreSQL databases, optimizing schemas and queries while leveraging advanced features for real-world applications."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
