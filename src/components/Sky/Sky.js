import React, { useEffect, useRef, useContext } from "react";
import "./Sky.scss";
import sky from "../../img/Sky.svg";

// CONTEXT
import Context from "../../context/context";

const Sky = (props) => {

  const wrapperRef = useRef(null);

  const { references } = useContext(Context);
  const addRef = references;

  useEffect(() => {
    addRef("sky", {
      wrapper: wrapperRef,
    });
    
  }, [wrapperRef]);

  return (
    <img
      ref={wrapperRef}
      src={sky}
      alt='sky'
      className='skyImg'
    />
  );
};

export default Sky;
