import React from "react";
import "./Rock.scss";
import rock from "../../img/Rock.svg";

// ANIMATION:
import { TweenLite } from "gsap";

class Rocks extends React.Component {
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
    console.log("modo ROCK", mode);
  }
  render() {
    return (
      <img
        src={rock}
        alt="rock"
        className="rockImg"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}
      />
    );
  }
}

export default Rocks;
