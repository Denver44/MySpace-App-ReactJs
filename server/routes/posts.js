import express from "express";
const router = express.Router();

import { getPost, createPost } from "../controller/post.js";

router.get("/", getPost);
router.post("/", createPost);

export default router;
