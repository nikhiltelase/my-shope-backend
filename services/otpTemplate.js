import sendEmail from "./emailService.js";

const sendOtpEmail = async (userEmail, userName, otp) => {
  const subject = `Your OTP ${otp} for My Shopee Account`;

  const body = `
Hi ${userName} 👋,

We received a request to reset your password for your My Shopee account. Please use the One-Time Password (OTP) below to proceed:

🎯 Your OTP Code: ${otp}

⏰ This code is valid for the next 10 minutes. 

If you didn't request this, simply ignore this email or contact our support team for assistance.

Thank you for being a part of My Shopee! 😊

Best regards,  
The My Shopee Team

P.S. For your security, never share your OTP with anyone. 
  `;

  // send the email
  try {
    const response = await sendEmail(userEmail, subject, body);
    return response;
  } catch (error) {
    return false;
  }
};

export default sendOtpEmail;
