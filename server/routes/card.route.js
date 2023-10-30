import express from "express";
import {
  getAllCard,
  createCard,
  deleteCard,
} from "../controllers/card.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllCard);
router.post("/create", verifyToken, createCard);
router.put("/delete/:id", verifyToken, deleteCard);

export default router;
