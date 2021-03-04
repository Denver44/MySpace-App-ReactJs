// In this We will add all the route which is related to Post.
import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/post.js";

router.get("/", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/LikePost", auth, likePost);

export default router;
