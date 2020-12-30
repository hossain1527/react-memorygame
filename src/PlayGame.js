import React from "react";
import PlayLink from "./PlayLink";

const PlayGame = () => {
  return (
    <React.Fragment>
      <div className="App">
       
        <PlayLink visit="/" btnName="Go back" />
      </div>
    </React.Fragment>
  );
};

export default PlayGame;
