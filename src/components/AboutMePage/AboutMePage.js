import React from "react";
import Fade from "react-reveal/Fade";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <>
      <div>
        <header className="about-me-header">
          <center>
            <h1>About Me</h1>
          </center>
        </header>
        <br />
        <br />
        <br />
        <div className="about-me-info">
          <center>
            <Fade left>
              <div className="fact-one">
                <p> I Love Dinosaurs</p>
              </div>
            </Fade>
          </center>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
