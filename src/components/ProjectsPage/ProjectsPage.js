import React from "react";
import "./ProjectPage.css";
import blackJackImage from "./Blackjack_project/Images/blackjack.jpg";
import wiggleWaggyWalksImage from "./WiggleWaggyWalks/Images/wigglewaggywalks.png";
import PopupCarousel from "./Blackjack_project/Popup";
import WWWPopupCarousel from "./WiggleWaggyWalks/Popup";
import pythonProjectImage from "./PythonProject/Images/Screenshot 2024-01-24 at 18.26.55.png";
import SpendingTrackerCarousel from "./PythonProject/SpendingTrackerCarousel";
import STPopup from "./PythonProject/Popup";

const ProjectsPage = () => {
  return (
    <div className="whole-file">
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
              <br />
              <br />
            </center>
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
      </div>
    </div>
  );
};
export default ProjectsPage;
