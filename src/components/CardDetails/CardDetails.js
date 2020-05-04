import React from "react";
import "./CardDetails.scss";
import Icon from "../Icon/Icon";

const CardDetails = (props) => {
  return (
    <div className="cardDetails">
      <div className="cardHeader">
        <h4>Platform Keypoints</h4>
      </div>
      <div className="cardBody">
        <ul>
          <li>Independent and digitized</li>
          <li>New economic model</li>
          <li>Build local ecosystems</li>
        </ul>
        <a href="#">
          Watch video  <Icon type="arrowRight"/>
        </a>
      </div>
    </div>
  );
};

export default CardDetails;
