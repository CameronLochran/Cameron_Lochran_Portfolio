import React from "react";
import Fade from "react-reveal/Fade";
import HomeIcon from "../HomePage/Images/Home_Icon.jpeg";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <>
      <div>
        <header className="about-me-header">
          <center>
            <a href="/">
              <img
                src={HomeIcon}
                alt="Home Icon"
                width="150px"
                className="home-icon"
              />
            </a>
          </center>
        </header>
        <br />
        <br />
        <br />
        <h3 className="about-me-h3">About Me!</h3>
        <br />
        <br />
        <br />
        <div className="about-me-info">
          <center>
            <Fade left>
              <div className="fact">
                <p>
                  <strong className="codeclan-grad-para">
                    Software Developemnt Bootcamp Student Graduate
                  </strong>
                  by
                  <strong> CodeClan/CodeBase</strong> and graduated on 16th
                  November 2023
                </p>
              </div>
            </Fade>
            <br />
            <Fade right>
              <div className="fact">
                <p>
                  Have being coding all throughout high school and decided to
                  advance my knowledge by deciding to enroll in
                  <strong>City Of Glasgow College</strong> to do a
                  <strong>SCQF Level 6 Software Developement</strong>
                </p>
              </div>
            </Fade>
            <br />
            <Fade left>
              <div className="fact">
                <p>
                  Competent in numerous Languages, frameworks and <strong>OOP. </strong>
                  Recognisable experience in
                  <strong>
                    Python, Java, JavaScript, also Node.js, React, Flask and
                    Spring
                  </strong>
                </p>
              </div>
            </Fade>
          </center>
        </div>
        <footer className="home-page-footer">
          <p>
            <strong>
              Interested in the code for my portfolio? Click
              <a
                href="https://github.com/CameronLochran/Cameron_Lochran_Portfolio"
                className="footer-link"
              >
                here
              </a>
            </strong>
          </p>
        </footer>
      </div>
    </>
  );
};

export default AboutMePage;
