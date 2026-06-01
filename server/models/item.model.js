import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  model: { type: String, required: true },
  make: { type: String, required: true },
  price: { type: Number, required: true },
});

export default model("Item", itemSchema);
