import * as api from "../api";
import { setError } from "./errorAction";

import {
  fetchPosts,
  fetchPost,
  createNewPost,
  updateSelectedPost,
  deleteSelectedPost,
  fetchBySearch,
  fetchPostForUser,
} from "./postSlice";

// Actions
export const getPosts = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts(page);
      dispatch(fetchPosts(data));
    } catch (error) {
      dispatch(setError("GET_POSTS"));
    }
  };
};

export const fetchPostsBySearch = (searchQuery) => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPostFromSearch(searchQuery);
      dispatch(fetchBySearch(data));
    } catch (error) {
      console.log(error.message);
      dispatch(setError("GET_POSTS"));
    }
  };
};

export const getPost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPost(id);
      dispatch(fetchPost(data));
    } catch (error) {
      dispatch(setError("GET_POST"));
    }
  };
};

export const getUserSpecificPosts = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchUserPosts(id);
      dispatch(fetchPostForUser(data));
    } catch (error) {
      dispatch(setError("NO_POSTS"));
    }
  };
};

export const createPost = (newPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(newPost);
      dispatch(createNewPost(data));
    } catch (error) {
      dispatch(setError("CREATE_POST"));
    }
  };
};

export const updatePost = (id, updatedPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, updatedPost);
      dispatch(updateSelectedPost(data));
    } catch (error) {
      dispatch(setError("UPDATE_POST"));
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id);
      dispatch(deleteSelectedPost(id));
    } catch (error) {
      dispatch(setError("DELETE_POST"));
    }
  };
};

export const likePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
      dispatch(updateSelectedPost(data));
    } catch (error) {
      dispatch(setError("LIKE_POST"));
    }
  };
};
