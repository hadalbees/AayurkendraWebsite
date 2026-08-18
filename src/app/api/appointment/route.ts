import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

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

    // 1. Dispatch via FormSubmit.co directly to targetEmail (aayurhealthclinic@gmail.com)
    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[New Appointment] ${name} - ${treatment}`,
          _template: "table",
          _captcha: "false",
          "Patient Name": name,
          "Contact Phone": phone,
          "Patient Email": email || "Not Provided",
          "Requested Care / Therapy": treatment,
          "Preferred Date": date,
          "Health Notes": message || "None",
        }),
      });
    } catch (err) {
      console.error("FormSubmit dispatch error:", err);
    }

    // 2. Dispatch via Web3Forms if key is available
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    if (accessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[New Appointment Request] ${name} - ${treatment}`,
            from_name: "Aayur Kendra Website",
            to_email: targetEmail,
            replyto: email || targetEmail,
            "Patient Name": name,
            "Phone Number": phone,
            "Patient Email": email || "Not Provided",
            "Requested Care / Therapy": treatment,
            "Preferred Date": date,
            "Health Concerns": message || "None",
          }),
        });
      } catch (err) {
        console.error("Web3Forms dispatch error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Enquiry processed for ${targetEmail}`,
    });
  } catch (error) {
    console.error("Appointment route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process appointment" },
      { status: 500 }
    );
  }
}
