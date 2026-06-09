import consultationLeadModel from "../models/consultationLead.model.js";

async function createConsultationLead(req, res) {
  //Validate incoming data
  const { name, phone, email, date } = req.body;

  if (!name || !phone || !email || !date) {
    res.status(400).json({
      message: "All fields are required for form submission.",
    });
  }

  //Create consultation document
  try {
    consultationLeadModel.create({ name, phone, email, date });
    res.status(200).json({ message: "Form submitted succesfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(`Could not save to database: ${error}`);
  }
}

export { createConsultationLead };
