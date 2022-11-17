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
    updateSelectedPost: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
    deleteSelectedPost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload);
    },
  },
});

export const {
  fetchPosts,
  createNewPost,
  updateSelectedPost,
  deleteSelectedPost,
} = postSlice.actions;

export default postSlice.reducer;
