import appraisalLeadModel from "../models/appraisalLead.model.js";
import { sendAppraisalEmails } from "../services/emailService.js";

async function createAppraisalLead(req, res) {
  //Validate incoming data
  const { name, phone, email, date, make, model, year, odometer, accident } =
    req.body;

  if (
    !name ||
    !phone ||
    !email ||
    !date ||
    !make ||
    !model ||
    !year ||
    !odometer ||
    !accident
  ) {
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
      odometer,
      accident,
    });
    await sendAppraisalEmails({
      name,
      phone,
      email,
      date,
      make,
      model,
      year,
      odometer,
      accident,
    });
    await res.status(201).json({
      message: `<div class="col-span-2 text-center">
      <h1 class="text-2xl font-semibold">
        ✅ Appraisal booked successfully for ${date}!
      </h1>
      <br />
      <h2 class="text-xl">An email has been sent to ${email}.</h2>
      <button
        id="continueButton"
        class="relative overflow-hidden bg-[#1985b4] tracking-widest p-2 mt-4 rounded-lg font-bold text-[#f1f3f5] active:bg-[#26b5ee] hover:cursor-pointer hover:bg-[#1985b4] hover:scale-105 ease-in-out duration-150 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#f1f3f5]/35 before:via-transparent before:to-transparent"
      >
        Continue
      </button>
    </div>`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(`Could not save to database: ${error}`);
  }
}

export { createAppraisalLead };
