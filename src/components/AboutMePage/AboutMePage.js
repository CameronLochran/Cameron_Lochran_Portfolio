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
                  I'm a <strong>Software Developer</strong> based in
                  <strong className="variety">Glasgow</strong> who has
                  experience building
                  <strong className="variety">Full-Stack</strong> Applications
                  using a different
                  <strong className="variety">variety</strong> of languages and
                  <strong className="variety">frameworks</strong>.
                </p>
              </div>
            </Fade>
            <br />
            <Fade right>
              <div className="fact">
                <p>
                  <strong className="codeclan-grad-para">
                    Software Developemnt Bootcamp Student Graduate
                  </strong>
                  by
                  <strong> CodeClan/CodeBase</strong> and graduated on 16th
                  November 2023.
                </p>
              </div>
            </Fade>
            <br />
            <Fade left>
              <div className="fact">
                <p>
                  Have being coding all throughout high school and decided to
                  advance my knowledge by deciding to enroll in
                  <strong className="CityOfGlasgowCollege">
                    City Of Glasgow College
                  </strong>{" "}
                  to do a
                  <strong className="Level6-SofwareDev">
                    SCQF Level 6 Software Developement
                  </strong>
                  course.
                </p>
              </div>
            </Fade>
            <br />
            <Fade right>
              <div className="fact">
                <p>
                  Excellent{" "}
                  <strong className="communication-skills">
                    verbal and written communication
                  </strong>{" "}
                  skills along with my{" "}
                  <strong className="interpersonal-abilities">
                    strong interpersonal abilities cultivated in a teams
                    environment.
                  </strong>
                </p>
              </div>
            </Fade>
            <br />
            <Fade left>
              <div className="fact">
                I am an <strong>eager and enthusiastic</strong> learner and love
                to <strong>demonstrate</strong> my learnings through projects
                and constantly progress.
              </div>
            </Fade>
            <br />
            <Fade right>
              <div className="fact">
                <p>
                  Competent in numerous Languages, frameworks and
                  <strong className="OOP">OOP. </strong>
                  Recognisable experience in
                  <strong className="skills">
                    Python, Java, JavaScript, also Node.js, React, Flask and
                    Spring, SpringBoot
                  </strong>
                </p>
              </div>
            </Fade>
            <br />
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
