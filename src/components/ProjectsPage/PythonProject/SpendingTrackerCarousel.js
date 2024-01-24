import React from 'react'
import pythonLogo from "./Images/python.png"
import flaskLogo from "./Images/flask.png"
import postgreSQLlogo from "./Images/postgresql.png"
import { Carousel } from "react-responsive-3d-carousel";

const SpendingTrackerCarousel = () => {

    const skills = [
        {
            name: "Python",
            image: pythonLogo,
            skillImgTxt: "Python Logo"
        },
        {
            name: "Flask",
            image: flaskLogo,
            skillImgTxt: "Flask Logo"
        },
        {
            name: "PostgreSQL",
            image: postgreSQLlogo,
            skillImgTxt: "PostgreSQL Logo"
        },
    ]
  return (
    <div id="carousel-container">
      <Carousel autoPlay={false} showIndicators={false} showStatus={false}>
        {skills.map(({ name, image, skillImgTxt }) => (
          <div id="carousel-image">
            <p>
              <center>
                <br />
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
}

export default SpendingTrackerCarousel
