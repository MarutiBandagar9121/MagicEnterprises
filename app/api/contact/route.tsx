import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.error("Sending email!");
    const body = await req.json();

    const { name, email, phone, message, services } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.error("email body: ",body);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: process.env.CONTACT_RECEIVER_EMAIL as string,
      replyTo: email,
      subject: `New Contact Query from ${name} for magicarts enterprises`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p><strong>Services Required:</strong></p>
          <p>${services}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend email error:", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
