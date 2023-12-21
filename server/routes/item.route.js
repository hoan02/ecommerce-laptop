import express from "express";
import {
  getAllItem,
  getItemBySlug,
  createItem,
  deleteItem,
} from "../controllers/item.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", getAllItem);
router.get("/all", getItemBySlug);
router.post("/create", verifyToken, createItem);
router.delete("/delete/:id", verifyToken, deleteItem);

export default router;
