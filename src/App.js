import React, { useState } from "react";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";

import "./styles/App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScoreUpdate = (newScore) => {
    setCurrentScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <div className="head">
          <h1>Landmark Memory Game</h1>
          <p>Donot click on any more than once!</p>
        </div>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>

      <Game handleScoreUpdate={handleScoreUpdate} />
      <div className="footer">
        <p> Designed by Sfy. </p>

        <a href="https://github.com/Sfyy">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default App;
