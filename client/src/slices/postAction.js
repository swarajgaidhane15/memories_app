import * as api from "../api";

import {
  fetchPosts,
  createNewPost,
  updateSelectedPost,
  deleteSelectedPost,
} from "./postSlice";

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

export const updatePost = (id, updatedPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, updatedPost);
      dispatch(updateSelectedPost(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id);
      dispatch(deleteSelectedPost(id));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const likePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
      dispatch(updateSelectedPost(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
