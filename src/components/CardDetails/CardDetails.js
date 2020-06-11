import React, { useRef, useEffect, useContext } from "react";
import "./CardDetails.scss";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const dababase = [
  {
    id: "0",
    title: "Energy Decentralization",
    list: [
      "Independent and digitized",
      "New economic model",
      "Build local ecosystems",
    ],
    link: "url",
  },
  {
    id: "1",
    title: "Eco-Friendly Sustainability",
    list: [
      "Reduce and preserving fossil fuels",
      "Renewable energy sources",
      "Acelerationd decartonization",
    ],
    link: "url",
  },
  {
    id: "2",
    title: "Power Exchange",
    list: [
      "P2P energy exchange",
      "Balance the system",
      "Storage & transmissions",
    ],
    link: "url",
  },
];
const CardDetails = (props) => {
  const wrapperRef = useRef(null);

  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("cardDetails", {
      wrapper: wrapperRef,
    });
  }, []);
  return (
    <div className='cardDetails' ref={wrapperRef}>
      <div className='cardHeader'>
        <h4>Platform Keypoints</h4>
      </div>
      <div className='cardBody'>
        <ul>
          <li>Independent and digitized</li>
          <li>New economic model</li>
          <li>Build local ecosystems</li>
        </ul>
        <a href='#'>
          Watch video <Icon type='arrowRight' />
        </a>
      </div>
    </div>
  );
};

export default CardDetails;
