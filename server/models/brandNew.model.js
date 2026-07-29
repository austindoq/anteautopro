import { Schema, model } from "mongoose";

const brandNewSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    imagePublicId: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    vin: { type: String, required: true },
    description: { type: String, required: true },
    newStatus: Boolean,
  },
  { timestamps: true },
);

export default model("New", brandNewSchema);
