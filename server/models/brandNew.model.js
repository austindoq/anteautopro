import { Schema, model } from "mongoose";

const brandNewSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    imagePublicId: { type: String, required: true },
    make: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    drive: { type: String, required: true },
    transmission: { type: String, required: true },
    vin: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    newStatus: Boolean,
  },
  { timestamps: true },
);

export default model("New", brandNewSchema);
