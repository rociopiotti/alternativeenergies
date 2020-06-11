import React, { useEffect, useRef, useContext } from "react";
import "./Forms.scss";
import form1 from "../../img/FloatingForm1.svg";
import form2 from "../../img/FloatingForm2.svg";
import form3 from "../../img/FloatingForm3.svg";

// CONTEXT
import Context from "../../context/context";
const Forms = () => {
  const wrapperRef = useRef(null);
  const form1Ref = useRef(null);
  const form2Ref = useRef(null);
  const form3Ref = useRef(null);

  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("forms", {
      wrapper: wrapperRef,
      form1: form1Ref,
      form2: form2Ref,
      form3: form3Ref,
    });
  }, []);
  return (
    <div className='formsBox' ref={wrapperRef}>
      <div ref={form1Ref} className='form1'>
        <img src={form1} alt='background form' className='form1Img' />
      </div>
      <div ref={form2Ref} className='form2'>
        <img src={form2} alt='background form' className='form2Img' />
      </div>
      <div ref={form3Ref} className='form3'>
        <img src={form3} alt='background form' className='form3Img' />
      </div>
    </div>
  );
};

export default Forms;
