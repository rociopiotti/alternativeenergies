import React, { useEffect, useRef, useContext } from "react";
import "./Intro.scss";

// CONTEXT
import Context from "../../context/context";

const Intro = (props) => {
  // Levantar las referencias
  const wrapperRef = useRef(null);

  // Importar las funciones para animación:
  const { references, openingAnimation } = useContext(Context);
  const addRef = references;

  useEffect(() => {
    addRef("introBox", {
      wrapper: wrapperRef,
    });
    openingAnimation()
  }, []);

  return (
    <div className='introBox' ref={wrapperRef}>
      <div className='intro'>
        <h1>
          Start energy
          <br /> revolution from your community
        </h1>
        <h3>
          Sustainable technologies have never been so affordable.
          <br /> Produce and exchage energy maximizing the power of renewable
          sources
        </h3>
        <button className='contactBtn'>Contact us</button>
      </div>
    </div>
  );
};
export default Intro;
