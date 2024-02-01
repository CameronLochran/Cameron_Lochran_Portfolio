import React from "react";
import Popup from "reactjs-popup";
import GHlogo from "../HomePage/Images/GHlogo.png";
import linkedInLogo from "../HomePage/Images/linkedin.png";
import mailLogo from "../HomePage/Images/email.png";
import "./Popup.css";

const ContactPopup = () => {
  return (
    <div>
      <Popup
        trigger={
          <strong>
            <button className="contact-me"> Ways To Contact Me </button>
          </strong>
        }
      >
        <br />
        <div className="contact-links">
          <a href="https://github.com/">
            <img
              src={GHlogo}
              alt="Github Link"
              width="50px"
              className="github-logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/cameron-lochran-371610234/">
            <img
              src={linkedInLogo}
              alt="Github Link"
              width="50px"
              className="github-logo"
            />
          </a>
          <a
            href="mailto:clochran04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mailLogo}
              alt="Github Link"
              width="50px"
              className="github-logo"
            />
          </a>
        </div>
      </Popup>
    </div>
  );
};

export default ContactPopup;
