import { Schema, model } from "mongoose";

const appraisalLeadSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: Stirng, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model("AppraisalLead", appraisalLeadSchema);
