import React from "react";
import "./Description.scss";

const Description = (props) => {
  return (
    <div className="descriptionBox">
      <div className="description">
        <h2 className="descriptionTitle">What is Poweris?</h2>
        <p className="descriptionText">
          Poweris is a revolutionary platform of ecological energy production
          and managment. It is based on a decentalized system of power exchange
          which is self-monitored an adapted for autonomous communitu models.
          This way communities can exchange the produced energy most efficiently
          and accelerate new models of energy management.
        </p>
      </div>
    </div>
  );
};

export default Description;
