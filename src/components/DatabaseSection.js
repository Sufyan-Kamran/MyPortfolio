import SkillsCard from "./SkillsCard";

export default function DataBaseSection() {
  return (
    <>
      <div className="untree_co-section testimonial-wrap">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>Databases</strong>
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
