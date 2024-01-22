import React from "react";
import "./ProjectPage.css";
import blackJackImage from "./Images/blackjack.jpg";
import wiggleWaggyWalksImage from "./Images/Screenshot 2024-01-17 at 16.05.51.png";
import BlackJackCarousel from "./SkillsCarouselBlackjack"



const ProjectsPage = () => {
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
          
          <div id="carousel-blackjack">
            <BlackJackCarousel/>
          </div>
         
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
