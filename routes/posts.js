import express from "express";

import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  fetchPostsBySearch,
  getUserSpecificPosts,
} from "../controllers/postController.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.get("/search", fetchPostsBySearch);
router.get("/user/:id", getUserSpecificPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likepost", auth, likePost);

export default router;
