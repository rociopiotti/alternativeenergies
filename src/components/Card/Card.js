import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="cardBox">
      <div className="card">
        <div className="cardImg">cardImg</div>
        <div className="cardHeader">
          <h4>Energy Decentralization</h4>
        </div>
        <div className="cardBody">
          <p>
            An innovative approach to energy production, storage, and
            distribution adapted for each community needs.
          </p>
          <a href="#">
            Learn more <i class="fas fa-long-arrow-alt-right">icon</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
