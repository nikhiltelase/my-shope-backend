import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter object only if email credentials are provided
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  try {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } catch (error) {
    console.log("⚠️  Email service not configured:", error.message);
  }
}

// Function to send email
const sendEmail = async (to, subject, text) => {
  if (!transporter) {
    console.log("⚠️  Email service not configured. Email not sent.");
    return false;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.log("Email send error:", error.message);
    return false;
  }
};

export default sendEmail;
