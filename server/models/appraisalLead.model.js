import { Schema, model } from "mongoose";

const appraisalLeadSchema = new Schema(
  {
    name: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    date: { type: String, required: true, trim: true },
    make: { type: String, required: true, lowercase: true, trim: true },
    model: { type: String, required: true, lowercase: true, trim: true },
    year: { type: Number, required: true, trim: true },
  },
  { timestamps: true },
);

export default model("AppraisalLead", appraisalLeadSchema);
