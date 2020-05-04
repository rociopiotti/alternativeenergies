import React from "react";
import "./Icon.scss";

// FONT-AWESOME:
import { faArrowRight,  faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  let faIcon;

  switch (props.type) {
    case "arrowRight":
      faIcon = faArrowRight;
      break;
    case "arrowLeft":
      faIcon = faArrowLeft;
      break;
  }
  return <FontAwesomeIcon className={"Icon"} icon={faIcon}/>;

};

export default Icon;
