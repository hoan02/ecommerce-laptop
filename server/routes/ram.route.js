import express from "express";
import {
  getAllRam,
  createRam,
  deleteRam,
} from "../controllers/ram.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllRam);
router.post("/create", verifyToken, createRam);
router.put("/delete/:id", verifyToken, deleteRam);

export default router;
