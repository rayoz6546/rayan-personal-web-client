import { Link, Navigate, Route, Routes} from "react-router";
import { FaSchool } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function About() {
    return (
        <>
            <div className="mt-3 ms-3">
                <h1>About Me 
                </h1>
            </div>
            <hr />
            <div className="about-me-container" style={{display:"flex"}}>

            <hr />
            <div className="dialog-container me-5">
                <p>
                    Hello everyone, and welcome to my page! I am a graduate with a Bachelor’s degree in Computer Engineering from the University of Pittsburgh, and I am currently pursuing a Master’s in Data Science at Northeastern University. 
                    I am passionate about Data Science and Engineering, with a particular interest in Web Development and Machine Learning. I am continuously looking to expand my expertise and refine my skills. 
                    On this web page, I show you some of the most important experiences I have had as a student, which helped shape my interest and fuel my passion for Data Science. 
                    In this section, I will walk you through my journey, from my high school years to my current academic endeavors, giving you a closer look at how my passion for the field has evolved.
                </p>
                <hr />

                <div className="about-section" style={{display:"flex"}}>
                    <div className="about-nav" style={{position:"relative"}}>
                    <FaSchool className="border fs-1 border-dark rounded-5 p-1 text-success" style={{position:"relative"}}/> 
                    <div className="bg-dark" style={{position:"relative", width:"0.2%",left:"50%", height:"100%"}}></div>
                    </div>

                <div className="ms-3">
                    <h3 style={{fontWeight:"bold"}}>High School</h3>
                    <p>I attented "Collège Louise Wegmann" school in Lebanon, a well-regarded institution located in the heart of Beirut.
                        In 2024, the school was ranked third among the Best French Schools Abroad (<button className="btn btn-link mb-1" style={{padding:"0", margin:"0", textDecoration:"none"}} onClick={() => window.open("https://blog.averroes-elearning.com/palmares-des-lycees-francais-de-l-etranger/", "_blank")}>View Ranking <LuLogOut className="mb-1"/></button>). 
                        Unlike the educational systems in the United States and many other countries, Lebanon’s schools extend from preschool through to high school. I began my studies there at the age of three and graduated with distinction in 2019, earning both a High School Diploma and a French Baccalaureate, specializing in Mathematics (Série Scientifique-Spécialité Mathématique).
                        
                        </p> 
                    </div>

                </div>


                <div className="about-section" style={{display:"flex"}}>
                <div className="about-nav" style={{position:"relative"}}>
                <IoSchool className="border fs-1 border-dark rounded-5 p-1 text-success" style={{position:"relative"}}/> 
                <div className="bg-dark" style={{position:"relative", width:"0.2%",left:"50%", height:"100%"}}></div>
                </div>

                <div className="ms-3">
                    <h3 style={{fontWeight:"bold"}}>College</h3>
                    <p>My higher education began at the American University of Beirut (AUB) in Lebanon, where I majored in Computer and Communication Engineering.
                        My time at AUB was met with numerous challenges. From the onset of the Lebanese revolution in late 2019, to the emerging economic crisis, and the global pandemic that followed in 2020. 
                        These events significantly impacted my ability to stay focused and excel academically amidst rising tension and uncertainty. As if that weren’t enough, the devastating explosion that struck Beirut in the summer of 2020 
                        left a lasting impact on all of us. In light of these hardships, I made the difficult decision to leave Lebanon and pursue my education abroad in a fresh environment. 
                        I transferred to the University of Pittsburgh in the Fall of 2021, and this proved to be one of the best decisions I’ve ever made. 
                        This new chapter allowed me to apply my existing knowledge and rapidly acquire new skills. I immersed myself in all facets of my major engaging in multiple projects that have enriched my learning experience.
                        Through hands-on work in areas such as Machine Learning, Embedded Systems, Cybersecurity, and Data Science, I was able to hone my focus and narrow my interests towards topics that excited me the most, namely ML, AI, Web Development, and Data Analytics.
                        
                        
                        </p> 
                    </div>

                </div>

                <div className="about-section" style={{display:"flex"}}>
                <div className="about-nav" style={{position:"relative"}}>
                <MdWork className="border fs-1 border-dark rounded-5 p-1 text-success" style={{position:"relative"}}/> 
                <div className="bg-dark" style={{position:"relative", width:"0.2%",left:"50%", height:"100%"}}></div>
                </div>

                <div className="ms-3">
                    <h3 style={{fontWeight:"bold"}}>Professional Experience</h3>
                    <p> During my academic years at the University of Pittsburgh, and after identifying my core areas of interest, I gained invaluable real-world experience through two professional engagements. The first took place at my former school in Lebanon, Collège Louise Wegmann, where I volunteered in response to the ongoing crisis. 
                        As part of the alumni team, I worked as a software developer, assisting in the conversion of Excel data into an accessible SQL database through the alumni website, utilizing tools such as phpMyAdmin and WordPress. The second experience occurred at the Chinese University of Hong Kong, as part of their Summer Undergraduate Research Program (SURP). 
                        There, I collaborated with graduate students to contribute to a paper on robotics for biomedical applications. My research focused on soft robotics, autonomous systems, and deep learning algorithms for targeting localized areas in soft tissues using ultrasound technology. 
                        This research culminated in a <button className="btn btn-link mb-1" style={{padding:"0", margin:"0", textDecoration:"none"}} onClick={() => window.open("https://doi.org/10.3390/machines11030325", "_blank")}>paper <LuLogOut className="mb-1"/></button> published on MDPI in February 2023.

                        
                        
                        </p> 
                    </div>

                </div>
                
                <div className="about-section" style={{display:"flex"}}>
                <div className="about-nav" style={{position:"relative"}}>
                <FaUserGraduate className="border fs-1 border-dark rounded-5 p-1 text-success" style={{position:"relative"}}/> 
                <div className="bg-dark" style={{position:"relative", width:"0.2%",left:"50%", height:"80%"}}></div>
                </div>

                <div className="ms-3">
                    <h3 style={{fontWeight:"bold"}}>Graduate School</h3>
                    <p>
                    After earning my Bachelor’s degree in Computer Engineering and refining my focus on the field that most inspires me, I chose to pursue a Master’s in Data Science, which I began in the Fall of 2024. 
                    Having recently completed my first semester, I am eagerly looking forward to the opportunities and challenges that the remaining years at Northeastern University will bring.
                        
                        
                        </p> 
                    </div>

                </div>
            </div>

            <div style={{position:"relative"}}>
            <img src="/images/r.jpeg" alt="me" style={{position:"relative", width:"100%",right:"5%", top:"2%", borderRadius:"50%"}}/> 
            </div>
            </div>
            
            


        </>
    );
}
