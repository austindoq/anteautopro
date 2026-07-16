import { Resend } from "resend";

const client = new Resend(process.env.RESEND_API_KEY);

//Consultation emails
export const sendConsultationEmails = async (leadData) => {
  const { name, email, phone, date, description } = leadData;
  try {
    //Ante's confirmation email
    await client.emails.send({
      from: "ante@anteautopro.ca",
      to: "ante.thompson@hotmail.com",
      subject: "You've got a new lead!",
      html: `<div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f1f3f5;
        padding: 24px;
        border-radius: 8px;
      "
    >
      <div
        style="
          background-color: #1985b4;
          padding: 16px;
          border-radius: 8px 8px 0 0;
        "
      >
        <h1
          style="color: #f1f3f5; margin: 0; font-size: 22px; text-align: center"
        >
          New Consultation Lead Received
        </h1>
      </div>
      <div
        style="
          background-color: #ffffff;
          padding: 24px;
          border-radius: 0 0 8px 8px;
        "
      >
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          <strong>${name}</strong> wants to meet with you on
          <strong>${date}</strong> for a 1-on-1.
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          <strong>Description:</strong> ${description}
        </p>
        <hr
          style="border: none; border-top: 1px solid #e9ecef; margin: 16px 0"
        />
        <h2 style="font-size: 18px; color: #1985b4; margin: 0 0 8px 0">
          Contact Info
        </h2>
        <p style="font-size: 16px; color: #343a40; margin: 4px 0">
          📞 ${phone}
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 4px 0">
          ✉️ ${email}
        </p>
      </div>
    </div>`,
    });
    //Client confirmation email
    await client.emails.send({
      from: "ante@anteautopro.ca",
      to: `${email}`,
      subject: "Booked for a 1-on-1 with Ante",
      html: `<div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f1f3f5;
        padding: 24px;
        border-radius: 8px;
      "
    >
      <div
        style="
          background-color: #1985b4;
          padding: 16px;
          border-radius: 8px 8px 0 0;
        "
      >
        <h1
          style="color: #f1f3f5; margin: 0; font-size: 22px; text-align: center"
        >
          Booked For A 1-On-1 With Ante
        </h1>
      </div>
      <div
        style="
          background-color: #ffffff;
          padding: 24px;
          border-radius: 0 0 8px 8px;
        "
      >
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          Hey ${name},
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          I look forward to meeting with you on <strong>${date}</strong> at the
          location below.
        </p>
        <div
          style="
            background-color: #f1f3f5;
            padding: 16px;
            border-radius: 8px;
            margin: 0 0 16px 0;
          "
        >
          <a
            href="https://www.google.com/maps/place/850+SW+Marine+Dr,+Vancouver,+BC+V6P+5Z1/@49.2056565,-123.1293107,1136m"
            target="_blank"
            style="
              color: #1985b4;
              font-size: 16px;
              text-decoration: none;
              font-weight: bold;
            "
          >
            📍 850 Southwest Marine Drive, Vancouver, British Columbia, V6P 5Z1
          </a>
        </div>
        <p style="font-size: 16px; color: #343a40; margin: 0 0 24px 0">
          I'll be reaching out to confirm before then! 😊
        </p>
        <hr
          style="border: none; border-top: 1px solid #e9ecef; margin: 16px 0"
        />
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          ~ Ante Thompson
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0">
          📞 <span style="font-style: italic">778-555-5555</span>
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0">
          ✉️ <span style="font-style: italic">ante@anteautopro.ca</span>
        </p>
      </div>
    </div>`,
    });
  } catch (error) {
    console.log(`Error sending email through Resend! ${error}`);
  }
};

//Appraisal Emails
export const sendAppraisalEmails = async (leadData) => {
  const { name, email, phone, date, make, model, year, odometer, accident } =
    leadData;
  try {
    //Ante's appraisal confirmation email
    await client.emails.send({
      from: "ante@anteautopro.ca",
      to: "ante.thompson@hotmail.com",
      subject: "You've got a new appraisal booking!",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f1f3f5; padding: 24px; border-radius: 8px;">
  <div style="background-color: #1985b4; padding: 16px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #f1f3f5; margin: 0; font-size: 22px; text-align: center;">New Appraisal Lead Received</h1>
  </div>
  <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px;">
    <p style="font-size: 16px; color: #343a40;">
      <strong>${name}</strong> wants to meet with you on <strong>${date}</strong> for an appraisal of their ${year} ${make} ${model}.
    </p>
    <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0;">
      <strong>Kilometers:</strong> ${odometer}
    </p>
    <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0;">
      <strong>Status:</strong> ${accident}
    </p>
    <hr style="border: none; border-top: 1px solid #e9ecef; margin: 16px 0;" />
    <h2 style="font-size: 18px; color: #1985b4; margin: 0 0 8px 0;">Contact Info</h2>
    <p style="font-size: 16px; color: #343a40; margin: 4px 0;">📞 ${phone}</p>
    <p style="font-size: 16px; color: #343a40; margin: 4px 0;">✉️ ${email}</p>
  </div>
</div>`,
    });
    //Client appraisal confirmation email
    await client.emails.send({
      from: "ante@anteautopro.ca",
      to: `${email}`,
      subject: "Booked for an appraisal with Ante",
      html: `<div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f1f3f5;
        padding: 24px;
        border-radius: 8px;
      "
    >
      <div
        style="
          background-color: #1985b4;
          padding: 16px;
          border-radius: 8px 8px 0 0;
        "
      >
        <h1
          style="color: #f1f3f5; margin: 0; text-align: center; font-size: 22px"
        >
          Booked For An Appraisal With Ante
        </h1>
      </div>
      <div
        style="
          background-color: #ffffff;
          padding: 24px;
          border-radius: 0 0 8px 8px;
        "
      >
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          Hey ${name},
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          I look forward to meeting with you on <strong>${date}</strong> to take
          a good look at your ${year} ${make} ${model} at the location below.
        </p>
        <div
          style="
            background-color: #f1f3f5;
            padding: 16px;
            border-radius: 8px;
            margin: 0 0 16px 0;
          "
        >
          <a
            href="https://www.google.com/maps/place/850+SW+Marine+Dr,+Vancouver,+BC+V6P+5Z1/@49.2056565,-123.1293107,1136m"
            target="_blank"
            style="
              color: #1985b4;
              font-size: 16px;
              text-decoration: none;
              font-weight: bold;
            "
          >
            📍 850 Southwest Marine Drive, Vancouver, British Columbia, V6P 5Z1
          </a>
        </div>
        <p style="font-size: 16px; color: #343a40; margin: 0 0 24px 0">
          I'll be reaching out to confirm before then! 😊
        </p>
        <hr
          style="border: none; border-top: 1px solid #e9ecef; margin: 16px 0"
        />
        <p style="font-size: 16px; color: #343a40; margin: 0 0 16px 0">
          ~ Ante Thompson
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0">
          📞 <span style="font-style: italic">778-555-5555</span>
        </p>
        <p style="font-size: 16px; color: #343a40; margin: 0">
          ✉️ <span style="font-style: italic">ante@anteautopro.ca</span>
        </p>
      </div>
    </div>`,
    });
  } catch (error) {
    console.log(`Error sending email through Resend! ${error}`);
  }
};
