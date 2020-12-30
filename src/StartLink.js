import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faGrinWink } from "@fortawesome/free-solid-svg-icons";

const StartLink = (props) => {
  return (
    <React.Fragment>
      <div className="mt-3">
        <h1 className="first-heading">
          Memory Game
          <FontAwesomeIcon
            className="bulb-icon"
            icon={faLightbulb}
            style={{ color: "#ffffff" }}
          />
        </h1>
        <p className="sub-title">Wanna know how mindful brain you've got</p>
        <p className="sub-title">Buckle up!</p>
        <p>
          <FontAwesomeIcon
            className="col-12 col-sm-6 offset-sm-4 d-none d-sm-block  bulb-icon"
            icon={faGrinWink}
            style={{ color: "#ffffff" }}
          />
        </p>
        <div className="start-game">
          <NavLink to={props.visit} className="btn-start">
            {props.btnName}
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StartLink;
