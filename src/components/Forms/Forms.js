import React from "react";
import "./Forms.scss";
import form1 from "../../img/FloatingForm1.svg";
import form2 from "../../img/FloatingForm2.svg";
import form3 from "../../img/FloatingForm3.svg";
// ANIMATION:
import { TweenLite } from "gsap";
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.form1 = null;
    this.form1Tween = null;
    this.form2 = null;
    this.form2Tween = null;
    this.form3 = null;
    this.form3Tween = null;

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
    const posUp1 = mode === "UP" ? "+=50vw" : "0vh";
    const posUp2 = mode === "UP" ? "-=95vh" : 0;
    const posUp3 = mode === "UP" ? "-=50vw" : 0;
    const delay = 1;

    this.form1Tween = TweenLite.to(this.form1, delay, {
      x: posUp1,
      y: "8vh",
      
    });
    this.form2Tween = TweenLite.to(this.form2, delay + 0.2, {
      y: posUp2,
     
    });
    this.form3Tween = TweenLite.to(this.form3, delay + 0.2, {
      x: posUp3,
      y: 0,
      onComplete: () => this.toggle(),
    });

    console.log("Click form 1", mode);
  }

  render() {
    return (
      <div onClick={this.animateBox.bind(this)} className="formsBox">
        <div ref={(div) => (this.form1 = div)} className="form1">
          <img src={form1} alt="background form" className="form1Img" />
        </div>
        <div ref={(div) => (this.form2 = div)} className="form2">
          <img src={form2} alt="background form" className="form2Img" />
        </div>
        <div ref={(div) => (this.form3 = div)} className="form3">
          <img src={form3} alt="background form" className="form3Img" />
        </div>
      </div>
    );
  }
}

export default Forms;
