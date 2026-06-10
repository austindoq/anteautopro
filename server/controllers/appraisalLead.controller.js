import appraisalLeadModel from "../models/appraisalLead.model.js";

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
    appraisalLeadModel.create({ name, phone, email, date, make, model, year });

    res
      .status(200)
      .json({ message: `Appraisal booked successfully for ${date}! ✅` });
  } catch (error) {
    console.log(error);
    res.status(500).json(`Could not save to database: ${error}`);
  }
}

export { createAppraisalLead };
