import express from "express";
import {
  getAllBrand,
  createBrand,
  deleteBrand,
} from "../controllers/brand.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllBrand);
router.post("/create", verifyToken, createBrand);
router.put("/delete/:id", verifyToken, deleteBrand);

export default router;
