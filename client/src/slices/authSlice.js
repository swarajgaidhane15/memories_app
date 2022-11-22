import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
  },
  reducers: {
    authenticateUser: (state, { payload }) => {
      state.auth = payload;
    },
    logoutUser: (state, payload) => {
      state.auth = {};
    },
  },
});

export const { authenticateUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
