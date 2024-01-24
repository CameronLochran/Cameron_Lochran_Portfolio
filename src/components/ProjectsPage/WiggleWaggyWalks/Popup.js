import React from "react";
import Popup from "reactjs-popup";
import WiggleWaggyWalksCarousel from "./WiggleWaggyWalksCarousel";

const WWWPopupCarousel = () => {
  return (
    <Popup
      trigger={
        <button className="view-technologies"> View Technologies </button>
      }
    >
      <div>
        <WiggleWaggyWalksCarousel />
      </div>
    </Popup>
  );
};

export default WWWPopupCarousel;
