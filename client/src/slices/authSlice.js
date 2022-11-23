import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    error: "",
  },
  reducers: {
    authenticateUser: (state, { payload }) => {
      localStorage.setItem("profile", JSON.stringify(payload));
      state.error = "";
      state.auth = payload;
    },
    logoutUser: (state, payload) => {
      state.auth = {};
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    resetError: (state) => {
      state.error = "";
    },
  },
});

export const { authenticateUser, logoutUser, setError, resetError } =
  authSlice.actions;

export default authSlice.reducer;
