import React from "react";
import "./AnimationTest.scss";

// ANIMATION:
import { TweenLite } from "gsap";

class AnimationTest extends React.Component {
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

  //   componentDidMount() {
  //     // use the node ref to create the animation
  //     this.myTween = TweenLite.to(this.myElement, 1, { x: "90vw" });
  //   }

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
  }

  animateBox() {
    // let destX; // VERSION ES5
    // if (this.state.mode === "CLOSE") {
    //   destX = "90vw";
    // } else {
    //   destX = 0;
    // }
    // const destX = this.state.mode === "CLOSE" ? "90vw" : 0; // VERSION ES5

    const { mode } = this.state;
    const destX = mode === "CLOSE" ? "90vw" : 0;
    const scale = mode === "CLOSE" ? "scale(2)" : "scale(1)";

    this.myTween = TweenLite.to(this.myElement, 1, {
      x: destX,
      transform: scale,
      onComplete: () => this.toggle(),
    });
  }

  //   animateBox() {
  //     if (this.state.mode === "CLOSE") {
  //       this.myTween = TweenLite.to(this.myElement, 1, {
  //         x: "90vw",
  //         onComplete: () => this.toggle(),
  //       });
  //     } else {
  //       this.myTween = TweenLite.to(this.myElement, 1, {
  //         x: 0,
  //         onComplete: () => this.toggle(),
  //       });
  //     }
  //   }

  render() {
    return (
      <div className="AnimationTest">
        <div className="rectangle" ref={(div) => (this.myElement = div)} />
        <button onClick={this.animateBox.bind(this)}>ANIMATE</button>
      </div>
    );
  }
}

export default AnimationTest;
