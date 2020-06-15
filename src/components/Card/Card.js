import React, { useRef, useEffect, useContext, useState } from "react";
import "./Card.scss";
import iconBackground1 from "../../img/IconBackground1.svg";
import iconRed from "../../img/red.png";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const dababase = [
  {
    id: "0",
    title: "Energy Decentralization",
    text:
      "An innovative approach to energy production, storage, and distribution adapted for each community needs",
    link: "url",
    icon: "/img/red.png",
  },
  {
    id: "1",
    title: "Eco-Friendly Sustainability",
    text:
      " Maximized efficiency of fossil fuels and renewable energy sources for the minimal impact on the enviroment.",
    link: "url",
    icon: "/img/bulb.png",
  },
  {
    id: "2",
    title: "Power Exchange",
    text:
      "Balanced schemes connecting energy producers and consumers to reach effective power exchange and make smart contracts.",
    link: "url",
    icon: "/img/ray.png",
  },
];

const Card = (props) => {
  const wrapperRef = useRef(null);
  const { references } = useContext(Context);
  const addRef = references;

  const [isHovered, setIsHovered] = useState();

  const toogleHover = (value) => {
    setIsHovered(isHovered ? true : false);
  };

  const addBackgroundColor = (event) => {
    const element = event.currentTarget;
    element.classList.remove("blue");

    element.classList.add("green");
  };

  const removeBackgroundColor = (event) => {
    const element = event.currentTarget;
    element.classList.remove("green");
    element.classList.add("blue");
  };

  useEffect(() => {
    addRef("card", {
      wrapper: wrapperRef,
    });
  }, []);

  return (
    <div className='cardBox' ref={wrapperRef}>
      <div
        className='card'
        onMouseEnter={addBackgroundColor}
        onMouseLeave={removeBackgroundColor}>
        <div className='cardImg'>
          <img
            src={iconBackground1}
            alt='icon background'
            className='iconBackground'
          />
          <img src={iconRed} alt='icon app' className='iconImgApp' />
        </div>
        <div className='cardHeader'>
          <h4>Energy Decentralization</h4>
        </div>
        <div className='cardBody'>
          <p>
            An innovative approach to energy production, storage, and
            distribution adapted for each community needs.
          </p>
          <a href='#'>
            Learn more <Icon type='arrowRight' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
