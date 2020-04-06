import React from "react";
import Square from "./Square";

const Board = () => {
  const renderSquare = (i) => {
    return <Square key={i} i={i} />;
  };

  return (
    <div className="game-board">
      <div className="board-row">{[0, 1, 2].map((i) => renderSquare(i))}</div>
      <div className="board-row">{[3, 4, 5].map((i) => renderSquare(i))}</div>
      <div className="board-row">{[6, 7, 8].map((i) => renderSquare(i))}</div>
    </div>
  );
};

export default Board;
