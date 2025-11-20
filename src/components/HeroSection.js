export default function HeroSection(props) {
  return (
    <>
      <div className="untree_co-section pb-0" id={props.id} >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">
              <h4 className="gsap-reveal-hero mb-3"> Portfolio</h4>
              <h1 className="heading gsap-reveal-hero mb-3">
                <strong>Sufyan Ahmed
                  <span className="text-primary">.</span>
                </strong>
              </h1>
              <h4 className="gsap-reveal-hero mb-3 " style={{"color":"#9b9b9b"}}>
                Software Engineer
              </h4>
              <p className="subheading gsap-reveal-hero mb-4 bg-white">
                I build smart, scalable, and automation-driven solutions to solve real-world problems.
              </p>
              <p className="gsap-reveal-hero">
                <a href="/MyPortfolio/Sufyan_Ahmed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-black" download>
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
