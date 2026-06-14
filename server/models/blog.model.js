import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    body: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  { timestamps: true },
);

export default model("Blog", blogSchema);
