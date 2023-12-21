import express from "express";
import {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/create", verifyToken, createProduct);
router.put("/update/:id", verifyToken, updateProduct);
router.delete("/delete/:id", verifyToken, deleteProduct);

export default router;

