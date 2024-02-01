import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/HomePage/HomePage";
import ProjectsPage from "../components/ProjectsPage/ProjectsPage";
import AboutMePage from "../components/AboutMePage/AboutMePage";

const MainContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainContainer;
