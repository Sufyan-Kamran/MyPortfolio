import { useState } from "react";
import ProjectsCard from "./ProjectsCard";

export default function Projects(props) {
  const [showAll, setShowAll] = useState(false);

  // Example projects array
  const projects = [
    {
      src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      skill: "Blogging Platform",
      experience:
        "HTML, CSS, React.js, Django REST Framework, JWT Authentication",
      paragraph:
        "Developed a full-stack blogging platform with React.js frontend and Django REST Framework backend, implementing JWT authentication for secure user access. Users can create, edit, and manage posts through a responsive, intuitive interface. This project showcases modern web development practices and a scalable content management solution.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
      skill: "Social Media Data Extraction & Analytics Bot for MeykaAi",
      experience: "Python, Selenium, APIs, PostgreSQL",
      paragraph:
        "Developed automated data-extraction bots for MeykaAI to support their stock-analysis chatbot. The bots gather structured data from multiple social media platforms, such as posts, engagement metrics, follower insights and store it in PostgreSQL for further analysis. This automated pipeline strengthens MeykaAI’s recommendation engine and significantly reduces the need for manual research.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SNf5Pw1uV7GxPm_MUmbwg-mOCql2cWlsLw&s",
      skill: "Recipe & Nutrition Recommendation Bot for Cybveigt ",
      experience: "Python, Selenium, BeautifulSoup, Pandas, APIs, PostgreSQL",
      paragraph:
        "Developed a Python-based bot that extracts recipes, nutritional information, and dietary data from multiple websites. The system processes and organizes this data to suggest healthy meal plans and recommend the best recipes based on user preferences. This project provides a data-driven solution for personalized nutrition, helping users make informed dietary choices efficiently.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPLXqRyw5PEl4ETnuzYuP5XhUI51sUdQzcg&s",
      skill: "Inventory Tracking Software for Indus Motors (Toyota)",
      experience: "Python Tkinter, MySQL, Pandas, Excel, Power BI",
      paragraph:
        "Built a desktop application from scratch to track shippement and inventory across multiple warehouses, monitor package locations in real-time, and generate reports with visual analytics. This system improves inventory accuracy, reduces operational errors, and enables businesses to make informed decisions efficiently.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
      skill: "Amazon Product Extraction & Price Comparison Bot for NestElevate",
      experience: "Python, Selenium, Requests, Google Sheets API",
      paragraph:
        "Developed an automated bot that scrapes products from Amazon, searches them on Google, and identifies the most relevant and competitive offers. This solution streamlines product research for e-commerce and online arbitrage, enabling users to make faster, data-driven pricing decisions while minimizing manual effort.",
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvC-NeCYAj3IWCY5SIrGP5EjYYjzDXFQWw&s",
      skill: "Yellow Pages Data Extraction & Structuring Tool",
      experience: "Python, BeautifulSoup, MongoDB, Hashing",
      paragraph:
        "Created a Python-based tool to extract, clean, and structure unorganized business data from Yellow Pages. Implemented hashing to prevent duplicates and store information efficiently in MongoDB. This tool provides businesses and analysts with reliable, organized contact data for marketing, research, and decision-making purposes.",
    },
  ];

  // Show first 32 projects unless "showAll" is true
  const displayedProjects = showAll ? projects : projects.slice(0, 1);

  return (
    <div className="untree_co-section testimonial-wrap" id={props.id}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-7 text-center mx-auto">
            <h2 className="section-heading gsap-reveal-hero mb-0">
              <strong>Projects</strong>
            </h2>
            <p className="gsap-reveal-hero">What I Build & My Expertise</p>

            <div className="wave gsap-reveal-hero mb-5">
              <svg>
                <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Render Projects */}
        <div className="projects-grid bg-white">
          {displayedProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              src={project.src}
              skill={project.skill}
              experience={project.experience}
              paragraph={project.paragraph}
            />
          ))}
        </div>

        {projects.length > 2 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline-black"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
