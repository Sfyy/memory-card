import React from "react";
import "../styles/Scoreboard.css";

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score">
        <p>Current Score: {currentScore} </p>
        <p>||</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;
