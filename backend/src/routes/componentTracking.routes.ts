import { Router } from "express";
import {
  registerComponentTrackingRecord,
  getAllRecords,
  exportComponentTracking,
} from "../controllers/componentTracking.controller";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.post("/track", registerComponentTrackingRecord);
router.get("/stats", getAllRecords);
router.get("/export", authenticateToken, exportComponentTracking);

export default router;
