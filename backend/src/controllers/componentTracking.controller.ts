import { Request, Response } from "express";
import { ComponentTracking } from "../models/ComponentTracking";
import { Parser } from "json2csv";

export const registerComponentTrackingRecord = async (
  req: Request,
  res: Response
) => {
  const { componentName, variant, action } = req.body;
  try {
    const newRecord = new ComponentTracking({
      componentName,
      variant,
      action,
    });
    await newRecord.save();
    res.status(201).json({
      message: "New Component Tracking Record created",
      payload: newRecord,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create record", error });
  }
};

export const getAllRecords = async (req: Request, res: Response) => {
  try {
    const getRecords = await ComponentTracking.find();
    res
      .status(200)
      .json({ message: "All Component Tracking Recods", payload: getRecords });
  } catch (error) {
    res.status(500).json({ message: "Failed to get records", error });
  }
};

export const exportComponentTracking = async (req: Request, res: Response) => {
  try {
    const data = await ComponentTracking.find().lean();

    if (!data.length) {
      res.status(404).json({ message: "No tracking data found." });
    }

    const fields = ["componentName", "variant", "action", "timestamp"];
    const options = { fields };

    const parser = new Parser(options);
    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment("component-tracking.csv");
    res.send(csv);
  } catch (error) {
    console.error("Export error:", error);
    res.status(500).json({ message: "Error exporting tracking data" });
  }
};
