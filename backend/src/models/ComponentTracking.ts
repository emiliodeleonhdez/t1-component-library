import mongoose, { Schema, Document } from "mongoose";

export interface IComponentTracking {
  componentName: string;
  variant: string;
  action: string;
  timestamp: Date;
}

const ComponentTrackingSchema: Schema = new Schema(
  {
    componentName: { type: String, required: true },
    variant: { type: String, required: true },
    action: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

export const ComponentTracking = mongoose.model<IComponentTracking>(
  "ComponentTracking",
  ComponentTrackingSchema
);
