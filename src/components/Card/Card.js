import React from "react";
import "./Card.scss";
import iconBackground1 from "../../img/IconBackground1.svg";
import iconRed from "../../img/red.png";

const Card = (props) => {
  return (
    <div className="cardBox">
      <div className="card">
        <div className="cardImg">
          <img
            src={iconBackground1}
            alt="icon background"
            className="iconBackground"
          />
          <img src={iconRed} alt="icon app" className="iconImgApp" />
        </div>
        <div className="cardHeader">
          <h4>Energy Decentralization</h4>
        </div>
        <div className="cardBody">
          <p>
            An innovative approach to energy production, storage, and
            distribution adapted for each community needs.
          </p>
          <a href="#">
            Learn more <i>icon</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
