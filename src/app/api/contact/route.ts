import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    const targetEmail = siteConfig.email; // aayurhealthclinic@gmail.com

    console.log("=== NEW CONTACT ENQUIRY DISPATCH ===");
    console.log(`Target Inbox : ${targetEmail}`);
    console.log(`Name         : ${name}`);
    console.log(`Phone        : ${phone}`);
    console.log(`Email        : ${email || "Not Provided"}`);
    console.log(`Message      : ${message}`);
    console.log("====================================");

    // 1. Dispatch via FormSubmit.co directly to targetEmail (aayurhealthclinic@gmail.com)
    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[General Website Inquiry] ${name}`,
          _template: "table",
          _captcha: "false",
          "Full Name": name,
          "Contact Phone": phone,
          "Email Address": email || "Not Provided",
          "Message": message,
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
            subject: `[General Website Inquiry] ${name}`,
            from_name: "Aayur Kendra Website",
            to_email: targetEmail,
            replyto: email || targetEmail,
            "Full Name": name,
            "Phone Number": phone,
            "Email Address": email || "Not Provided",
            "Message": message,
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
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
