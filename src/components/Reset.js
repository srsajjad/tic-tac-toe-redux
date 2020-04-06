import React from "react";
import { connect } from "react-redux";
import { tictacSlice } from "../redux/tictacSlice";

const Reset = (props) => {
  const { setStepNumber, setNext, setReset, history } = props;

  const jumpTo = (step) => {
    setStepNumber({ stepNumber: step });
    setNext({ next: step % 2 === 0 });
  };

  const handleReset = () => {
    setReset();
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Reset";

    return (
      <li key={move}>
        <button onClick={() => (move ? jumpTo(move) : handleReset())}>
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  );
};

const { setStepNumber, setNext, setReset } = tictacSlice.actions;

const mapDispatchToProps = (dispatch) => ({
  setStepNumber: (payload) => dispatch(setStepNumber(payload)),
  setNext: (payload) => dispatch(setNext(payload)),
  setReset: () => dispatch(setReset()),
});

const mapStateToProps = (state) => ({
  history: state.tictac.history,
});

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
