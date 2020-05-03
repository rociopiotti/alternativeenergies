import React from "react";
import "./Icon.scss";

// FONT-AWESOME:
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  // DEFINIR ICONS:
  let faIcon;
  let iconClass;
  switch (props.type) {
    case "home":
      faIcon = faHome;
      iconClass = "Icon__red";
      break;
    case "burger":
      faIcon = faBars;
      iconClass = "Icon__blue";
      break;
  }

  return <FontAwesomeIcon className={"Icon " + iconClass} icon={faIcon} />;
};

export default Icon;
