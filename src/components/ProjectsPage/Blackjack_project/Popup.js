import React from "react";
import Popup from "reactjs-popup";
import BlackJackCarousel from "./SkillsCarouselBlackjack";

const PopupCarousel = () => {
  return (
    <Popup
      trigger={
        <strong><button className="view-technologies"> View Technologies </button></strong>
      }
    >
      <div>
        <BlackJackCarousel />
      </div>
    </Popup>
  );
};

export default PopupCarousel;
