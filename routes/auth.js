import express from "express";

import { googleAuth, signin, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/googleSignin", googleAuth);
router.post("/signup", signup);

export default router;
