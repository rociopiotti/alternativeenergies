import React from "react";
import "./Description.scss";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";
import Icon from "../Icon/Icon";
// ANIMATION:
import { TweenLite } from "gsap";
class Description extends React.Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = null;
    this.state = {
      mode: "UP",
    };
  }
  toggle() {
    const { mode } = this.state;
    const newMode = mode === "UP" ? "DOWN" : "UP";
    this.setState({
      mode: newMode,
    });
  }

  animateBox() {
    const { mode } = this.state;
    const posUp = mode === "UP" ? "-100vh" : 0;
    this.myTween = TweenLite.to(this.myElement, 1, {
      y: posUp,
      onComplete: () => this.toggle(),
    });
    console.log("modo CITY", mode);
  }
  render() {
    return (
      <div
        className="descriptionBox"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}>
        <div className="description">
          <div className="pageChanger">
            <button className="btnLeftPage">
              <Icon type="arrowLeft" />
            </button>
            <div className="lineDivision"></div>
            <button className="btnRightPage">
              <Icon type="arrowRight" />
            </button>
          </div>
          <h2 className="descriptionTitle">What is Poweris?</h2>
          <p className="descriptionText">
            Poweris is a revolutionary platform of ecological energy production
            and managment. It is based on a decentalized system of power
            exchange which is self-monitored an adapted for autonomous communitu
            models. This way communities can exchange the produced energy most
            efficiently and accelerate new models of energy management.
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
  }
}

export default Description;
