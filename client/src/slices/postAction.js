import * as api from "../api";

import { fetchPosts, createNewPost } from "./postSlice";

// Actions
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch(fetchPosts(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPost = (newPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(newPost);
      dispatch(createNewPost(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
