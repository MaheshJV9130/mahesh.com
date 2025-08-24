import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();
  const transporter = nodemailer.createTransport({
    host: "gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.YOUR_EMAIL,
      pass: process.env.APP_PASS,
    },
  });
  (async () => {
    const info = await transporter.sendMail({
      from: `"${data.name}" ${data.email}`,
      to: `${process.env.DOMAIN}, ${process.env.YOUR_EMAIL}`,
      subject: "Get in touch",
      text: data.msg, 
      html: `<p>${data.msg}</p>`, 
    });

    console.log("Message sent:", info.messageId);
  })();
  return NextResponse.json({ message: "Sended" });
}
