import React from "react";
import "./Ground.scss";
import ground from "../../img/Ground.svg";

const Ground = (props) => {
  return (
    <div className="groundBox">
      <img src={ground} alt="ground" className="groundImg" />
    </div>
  );
};

export default Ground;
