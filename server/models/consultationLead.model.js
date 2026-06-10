import { Schema, model } from "mongoose";

const consultationLeadSchema = new Schema(
  {
    name: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    date: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export default model("ConsultationLead", consultationLeadSchema);
