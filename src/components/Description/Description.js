import React, { useRef, useEffect, useContext, useState } from "react";
import "./Description.scss";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const CARDS = [
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

const DETAILS = [
  {
    id: "0",
    title: "Energy Decentralization",
    list: [
      "Independent and digitized",
      "New economic model",
      "Build local ecosystems",
    ],
    link: "url",
  },
  {
    id: "1",
    title: "Eco-Friendly Sustainability",
    list: [
      "Reduce and preserving fossil fuels",
      "Renewable energy sources",
      "Acelerationd decartonization",
    ],
    link: "url",
  },
  {
    id: "2",
    title: "Power Exchange",
    list: [
      "P2P energy exchange",
      "Balance the system",
      "Storage & transmissions",
    ],
    link: "url",
  },
];

const Description = () => {
  const [currentId, setCurrentId] = useState(0);

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
    document.body.style.overflow = "hidden";
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

  const hoverHandler = (selectedId) => {
    setCurrentId(selectedId);
  };

  return (
    <div className='descriptionBox' ref={wrapperRef}>
      <div className='description' ref={wrapperRef}>
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
          <Card data={CARDS} onHover={hoverHandler} />
          <CardDetails data={DETAILS[currentId]} />
        </div>
      </div>
    </div>
  );
};

export default Description;
