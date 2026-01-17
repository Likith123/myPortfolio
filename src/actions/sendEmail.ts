"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["likithadusumalli@gmail.com"],
      subject: `New Message: ${subject || "No Subject"}`,
      replyTo: email,
      text: `From: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: "Failed to send message." };
  }
}