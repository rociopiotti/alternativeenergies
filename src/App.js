import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Sky from "./components/Sky/Sky";
import Buildings from "./components/Buldings/Buildings";
import Mountain from "./components/Mountain/Mountain";
import Bushes from "./components/Bushes/Bushes";
import City from "./components/City/City";
import Rock from "./components/Rock/Rock";
import Ground from "./components/Ground/Ground";
import Forms from "./components/Forms/Forms";
import Description from "./components/Description/Description";

// CONTEXT
import PageManagerContext from "./context/context";

// ANIMATION:
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

// MEDIAQUERY IS MOBILE
import {
  isMobile,
  withOrientationChange,
  isLandscape,
  isPortrait,
} from "react-device-detect";

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
      description,
      card,
      cardDetails,
    } = refs;
    console.log(refs);

    // ------------------------------------------------------- //
    //                   MOBILE ANIMATIONS                     //
    // ------------------------------------------------------- //

    let height;
    let heightForms;

    if (isMobile) {
      height = mode === "DOWN" ? "-140vh" : "0";
      heightForms = mode === "DOWN" ? "5vh" : "100vh";

      // console.log("isMobile", isLandscape, heightMobile);
    } else {
      height = mode === "DOWN" ? " -150vh" : "-35vh";
      heightForms = mode === "DOWN" ? 0 : "100vh";

      // console.log("Desktop", isMobile, heightMobile);
    }

    // -------------------------------------------------------

    const destY = mode === "DOWN" ? "-100vh" : 0;
    const destYGround = mode === "DOWN" ? height : height;
    const destXGround = mode === "DOWN" ? "-10vw" : 0;
    const destYDescription = mode === "DOWN" ? 0 : "100vh";
    const destYForms = mode === "DOWN" ? heightForms : heightForms;

    const destYCards = mode === "DOWN" ? "5vh" : "100vh";
    const destYCardDetails = mode === "DOWN" ? "-10vh" : "100vh";

    const delay = mode === "DOWN" ? 0.1 : 0.2;
    const delay1 = mode === "DOWN" ? 0.9 : 2;

    const tl = new Timeline({
      onComplete: () => toggle(),
    });

    tl.to(introBox.wrapper.current, 1, { y: destY }, delay);
    tl.to(bushes.wrapper.current, 1, { y: destY }, delay);
    tl.to(city.wrapper.current, 1, { y: destY }, delay);
    tl.to(rock.wrapper.current, 1, { y: destY }, delay);
    tl.to(
      ground.wrapper.current,
      delay1,
      { top: destYGround, x: destXGround },
      delay
    );
    tl.to(mountain.wrapper.current, 1, { y: destY }, delay + 0.1);
    tl.to(buildings.wrapper.current, 1, { y: destY }, delay + 0.1);
    tl.to(sky.wrapper.current, 1, { y: destY }, delay * 0.5);
    tl.to(forms.wrapper.current, 1, { top: destYForms }, delay * 0.5);
    tl.to(forms.form1.current, 1, { top: destYForms }, delay * 0.5);
    tl.to(forms.form2.current, 1, { top: destYForms }, delay * 0.5);
    tl.to(forms.form3.current, 1, { top: destYForms }, delay * 0.5);
    // tl.to(
    //   description.wrapper.current,
    //   1,
    //   { top: destYDescription },
    //   delay * 0.5
    // );
    // tl.to(description.title.current, 1, { top: destYDescription }, delay * 0.5);
    // tl.to(
    //   description.description.current,
    //   1,
    //   { top: destYDescription },
    //   delay * 0.5
    // );
    // tl.to(
    //   description.btnPage.current,
    //   1,
    //   { top: destYDescription },
    //   delay * 0.5
    // );
    // tl.to(description.cardWrapper.current, 1, { top: destYCards }, delay * 2);
    // tl.to(card.wrapper.current, 1, { top: destYCards }, delay * 2);
    // tl.to(cardDetails.wrapper.current, 1, { top: destYCardDetails }, delay * 2);
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

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
        {/* <Description /> */}
        <Header />
      </div>
    </PageManagerContext.Provider>
  );
};

export default App;
