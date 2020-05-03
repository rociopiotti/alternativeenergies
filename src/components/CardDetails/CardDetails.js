import React from "react";
import "./CardDetails.scss";

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
          Watch video<i class="fas fa-long-arrow-alt-right">icon</i>
        </a>
      </div>
    </div>
  );
};

export default CardDetails;
