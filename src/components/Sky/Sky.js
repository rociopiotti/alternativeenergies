import React from "react";
import "./Sky.scss";
import sky from "../../img/Sky.svg";
// ANIMATION:
import { TweenLite } from "gsap";
class Sky extends React.Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = null;
    this.state = {
      mode: "UP",
    };
  }

  toggle() {
    let newMode;
    if (this.state.mode === "UP") {
      newMode = "DOWN";
    } else {
      newMode = "UP";
    }
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

    console.log("modo SKY", this.state.mode);
  }
  render() {
    return (
      <img
        src={sky}
        alt="sky"
        className="skyImg"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}
      />
    );
  }
}

export default Sky;
