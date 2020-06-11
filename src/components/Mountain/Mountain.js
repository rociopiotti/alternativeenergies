import React, { useEffect, useRef, useContext } from "react";
import "./Mountain.scss";
import mountain from "../../img/Mountain.svg";

// CONTEXT
import Context from "../../context/context";
const Mountain = () => {
  const wrapperRef = useRef(null);
  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("mountain", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <img
      src={mountain}
      alt='Mountain'
      className='mountainImg'
      ref={wrapperRef}
    />
  );
};

export default Mountain;
