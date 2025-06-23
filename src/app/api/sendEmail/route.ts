import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');

type EmailPayload = {
  to: string;
  subject: string;
  html?: string;
  text?: string;
};

const sendEmail = async ({ to, subject, html, text }: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDR,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Brigcom Query`,
    to: `info@brigcom.com`,
    subject,
    html,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email: ");
    throw error;
  }
} 

export async function POST(req: Request) {
    const { to, subject, html, text } = await req.json();
    console.log(to + subject + html + text);
    
    const result = await sendEmail({ to, subject, html, text });
    console.log(result);
    
    return NextResponse.json({ success: true,});
}