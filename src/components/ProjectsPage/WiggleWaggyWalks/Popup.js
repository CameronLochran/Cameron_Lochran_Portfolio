import React from "react";
import Popup from "reactjs-popup";
import WiggleWaggyWalksCarousel from "./WiggleWaggyWalksCarousel";

const WWWPopupCarousel = () => {
  return (
    <Popup
      trigger={
        <strong><button className="view-technologies"> View Technologies </button></strong>
      }
    >
      <div>
        <WiggleWaggyWalksCarousel />
      </div>
    </Popup>
  );
};

export default WWWPopupCarousel;
