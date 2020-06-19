import React, { useRef, useEffect, useContext } from "react";
import "./CardDetails.scss";
import Icon from "../Icon/Icon";

// CONTEXT
import Context from "../../context/context";

const CardDetails = ({ data }) => {
  const wrapperRef = useRef(null);
  const { references } = useContext(Context);

  const addRef = references;

  useEffect(() => {
    addRef("cardDetails", {
      wrapper: wrapperRef,
    });
  }, []);

  useEffect(() => {
    // Animar
  }, [data]);

  const { title, list, link } = data;

  return (
    <div className='cardDetails' ref={wrapperRef}>
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
  );
};

export default CardDetails;
