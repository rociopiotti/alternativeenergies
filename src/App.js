import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { Timeline } from "gsap/gsap-core";

const App = () => {
  const [refs, setRefs] = useState({});
  const [mode, setMode] = useState("DOWN");

  const addRef = useCallback((id, value) => {
    setRefs({ ...refs, [id]: value });
  });

  const openingAnimation = () => {
    const { introBox } = refs;
    // console.log(refs);
    console.log(introBox);
    // const tl = new Timeline({});
    // tl.to(introBox.wrapper.current, 1, { x: 50 });
  };

  const startsAnimation = () => {
    const { introBox } = refs;
    // console.log(refs);
    // console.log(introBox.wrapper);

    const destY = mode === "DOWN" ? "-100vh" : 0;

    const tl = new Timeline({
      onComplete: () => toggle(),
    });
    tl.to(introBox.wrapper.current, 1, { y: destY });
  };

  const toggle = () => {
    let newMode = mode === "DOWN" ? "UP" : "DOWN";
    setMode(newMode);
  };
  
  openingAnimation()
  return (
    <PageManagerContext.Provider
      value={{
        references: addRef,
        openingAnimation: openingAnimation,
      }}>
      <div className='App'>
        <button onClick={startsAnimation} className='animationBTN'>
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
};

export default App;
