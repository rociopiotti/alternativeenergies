import React from "react";
import "./Description.scss";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";


const Description = (props) => {
  return (
    <div className="descriptionBox">
      <div className="description">
        <div class="pageChanger">
          <button class="btnLeftPage">
            <i class="fas fa-long-arrow-alt-left">icon</i>
          </button>
          <div class="lineDivision"></div>
          <button class="btnRightPage">
            <i class="fas fa-long-arrow-alt-right">icon</i>
          </button>
        </div>
        <h2 className="descriptionTitle">What is Poweris?</h2>
        <p className="descriptionText">
          Poweris is a revolutionary platform of ecological energy production
          and managment. It is based on a decentalized system of power exchange
          which is self-monitored an adapted for autonomous communitu models.
          This way communities can exchange the produced energy most efficiently
          and accelerate new models of energy management.
        </p>
        <div class="appsListBox">
          <Card />
          <Card />
          <Card />
          <CardDetails />
          
        </div>
      </div>
    </div>
  );
};

export default Description;
