import React from "react";
import "./Rock.scss";
import rock from "../../img/Rock.svg"

const Rocks = (props) => {
  return <img src={rock} alt="rock" className="rockImg" />;
};

export default Rocks;
