import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import componentTrackingRoutes from "./routes/componentTracking.routes";
import { connectDB } from "./db";
import cookieParser from "cookie-parser";

const apiVersion = "/api";

dotenv.config();
const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

app.get(`${apiVersion}/health`, (_, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(`${apiVersion}/auth`, authRoutes);
app.use(`${apiVersion}/components`, componentTrackingRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT} 🔥🔥🔥`);
  });
});
