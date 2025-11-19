// import ProjectsCard from "./ProjectsCard";

// export default function Projects() {
//   return (
//     <>
//       <div className="untree_co-section testimonial-wrap">
//         <div className="container">
//           <div className="row mb-5">
//             <div className="col-lg-7 text-center mx-auto">
//               <h2 className="section-heading gsap-reveal-hero mb-0">
//                 <strong>Projects</strong>
//               </h2>
//               <p className="gsap-reveal-hero">Area of expertise...</p>

//               <div className="wave gsap-reveal-hero mb-5">
//                 <svg>
//                   <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>

          
//                 <ProjectsCard 
//                 src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
//                 skill="Blogging Website with React & Django REST Framework" 
//                 experience="HTML, CSS, React.js, Django REST Framework, JWT Authentication" 
//                 paragrapgh="I built a full-stack blogging platform using React.js for the frontend and Django REST Framework for the backend, with JWT authentication for secure user login and access. Users can create, edit, and manage posts in a smooth, responsive interface. This project demonstrates modern web development practices and provides a scalable solution for content management."/>


//             <ProjectsCard 
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SNf5Pw1uV7GxPm_MUmbwg-mOCql2cWlsLw&s" 
//                 skill="Social Media Data Extractor Bots" 
//                 experience="Python, Selenium, APIs, PostgreSQL" 
//                 paragrapgh="I developed a Python-based bots using Selenium, API integration, and PostgreSQL to extract structured data from multiple social media platforms. The bot automates the collection of posts, likes, comments, and follower information, enabling efficient social media analysis. This tool helps marketers and analysts understand engagement trends and audience behavior, saving hours of manual work."/>

//                 <ProjectsCard 
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPLXqRyw5PEl4ETnuzYuP5XhUI51sUdQzcg&s" 
//                 skill="Inventory Tracking Desktop Application" 
//                 experience="Python Tkinter, MySQL, Pandas, Excel, Power BI" 
//                 paragrapgh="I developed a desktop application using Python Tkinter, MySQL, Pandas, Excel, and Power BI to track inventory across three warehouses and monitor the location of packages in real-time. The system provides accurate inventory management, reporting, and visualization, helping businesses reduce errors and improve operational efficiency."/>  
                
//                 <ProjectsCard 
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" 
//                 skill="Amazon Product Extraction & Price Comparison Bot" 
//                 experience="Python, Selenium, Requests, Google Sheets API" 
//                 paragrapgh="I created a bot that scrapes products from Amazon, searches them on Google, and identifies the cheapest and most relevant offers using Python, Selenium, Requests, and Google Sheets. This project streamlines product research, helping users make data-driven decisions for online arbitrage and e-commerce sales. It significantly reduces manual effort in finding competitive prices."/>

                

//                 <ProjectsCard 
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvC-NeCYAj3IWCY5SIrGP5EjYYjzDXFQWw&s" 
//                 skill="Yellow Pages Data Extraction & Structuring Tool" 
//                 experience="Python, BeautifulSoup, MongoDB, Hashing" 
//                 paragrapgh="I created a Python tool using BeautifulSoup and MongoDB to extract unstructured business data from the Yellow Pages website. The data is cleaned, structured, and stored efficiently, with a hash mechanism implemented to prevent duplicate entries. This tool enables businesses and analysts to access accurate, organized contact and business information for marketing or research purposes."/>  
            
//           <div data-aos="fade-left" data-aos-delay="200">
//             <div className="owl-carousel owl-3-slider">
            
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import ProjectsCard from "./ProjectsCard";

export default function Projects(props) {
  const [showAll, setShowAll] = useState(false);

  // Example projects array
  const projects = [
  {
    src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    skill: "Blogging Website with React & Django REST Framework",
    experience: "HTML, CSS, React.js, Django REST Framework, JWT Authentication",
    paragrapgh: "I built a full-stack blogging platform using React.js for the frontend and Django REST Framework for the backend, with JWT authentication for secure user login and access. Users can create, edit, and manage posts in a smooth, responsive interface. This project demonstrates modern web development practices and provides a scalable solution for content management."
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SNf5Pw1uV7GxPm_MUmbwg-mOCql2cWlsLw&s",
    skill: "Social Media Data Extractor Bots",
    experience: "Python, Selenium, APIs, PostgreSQL",
    paragrapgh: "I developed a Python-based bots using Selenium, API integration, and PostgreSQL to extract structured data from multiple social media platforms. The bot automates the collection of posts, likes, comments, and follower information, enabling efficient social media analysis. This tool helps marketers and analysts understand engagement trends and audience behavior, saving hours of manual work."
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPLXqRyw5PEl4ETnuzYuP5XhUI51sUdQzcg&s",
    skill: "Inventory Tracking Desktop Application",
    experience: "Python Tkinter, MySQL, Pandas, Excel, Power BI",
    paragrapgh: "I developed a desktop application using Python Tkinter, MySQL, Pandas, Excel, and Power BI to track inventory across three warehouses and monitor the location of packages in real-time. The system provides accurate inventory management, reporting, and visualization, helping businesses reduce errors and improve operational efficiency."
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
    skill: "Amazon Product Extraction & Price Comparison Bot",
    experience: "Python, Selenium, Requests, Google Sheets API",
    paragrapgh: "I created a bot that scrapes products from Amazon, searches them on Google, and identifies the cheapest and most relevant offers using Python, Selenium, Requests, and Google Sheets. This project streamlines product research, helping users make data-driven decisions for online arbitrage and e-commerce sales. It significantly reduces manual effort in finding competitive prices."
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvC-NeCYAj3IWCY5SIrGP5EjYYjzDXFQWw&s",
    skill: "Yellow Pages Data Extraction & Structuring Tool",
    experience: "Python, BeautifulSoup, MongoDB, Hashing",
    paragrapgh: "I created a Python tool using BeautifulSoup and MongoDB to extract unstructured business data from the Yellow Pages website. The data is cleaned, structured, and stored efficiently, with a hash mechanism implemented to prevent duplicate entries. This tool enables businesses and analysts to access accurate, organized contact and business information for marketing or research purposes."
  }
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
            <p className="gsap-reveal-hero">Area of expertise...</p>

            <div className="wave gsap-reveal-hero mb-5">
              <svg>
                <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Render Projects */}
        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              src={project.src}
              skill={project.skill}
              experience={project.experience}
              paragrapgh={project.paragrapgh}
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
