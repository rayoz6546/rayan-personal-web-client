// import { useLocation } from "react-router";

// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
// import { useState } from "react";


// export default function HomeNavigation() { 
//     const { pathname } = useLocation();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     return (

//         <div id="wd-rayan-navigation"  className="p-2 rounded-0 position-relative d-none d-md-block ">
//             <ul className="nav nav-pills mt-4">

//             <li className="nav-item ms-5 me-5">
//                     <a id="wd-home" href="#/Rayan/Home" className={`nav-link text-light ${pathname.includes("Home") ? "rounded-0" : ""}`}>
//                         <h1 className="me-5">Rayan Hassan</h1>
//                     </a>
//                 </li>

  

//                 <li className="nav-item ms-5 me-5">
//                     <a id="wd-home" href="#/Rayan/Home" className={`nav-link ms-5 text-light ${pathname.includes("Home") ? "border-bottom rounded-0" : ""}`}>
//                         Home
//                     </a>
//                 </li>

//                 <li className="nav-item me-5">
//                     <a id="wd-about" href="#/Rayan/About" className={`nav-link text-light ${pathname.includes("About") ? "border-bottom rounded-0" : ""}`}>
//                         About
//                     </a>
//                 </li>

//                 <li className="nav-item me-5">
//                     <a id="wd-contact" href="#/Rayan/Contact" className={`nav-link text-light ${pathname.includes("Contact") ? "border-bottom rounded-0" : ""}`}>
//                         Contact
//                     </a>
//                 </li>





//                 <li className="nav-item">
//                     <a className="ms-5 me-3" href="https://github.com/rayoz6546/Rayan.git" style={{color:"white"}}><FaGithub className="fs-3"/></a> 
//                 </li>

//                 <li className="nav-item">
//                     <a className="me-3" href="https://www.linkedin.com/in/rayan-hassan-38a5b3226/" style={{color:"white"}}><FaLinkedin className="fs-3"/></a> 
//                 </li>

//                 <li className="nav-item">
//                     <a href="https://www.instagram.com/ray.hass_01/" style={{color:"white"}}><FaInstagram className="fs-3"/></a>
//                 </li>
                

//                 </ul>




                

//         </div>
//     );
// }


import { useLocation } from "react-router";
import { FaGithub, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function HomeNavigation() {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Original Desktop Navigation */}
            <div
                id="wd-rayan-navigation"
                className="p-2 rounded-0 position-relative d-none d-md-block"
            >
                <ul className="nav nav-pills mt-4">
                    <li className="nav-item ms-5 me-5">
                        <a
                            id="wd-rayan"
                            href="#/Rayan/Home"
                            className={`nav-link text-light ${
                                pathname.includes("Home") ? "rounded-0" : ""
                            }`}
                        >
                            <h1 className="me-5">Rayan Hassan</h1>
                        </a>
                    </li>
                    <li className="nav-item  me-5">
                        <a
                            id="wd-home"
                            href="#/Rayan/Home"
                            className={`nav-link text-light ${
                                pathname.includes("Home") ? "border-bottom rounded-0" : ""
                            }`}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item me-5">
                        <a
                            id="wd-about"
                            href="#/Rayan/About"
                            className={`nav-link text-light ${
                                pathname.includes("About") ? "border-bottom rounded-0" : ""
                            }`}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item me-5">
                        <a
                            id="wd-contact"
                            href="#/Rayan/Contact"
                            className={`nav-link text-light ${
                                pathname.includes("Contact") ? "border-bottom rounded-0" : ""
                            }`}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item github">
                        <a
                            className="ms-5 me-3"
                            href="https://github.com/rayoz6546/Rayan.git"
                            style={{ color: "white" }}
                        >
                            <FaGithub className="fs-3" />
                        </a>
                    </li>
                    <li className="nav-item linkedin">
                        <a
                            className="me-3"
                            href="https://www.linkedin.com/in/rayan-hassan-38a5b3226/"
                            style={{ color: "white" }}
                        >
                            <FaLinkedin className="fs-3" />
                        </a>
                    </li>
                    <li className="nav-item insta">
                        <a
                            href="https://www.instagram.com/ray.hass_01/"
                            style={{ color: "white" }}
                        >
                            <FaInstagram className="fs-3" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* New Mobile Navigation */}
            <div id="mobile-navigation" className="d-md-none p-2">
                <div className="mobile-header d-flex justify-content-between align-items-center">
                    <h1 className="text-light">Rayan Hassan</h1>
                    <button
                        className="hamburger-menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <FaBars className="text-light fs-3" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <ul className="mobile-nav mt-3">
                        <li className="nav-item">
                            <a
                                href="#/Rayan/Home"
                                className={`nav-link text-light ${
                                    pathname.includes("Home") ? "border-bottom rounded-0" : ""
                                }`}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#/Rayan/About"
                                className={`nav-link text-light ${
                                    pathname.includes("About") ? "border-bottom rounded-0" : ""
                                }`}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#/Rayan/Contact"
                                className={`nav-link text-light ${
                                    pathname.includes("Contact") ? "border-bottom rounded-0" : ""
                                }`}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item d-flex gap-3">
                            <a
                                href="https://github.com/rayoz6546/Rayan.git"
                                className="text-light"
                            >
                                <FaGithub className="fs-3" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rayan-hassan-38a5b3226/"
                                className="text-light"
                            >
                                <FaLinkedin className="fs-3" />
                            </a>
                            <a
                                href="https://www.instagram.com/ray.hass_01/"
                                className="text-light"
                            >
                                <FaInstagram className="fs-3" />
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}
