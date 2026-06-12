import consultationLeadModel from "../models/consultationLead.model.js";
import { sendConsultationEmails } from "../services/emailService.js";

async function createConsultationLead(req, res) {
  //Validate incoming data
  const { name, phone, email, date } = req.body;

  if (!name || !phone || !email || !date) {
    return res.status(400).json({
      message: "All fields are required for form submission.",
    });
  }

  try {
    //Create consultation document
    await consultationLeadModel.create({ name, phone, email, date });

    //Send confirmation emails through Resend
    await sendConsultationEmails({ name, phone, email, date });
    res.status(201).json({
      message: `1-on-1 booked successfully for ${date}! ✅ A confirmation email has been sent to ${email}.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(`Could not save to database: ${error}`);
  }
}

export { createConsultationLead };
