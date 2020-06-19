import React, { useState, useEffect, useCallback, useRef } from "react";
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
import { isMobileOnly, isTablet, isBrowser } from "react-device-detect";

//NO SCROLL
import { disableBodyScroll } from "body-scroll-lock";

const App = () => {
  const [refs, setRefs] = useState({});
  const [mode, setMode] = useState("DOWN");
  const [isAnimating, setisAnimating] = useState(false);

  const targetElement = useRef();

  const addRef = useCallback((id, value) => {
    refs[id] = value;

    setRefs({ ...refs });
  });

  const startsAnimation = (event) => {
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

    // ------------------------------------------------------- //
    //                   MEDIAQUERIES ANIMATIONS               //
    // ------------------------------------------------------- //

    let destYGround;
    let destYForms;
    let destYBtnPage;
    let destYCards;
    let destYCardDetails;
    let destYDescription;

    const widthScreen = window.innerWidth;
    const heightScreen = window.innerHeight;

    if (isTablet) {
      if (widthScreen > heightScreen) {
        // LANDSCAPE //
        destYGround = mode === "DOWN" ? " -100vh" : "35vh";
        destYForms = mode === "DOWN" ? "3vh" : "100vh";
        destYDescription = mode === "DOWN" ? "-2vh" : "100vh";
        destYBtnPage = mode === "DOWN" ? "5vh" : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
        destYCardDetails = mode === "DOWN" ? "-3vh" : "100vh";
      } else {
        // PORTRAIT //
        destYGround = mode === "DOWN" ? " -100vh" : "20vh";
        destYForms = mode === "DOWN" ? 0 : "100vh";
        destYCardDetails = mode === "DOWN" ? "7vh" : "100vh";
        destYBtnPage = mode === "DOWN" ? "20vh" : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
        destYDescription = mode === "DOWN" ? "-3vh" : "100vh";
      }
    }

    if (isMobileOnly) {
      // LANDSCAPE //
      if (widthScreen > heightScreen) {
        destYGround = mode === "DOWN" ? "-100vh" : "-35vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
      } else {
        // PORTRAIT //
        destYGround = mode === "DOWN" ? "-100vh" : "17vh";
        destYCards = mode === "DOWN" ? "-10vh" : "100vh";
      }
      destYForms = mode === "DOWN" ? "10vh" : "100vh";
      destYBtnPage = mode === "DOWN" ? "15vh" : "100vh";
      destYCardDetails = mode === "DOWN" ? "-3vh" : "100vh";
      destYDescription = mode === "DOWN" ? 0 : "100vh";
    }
    if (isBrowser) {
      if (widthScreen === 1366) {
        destYGround = mode === "DOWN" ? " -100vh" : "25vh";
        destYForms = mode === "DOWN" ? 0 : "100vh";
        destYBtnPage = mode === "DOWN" ? 0 : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
        destYDescription = mode === "DOWN" ? 0 : "100vh";
        destYCardDetails = mode === "DOWN" ? "-3vh" : "100vh";
      } else {
        destYGround = mode === "DOWN" ? " -100vh" : "20vh";
        destYForms = mode === "DOWN" ? 0 : "100vh";
        destYBtnPage = mode === "DOWN" ? 0 : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
        destYDescription = mode === "DOWN" ? 0 : "100vh";

        destYCardDetails = mode === "DOWN" ? "-3vh" : "100vh";
      }
    }

    const destY = mode === "DOWN" ? "-100vh" : 0;
    const destXGround = mode === "DOWN" ? "-10vw" : 0;

    const duration = mode === "DOWN" ? 1 : 1.5;
    const delay = mode === "DOWN" ? 0.5 : 0.1;

    if (isAnimating) {
      return;
    } else {
      const tl = new Timeline({
        onComplete: () => toggle(),
      });

      tl.to(introBox.wrapper.current, duration, { y: destY }, delay);
      tl.to(bushes.wrapper.current, duration, { y: destY }, delay);
      tl.to(city.wrapper.current, duration, { y: destY }, delay);
      tl.to(rock.wrapper.current, duration, { y: destY }, delay);
      tl.to(
        ground.wrapper.current,
        duration,
        { top: destYGround, x: destXGround },
        delay
      );
      tl.to(mountain.wrapper.current, duration, { y: destY }, delay);
      tl.to(buildings.wrapper.current, duration, { y: destY }, delay);
      tl.to(sky.wrapper.current, duration, { y: destY }, delay);
      tl.to(forms.wrapper.current, duration, { top: destYForms }, delay);
      tl.to(forms.form1.current, duration + 0.1, { top: destYForms }, delay);
      tl.to(forms.form2.current, duration + 0.2, { top: destYForms }, delay);
      tl.to(forms.form3.current, duration + 0.3, { top: destYForms }, delay);
      tl.to(description.wrapper.current, 1, { top: destYDescription }, delay);
      tl.to(
        description.btnPage.current,
        duration,
        { top: destYBtnPage },
        delay
      );
      tl.to(
        description.title.current,
        duration,
        { top: destYDescription },
        delay
      );
      tl.to(
        description.description.current,
        duration,
        { top: destYDescription },
        delay
      );
      tl.to(
        description.cardWrapper.current,
        duration + 0.1,
        { top: destYCards },
        delay
      );
      tl.to(card.wrapper.current, duration, { top: destYCards }, delay);
      tl.to(
        cardDetails.wrapper.current,
        duration,
        { top: destYCardDetails },
        delay
      );
    }
  };

  const toggle = () => {
    let newMode = mode === "DOWN" ? "UP" : "DOWN";
    setMode(newMode);
    setisAnimating(false);
  };

  useEffect(() => {
    disableBodyScroll(targetElement.current);
  }, []);

  return (
    <PageManagerContext.Provider
      value={{
        references: addRef,
      }}>
      <div className='App' ref={targetElement}>
        {/* <button onClick={startsAnimation} className='animationBTN'>
          ANIMATE
        </button> */}
        <Header />
        <div onWheel={startsAnimation} onTouchEnd={startsAnimation}>
          <Sky />
          <Buildings />
          <Mountain />
          <Bushes />
          <City />
          <Rock />
          <Ground />
          <Intro />
          <Forms />
          <Description />
        </div>
      </div>
    </PageManagerContext.Provider>
  );
};

export default App;
