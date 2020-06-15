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
    
    document.body.style.overflow = "hidden";
    addRef("ground", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <div className='groundImgBox'>
      <img src={ground} alt='ground' className='groundImg' ref={wrapperRef} />
    </div>
  );
};

export default Ground;
