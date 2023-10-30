import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import accountRoute from "./routes/account.route.js";
import authRoute from "./routes/auth.route.js";
import imageRoute from "./routes/image.route.js";
import cardRoute from "./routes/card.route.js";
import brandRoute from "./routes/brand.route.js";
import chipRoute from "./routes/chip.route.js";
import memoryRoute from "./routes/memory.route.js";
import productRoute from "./routes/product.route.js";
import productDetailRoute from "./routes/productDetail.route.js";

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUND_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
export { cloudinary };

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/account", accountRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/image", imageRoute);
app.use("/api/v1/image", imageRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(process.env.PORT || 8080, () => {
  connectDB();
  console.log(
    `Server listening on http://localhost:${process.env.PORT || 8080}`
  );
});
