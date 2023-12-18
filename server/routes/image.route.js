import express from "express";
import {
  getImage,
  createImage,
  updateImage,
} from "../controllers/image.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", getImage);
router.post("/create", createImage);
router.put("/update/:id", updateImage);

export default router;
