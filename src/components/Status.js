import React from "react";
import { connect } from "react-redux";
import { calculateWinner } from "../utils/calculateWinner";

const Status = (props) => {
  const { stepNumber, history, next } = props;

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (next ? "X" : "O");
  }

  return <div>{status}</div>;
};

const mapStateToProps = (state) => ({
  history: state.tictac.history,
  stepNumber: state.tictac.stepNumber,
  next: state.tictac.next,
});

export default connect(mapStateToProps, null)(Status);
