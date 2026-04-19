import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
import fs from "fs";

async function updateTemplateHelper(templatePath, toReplaceObject) {
  let templateContent = await fs.promises.readFile(templatePath, "utf-8");
  const keyArrs = Object.keys(toReplaceObject);
  keyArrs.forEach((key) => {
    templateContent = templateContent.replace(
      `#{${key}}`,
      toReplaceObject[key],
    );
  });
  return templateContent;
}

async function emailSender(templatePath, recieverEmail, toReplaceObject) {
  try {
    const content = await updateTemplateHelper(templatePath, toReplaceObject);
    // thorugh which service you have to send the mail
    // const sendGridDetails = {
    //     host: "smtp.sendgrid.net",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: "apikey",
    //         pass: process.env.SENDGRID_API_KEY
    //     }
    // }
    // Change your transporter details to this:
    const gmailDetails = {
      service: "gmail",
      auth: {
        user: "ravi.kumar115132@gmail.com", // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // The 16-character App Password
      },
    };

    const msg = {
      to: recieverEmail,
      from: "ravi.kumar115132@gmail.com", // Change to your verified sender
      subject: "Sending First Email",
      text: "",
      html: content,
    };
    // const transporter = nodemailer.createTransport(sendGridDetails);
    const transporter = nodemailer.createTransport(gmailDetails);
    await transporter.sendMail(msg);
  } catch (err) {
    console.log("email not send because of the errro", err);
  }
}

export default emailSender;
