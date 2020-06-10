import React from "react";
import "./Ground.scss";
import ground from "../../img/Ground.svg";
// ANIMATION:
import { TweenLite } from "gsap";
class Ground extends React.Component {
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
    // const posLeft = mode === "UP" ? "-2vw" : 0;

    this.myTween = TweenLite.to(this.myElement, 1, {
      y: posUp,
      isAnimating: true,
      // x: posLeft,
      onComplete: () => this.toggle(),
    });
    console.log("modo GROUND", mode);
  }

  render() {
    return (
      <div
        className="groundBox"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}>
        <img
          src={ground}
          alt="ground"
          className="groundImg"
          onClick={this.animateBox.bind(this)}
          ref={(div) => (this.myElement = div)}
        />
      </div>
    );
  }
}

export default Ground;
