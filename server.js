import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

// router middleware
import jobRouter from "./router/jobRouter.js";
import authRouter from "./router/authRouter.js";
import userRouter from "./router/userRouter.js";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

// ---- public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// ----

// json middleware
app.use(express.json());

// https://console.cloudinary.com
import cloudinary from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());

//test router for DEMO-----
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ msg: "test route" });
});

// routes
app.use("/api/v1/jobs", authMiddleware, jobRouter);
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/auth", authRouter);

// Build page of front-end
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// error block
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
