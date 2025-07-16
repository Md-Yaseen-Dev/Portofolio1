import nodemailer from "nodemailer";

// Use environment variables for security
const EMAIL_USER = process.env.EMAIL_USER || "mohammadyaseen.dev@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || ""; // Set your Gmail App Password in .env

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function sendContactEmail({ name, email, message }: { name: string; email: string; message: string }) {
  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_USER, // Send to self
    subject: `New Contact Message from ${name}`,
    text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h3>New Contact Message</h3><ul><li><b>Name:</b> ${name}</li><li><b>Email:</b> ${email}</li><li><b>Message:</b> ${message}</li></ul>`
  };

  return transporter.sendMail(mailOptions);
}
