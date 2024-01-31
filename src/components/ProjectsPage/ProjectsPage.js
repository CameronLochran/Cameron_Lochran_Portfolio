import React from "react";
import "./ProjectPage.css";
import blackJackImage from "./Blackjack_project/Images/blackjack.jpg";
import wiggleWaggyWalksImage from "./WiggleWaggyWalks/Images/wigglewaggywalks.png";
import PopupCarousel from "./Blackjack_project/Popup";
import WWWPopupCarousel from "./WiggleWaggyWalks/Popup";
import pythonProjectImage from "./PythonProject/Images/Screenshot 2024-01-24 at 18.26.55.png";
import STPopup from "./PythonProject/Popup";
import HomeIcon from "../HomePage/Images/Home_Icon.jpeg";

const ProjectsPage = () => {
  return (
    <div className="whole-file">
      <header className="projects-header">
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
      <div className="my-projects-title" id="my-projects-title">
        <h1>My Projects</h1>
      </div>

      <div id="blackjack-project">
        <h3>BlackJack Project</h3>
        <img
          src={blackJackImage}
          alt="Blackjack project"
          width="550px"
          height="300px"
        />
        <h3>Group Project</h3>

        <div id="carousel-blackjack">
          <center>
            <span className="wrap">
              <PopupCarousel />
              <br />
            </span>
          </center>
        </div>
      </div>

      <div id="wiggle-waggy-walks">
        <br />
        <br />

        <h3>Wiggle Waggy Walks Project</h3>
        <div>
          <img
            src={wiggleWaggyWalksImage}
            alt="Wiggle Waggy Walks"
            width="550px"
            height="300px"
          />
          <br />
          <h3>Group Project</h3>
          <div id="carousel-blackjack">
            <center>
              <span className="wrap">
                <WWWPopupCarousel />
              </span>
            </center>
          </div>
        </div>
      </div>
      <div className="python-project">
        <br />
        <br />
        <h3>Python Project</h3>
        <div>
          <img
            src={pythonProjectImage}
            alt="Python Project"
            width="550px"
            height="300px"
          />
          <br />
          <h3>Group Project</h3>
          <div id="carousel-blackjack">
            <center>
              <span className="wrap">
                <STPopup />
              </span>
              <br />
              <br />
            </center>
          </div>
        </div>
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
  );
};
export default ProjectsPage;
