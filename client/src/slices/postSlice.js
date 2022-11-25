import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: {},
    numberOfPages: 0,
    currentPage: 1,
  },
  reducers: {
    fetchPosts: (state, { payload: { posts, currentPage, numberOfPages } }) => {
      return {
        ...state,
        posts,
        currentPage,
        numberOfPages,
      };
    },
    fetchPost: (state, { payload: post }) => {
      return {
        ...state,
        post,
      };
    },
    fetchBySearch: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
      };
    },
    createNewPost: (state, { payload }) => {
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    },
    updateSelectedPost: (state, { payload }) => {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload._id ? payload : post
        ),
      };
    },
    deleteSelectedPost: (state, { payload }) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    },
  },
});

export const {
  fetchPosts,
  fetchPost,
  fetchBySearch,
  createNewPost,
  updateSelectedPost,
  deleteSelectedPost,
} = postSlice.actions;

export default postSlice.reducer;
