import React, { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isInView, setIsInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [skills, setSkills] = useState("programming")

  const skills_programming = [
    { name: "Python", level: 5 },
    { name: "R", level: 4 },
    { name: "C++", level: 3 },
    { name: "SQL", level: 4 },
    { name: "JavaScript", level: 5 },
  ];

  const skills_web = [
    { name: "TypeScript", level: 5 },
    { name: "HTML", level: 5 },
    { name: "CSS", level: 4 },
    { name: "ReactJS", level: 5 },
    { name: "NodeJS", level: 5 },
  ]

  const skills_ui = [
    { name: "Flask", level: 5 },
    { name: "Streamlit", level: 4},
    { name: "PyQt", level: 4},
    { name: "Tableau", level: 3 }
  ]

  const skills_database = [
    { name: "MongoDB", level: 5 },
    { name: "PostgreSQL", level: 4 },
    { name: "SQLite", level: 5 },
    { name: "MySQL", level: 4},
    { name: "Databricks", level: 2},

  ]

  const skills_libraries = [
    { name: "Tensorflow", level: 5 },
    { name: "Scikit-Learn", level: 5 },
    { name: "Matplotlib", level: 5 },
    { name: "Seaborn", level: 5 },
    { name: "PySpark", level: 3 },
  ]

  const skills_os = [
    { name: "Windows", level: 3 },
    { name: "Linux", level: 3 },
  ]

  const skills_hardware = [
    { name: "Altium", level: 4 },
    { name: "SPICE", level: 5 },
    { name: "Raspberry Pi 4", level: 4 },
    { name: "Arduino", level: 3 },
    { name: "Xilinx Vivado", level: 4 },
  ]

  const skills_language = [
    { name: "Arabic", level: 5 },
    { name: "French", level: 5 },
    { name: "English", level: 4.5 },
    { name: "Spanish", level: 2.5 },
  ]

 

  const skillsMapping: Record<string, { name: string; level: number }[]> = {

    programming: skills_programming,
    web: skills_web,
    database: skills_database,
    libraries: skills_libraries,
    ui: skills_ui,
    hardware: skills_hardware,
    os: skills_os,
    languages: skills_language,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, 
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div id="skills-section" ref={skillsRef} >
      <h2 className="ms-3">Skills & Knowledge</h2>
      <hr />

      <div className="skills">
        <div className="skills-buttons ms-5 mb-3">
            <button className={`btn mb-1 ${skills ==="programming" ? "btn-light" : "btn-info"}`}onClick={()=>setSkills("programming")}>Programming Languages</button> <br />
            <button className={`btn mb-1 ${skills ==="web" ? "btn-light" : "btn-info"}`} onClick={()=>setSkills("web")}>Web Development</button><br />
            <button className={`btn mb-1 ${skills ==="database" ? "btn-light" : "btn-info"}`} onClick={()=>setSkills("database")}>Database</button><br />
            <button className={`btn mb-1 ${skills ==="libraries" ? "btn-light" : "btn-info"}`}onClick={()=>setSkills("libraries")}>Data Science Libraries</button><br />
            <button className={`btn mb-1 ${skills ==="ui" ? "btn-light" : "btn-info"}`} onClick={()=>setSkills("ui")}>UI Design</button><br />
            <button className={`btn mb-1 ${skills ==="hardware" ? "btn-light" : "btn-info"}`} onClick={()=>setSkills("hardware")}>Hardware</button><br />
            <button className={`btn mb-1 ${skills ==="os" ? "btn-light" : "btn-info"}`}  onClick={()=>setSkills("os")}>Operating Systems</button><br />
            <button className={`btn mb-1 ${skills ==="languages" ? "btn-light" : "btn-info"}`}onClick={()=>setSkills("languages")}>Languages</button><br />
        </div>


        <div style={{width:"50%"}} className="me-5 mb-3">
            {skillsMapping[skills]?.map((skill, index)=> (
                    <div key={index} className="mb-3">
                        <label>{skill.name}</label>
                        <div className="progress" style={{ height: "30px"}}>
                        <div
                            className={`progress-after ${isInView ? "fill-progress" : ""}`}
                            role="progressbar"
                            style={{
                            width: isInView ? `${(skill.level / 5) * 100}%` : "0%",
                            transition: "width 1s ease-in-out",
                            }}
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={5}
                        >
 
                        </div>
                        </div>
                    </div>
                    ))} 
        </div>

      </div>
      

    </div>
  );
}
