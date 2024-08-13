import sendEmail from "./emailService.js";

const sendPasswordChangeEmail = async (userEmail, userName) => {
  const subject = `Your My Shopee Password Has Been Changed`;

  const body = `
Hi ${userName} 👋,

We're letting you know that your password for your My Shopee account has been successfully changed. 

If you did not make this change, please contact our support team immediately for assistance.

Thank you for being a part of My Shopee! 😊

Best regards,  
The My Shopee Team

P.S. For your security, always keep your account details confidential.
  `;

  // send the email
  try {
    const response = await sendEmail(userEmail, subject, body);
    return response;
  } catch (error) {
    return false;
  }
};

export default sendPasswordChangeEmail;
