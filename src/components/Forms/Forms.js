import React from "react";
import "./Forms.scss";
import form1 from "../../img/FloatingForm1.svg"
import form2 from "../../img/FloatingForm2.svg"
import form3 from "../../img/FloatingForm3.svg"


const Forms = (props) => {
  return <div className="formsBox">
      <div className="form1">
          <img src={form1} alt="background form" className="form1"/>
      </div>
      <div className="form2">
          <img src={form2} alt="background form" className="form2"/>
      </div>
      <div className="form3">
          <img src={form3} alt="background form" className="form3"/>
      </div>
  </div>;
};

export default Forms;
