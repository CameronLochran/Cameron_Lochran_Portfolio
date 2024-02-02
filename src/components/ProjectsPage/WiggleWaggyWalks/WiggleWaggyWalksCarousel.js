import React from "react";
import { Carousel } from "react-responsive-3d-carousel";
import javaImage from "./Images/java.png";
import reactLogo from "../Blackjack_project/Images/reactJsLogo.png";
import springLogo from "./Images/spring-boot.png";
import firebaseLogo from "./Images/firebase.png";
import authenticationLogo from "./Images/AuthLogo.png";
import imageUploadLogo from "./Images/ImageUploadIcon.png";
import realTimeChatLogo from "./Images/Real-timeChatLogo.webp"

const WiggleWaggyWalksCarousel = () => {
  const skills = [
    {
      name: "Java",
      image: javaImage,
      skillImgTxt: "Java Logo",
    },
    {
      name: "Spring",
      image: springLogo,
      skillImgTxt: "Spring Logo",
    },
    {
      name: "React",
      image: reactLogo,
      skillImgTxt: "React Logo",
    },
    {
      name: "Firebase",
      image: firebaseLogo,
      skillImgTxt: "Firebase Logo",
    },
    {
      name: "Authentication",
      image: authenticationLogo,
      skillImgTxt: "Authentication",
    },
    {
      name: "Image Upload",
      image: imageUploadLogo,
      skillImgTxt: "Image Upload",
    },
    {
      name: "Real-time Chat",
      image: realTimeChatLogo,
      skillImgTxt: "Real-time Chat",
    },
  ];
  return (
    <div id="carousel-container">
      <Carousel autoPlay={false} showIndicators={false} showStatus={false}>
        {skills.map(({ name, image, skillImgTxt }) => (
          <div id="carousel-image">
            <p>
              <center>
                <br/>
                <strong>{name}</strong>
              </center>
            </p>
            <center>
              <img
                className="img"
                src={image}
                alt={skillImgTxt}
                width="175px"
                color="navy"
                justify-content="center"
              />
            </center>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WiggleWaggyWalksCarousel;
