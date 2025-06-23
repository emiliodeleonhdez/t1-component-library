import { Router } from "express";
import {
  registerComponentTrackingRecord,
  getAllRecords,
  exportComponentTracking,
} from "../controllers/componentTracking.controller";

const router = Router();

router.post("/track", registerComponentTrackingRecord);
router.get("/stats", getAllRecords);
router.get("/export", exportComponentTracking);

export default router;
