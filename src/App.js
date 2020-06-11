import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
// import Description from "./components/Description/Description";
// import AnimationTest from "./components/AnimationTest/AnimationTest";

import Intro from "./components/Intro/Intro";
import Sky from "./components/Sky/Sky";
import Buildings from "./components/Buldings/Buildings";
import Mountain from "./components/Mountain/Mountain";
import Bushes from "./components/Bushes/Bushes";
import City from "./components/City/City";
import Rock from "./components/Rock/Rock";
import Ground from "./components/Ground/Ground";
import Forms from "./components/Forms/Forms";

// CONTEXT
import PageManagerContext from "./context/context";

// ANIMATION:
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

const App = () => {
  const [refs, setRefs] = useState({});
  const [mode, setMode] = useState("DOWN");

  const addRef = useCallback((id, value) => {
    refs[id] = value;

    setRefs({ ...refs });
  });

  const startsAnimation = () => {
    const {
      introBox,
      sky,
      buildings,
      mountain,
      bushes,
      city,
      rock,
      ground,
      forms,
    } = refs;
    console.log(refs);

    const destY = mode === "DOWN" ? "-100vh" : 0;
    const destYGround = mode === "DOWN" ? "-140vh" : 0;
    const destXGround = mode === "DOWN" ? "-10vw" : 0;
    const destYForms = mode === "DOWN" ? 0 : "100vh";

    const delay = mode === "DOWN" ? 0.1 : 0.2;

    const tl = new Timeline({
      onComplete: () => toggle(),
    });

    tl.to(introBox.wrapper.current, 1, { y: destY }, delay);
    tl.to(bushes.wrapper.current, 1, { y: destY }, delay);
    tl.to(city.wrapper.current, 1, { y: destY }, delay);
    tl.to(rock.wrapper.current, 1, { y: destY }, delay);
    tl.to(ground.wrapper.current, 1, { y: destYGround, x: destXGround }, delay);
    tl.to(mountain.wrapper.current, 1, { y: destY }, delay + 0.1);
    tl.to(buildings.wrapper.current, 1, { y: destY }, delay + 0.1);
    tl.to(sky.wrapper.current, 1, { y: destY }, delay * 0.5);
    tl.to(forms.wrapper.current, 1, { top: destYForms }, delay * 0.5);
    tl.to(forms.form1.current, 1, { top: destYForms }, delay * 0.5);
    tl.to(forms.form2.current, 1, { top: destYForms }, delay * 0.5);
    tl.to(forms.form3.current, 1, { top: destYForms }, delay * 0.5);
  };

  const toggle = () => {
    let newMode = mode === "DOWN" ? "UP" : "DOWN";
    setMode(newMode);
  };

  const openingAnimation = (refs) => {
    const introBox = refs;
    console.log(refs);
    console.log(introBox.wrapper);

    // const tl = new Timeline({});
    // tl.to(introBox.wrapper.current, 1, { x: 50 });
  };

  useEffect(() => {}, []);

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
        <Sky />
        <Buildings />
        <Mountain />
        <Bushes />
        <City />
        <Rock />
        <Ground />
        <Intro />
        <Forms />
        <Header />
        {/* <Description /> */}
      </div>
    </PageManagerContext.Provider>
  );
};

export default App;
