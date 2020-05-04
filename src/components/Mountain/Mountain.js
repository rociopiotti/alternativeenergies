import React from "react";
import "./Mountain.scss";
import mountain from "../../img/Mountain.svg";
// ANIMATION:
import { TweenLite } from "gsap";
class Mountain extends React.Component {
  constructor(props) {
    super(props);
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
    console.log("Modo Mountain", mode);
  }
  render() {
    return (
      <img
        src={mountain}
        alt="Mountain"
        className="mountainImg"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}
      />
    );
  }
}

export default Mountain;
