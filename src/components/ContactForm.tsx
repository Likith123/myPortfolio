import Form from "next/form";
import { IoSend } from "react-icons/io5";

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
    <Form action="#" className="flex flex-col space-y-4">
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
      <button
        type="submit"
        className="group w-full py-4 bg-primary/85 text-bgcolor font-black tracking-widest text-sm uppercase rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 mt-4 hover:-translate-y-0.5 active:scale-[0.98] hover:bg-primary/80 transition-all"
      >
        Submit
        <IoSend className="w-4 h-4 -rotate-12 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </Form>
  );
}

export default ContactForm;
