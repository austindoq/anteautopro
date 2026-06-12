import { Resend } from "resend";

const client = new Resend(process.env.RESEND_API_KEY);

//Consultation emails
export const sendConsultationEmails = async (leadData) => {
  const { name, email, phone, date } = leadData;
  try {
    //Ante's confirmation email
    await client.emails.send({
      from: "onboarding@resend.dev",
      to: "austindoq@gmail.com",
      subject: "You've got a new lead!",
      html: `<h1>You've got a new lead,</h1><br/><h2><strong>${name}</strong> wants to meet with you on <strong>${date}</strong> for a 1-on-1.</h2><br/><h1><u>Contact:</u></h1><br/><h2>•Phone: ${phone}</h2><br/><h2>•Email: ${email}</h2>`,
    });
    //Client confirmation email
    await client.emails.send({
      from: "onboarding@resend.dev",
      to: "austindoq@gmail.com",
      subject: "Booked for a 1-on-1 with Ante",
      html: `<h1>Hey ${name},</h1><br/><h2>I look forward to meeting with you on ${date} at <a href="https://www.google.com/maps/place/850+SW+Marine+Dr,+Vancouver,+BC+V6P+5Z1/@49.2056565,-123.1293107,1136m" target="_blank">850 Southwest Marine Drive, Vancouver, British Columbia, V6P 5Z1</a> .<br/>I will be reaching out to confirm before then!<br/>~ Ante Thomspon</h2>`,
    });
  } catch (error) {
    console.log(`Error sending email through Resend! ${error}`);
  }
};

//Appraisal Emails
export const sendAppraisalEmails = async (leadData) => {
  const { name, email, phone, date, make, model, year } = leadData;
  try {
    //Ante's confirmation email
    await client.emails.send({
      from: "onboarding@resend.dev",
      to: "austindoq@gmail.com",
      subject: "You've got a new appraisal booking!",
      html: `<h1>You've got a new appraisal booking,</h1><br/><h2><strong>${name}</strong> wants to meet with you on <strong>${date}</strong> for an appraisal on their <strong>${year} ${make} ${model}</strong>.</h2><br/><h1><u>Contact:</u></h1><br/><h2>•Phone: ${phone}</h2><br/><h2>•Email: ${email}</h2>`,
    });
    //Client confirmation email
    await client.emails.send({
      from: "onboarding@resend.dev",
      to: "austindoq@gmail.com",
      subject: "Booked for an appraisal with Ante",
      html: `<h1>Hey ${name},</h1><br/><h2>I look forward to meeting with you on ${date} at <a href="https://www.google.com/maps/place/850+SW+Marine+Dr,+Vancouver,+BC+V6P+5Z1/@49.2056565,-123.1293107,1136m" target="_blank">850 Southwest Marine Drive, Vancouver, British Columbia, V6P 5Z1</a> for  better look at your ${year} ${make} ${model}.<br/>I will be reaching out to confirm before then!<br/>Thanks,<br/>~ Ante Thomspon</h2>`,
    });
  } catch (error) {
    console.log(`Error sending email through Resend! ${error}`);
  }
};
