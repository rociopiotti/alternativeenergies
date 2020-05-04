import React from "react";
import "./Bushes.scss";
import bushes from "../../img/Bushes.svg";
// ANIMATION:
import { TweenLite } from "gsap";

class Bushes extends React.Component {
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
    console.log("modo Bushes", mode);
  }
  render() {
    return (
      <img
        src={bushes}
        alt="buildings"
        className="bushesImg"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}
      />
    );
  }
}

export default Bushes;
