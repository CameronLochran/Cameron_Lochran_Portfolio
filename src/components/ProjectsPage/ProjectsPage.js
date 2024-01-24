import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import blackJackImage from "./Images/blackjack.jpg";
import wiggleWaggyWalksImage from "./Images/Screenshot 2024-01-17 at 16.05.51.png";
import PopupCarousel from "./Popup";

const ProjectsPage = () => {
  const [isDeleting, setIsDeleting] = useState(0);
  const [loopNum, setLoopNum] = useState(false);

  const toRotate = ["Technologies Used:"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum);
      setDelta(3000);
    }
  };
  return (
    <div className="whole-file">
      <div className="my-projects-header" id="my-projects-header">
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
              <b>{text}</b>
            </span>
            <PopupCarousel />
            <br />
            <br />

            {/* <BlackJackCarousel /> */}
          </center>
        </div>
      </div>

      {/* End of blackjack project code */}

      {/* Start of wiggle waggy walks project code */}
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
        </div>
      </div>
      {/* End of wiggle waggy walks project code */}
    </div>
    // </div>
  );
};
export default ProjectsPage;
