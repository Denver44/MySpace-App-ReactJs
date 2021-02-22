// In this We will add all the route which is related to Post.
import express from "express";
const router = express.Router();

import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/post.js";

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/LikePost", likePost);

export default router;
