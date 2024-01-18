import React from "react";
import "./Images/javascript-logo.png";
import Popup from "react-popup";

const SkillsPopupBlackjack = () => {
  const jsText = "JavaScript";
  // const jsImage = "./Images/javascript-logo.png";
  return (
    <>
      <Popup
        trigger={<button id="Blackjackpopup"> View Technologies </button>}
        position="bottom-left"
      >
        <div>
          <h1> Technologies Used: </h1>
          <ul>
            <li id="jslogo">
              {jsText}
              <img
                src="./Images/javascript-logo.png"
                alt="JavaScript Logo"
              ></img>
            </li>
          </ul>
        </div>
      </Popup>
    </>
  );
};

export default SkillsPopupBlackjack;
