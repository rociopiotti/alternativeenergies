import React, { useRef, useEffect, useContext } from "react";
import "./Description.scss";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";
const Description = () => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const btnPageRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("description", {
      wrapper: wrapperRef,
      title: titleRef,
      description: descriptionRef,
      btnPage: btnPageRef,
      cardWrapper: cardWrapperRef,
      card1: cardRef1,
      card2: cardRef2,
      card3: cardRef3,
    });
  }, []);
  return (
    <div className='descriptionBox' ref={wrapperRef}>
      <div className='description'>
        <div ref={btnPageRef} className='pageChanger'>
          <button className='btnLeftPage'>
            <Icon type='arrowLeft' />
          </button>
          <div className='lineDivision'></div>
          <button className='btnRightPage'>
            <Icon type='arrowRight' />
          </button>
        </div>
        <h2 ref={titleRef} className='descriptionTitle'>
          What is Poweris?
        </h2>
        <p ref={descriptionRef} className='descriptionText'>
          Poweris is a revolutionary platform of ecological energy production
          and managment. It is based on a decentalized system of power exchange
          which is self-monitored an adapted for autonomous communitu models.
          This way communities can exchange the produced energy most efficiently
          and accelerate new models of energy management.
        </p>
        <div className='appsListBox' ref={cardWrapperRef}>
          <Card  />
          <Card  />
          <Card  />
          <CardDetails/>
        </div>
      </div>
    </div>
  );
};

export default Description;
