import express from "express";
import {
  getAllProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllProduct);
router.post("/create", createProduct);
router.put("/delete/:id", deleteProduct);

export default router;
