import express from "express";
import {
  getAllItem,
  createItem,
  deleteItem,
} from "../controllers/item.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllItem);
// router.post("/create", verifyToken, createItem);
// router.put("/delete/:id", verifyToken, deleteItem);
router.post("/create", createItem);
router.delete("/delete/:id", deleteItem);

export default router;
