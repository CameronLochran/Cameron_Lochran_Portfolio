import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/HomePage/HomePage';
import ProjectsPage from '../components/ProjectsPage/ProjectsPage';

const MainContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="contactpage" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainContainer
