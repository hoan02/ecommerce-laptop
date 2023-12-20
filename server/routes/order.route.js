import express from "express";
import {
  getAllOrder,
  getOrderById,
  createOrder,
} from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", getAllOrder);
router.get("/:id", getOrderById);
router.post("/create", createOrder);

export default router;
