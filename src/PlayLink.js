import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppQuizes from "./AppQuizes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const PlayLink = (props) => {
  const [resetData, setResetData] = useState(12);

  const handleReset = () => {
    setResetData(resetData + 1);
  };

  return (
    <React.Fragment>
      <div className="mt-3">
        {/* <h1>Quiz Starts now</h1> */}
        <div className="memory-test">
          <AppQuizes key={resetData} />
        </div>

        <button className="reset-btn" onClick={handleReset}>
          <FontAwesomeIcon
            className="reset-icon"
            icon={faSync}
            style={{ color: "#ffffff", paddingLeft: "2px", size: "6px" }}
          />
          &nbsp;TRY AGAIN
        </button>

        <div className="test-page">
          <NavLink to={props.visit} className="btn-test">
            {props.btnName}
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayLink;
