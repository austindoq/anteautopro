import { Schema, model } from "mongoose";

const tradeInSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    vin: { type: String, required: true },
    description: { type: String, required: true },
    newStatus: false,
  },
  { timestamps: true },
);

export default model("Trade", tradeInSchema);
