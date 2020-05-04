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
      isAnimating: null,
    };
  }
  toggle() {
    const { mode } = this.state;
    const newMode = mode === "UP" ? "DOWN" : "UP";
    this.setState({
      mode: newMode,
    });
  }

  animando() {
    let newIsAnimating 
    if(this.state.isAnimating === true) {
     newIsAnimating = false;
    }else{
      newIsAnimating = true;
    }
    this.setState({
      isAnimating: newIsAnimating,
    })
    console.log("Estado", newIsAnimating);
  }

  animateBox() {
    const { mode } = this.state;
    const posUp = mode === "UP" ? "-100vh" : 0;
    // const posLeft = mode === "UP" ? "-2vw" : 0;

    this.myTween = TweenLite.to(this.myElement, 1, {
      y: posUp,
      isAnimating: true,
      // x: posLeft,
      onComplete: () => (this.toggle(), this.animando())
    });
    console.log("modo GROUND", mode);
    
  }

  render() {
    
    return (
      <div
        className="groundBox"
        onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}>

        <img src={ground} alt="ground" className="groundImg" onClick={this.animateBox.bind(this)}
        ref={(div) => (this.myElement = div)}/>
      </div>
    );
  }
}

export default Ground;
