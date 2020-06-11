import React, { useEffect, useRef, useContext }  from "react";
import "./Rock.scss";
import rock from "../../img/Rock.svg";

// CONTEXT
import Context from "../../context/context";

const Rocks = () => {
  const wrapperRef = useRef(null);
  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("rock", {
      wrapper: wrapperRef,
    });
  }, []);
    return (
      <img
        src={rock}
        alt="rock"
        className="rockImg"
        ref={wrapperRef}
      />
    );
  
}

export default Rocks;
