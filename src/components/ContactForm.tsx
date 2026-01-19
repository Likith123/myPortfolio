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
      className="w-full bg-bgcolor border border-foreground/10 rounded-2xl p-4 text-base outline-none focus:border-primary/50 transition-all placeholder:text-foreground/40"
      placeholder={placeholder}
      required
    />
  );
}

function ContactForm() {
  return (
    <form action={sendEmail} className="flex flex-col gap-4">
      <Input name="fullName" placeholder="Full Name" />
      <Input name="email" placeholder="Email Id" type="email" />
      <Input name="subject" placeholder="Subject" />
      <textarea
        id="message"
        name="message"
        rows={5}
        className="w-full bg-bgcolor border border-foreground/10 rounded-2xl p-4 text-base outline-none focus:border-primary/50 transition-all resize-none placeholder:text-foreground/40"
        placeholder="Message"
        required
      />
      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}

export default ContactForm;