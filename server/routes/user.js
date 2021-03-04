// In this We will add all the route which is related to Post.
import express from "express";
const router = express.Router();

import { signIn, signUp } from "../controller/user.js";

router.post("/signIn", signIn);
router.post("/signUp", signUp);

export default router;
