import React from "react";
import "./Intro.scss";

const Intro = (props) => {
  return (
    <div className="introBox">
      <div className="intro">
        <h1>
          Start energy<br/> revolution from your community
        </h1>
        <h3>
          Sustainable technologies have never been so affordable.
          <br /> Produce and exchage energy maximizing the power of renewable
          sources
        </h3>
        <button className="contactBtn">Contact us</button>
      </div>
    </div>
  );
};
export default Intro;
