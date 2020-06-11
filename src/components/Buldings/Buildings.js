import React, { useEffect, useRef, useContext } from "react";
import "./Buildings.scss";
import buildings from "../../img/Buldings.svg";

// CONTEXT
import Context from "../../context/context";

const Buildings = () => {
  const wrapperRef = useRef(null);

  const { references } = useContext(Context);
  const addRef = references;

  useEffect(() => {
    addRef("buildings", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <img
      src={buildings}
      alt='buildings'
      className='buildingsImg'
      ref={wrapperRef}
    />
  );
};

export default Buildings;
