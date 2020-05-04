import React from "react";
import "./Intro.scss";

// ANIMATION:
import { TweenLite } from "gsap";
class Intro extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
    this.state = {
      mode: "CLOSE",
    };
  }
  toggle() {
    let newMode;


    if (this.state.mode === "CLOSE") {
      newMode = "OPEN";
    } else {
      newMode = "CLOSE";
    }
    this.setState({
      mode: newMode,
    });
    console.log("Clicked",newMode);
  }
  animateBox() {
    const { mode } = this.state;
    const destX = mode === "CLOSE" ? "100vh" : 0;
    const destY = mode === "OPEN" ? "-100vh" : 0;

    this.myTween = TweenLite.to(this.myElement, 1, {
      y: destX,
      y: destY,
      onComplete: () => this.toggle(),
    });
    
  }
  render() {
    return (
      <div className="introBox">
        <button onClick={this.animateBox.bind(this)} className="animationBTN">
          ANIMATE
        </button>
        <div className="intro" ref={(div) => (this.myElement = div)}>
          <h1>
            Start energy
            <br /> revolution from your community
          </h1>
          <h3>
            Sustainable technologies have never been so affordable.
            <br /> Produce and exchage energy maximizing the power of renewable
            sources
          </h3>
          <button className="contactBtn">Contact us</button>
        </div>
      </div>
    );
  }
}
export default Intro;
