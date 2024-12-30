import { useEffect, useState } from "react";
import * as projectsClient from "./projectsClient"
import * as papersClient from "./papersClient"
import { Link } from "react-router";
import Skills from "./Skills";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
const [currentPdf, setCurrentPdf] = useState<string | null>(null);
const [projects, setProjects] = useState<any[]>([])
const [papers, setPapers] = useState<any[]>([])

const openModal = (pdfUrl: string) => {
  setCurrentPdf(pdfUrl);
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
  setCurrentPdf(null);
};

  const fetchAllProjects = async () => {
      try {
        const projects = await projectsClient.fetchAllProjects(); 
        setProjects(projects)
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllPapers = async () => {
      try {
        const papers = await papersClient.fetchAllPapers(); 
        setPapers(papers)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        fetchAllProjects();
        fetchAllPapers();
    
      }, []);
  return (
    <>
        <div className="container-background-2">

                    
                <div className="wd-about-card" style={{ width: "200px" }}>
                      <div className="card-container">
                      <button
                        onClick={() => {
                          document.querySelector("#projects-section")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    className="card-button"
                    style={{ all: "unset", cursor: "pointer" }}
                  >

                    <div id="option-cards" className="card rounded-3 overflow-hidden hover-card border-0">
                    <img src="/images/projects.webp" alt="" style={{width:"100%", height:"100%",  objectFit: "cover"}}/>
                    <div className="hover-info">
                              <p >Check out some of the coolest projects I have worked on during my academic years!</p>
                          </div>
                    </div>
                  </button>

                      </div>
                  </div>

                    <div className="wd-about-card" style={{ width: "200px" }}>
                        <div className="card-container">
                        <button
                      onClick={() => {
                        document.querySelector("#papers-section")!.scrollIntoView({ behavior: "smooth" });
                      }}
                    className="card-button"
                    style={{ all: "unset", cursor: "pointer" }}
                  >

                    <div id="option-cards" className="card rounded-3 overflow-hidden hover-card border-0">
                    <img src="/images/research.webp" alt="" style={{width:"100%", height:"100%",  objectFit: "cover"}}/>
                    <div className="hover-info">
                                <p>Dive into my research papers written for academic and professional purposes</p>
                            </div>
                    </div>


                  </button>

                        </div>
                    </div>


                  <div className="wd-about-card" style={{ width: "200px" }}>
                    <div className="card-container">
                        <Link  to="/Rayan/Courses" style={{textDecoration:"none"}}>
                            <div id="option-cards" className="card rounded-3 overflow-hidden hover-card border-0">
                            <img src="/images/courses.webp" alt="" style={{width:"100%", height:"100%",  objectFit: "cover"}}/>
                            <div className="hover-info">
                            <p>Here are some of the most important courses I have taken as a student</p>
                        </div>
                            </div>

                        </Link>

                    </div>
                  </div>


                  
        </div>





    



<div id="projects-section">
<div className="mt-3 ms-3"><h2>Projects</h2><hr /></div>


<div id="projects-container" className="d-flex justify-content-center mt-5">
<div className="projects-grid">
{projects &&
  projects.map((project: any) => (
    <div className="project-card">
      <div className="card rounded-3 overflow-hidden">
        <img
          src={project.image}
          alt="Project"
          className="card-img-top"
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{project.name}</h5>
          <p
            className="card-text"
            style={{ maxHeight: "100px", overflowY: "hidden" }}
          >
            {project.description}
          </p>
          <Link
            to={`/Rayan/Home/projects/${project._id}`}
            className="btn btn-primary" style={{width:"100%"}}
          >
            Go
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>



</div>



<hr />


<div id="papers-section" className="container" >
  <h2 className="mb-4 text-center">Research Papers</h2>
  <div className="row">
    {papers.map((paper, index) => (
      <div key={index} className="col-md-6 mb-4">
        <div className="card shadow-sm" style={{ cursor: 'pointer' }} onClick={() => openModal(paper.report)}>
          <div className="card-body">
            <h5 className="card-title">{paper.title}</h5>
            <p className="card-text">{paper.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>


  {showModal && currentPdf && (
    <div className="modal show" style={{ display: 'block' }} onClick={closeModal}>
      <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Research Paper - {papers.find(p => p.report === currentPdf)?.title}</h5>
            <button className="btn-close" onClick={closeModal}>
            <IoMdClose className='mb-3'/>
            </button>
          </div>
          <div className="modal-body">
            <iframe
              src={currentPdf}
              width="100%"
              height="500px"
              title="Research Paper"
            />
          </div>
        </div>
      </div>
    </div>
  )}

</div>


<div className="footer"></div>




    </>
  );
}
    
  