import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./ui/SubmitButton";

type InputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

function Input({ name, placeholder, type = "text" }: InputProps) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      className="bg-bgcolor border border-foreground/10 rounded-2xl p-4 outline-none focus:border-primary/50 transition-all resize-none placeholder:text-foreground/40"
      placeholder={placeholder}
      required
    />
  );
}

function ContactForm() {
  return (
    <form action={sendEmail} className="flex flex-col space-y-4">
      <Input name="fullName" placeholder="Full Name" />
      <Input name="email" placeholder="Email Id" type="email" />
      <Input name="subject" placeholder="Subject" />
      <textarea
        id="message"
        name="message"
        rows={4}
        className="bg-bgcolor border border-foreground/10 rounded-2xl p-4 outline-none focus:border-primary/50 transition-all resize-none placeholder:text-foreground/40"
        placeholder="Message"
        required
      />
      <SubmitButton />
    </form>
  );
}

export default ContactForm;
