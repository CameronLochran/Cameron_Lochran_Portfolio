import React from "react";
import "./ProjectPage.css";
import blackJackImage from "./Images/blackjack.jpg";
import SkillsPopupBlackjack from "./SkillsPopUpBlackjack";
import wiggleWaggyWalksImage from "./Images/Screenshot 2024-01-17 at 16.05.51.png";

const ProjectsPage = () => {
  return (
    <>
      <div className="my-projects-header" id="my-projects-header">
        <h1>My Projects</h1>
      </div>
      <div className="projects" id="projects">
        <SkillsPopupBlackjack />
        <div id="blackjack-project">
          <h3>BlackJack Project</h3>
          <img
            src={blackJackImage}
            alt="Blackjack project"
            width="250px"
            height="150px"
          />
          <h5>Group Project</h5>
        </div>
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
      </div>
    </>
  );
};
export default ProjectsPage;
