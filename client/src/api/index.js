import axios from "axios";

const postsUrl = "/posts";
const authUrl = "/auth";

// Add a request interceptor
axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    const { token } = JSON.parse(localStorage.getItem("profile"));
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const fetchPosts = () => axios.get(postsUrl);
export const createPost = (newPost) => axios.post(postsUrl, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${postsUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postsUrl}/${id}`);
export const likePost = (id) => axios.patch(`${postsUrl}/${id}/likepost`);

export const signIn = (formdata) => axios.post(`${authUrl}/signin`, formdata);
export const signUp = (formdata) => axios.post(`${authUrl}/signup`, formdata);
