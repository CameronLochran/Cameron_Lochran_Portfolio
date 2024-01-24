import React from "react";
import "./ProjectPage.css";
import blackJackImage from "./Blackjack_project/Images/blackjack.jpg";
import wiggleWaggyWalksImage from "./WiggleWaggyWalks/Images/wigglewaggywalks.png";
import PopupCarousel from "./Popup";
import WWWPopupCarousel from "./WiggleWaggyWalks/Popup";

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
              {/* <b>{text}</b> */}
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
          <br/>
          <h3>Group Project</h3>
          <div id="carousel-blackjack">
          <center>
            <span className="wrap">
          <br/>
          <br/>
          <WWWPopupCarousel/>
          </span>
          </center>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage;