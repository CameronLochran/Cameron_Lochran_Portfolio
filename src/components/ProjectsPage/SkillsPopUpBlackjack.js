import { Carousel } from "react-responsive-3d-carousel";
import { useNavigate } from "react-router-dom";
import jsLogo from "./Images/javascript-logo.png";
import reactLogo from "./Images/reactLogo.jpeg";
import htmlLogo from "./Images/HTML_logo.png"
import cssLogo from "./Images/CSS_Logo.png"
import expressLogo from "./Images/Express.png"
import mongodbLogo from "./Images/mongoDB_Logo.png"
import nodejsLogo from "./Images/nodeJS_Logo.jpeg"

// function SkillsPopUpBlackjack(props) {
//   return (props.trigger) ? (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
//         { props.children }
//       </div>
//     </div>
//   ) : ""
// }

// export default SkillsPopUpBlackjack

const blackJackCarousel = ({ onImageClick }) => {
  // const navigate = useNavigate();

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
      skillImgTxt: "HTML Logo"
    },
    {
      name: "CSS",
      image: cssLogo,
      skillImgTxt: "CSS Logo"
    },
    {
      name: "Express",
      image: expressLogo,
      skillImgTxt: "Express Logo"
    },
    {
      name: "MongoDB",
      image: mongodbLogo,
      skillImgTxt: "MognoDB Logo"
    },
    {
      name: "Node.JS",
      image: nodejsLogo,
      skillImgTxt: "Node.JS Logo"
    }
  ];

  return (
    <div id="carousel-container">
      <Carousel autoPlay={false} showIndicators={false} showStatus={false}>
        {skills.map(({ name, image, skillImgTxt }) => (
          <div id="carousel-item" 
          >
          </div>
        ))}

        <div id="country-image">
          
        </div>
      </Carousel>

    </div>
  )
};

export default blackJackCarousel