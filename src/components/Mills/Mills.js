import React from "react";
import "./Mills.scss";
import base1 from "../../img/Base1.svg";
import base2 from "../../img/Base2.svg";
import base3 from "../../img/Base3.svg";
import base4 from "../../img/Base4.svg";
import aspa1 from "../../img/Aspa1.svg";
import aspa2 from "../../img/Aspa2.svg";
import aspa3 from "../../img/Aspa3.svg";
import aspa4 from "../../img/Aspa4.svg";

const Mills = (props) => {
  return (
    <div className="millsBox">
      <div className="mills">
        <div className="molino1">
          <img src={aspa1} alt="aspa molino" className="aspa1" />
          <img src={base1} alt="base molino" className="base1" />
        </div>
        <div className="molino2">
          <img src={aspa2} alt="aspa molino" className="aspa2" />
          <img src={base2} alt="base molino" className="base2" />
        </div>
        <div className="molino3">
          <img src={aspa3} alt="aspa molino" className="aspa3" />
          <img src={base3} alt="base molino" className="base3" />
        </div>
        <div className="molino4">
          <img src={aspa4} alt="aspa molino" className="aspa4" />
          <img src={base4} alt="base molino" className="base4" />
        </div>
      </div>
    </div>
  );
};

export default Mills;
