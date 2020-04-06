import React from "react";
import Board from "./Board";
import Status from "./Status";
import Reset from "./Reset";

const Game = () => (
  <div className="game">
    <Board />
    <Status />
    <Reset />
  </div>
);

export default Game;
