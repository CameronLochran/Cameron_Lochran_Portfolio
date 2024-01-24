import React from 'react'
import Popup from "reactjs-popup"
import SpendingTrackerCarousel from './SpendingTrackerCarousel';

const STPopup = () => {
  return (
    <Popup
      trigger={
        <button className="view-technologies"> View Technologies </button>
      }
    >
      <div>
        <SpendingTrackerCarousel/>
      </div>
    </Popup>
  );
}

export default STPopup
