import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: "",
  },
  reducers: {
    addError: (state, { payload: error }) => {
      return {
        ...state,
        error,
      };
    },
    removeError: (state, payload) => {
      return {
        ...state,
        error: "",
      };
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
