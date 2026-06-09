import { Schema, model } from "mongoose";

const consultationLeadSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

export default model("ConsultationLead", consultationLeadSchema);
