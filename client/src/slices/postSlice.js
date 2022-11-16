import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    fetchPosts: (state, { payload }) => {
      state.posts = [...payload];
    },
    createNewPost: (state, { payload }) => {
      state.posts = [...state.posts, payload];
    },
  },
});

export const { fetchPosts, createNewPost } = postSlice.actions;

export default postSlice.reducer;
