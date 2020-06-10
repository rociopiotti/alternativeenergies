import React from "react";
import "./Description.scss";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";
import Icon from "../Icon/Icon";

// ANIMATION:
import { TweenLite } from "gsap";
import { Timeline } from "gsap/gsap-core";
let isAnimating = false;
class Description extends React.Component {
  constructor(props) {
    super(props);

    this.title = null;
    this.descriptionText = null;
    this.btnPage = null;
    this.card1 = null;

    this.state = {
      mode: "UP",
      isAnimating: false,
    };
  }

  toggle() {
    const { mode, isAnimating } = this.state;
    const newMode = mode === "UP" ? "DOWN" : "UP";
    this.setState({
      mode: newMode,
      isAnimating: false,
    });
  }

  animateBox() {
    if (this.state.isAnimating) {
      return;
    }

    this.setState({
      isAnimating: true,
    });

    const { mode } = this.state;
    
    const posTitle = mode === "UP" ? "-85vh" : 0;
    const posDescription = mode === "UP" ? "-70vh" : 0;
    const posBtnPage = mode === "UP" ? "-95vh" : 0;
    const posCard1 = mode === "UP" ? "-50vh" : 0;

    const delayTitle = mode === "UP" ? 0 : 0.3;
    const delayDescription = mode === "UP" ? 0.1 : 0.1;
    const delayBtnPage = mode === "UP" ? 0.2 : 0.2;
    const delayCard1 = mode === "UP" ? 0.3 : 0;
    
    const tl = new Timeline();
    
    tl.to(this.title, { y: posTitle, x: 0 }, delayTitle);
    tl.to(this.descriptionText, { y: posDescription, x: 0 }, delayDescription);
    tl.to(this.btnPage, { y: posBtnPage, x: 0 }, delayBtnPage);
    tl.to(this.card1, { y: posCard1, x: 0 }, delayCard1);

    tl.eventCallback("onComplete", () => {
      this.toggle();
    });
  }

  render() {
    console.log("--------->isAnimating: ", this.state.__isAnimating);

    return (
      <div className="descriptionBox" onClick={this.animateBox.bind(this)}>
        <div className="description">
          <div ref={(div) => (this.btnPage = div)} className="pageChanger">
            <button className="btnLeftPage">
              <Icon type="arrowLeft" />
            </button>
            <div className="lineDivision"></div>
            <button className="btnRightPage">
              <Icon type="arrowRight" />
            </button>
          </div>
          <h2 ref={(div) => (this.title = div)} className="descriptionTitle">
            What is Poweris?
          </h2>
          <p
            ref={(div) => (this.descriptionText = div)}
            className="descriptionText">
            Poweris is a revolutionary platform of ecological energy production
            and managment. It is based on a decentalized system of power
            exchange which is self-monitored an adapted for autonomous communitu
            models. This way communities can exchange the produced energy most
            efficiently and accelerate new models of energy management.
          </p>
          <div className="appsListBox" ref={(div) => (this.card1 = div)}>
            <Card />
            <Card />
            <Card />
            <CardDetails />
            {/* TO DO: CAMBIA  CARDDETAIL SEGUN HOVER CARD */}
            {/* <CardDetails /> <CardDetails /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
