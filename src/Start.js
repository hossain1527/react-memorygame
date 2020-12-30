import React from "react";
import StartLink from "./StartLink";



const Start = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div className="first-page">
          <StartLink visit="/play" btnName="Let's Begin" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Start;
