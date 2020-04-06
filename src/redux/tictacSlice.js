import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepNumber: 0,
  next: true,
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
};

export const tictacSlice = createSlice({
  name: "tictac",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload.history;
    },

    setStepNumber: (state, action) => {
      state.stepNumber = action.payload.stepNumber;
    },

    setNext: (state, action) => {
      state.next = action.payload.next;
    },

    setReset: (state, action) => {
      state.stepNumber = 0;
      state.next = true;
      state.history = [
        {
          squares: Array(9).fill(null),
        },
      ];
    },
  },
});

// slice.reducer
// msgSlice.actions
