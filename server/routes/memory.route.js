import express from "express";
import {
  getAllMemory,
  createMemory,
  deleteMemory,
} from "../controllers/memory.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllMemory);
router.post("/create", verifyToken, createMemory);
router.put("/delete/:id", verifyToken, deleteMemory);

export default router;
