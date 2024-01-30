import React, { useState, useEffect } from "react";
import MamaMiaCameron from "./Images/Mama_mia_cameron.png";
import ThumbsUpCameron from "./Images/Thumbs_Up_Cameron.png";
import GHlogo from "./Images/GHlogo.png";
import "./HomePage.css";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const toRotate = ["Cameron Lochran", "Junior Software Engineer"];
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
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <>
      <div className="home-page-container">
        <head>
          <title>Cameron Lochran</title>
        </head>

        <center>
          <div className="head">
            <header className="home-page-header">
              <a href="https://github.com/">
                <img
                  src={GHlogo}
                  alt="Github Link"
                  width="75px"
                  className="github-logo"
                />
              </a>
            </header>
          </div>
          <div className="body">
            <h1>Welcome!</h1>
            <h2>What would you like to see first of me?</h2>
            <br />
            <br />
            <h3>
              <a href="/projects" className="links-to-other-pages">Projects, </a>
              <br />
            </h3>
            <h3>
              <a href="/aboutme" className="links-to-other-pages">About Me </a>
              <br />
            </h3>
            <h3>&</h3>
            <h3>
              <a href="/contactpage" className="links-to-other-pages">Ways To Contact Me</a>
              <br />
            </h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="rotating-text">
              <strong>{text}</strong>
              <br />
              <br />
              <div className="images-of-ios-cameron">
                <img
                  src={MamaMiaCameron}
                  alt="Cameron being like mama mia"
                  width="250px"
                  height="auto"
                  className="mama-mia-cameron"
                />
                <img
                  src={ThumbsUpCameron}
                  alt="Cameron's got his thumb up"
                  width="250px"
                  height="auto"
                  className="thumbs-up"
                />
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Home;
