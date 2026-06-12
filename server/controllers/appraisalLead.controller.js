import appraisalLeadModel from "../models/appraisalLead.model.js";
import { sendAppraisalEmails } from "../services/emailService.js";

async function createAppraisalLead(req, res) {
  //Validate incoming data
  const { name, phone, email, date, make, model, year } = req.body;

  if (!name || !phone || !email || !date || !make || !model || !year) {
    return res
      .status(400)
      .json({ message: "All fields are required for form submission." });
  }

  //Create appraisal document
  try {
    await appraisalLeadModel.create({
      name,
      phone,
      email,
      date,
      make,
      model,
      year,
    });
    await sendAppraisalEmails({ name, phone, email, date, make, model, year });
    await res
      .status(201)
      .json({ message: `Appraisal booked successfully for ${date}! ✅` });
  } catch (error) {
    console.log(error);
    res.status(500).json(`Could not save to database: ${error}`);
  }
}

export { createAppraisalLead };
