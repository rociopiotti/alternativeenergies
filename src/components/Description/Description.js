import React from "react";
import "./Description.scss";

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
          <div className="card1">
            <div className="cardImg">cardImg</div>
            <div className="cardHeader">
              <h4>Energy Decentralization</h4>
            </div>
            <div className="cardBody">
              <p>
                An innovative approach to energy production, storage, and
                distribution adapted for each community needs.
                <br></br>
              </p>
              <a href="#">
                Learn more <i class="fas fa-long-arrow-alt-right">icon</i>{" "}
              </a>
            </div>
          </div>
          <div className="card2">
            <div className="cardImg">cardImg</div>
            <div className="cardHeader">
              <h4>Eco-Friendly Sustainability</h4>
            </div>
            <div className="cardBody">
              <p>
                Maximized efficiency of fossil fuels and renewable energy
                sources for the minimal impact on the enviroment.
                <br></br>
              </p>
              <a href="#">
                Learn more <i class="fas fa-long-arrow-alt-right">icon</i>{" "}
              </a>
            </div>
          </div>
          <div className="card3">
            <div className="cardImg">cardImg</div>
            <div className="cardHeader">
              <h4>Power Exchange </h4>
            </div>
            <div className="cardBody">
              <p>
                Balanced schemes connecting energy producers and consumers to
                reach effective power exchange and make smart contracts.
              </p>
              <a href="#">
                Learn more <i class="fas fa-long-arrow-alt-right">icon</i>{" "}
              </a>
            </div>
          </div>
          <div className="card4">
            <div className="cardHeader">
              <h4>Platform Keypoints</h4>
            </div>
            <div className="cardBody">
              <ul>
                <li>P2P energy exchange</li>
                <li>Balance the system</li>
                <li>Storage & transmissions</li>
              </ul>
              <a href="#">
                Whatch video <i class="fas fa-long-arrow-alt-right">icon</i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
