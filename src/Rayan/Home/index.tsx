import { useNavigate } from "react-router";
import Skills from "./Skills";

import { FaAnglesDown } from "react-icons/fa6";




export default function Home() {
  const navigate = useNavigate()


  return (
    <>

    <div className="container-background-1">
      <div className="hero-section">
        <div className="hero-text">

          <h1>Discover how I turn data into actionable solutions</h1>
          <button className="explore-button me-2" onClick={() => {
              navigate("/Rayan/Portfolio")
            }}>
            Explore
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/rayanh.jpeg" alt="Profile" />
          <div className="thought-bubbles-container">
        <span className="thought" style={{ top: "10%", left: "10%" }}>
          Data Science
        </span>
        <span className="thought" style={{ top: "0%", right: "15%" }}>
          Projects
        </span>
        <span className="thought" style={{ bottom: "5%", left: "5%" }}>
          AI
        </span>
        <span className="thought" style={{ bottom: "5%", right: "-10%" }}>
          Research
        </span>
        <span className="thought" style={{ top: "30%", left: "-10%" }}>
          Machine Learning
        </span>
        <span className="thought" style={{ top: "30%", right: "-10%" }}>
          Web Development
        </span>
        <span className="thought" style={{ bottom: "30%", left: "-15%" }}>
          Courses
        </span>
        <span className="thought" style={{ bottom: "25%", right: "-25%" }}>
          Innovation
        </span>
      </div>
        </div>
      </div>
    </div>

    <Skills/>

    <div className="custom-shape-divider-top-1735500841">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>



    <div className="education-section mt-2">

            <h1 className="education-title">EDUCATION</h1>


          <div className="clw" >
            
            <img src="/images/clw.png" alt="clw logo"/>

            <div className="clw-container">
              <h5>Collège Louise Wegmann (2004-2019)</h5>
              <div className="clw-info">
                <ul>
                  <li><span style={{fontWeight:"bold"}}>Diploma(s): </span> High School Diploma, French Baccalaureate</li>
                  <li><span style={{fontWeight:"bold"}}>Specialization: </span>Scientific-Mathematics</li>
                  <li><span style={{fontWeight:"bold"}}>Activities: </span>Taekwondo, Piano, Little Engineer, Cinematography & Visual Arts</li>
                </ul>
                <button className="ms-4 btn btn-info me-2">View Diploma</button>
                <button className="btn btn-info me-2">View Transcript</button>
                <button className="btn btn-info">Learn More</button>
              </div>


            </div>
 

          </div>


          <div className="arrow"><FaAnglesDown className="fs-1"/></div>


          <div className="aub">
          <div className="aub-container">
              <h5>American University of Beirut (Fall 2019-Spring 2021)</h5>
              <div className="aub-info">
                <ul>
                  <li><span style={{fontWeight:"bold"}}>Major: </span>Computer and Communication Engineering</li>
                  <li><span style={{fontWeight:"bold"}}>Major GPA: </span>3.3</li>
                  <li><span style={{fontWeight:"bold"}}>Activities: </span>Robot Sumo Competition, IEEE, Tutor</li>
                </ul>
                <button className="btn btn-info me-2">View Transcript</button>
                <button className="btn btn-info">Learn More</button>
              </div>

            </div>
          
            <img src="/images/aub.png" alt="aub logo"/>


          </div>

          <div className="arrow"><FaAnglesDown className="fs-1" /></div>

          <div className="pitt">

            <img src="/images/pitt.svg" alt="pitt logo" />
            <div className="pitt-container mt-5">
              <h5>University of Pittsburgh (Fall 2021-Fall 2023)</h5>
              <div className="pitt-info">
                <ul>
                <li><span style={{fontWeight:"bold"}}>Major: </span>Computer Engineering</li>
                  <li><span style={{fontWeight:"bold"}}>GPA: </span>3.76</li>
                  <li><span style={{fontWeight:"bold"}}>Activities: </span>IEEE</li>
                  <li><span style={{fontWeight:"bold"}}>Diploma: </span>Bachelor of Science in Computer Engineering</li>
                </ul>
                <button className="ms-4 btn btn-info me-2">View Diploma</button>
                <button className="btn btn-info me-2">View Transcript</button>
                <button className="btn btn-info">Learn More</button>
              </div>
              

            </div>
 

          </div>

          <div className="arrow"><FaAnglesDown className="fs-1"/></div>

          <div className="nu">

          <div className="nu-container">
              <h5>Northeastern University (Fall 2024-present)</h5>

              <div className="nu-info">
                <ul>
                <li><span style={{fontWeight:"bold"}}>Major: </span>Data Science</li>
                  <li><span style={{fontWeight:"bold"}}>GPA: </span>4.0</li>

                </ul>
                <button className="btn btn-info me-2">View Transcript</button>
                <button className="btn btn-info">Learn More</button>
              </div>

            </div>
            <img src="/images/nu.png" alt="nu logo" />

          </div>
    </div>


    <div className="custom-shape-divider-top-1735500841-2">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-border" ></path>
          
      </svg>
    </div>
    
    <div className="activities-buffer">
    
      </div>

      <div className="activities-section">
        <h1 className="activities-title">ACTIVITIES</h1>

        <div className="activities-grid mb-5">

            <div className="card rounded-3 overflow-hidden ms-4" >
              <img src="/images/piano.PNG" alt="" className="card-img-top" style={{ width: "100%", height: "250px", objectFit: "cover" }}/>
              <h1>Piano</h1>
            </div>
            <div className="card rounded-3 overflow-hidden ms-4" >
              <img src="/images/v2.PNG" alt="" className="card-img-top" style={{ width: "100%", height: "250px", objectFit: "cover" }}/>
              <h1>Volunteer</h1>
            </div>
            <div className="card rounded-3 overflow-hidden ms-4" >
              <img src="/images/travel.jpeg" alt="" className="card-img-top" style={{ width: "100%", height: "250px", objectFit: "cover" }}/>
              <h1>Travel</h1>
            </div>
            <div className="card rounded-3 overflow-hidden ms-4" >
              <img src="/images/fitness.jpeg" alt="" className="card-img-top" style={{ width: "100%", height: "250px", objectFit: "cover" }}/>
              <h1>Fitness</h1>
            </div>

            


            </div>

    </div>
   

</>
  );
}





