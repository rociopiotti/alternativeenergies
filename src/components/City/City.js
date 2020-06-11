import React, { useEffect, useRef, useContext } from "react";
import "./City.scss";
import bases from "../../img/Bases.svg";
import aspa1 from "../../img/Aspa1.svg";
import aspa2 from "../../img/Aspa2.svg";
import aspa3 from "../../img/Aspa3.svg";
import aspa4 from "../../img/Aspa4.svg";
import city from "../../img/City.svg";

// CONTEXT
import Context from "../../context/context";
const City = () => {
  const wrapperRef = useRef(null);
  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("city", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <div
      className='cityBox'
      ref={wrapperRef}>
      <div className='molinos'>
        <img src={bases} alt='bases molino' className='bases' />
        <div className='molino1'>
          <img src={aspa1} alt='aspa molino' className='aspa1' />
        </div>
        <div className='molino2'>
          <img src={aspa2} alt='aspa molino' className='aspa2' />
        </div>
        <div className='molino3'>
          <img src={aspa3} alt='aspa molino' className='aspa3' />
        </div>
        <div className='molino4'>
          <img src={aspa4} alt='aspa molino' className='aspa4' />
        </div>
      </div>
      <img src={city} alt='city' className='cityImg' />
    </div>
  );
};

export default City;
