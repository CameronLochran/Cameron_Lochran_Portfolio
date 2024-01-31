import { Carousel } from "react-responsive-3d-carousel";
import jsLogo from "./Images/javascript.png";
import reactLogo from "./Images/reactJsLogo.png";
import htmlLogo from "./Images/HTML_logo.png";
import cssLogo from "./Images/CSS_Logo.png";
import expressLogo from "./Images/express.png";
import mongodbLogo from "./Images/mongoDB_Logo.png";
import nodejsLogo from "./Images/node-js.png";

const BlackJackCarousel = ({ onImageClick }) => {
  const skills = [
    {
      name: "JavaScript",
      image: jsLogo,
      skillImgTxt: "JavaScript Logo",
    },
    {
      name: "React",
      image: reactLogo,
      skillImgTxt: "React Logo",
    },
    {
      name: "HTML",
      image: htmlLogo,
      skillImgTxt: "HTML Logo",
    },
    {
      name: "CSS",
      image: cssLogo,
      skillImgTxt: "CSS Logo",
    },
    {
      name: "Express",
      image: expressLogo,
      skillImgTxt: "Express Logo",
    },
    {
      name: "MongoDB",
      image: mongodbLogo,
      skillImgTxt: "MognoDB Logo",
    },
    {
      name: "Node.JS",
      image: nodejsLogo,
      skillImgTxt: "Node.JS Logo",
    },
  ];

  return (
    <div id="carousel-container">
      <Carousel autoPlay={false} showIndicators={false} showStatus={false}>
        {skills.map(({ name, image, skillImgTxt }) => (
          <div id="carousel-image">
            <p>
              <center>
                <br />
              </center>
            </p>
            <center>
              <img
                className="img"
                src={image}
                alt={skillImgTxt}
                width="175px"
                justify-content="center"
              />
            </center>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BlackJackCarousel;
