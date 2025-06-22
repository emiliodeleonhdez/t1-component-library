import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import { connectDB } from "./db";

const apiVersion = "/api";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get(`${apiVersion}/health`, (_, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(`${apiVersion}/auth`, authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT} 🔥🔥🔥`);
  });
});
