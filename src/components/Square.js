import React from "react";
import { connect } from "react-redux";
import { tictacSlice } from "../redux/tictacSlice";
import { calculateWinner } from "../utils/calculateWinner";

const Square = (props) => {
  const {
    stepNumber,
    next,
    history,
    setStepNumber,
    setNext,
    setHistory,
    i,
  } = props;

  const value = history[stepNumber].squares[i] || "";

  const handleClick = (i) => {
    // current story array according to step number
    const currentHistory = history.slice(0, stepNumber + 1);

    // current state
    const current = currentHistory[currentHistory.length - 1];

    // just a copy of current squares
    const squares = current.squares.slice();

    // check if finished - or clicked on already filled area
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = next ? "X" : "O";

    // update history
    let h = currentHistory.concat([
      {
        squares: squares,
      },
    ]);

    setHistory({ history: h });

    // update step number
    setStepNumber({ stepNumber: currentHistory.length });

    // update what's next - cross or zero - toggle action
    setNext({ next: !next });
  };

  return (
    <button className="square" onClick={() => handleClick(i)}>
      {value}
    </button>
  );
};

const { setHistory, setStepNumber, setNext } = tictacSlice.actions;

const mapDispatchToProps = (dispatch) => ({
  setHistory: (payload) => dispatch(setHistory(payload)),
  setStepNumber: (payload) => dispatch(setStepNumber(payload)),
  setNext: (payload) => dispatch(setNext(payload)),
});

const mapStateToProps = (state) => ({
  history: state.tictac.history,
  stepNumber: state.tictac.stepNumber,
  next: state.tictac.next,
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
