export default function ProjectsCard({src, skill,experience, paragrapgh, }){

    return (
        <>
            <div className="item text-start">
                <div className="testimonial-v1 text-start">
                  <img
                    src={src}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mb-4"  >
                    <h3  >{skill}</h3>
                    <span className=""  >{experience}</span>
                  </div>
                  <blockquote>
                    <p className="text-start"  >
                      {paragrapgh}
                    </p>
                  </blockquote>
                </div>
              </div>
        </>
    )
}