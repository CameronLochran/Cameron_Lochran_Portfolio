import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import blackJackImage from "./Images/blackjack.jpg";
import wiggleWaggyWalksImage from "./Images/Screenshot 2024-01-17 at 16.05.51.png";
import Popup from "react-popup";
import blackJackCarousel from "./SkillsPopUpBlackjack"
import { Carousel } from "react-responsive-3d-carousel"
import { useNavigate } from "react-router-dom"
import jsLogo from "./Images/javascript-logo.png"
import reactLogo from "./Images/reactLogo.jpeg"


const ProjectsPage = () => {

  // const [buttonPopup, setButtonPopup] = useState(false)
  // const [timedPopup, setTimedPopup] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 3000);
  // }, [])
    
  return (
    <>
      <div></div>

      <div className="my-projects-header" id="my-projects-header">
        <h1>My Projects</h1>
      </div>

      <div className="projects" id="projects">
        {/* start of blackjack project code */}
        <div id="blackjack-project">
          <h3>BlackJack Project</h3>
          <img
            src={blackJackImage}
            alt="Blackjack project"
            width="250px"
            height="150px"
          />
          <h5>Group Project</h5>
          

          {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Technologies:</h3>
          </Popup>

          <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h3>Technologies:</h3>
          </Popup> */}
        </div>

        {/* End of blackjack project code */}

        {/* Start of wiggle waggy walks project code */}
        <div id="wiggle waggy walks">
          <br />
          <br />

          <h3>Wiggle Waggy Walks Project</h3>
          <div>
            <img
              src={wiggleWaggyWalksImage}
              alt="Wiggle Waggy Walks"
              width="250px"
              height="150px"
            />
          </div>
        </div>
        {/* End of wiggle waggy walks project code */}
      </div>
    </>
  );
};
export default ProjectsPage;
