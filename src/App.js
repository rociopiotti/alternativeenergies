import React from "react";
import "./App.scss";
// import Sky from "./components/Sky/Sky";
// import Buildings from "./components/Buldings/Buildings";
// import Mountain from "./components/Mountain/Mountain";
// import Bushes from "./components/Bushes/Bushes";
// import City from "./components/City/City";
// import Rock from "./components/Rock/Rock";
// import Ground from "./components/Ground/Ground";
// import Header from "./components/Header/Header";
// import Forms from "./components/Forms/Forms";
// import Description from "./components/Description/Description";
// import AnimationTest from "./components/AnimationTest/AnimationTest";

import Intro from "./components/Intro/Intro";

// CONTEXT
import PageManagerContext from "./context/context";

// ANIMATION:
import { gsap } from "gsap";

class App extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.animationBox = null;
    // reference to the animation
    this.myTween = null;
    this.handleRefs = this.handleRefs.bind(this);

    this.openingAnimation = this.openingAnimation.bind(this);
    this.state = {
      refs: {},
      mode: "CLOSE",
      isAnimating: false,
    };
  }
  toggle() {
    let newMode;
    let newIsAnimating;

    if (this.state.mode === "CLOSE") {
      newMode = "OPEN";
      newIsAnimating = true;
    } else {
      newMode = "CLOSE";
      newIsAnimating = false;
    }
    this.setState({
      mode: newMode,
      isAnimating: newIsAnimating,
    });
    console.log("Clicked", newMode);
    console.log("isAnimating", newIsAnimating);
  }

  startsAnimation() {
    const { mode } = this.state;
    const destY = mode === "CLOSE" ? "-100vh" : 0;
    var tl = gsap.timeline({
      onComplete: () => this.toggle(),
    });
    tl.to(this.state.refs.backgroundRef, 1, {
      y: destY,
    });
  }

  openingAnimation() {
    const { mode } = this.state;
    var tl = gsap.timeline({
    });
    tl.to(this.state.refs.backgroundRef, 1, {
      x: 50,
    });
  }

  handleRefs(refs) {
    this.setState({
      ...this.state,
      refs: { ...this.state.refs, ...refs },
    });
  }

  render() {
    this.openingAnimation();
    return (
      <PageManagerContext.Provider
        value={{
          handleRefs: this.handleRefs,
          openingAnimation: this.openingAnimation,
        }}>
        <div className='App'>
          <button
            onClick={() => this.startsAnimation()}
            className='animationBTN'>
            ANIMATE
          </button>
          {/* <Sky /> */}
          {/* <Buildings /> */}
          {/* <Mountain /> */}
          {/* <Bushes /> */}
          {/* <City /> */}
          {/* <Rock /> */}
          {/* <Ground /> */}
          {/* <Header /> */}
          <Intro />
          {/* <Forms /> */}
          {/* <Description /> */}
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
