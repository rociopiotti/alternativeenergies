import React, { useContext, useRef, useEffect } from "react";
import "./Bushes.scss";
import bushes from "../../img/Bushes.svg";

// CONTEXT
import Context from "../../context/context";

const Bushes = () => {
  const wrapperRef = useRef(null);

  const { references } = useContext(Context);
  const addRef = references;

  useEffect(() => {
    addRef("bushes", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <img
      src={bushes}
      alt='buildings'
      className='bushesImg'
      ref={wrapperRef}
    />
  );
};

export default Bushes;
