import React, { useRef, useEffect, useContext, useMemo } from "react";
import "./Card.scss";
import iconBackground1 from "../../img/IconBackground1.svg";
import iconRed from "../../img/red.png";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const database = [
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

  const addBackgroundColor = (event) => {
    const element = event.currentTarget;
    element.classList.remove("transparent");
    element.classList.add("green");
  };

  const removeBackgroundColor = (event) => {
    const element = event.currentTarget;
    element.classList.remove("green");
    element.classList.add("transparent");
  };

  const createList = useMemo(() => {
    return database.map(({ id, title, text, link, icon }, index) => (
      <div key={index} className='cardBox' ref={wrapperRef}>
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
            <img src={icon} alt='icon app' className='iconImgApp' />
          </div>
          <div className='cardHeader'>
            <h4>{title}</h4>
          </div>
          <div className='cardBody'>
            <p>{text}</p>
            <a href={link}>
              Learn more <Icon type='arrowRight' />
            </a>
          </div>
        </div>
      </div>
    ));
  }, [database]);

  useEffect(() => {
    addRef("card", {
      wrapper: wrapperRef,
    });
  }, []);

  return createList;
};

export default Card;
