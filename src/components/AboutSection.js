import { Link } from "react-router-dom";

export default function AboutSection(props) {
  return (
    <>
      <div className="untree_co-section pb-0x" id={props.id}>
        <div className="container bg-light">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-7 mx-auto text-center author-wrap">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHUS6VEIsrqrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718168046046?e=1764806400&v=beta&t=jFupm6q5B4OIdC5qUWV053IuGQOQTx_1Zv1o1VoEGNE"
                alt=""
                className="img-fluid rounded-circle mb-3"
                style={{width:"180px"}}
              />
              <h3 className="text-black h5 font-weight-bold mb-2 gsap-reveal-hero">
                Sufyan Ahmed
              </h3>
              <p className="gsap-reveal-hero">Jr Python Developer & Software Engineer</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-7 ">
              <p className="gsap-reveal-hero">
                I am a passionate Python Developer with hands-on experience in building real-world automation systems, web scraping tools, REST APIs, and full-stack web applications. Over the past year, I have worked extensively with Python, Django, Selenium, Web Automation, and data extraction pipelines—solving practical problems for businesses and improving workflow efficiency through automation.
              </p>

              <p className="gsap-reveal-hero">
                I enjoy transforming complex tasks into clean, efficient, and scalable code. My work includes building Instagram and Twitter automation bots, extracting large-scale data from platforms like LinkedIn, YouTube, Nitter, and various eCommerce websites including Amazon and Kroger. I have also used the YouTube API, LinkedIn scraping logic, and custom browser automation to streamline repetitive tasks.
              </p>

              <p className="gsap-reveal-hero">
                Alongside backend development, I have experience building user-friendly web interfaces in React and integrating frontend apps with secure authentication systems using JWT, cookies, and modern RESTful standards.
              </p>

              <p className="gsap-reveal-hero">
              I am continuously learning advanced concepts in machine learning, API design, and high-performance Python to grow into a highly skilled AI & backend engineer. My goals are to contribute to impactful software projects and build automation tools that create real value.
              </p>

              <p className="gsap-reveal-hero text-center">
                <a
                  href="https://www.linkedin.com/in/sufyan-kamran/"
                  target="_blank"
                  className="btn btn-outline-black"
                >
                  Hire Me at Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
