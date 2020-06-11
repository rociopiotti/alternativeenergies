import React, { useEffect, useRef, useContext } from "react";
import "./Ground.scss";
import ground from "../../img/Ground.svg";

// CONTEXT
import Context from "../../context/context";
const Ground = () => {
  const wrapperRef = useRef(null);

  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("ground", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <img src={ground} alt='ground' className='groundImg' ref={wrapperRef} />
  );
};

export default Ground;
