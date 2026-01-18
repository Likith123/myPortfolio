"use server"
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const { data } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "likithadusumalli@gmail.com",
      subject: `New Message: ${subject || "No Subject"}`,
      replyTo: email,
      react: EmailTemplate({ fullName, email, subject, message }),
    });
    console.log("Email sent successfully", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
