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
      user: "",
      pass: "",
    },
  });

  const mailOptions = {
    from: `Brigcom Query`,
    to,
    subject,
    html,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
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