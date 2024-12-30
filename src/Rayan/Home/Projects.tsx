import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router";


import { useEffect, useState } from "react";
import * as projectsClient from "./projectsClient";
import { LuLogOut } from "react-icons/lu";
import { FaAngleDoubleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Projects() {
    const navigate = useNavigate()
    const [projects, setProjects] = useState<any[]>([])
    const {pid} = useParams()

    const [showModal, setShowModal] = useState(false);
    const [currentPdf, setCurrentPdf] = useState<string | null>(null);

    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);


    const openVideoModal = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setCurrentVideo(null);
    };

    const openModal = (pdfUrl: string) => {
        setCurrentPdf(pdfUrl);
        setShowModal(true);
      };
      
      const closeModal = () => {
        setShowModal(false);
        setCurrentPdf(null);
      };
      
    const project = projects.find((p:any)=> p._id==pid)

    const fetchAllProjects = async () => {
        try {
        const projects = await projectsClient.fetchAllProjects(); 
        setProjects(projects)
        } catch (error) {
        console.error(error);
        }
    };
    

    
        useEffect(() => {
            fetchAllProjects();
            

        
          }, []);
    
    return (
        <>       

         <h1 className="mt-4 ms-3">{project && project.name}</h1>
         <hr />
         <button className="btn btn-danger ms-5 mb-5" onClick={() => {document.querySelector(".projects-info")?.scrollIntoView({ behavior: "smooth" });}}>Learn more <FaAngleDoubleDown /></button>
         {project && project.info_string && project.info_string.remark &&
         <p className="text-danger border rounded-5 p-4 bg-danger bg-opacity-10"><span style={{color:"red", fontWeight:"bold"}}>Remark: </span>{project.info_string.remark}</p>}
        <div className="float-end mt-3">
            <button className="btn btn-lg btn-link me-5" onClick={() => navigate("/Rayan/Portfolio")}>Back</button>
        </div>



        {project && project.video &&
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        
            <video
                src={project.video}
                controls
                autoPlay
                style={{width: "80%", height: "auto", borderRadius: "10px" }}
            >
                Your browser does not support the video tag.
            </video>
        
        </div>
}

        {project && project.url && 
             <div className="mt-5 ms-5">
                <button className="btn btn-info" onClick={() => window.open(project.url, "_blank")}>Visit Website <LuLogOut /></button>

            </div> }

   
        <div className="projects-info mt-5 border border-dark rounded-5 p-3">
            <div className="project-skills">
            <h4 className="ms-3">Skills & Knowledge Acquired</h4>
            {project && project.skills && project.skills.map((s:any)=>(
                <ul className="list-group ms-3" style={{width:"80%"}}>
                    
                    <li className="list-group-item border-0 border-top border-start border-end list-group-item-action" >{s}</li>
                </ul>
            ))}
            </div>

            <div className="project-docs">
                <h4>Supporting Documents</h4>
                {project && project.info_string && 
                <>
                {project.info_string.report ? <><button className="btn btn-warning mb-3" style={{width:"300px"}} onClick={() => openModal(project.info_string.report)}>Final Report</button><br /></> : null}
                {project.info_string.design ? <><button className="btn btn-warning mb-3" style={{width:"300px"}} onClick={() => openModal(project.info_string.design)}>Conceptual Design</button><br /></> : null}
                {project.info_string.srs ? <><button className="btn btn-warning mb-3" style={{width:"300px"}} onClick={() => openModal(project.info_string.srs)}>Software Requirements Specifications</button><br /></> : null}
                {project.info_string.sdd ? <><button className="btn btn-warning mb-3" style={{width:"300px"}} onClick={() => openModal(project.info_string.sdd)}>Software Design Description</button><br /></> : null}
                </>  
                }
                
                    {showModal && currentPdf && (
                        <div className="modal show" style={{ display: 'block' }} onClick={closeModal}>
                        <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Report - {project.name}</h5>
                                <button className="btn-close" onClick={closeModal}>
                                <IoMdClose className='mb-3'/>
                                </button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                src={currentPdf}
                                width="100%"
                                height="500px"
                                title="Report"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    )}
            {project && project.info_video && 
                <>
                {project.info_video.demo1 ? <><button className="btn btn-warning mb-3" style={{width:"300px"}} onClick={() => openVideoModal(project.info_video.demo1)}>ML Demo (Raspberry Pi)</button><br /></> : null}
                {project.info_video.demo2 ? <><button className="btn btn-warning mb-3" style={{width:"300px"}}  onClick={() => openVideoModal(project.info_video.demo2)}>Anti-Spoofing Demo (Raspberry Pi)</button><br /></> : null}
                {project.info_video.demo3 ? <><button className="btn btn-warning mb-3" style={{width:"300px"}}  onClick={() => openVideoModal(project.info_video.demo3)}>Track Controller Demo</button><br /></> : null}
                </>  
                }
                {showVideoModal && currentVideo && (
                    <div className="modal show" style={{ display: "block" }} onClick={closeVideoModal}>
                        <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Video Demo</h5>
                                    <button className="btn-close" onClick={closeVideoModal}><IoMdClose className="mb-3"/></button>
                                    
                                </div>
                                <div className="modal-body">
                                    <video
                                        src={currentVideo}
                                        controls
                                        style={{ width: "100%", borderRadius: "10px" }}
                                        autoPlay
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <br /><br />
                <h4>Related Images</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                    {project && project.info_pic && project.info_pic.map((pic: any, index: number) => (
                        <div key={index} style={{ flex: "1 1 calc(50% - 10px)", marginBottom: "10px" }}>
                            <img src={pic} alt="" style={{ width: "100%" }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </>




 

  


    );
}