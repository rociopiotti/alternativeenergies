import React from "react";
import "./Description.scss";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";


const Description = (props) => {
  return (
    <div className="descriptionBox">
      <div className="description">
        <div className="pageChanger">
          <button className="btnLeftPage">
            <i>icon</i>
          </button>
          <div className="lineDivision"></div>
          <button className="btnRightPage">
            <i>icon</i>
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
        <div className="appsListBox">
          <Card />
          <Card />
          <Card />
          <CardDetails />
          {/* TO DO: CAMBIA  CARDDETAIL SEGUN HOVER CARD */}
          {/* <CardDetails />
          <CardDetails /> */}

        </div>
      </div>
    </div>
  );
};

export default Description;
