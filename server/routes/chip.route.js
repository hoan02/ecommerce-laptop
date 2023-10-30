import express from "express";
import {
  getAllChip,
  createChip,
  deleteChip,
} from "../controllers/chip.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllChip);
router.post("/create", verifyToken, createChip);
router.put("/delete/:id", verifyToken, deleteChip);

export default router;
