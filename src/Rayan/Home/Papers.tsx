import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router';

const papers = [
    { title: 'Review on Wearable System for Positioning Ultrasound Scanner (published on MDPI)', pdfUrl: '/papers/cuhk.pdf', description: 'This paper explores advancements in wearable ultrasound scanner systems, detailing their applications, robotic technologies, and future directions in medical imaging innovation.' },
    { title: 'Effect of Smoking, Age, and Number of Blood Platelets on Deaths by Heart Failure', pdfUrl: '/papers/heartfailure.pdf', description: 'This paper investigates the relationship between age, smoking, and platelet count with deaths by heart failure through statistical analysis and the application of machine learning models ' },
    { title: 'Antivirus Software: How Does it Work ?', pdfUrl: '/papers/antivirus.pdf', description: 'A comprehensive study of antivirus software, highlighting methods such as signature-based and heuristic analysis, sandbox detection, and machine learning in combating malware.' },
    { title: 'Big Data in Medicine (Le Big Data et la Médecine)', pdfUrl: '/papers/bigdata.pdf', description: 'An exploration of Big Datas transformative role in medicine, focusing on personalized healthcare, predictive analytics, and telemedicine innovations' },
];



export default function Research() {

  const [showModal, setShowModal] = useState(false);
  const [currentPdf, setCurrentPdf] = useState<string | null>(null);

  const navigate = useNavigate()

  const openModal = (pdfUrl: string) => {
    setCurrentPdf(pdfUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPdf(null);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Research Papers</h2>
      <div className="row">
        {papers.map((paper, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ cursor: 'pointer' }} onClick={() => openModal(paper.pdfUrl)}>
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
                <h5 className="modal-title">Research Paper - {papers.find(p => p.pdfUrl === currentPdf)?.title}</h5>
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

    <button className="btn btn-lg btn-link me-5" onClick={() => navigate("/RayozWeb/About")}>Back</button>
    </div>
  );
}

