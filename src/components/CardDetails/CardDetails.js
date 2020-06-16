import React, { useRef, useEffect, useContext, useMemo } from "react";
import "./CardDetails.scss";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const database = [
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

  const createCardDetails = useMemo(() => {
    const List = database.map(({ id, title, list, link }, index) => (
      <div key={index} className='cardDetails' ref={wrapperRef}>
        <div className='cardHeader'>
          <h4>{title}</h4>
        </div>
        <div className='cardBody'>
          <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
          </ul>
          <a href={link}>
            Watch video <Icon type='arrowRight' />
          </a>
        </div>
      </div>
    ));
    return List;
  }, [database]);
  
  return <>{createCardDetails}</>;
};

export default CardDetails;
