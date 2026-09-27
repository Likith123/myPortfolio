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
      className="w-full bg-bgcolor border border-panel-line text-foreground rounded-2xl p-4 text-sm md:text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all placeholder:text-muted/60 font-sans"
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
        className="w-full bg-bgcolor border border-panel-line text-foreground rounded-2xl p-4 text-sm md:text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-none placeholder:text-muted/60 font-sans"
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