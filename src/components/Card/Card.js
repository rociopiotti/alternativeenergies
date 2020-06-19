import React, { useRef, useEffect, useContext, useMemo } from "react";
import "./Card.scss";
import iconBackground1 from "../../img/IconBackground1.svg";

import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const Card = ({ onHover, data }) => {
  const wrapperRef = useRef(null);
  const { references } = useContext(Context);
  const addRef = references;

  useEffect(() => {
    addRef("card", {
      wrapper: wrapperRef,
    });
  }, []);

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

  const handleEnter = (index, event) => {
    addBackgroundColor(event);
    onHover(index);
  };

  const handleOut = (index, event) => {
    removeBackgroundColor(event);
  };

  const createList = useMemo(() => {
    return data.map(({ id, title, text, link, icon }, index) => (
      <div key={index} className='cardBox' ref={wrapperRef}>
        <div
          className='card'
          id={index}
          onMouseEnter={(event) => handleEnter(index, event)}
          onMouseLeave={(event) => handleOut(index, event)}
          onTouchStart={(event) => handleEnter(index, event)}
          onTouchEnd={(event) => handleOut(index, event)}>
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
  }, [data]);

  return createList;
};

export default Card;
