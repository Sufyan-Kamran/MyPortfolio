export default function AboutSection(props) {
  return (
    <>

        <div className="untree_co-section pb-0" id={props.id}>
      <div className="container bg-light">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-7 mx-auto text-center author-wrap">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQHUS6VEIsrqrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718168046046?e=1764806400&v=beta&t=jFupm6q5B4OIdC5qUWV053IuGQOQTx_1Zv1o1VoEGNE" alt="" className="img-fluid rounded-circle mb-3"  style={{ width: "180px" }} />
            <h3 className="text-black h5 font-weight-bold mb-2 gsap-reveal-hero">Sufyan Ahmed</h3>
            <p className="gsap-reveal-hero">Jr Python Developer & Software Engineer</p>
          </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-7 ">
              <p className="gsap-reveal-hero">
                I am a Python Developer and Software Engineer with a Bachelor’s
                degree in Software Engineering and over 1 year of experience
                creating automation solutions, web scraping tools, REST APIs,
                and full-stack applications. I work with{" "}
                <strong>
                  Python, Django, Selenium, and modern web automation frameworks
                </strong>{" "}
                to deliver efficient, scalable solutions that optimize
                workflows.
              </p>

              <p className="gsap-reveal-hero">
                I have built automation bots for social media platforms and
                extracted, processed, and managed large-scale data from
                LinkedIn, YouTube, Nitter, and eCommerce sites like Amazon and
                Kroger, integrating APIs and custom automation to simplify
                complex tasks.
              </p>

              <p className="gsap-reveal-hero">
                I also develop responsive, user-friendly interfaces with React,
                integrating them with secure authentication systems using{" "}
                <strong>JWT, cookies, and RESTful APIs</strong> to ensure
                seamless frontend-backend interactions.
              </p>

              <p className="gsap-reveal-hero">
                Continuously improving my skills in machine learning, API
                design, and high-performance Python, I aim to deliver impactful
                software solutions and automation tools that create real value
                for clients and businesses.
              </p>

              <p className="gsap-reveal-hero text-center">
                <a
                  href="https://www.linkedin.com/in/sufyan-kamran/"
                  target="_blank"
                  rel="noreferrer"
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
