import express from "express";

import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postController.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likepost", auth, likePost);

export default router;
