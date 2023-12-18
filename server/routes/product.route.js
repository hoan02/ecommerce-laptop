import express from "express";
import {
  getAllProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
