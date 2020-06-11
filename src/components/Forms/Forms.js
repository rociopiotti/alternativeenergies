import React, { useEffect, useRef, useContext } from "react";
import "./Forms.scss";
import form1 from "../../img/FloatingForm1.svg";
import form2 from "../../img/FloatingForm2.svg";
import form3 from "../../img/FloatingForm3.svg";

// CONTEXT
import Context from "../../context/context";
const Forms = () => {
  const wrapperRef = useRef(null);
  const wrapperform1 = useRef(null);
  const wrapperform2 = useRef(null);
  const wrapperform3 = useRef(null);

  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("forms", {
      wrapper: wrapperRef,
      form1: wrapperform1,
      form2: wrapperform2,
      form3: wrapperform3,
    });
  }, []);
  return (
    <div className='formsBox' ref={wrapperRef} >
      <div ref={wrapperform1} className='form1'>
        <img src={form1} alt='background form' className='form1Img' />
      </div>
      <div ref={wrapperform2} className='form2'>
        <img src={form2} alt='background form' className='form2Img' />
      </div>
      <div ref={wrapperform3} className='form3'>
        <img src={form3} alt='background form' className='form3Img' />
      </div>
    </div>
  );
};

export default Forms;
