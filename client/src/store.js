import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./slices/postSlice";
import authReducer from "./slices/authSlice";
import errorReducer from "./slices/errorSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    error: errorReducer,
  },
});
