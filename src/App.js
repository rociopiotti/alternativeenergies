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
import { isMobileOnly, isTablet, isBrowser } from "react-device-detect";

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

    // ------------------------------------------------------- //
    //                   MEDIAQUERIES ANIMATIONS               //
    // ------------------------------------------------------- //

    let destYGround;
    let destYForms;
    let destYBtnPage;
    let destYCards;

    const widthScreen = window.innerWidth;
    const heightScreen = window.innerHeight;

    if (isTablet) {
      if (widthScreen > heightScreen) {
        // LANDSCAPE //
        destYGround = mode === "DOWN" ? " -150vh" : "0vh";
        destYForms = mode === "DOWN" ? "3vh" : "100vh";
        destYBtnPage = mode === "DOWN" ? "5vh" : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
      } else {
        // PORTRAIT //
        destYGround = mode === "DOWN" ? " -150vh" : "0vh";
        destYForms = mode === "DOWN" ? 0 : "100vh";
        destYBtnPage = mode === "DOWN" ? "15vh" : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
      }
    }

    if (isMobileOnly) {
      // LANDSCAPE //
      if (widthScreen > heightScreen) {
        destYGround = mode === "DOWN" ? "-140vh" : "-35vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
      } else {
        // PORTRAIT //
        destYGround = mode === "DOWN" ? "-140vh" : "0";
        destYCards = mode === "DOWN" ? "-10vh" : "100vh";
      }
      destYForms = mode === "DOWN" ? "10vh" : "100vh";
      destYBtnPage = mode === "DOWN" ? "15vh" : "100vh";
    }
    if (isBrowser) {
      if (widthScreen === 1366) {
        destYGround = mode === "DOWN" ? " -150vh" : "-31vh";
        destYForms = mode === "DOWN" ? 0 : "100vh";
        destYBtnPage = mode === "DOWN" ? 0 : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
      } else {
        destYGround = mode === "DOWN" ? " -150vh" : "-35vh";
        destYForms = mode === "DOWN" ? 0 : "100vh";
        destYBtnPage = mode === "DOWN" ? 0 : "100vh";
        destYCards = mode === "DOWN" ? "7vh" : "100vh";
      }
    }

    const destY = mode === "DOWN" ? "-100vh" : 0;
    const destXGround = mode === "DOWN" ? "-10vw" : 0;
    const destYDescription = mode === "DOWN" ? 0 : "100vh";

    const destYCardDetails = mode === "DOWN" ? "-3vh" : "100vh";

    const duration = 2;
    const durationGround = mode === "DOWN" ? 0.9 : 2.2;
    const delay = mode === "DOWN" ? 0.1 : 0.2;

    const tl = new Timeline({
      onComplete: () => toggle(),
    });

    tl.to(introBox.wrapper.current, duration, { y: destY }, delay);
    tl.to(bushes.wrapper.current, duration, { y: destY }, delay);
    tl.to(city.wrapper.current, duration, { y: destY }, delay);
    tl.to(rock.wrapper.current, duration, { y: destY }, delay);
    tl.to(
      ground.wrapper.current,
      durationGround,
      { top: destYGround, x: destXGround },
      delay
    );
    tl.to(mountain.wrapper.current, duration, { y: destY }, delay + 0.1);
    tl.to(buildings.wrapper.current, duration, { y: destY }, delay + 0.1);
    tl.to(sky.wrapper.current, duration, { y: destY }, delay * 0.5);
    tl.to(forms.wrapper.current, duration, { top: destYForms }, delay * 0.5);
    tl.to(forms.form1.current, duration, { top: destYForms }, delay * 0.5);
    tl.to(forms.form2.current, duration, { top: destYForms }, delay * 0.5);
    tl.to(forms.form3.current, duration, { top: destYForms }, delay * 0.5);
    tl.to(
      description.wrapper.current,
      1,
      { top: destYDescription },
      delay * 0.5
    );
    tl.to(
      description.btnPage.current,
      duration,
      { top: destYBtnPage },
      delay * 0.5
    );
    tl.to(
      description.title.current,
      duration,
      { top: destYDescription },
      delay * 0.5
    );
    tl.to(
      description.description.current,
      duration,
      { top: destYDescription },
      delay * 0.5
    );
    tl.to(
      description.cardWrapper.current,
      duration,
      { top: destYCards },
      delay * 2
    );
    tl.to(card.wrapper.current, duration, { top: destYCards }, delay * 2);
    tl.to(
      cardDetails.wrapper.current,
      duration,
      { top: destYCardDetails },
      delay * 2
    );
  };

  const toggle = () => {
    let newMode = mode === "DOWN" ? "UP" : "DOWN";
    setMode(newMode);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <PageManagerContext.Provider
      value={{
        references: addRef,
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
        <Description />
        <Header />
      </div>
    </PageManagerContext.Provider>
  );
};

export default App;
