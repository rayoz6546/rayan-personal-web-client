import "./styles.css";
import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Projects from "./Home/Projects";

import Courses from "./Home/Courses";

import { useState } from "react";

import HomeNavigation from "./Navigation";
import EducationActivities from "./Home/EducationActivities";
import Portfolio from "./Home/protfolio";



export default function Rayan() {

    return (
        <div >

        <HomeNavigation />

        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home/*" element={<Home />} />
            <Route path="Portfolio/*" element={<Portfolio/>} />
            <Route path="About/*" element={<About />} />
            <Route path="Home/projects/:pid/*" element={<Projects/>} />
            <Route path="Courses/*" element={<Courses/>} /> 
            <Route path="Education&Activities/*" element={<EducationActivities/>} /> 
            </Routes>


        </div>
    )
}