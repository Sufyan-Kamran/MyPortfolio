import SkillsCard from "./SkillsCard";

export default function OtherSkills() {
  return (
    <>
      <div className="untree_co-section testimonial-wrap">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Programming Skills</strong>
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
              <SkillsCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" skill="Python" experience="3 Year" paragrapgh="I use Python to build efficient automation scripts, data extraction tools, and backend logic. With strong command over libraries and problem-solving patterns, I create reliable solutions that streamline workflows and handle complex tasks with ease."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s" skill="JavaScript" experience="2 Year" paragrapgh="I use JavaScript to make websites interactive, handle client-side logic, and integrate APIs. I write clean, reusable functions and work efficiently with modern DOM manipulation and asynchronous workflows.."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk594AhSKw5Eb3iHkPHs_XmpCqaRVgu0mvg&s" skill="HTML" experience="2 Year" paragrapgh="I create structured, semantic, and SEO-friendly HTML layouts for websites and applications. My markup ensures accessibility, responsiveness, and compatibility across browsers."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE28KyPTWnZhWewY-0s5NqxUtZYnw6kr2ag&s" skill="CSS" experience="2 Year" paragrapgh="I design clean, responsive, and modern UI styles using CSS. I focus on layouts, animations, and styling systems that make websites visually appealing and consistent across all screen sizes.."  />
              <SkillsCard src="https://images.seeklogo.com/logo-png/27/2/php-logo-png_seeklogo-273796.png" skill="PHP" experience="1 Year" paragrapgh="I work with PHP to build dynamic backend logic, handle form submissions, interact with databases, and create functional server-side applications. My PHP code follows clean structure and real-world project practices."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAwqwvSNTSboFCD_oTtadczluDSGdbu_QGQ&s" skill="MySQL" experience="1 Year" paragrapgh="I use MySQL to create and manage relational databases with clean table structures, optimized queries, and reliable CRUD operations. My experience includes building schemas for production apps, handling joins, and ensuring data integrity and performance."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvC-NeCYAj3IWCY5SIrGP5EjYYjzDXFQWw&s" skill="Mongo DB" experience="1 Year" paragrapgh="I use MongoDB to build flexible, document-based data structures for applications that require speed and scalability. I design efficient collections, write aggregation pipelines, and integrate MongoDB into APIs to support dynamic and unstructured data."  />
              <SkillsCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsC9Zl9jYsLYXA9lhxDCiJD0Y_PQakXzpzMA&s" skill="PostgreSQL" experience="6 Months" paragrapgh="I work with PostgreSQL to design efficient database schemas, write optimized queries, and manage relational data at scale. I focus on indexing, normalization, and using advanced features like JSON fields, functions, and triggers to build high-performance backend systems."  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
