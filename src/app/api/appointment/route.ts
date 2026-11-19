import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, treatment, date, message } = body;

    const targetEmail = siteConfig.email; // aayurhealthclinic@gmail.com

    console.log("=== NEW APPOINTMENT ENQUIRY DISPATCH ===");
    console.log(`Target Inbox : ${targetEmail}`);
    console.log(`Patient      : ${name}`);
    console.log(`Phone        : ${phone}`);
    console.log(`Email        : ${email || "Not Provided"}`);
    console.log(`Care         : ${treatment}`);
    console.log(`Date         : ${date}`);
    console.log(`Message      : ${message || "N/A"}`);
    console.log("========================================");

    const submissionTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // HTML Email Template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #FDFBF7; color: #2C1810; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(44, 24, 16, 0.1); overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #2E5A44; color: #ffffff; padding: 24px; text-align: center; }
        .header h2 { margin: 0; font-size: 22px; font-weight: 600; }
        .header p { margin: 4px 0 0 0; font-size: 13px; opacity: 0.85; }
        .content { padding: 28px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        .table td { padding: 12px 14px; border-bottom: 1px solid #F3EDE4; font-size: 14px; }
        .table td.label { font-weight: 600; color: #6E5D4F; width: 38%; background: #FAF7F2; border-radius: 6px; }
        .table td.value { color: #2C1810; }
        .badge { display: inline-block; background: #2E5A44; color: white; padding: 4px 10px; border-radius: 99px; font-size: 12px; font-weight: 600; }
        .footer { background: #FAF7F2; padding: 16px; text-align: center; font-size: 12px; color: #6E5D4F; border-top: 1px solid #F3EDE4; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${siteConfig.name}</h2>
          <p>New Appointment Consultation Booking</p>
        </div>
        <div class="content">
          <p style="font-size: 15px; margin-top: 0;">A new consultation booking request has been submitted:</p>
          <table class="table">
            <tr><td class="label">Patient Name</td><td class="value"><strong>${name}</strong></td></tr>
            <tr><td class="label">Contact Phone</td><td class="value"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td class="label">Patient Email</td><td class="value">${email ? `<a href="mailto:${email}">${email}</a>` : "Not Provided"}</td></tr>
            <tr><td class="label">Requested Care / Service</td><td class="value"><span class="badge">${treatment}</span></td></tr>
            <tr><td class="label">Preferred Date</td><td class="value"><strong>${date}</strong></td></tr>
            <tr><td class="label">Health Concerns / Notes</td><td class="value">${message || "None"}</td></tr>
            <tr><td class="label">Submitted At</td><td class="value">${submissionTime} IST</td></tr>
          </table>
        </div>
        <div class="footer">
          This is a direct notification from <a href="${siteConfig.url}">Aayur Kendra Website</a>.
        </div>
      </div>
    </body>
    </html>
    `;

    let emailSent = false;

    // Direct SMTP Email sending via Nodemailer
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || targetEmail;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "";

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Aayur Kendra Website" <${smtpUser}>`,
          to: targetEmail,
          replyTo: email || targetEmail,
          subject: `[New Appointment Request] ${name} - ${treatment}`,
          html: htmlContent,
        });

        emailSent = true;
        console.log("Appointment email dispatched directly via Nodemailer SMTP!");
      } catch (err) {
        console.error("Nodemailer SMTP dispatch error:", err);
      }
    } else {
      console.log("SMTP_PASS / GMAIL_APP_PASSWORD not configured. Appointment logged successfully.");
    }

    return NextResponse.json({
      success: true,
      delivered: emailSent,
      message: emailSent
        ? `Direct email sent successfully to ${targetEmail}`
        : `Enquiry recorded for ${targetEmail}`,
    });
  } catch (error) {
    console.error("Appointment route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process appointment" },
      { status: 500 }
    );
  }
}


