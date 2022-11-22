import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./slices/postSlice";
import authReducer from "./slices/authSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
  },
});
