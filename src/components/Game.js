import React from "react";
import Board from "./Board";
import Status from "./Status";
import Reset from "./Reset";

const Game = () => (
  <div className="game">
    <Board />

    <div className="status-info">
      <Status />
      <Reset />
    </div>
  </div>
);

export default Game;
