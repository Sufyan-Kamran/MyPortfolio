export default function HeroSection(props) {
  return (
    <>
      <div className="untree_co-section pb-0" id={props.id} >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">
              <h4 className="gsap-reveal-hero mb-3"> {props.heading_1 || "Portfolio"}</h4>
              <h1 className="heading gsap-reveal-hero mb-3">
                <strong>
                  <span className="text-primary">{props.heading_2 || "Sufyan A."}</span>
                </strong>
              </h1>
              <h4 className="gsap-reveal-hero mb-3 text-dark">
                <strong>{props.heading_3 ||"Software Engineer"}</strong>
              </h4>
              <h2 className="subheading gsap-reveal-hero mb-4">
                {props.heading_4 || "I’m a Software Engineer and Python Developer who builds smart, scalable, and automation-driven solutions, turning data, code, and creativity into real results."}
              </h2>
              <p className="gsap-reveal-hero">
                <a href="/Sufyan_Ahmed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-black" download>
                  Download My Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
