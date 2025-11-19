export default function SkillsCard({src, skill,experience, paragrapgh }){

    return (
        <>
            <div className="item">
                <div className="testimonial-v1">
                  <img
                    src={src}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mb-4">
                    <h3>{skill}</h3>
                    <span className="caption">{experience}</span>
                  </div>
                  <blockquote>
                    <p>
                      {paragrapgh}
                    </p>
                  </blockquote>
                </div>
              </div>
        </>
    )
}