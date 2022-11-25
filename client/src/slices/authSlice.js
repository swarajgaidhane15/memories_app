import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
  },
  reducers: {
    authenticateUser: (state, { payload }) => {
      localStorage.setItem("profile", JSON.stringify(payload));

      return {
        ...state,
        error: "",
        auth: payload,
      };
    },
    logoutUser: (state, payload) => {
      return {
        ...state,
        auth: {},
      };
    },
  },
});

export const { authenticateUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
