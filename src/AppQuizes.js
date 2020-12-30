import React, { useState } from "react";
import "./App.css";
import infoDatabase from "./infoDatabase";

import ReactCardFlip from "react-card-flip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faRedo,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import img11 from "./images/alien.jpg";
import img12 from "./images/sherlock.jpg";
import img13 from "./images/deny.jpg";

const AppQuizes = (props) => {
  const [currentSet, setCurrentSet] = useState(0);
  const [viewScore, setViewScore] = useState(false);
  const [originalScore, setOriginalScore] = useState(0);

  const [currentImages, setCurrentImages] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  const [awardTitle, setAwardTitle] = useState("");

  const handleAwardTitle = () => {
    if (originalScore >= 8 && originalScore <= infoDatabase.length) {
      setAwardTitle([
        "Congratulation! You've got an Ailen Brain",
        <br />,
        <img src={img11} alt="Memory Test" />,
      ]);
    } else if (originalScore >= 5 && originalScore <= 7) {
      setAwardTitle([
        "Wow! You're almost Sherlock Holmes",
        <br />,
        <img src={img12} alt="Memory Test" />,
      ]);
    } else if (originalScore < 5) {
      setAwardTitle([
        "Don't loose hope! Keep it up",
        <br />,
        <img src={img13} alt="Memory Test" />,
      ]);
    }
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const answerButton = (isCorrect) => {
    if (isCorrect === true) {
      setOriginalScore(originalScore + 1);
    }

    const nextSet = currentSet + 1;

    if (nextSet < infoDatabase.length) {
      setCurrentSet(nextSet);
    } else {
      setViewScore(true);
    }

    const nextImage = currentImages + 1;

    if (nextImage < infoDatabase.length) {
      setCurrentImages(nextImage);
    }
  };

  return (
    <React.Fragment>
      <div className="App">
        {viewScore ? (
          <div className="final-score">
            <p style={{fontSize:"40px"}}>
              Well Done&nbsp;
              <FontAwesomeIcon
                className="cookie-icon"
                icon={faThumbsUp}
                style={{ color: "#2a0001" }}
              />
            </p>
            <br />
            <h2>
              You scored {originalScore} out {infoDatabase.length}
            </h2>
            <h4>
              <button className="competence-btn my-4" onClick={handleAwardTitle}>
                Check Your Memory Level
              </button>
              <div>{awardTitle}</div>
            </h4>
          </div>
        ) : (
          <>
            <div>
              <div className="count-question">
                <span style={{ fontSize: "25px" }}>
                  Question {currentSet + 1}
                </span>
                <span style={{ fontSize: "25px" }}>/{infoDatabase.length}</span>
              </div>
              <div className="row">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                  <div
                    className="col-12 offset-0 offset-sm-3 col-sm-7 card"
                    style={{ width: "30rem" }}
                  >
                    <span style={{ fontSize: "15px" }}>
                      <img
                        onClick={handleClick}
                        src={infoDatabase[currentImages].imgSrc}
                        className="card-img-top"
                        alt="Memory Test"
                      />
                      <FontAwesomeIcon
                        icon={faRedo}
                        style={{ color: "#0000ff", paddingLeft: "2px" }}
                      />
                      &nbsp;Tap to see the hints
                    </span>
                  </div>
                  <div
                    onClick={handleClick}
                    className="col-12 offset-0 offset-sm-3 col-sm-7 card"
                    style={{ width: "30rem" }}
                    id="card-hint"
                  >
                    Clue
                    <br />
                    <FontAwesomeIcon
                      className="cookie-icon"
                      icon={faHandPointDown}
                      style={{ color: "#2a0001" }}
                    />
                    {infoDatabase[currentSet].hints}
                  </div>
                </ReactCardFlip>
                <div className="card-body">
                  <h5 className="col-12 offset-0 offset-sm-2 col-sm-7 card-title">
                    {infoDatabase[currentSet].question}
                  </h5>
                </div>
              </div>
            </div>
            <div className="answer-section">
              {infoDatabase[currentSet].answerOptions.map((answerOption) => (
                <>
                  <button onClick={() => answerButton(answerOption.isCorrect)}>
                    <div class="row">
                      <div class="col-12 col-sm-2">
                        <div id="card-container">
                          <div
                            className="card answer-text"
                            style={{
                              width: "12rem",
                              backgroundColor: "orange",
                              borderRadius: "10px",
                            }}
                          >
                            {answerOption.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default AppQuizes;
