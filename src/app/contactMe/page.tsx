import { socialIcons } from "@/lib/data";
import Form from "next/form";

import Icons from "@/components/Icons";
import { MotionDiv } from "@/components/MotionTags";

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

function Input({ name, label, placeholder, type = "text" }: InputProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="bg-bgcolor border border-foreground/10 rounded-2xl p-4 outline-none focus:border-primary/50 transition-all resize-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

function ContactMe({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="w-full h-auto py-16 md:pb-24 flex flex-col items-center justify-start scroll-mt-16 bg-bgcolor"
      ref={ref}
      id="contactMe"
    >
      <h2 className="text-4xl font-black text-center mb-12 tracking-tighter">
        Let&apos;s <span className="text-primary italic">Connect</span>
      </h2>

      <div className="flex flex-col w-full md:flex-row items-stretch px-6 max-w-7xl mx-auto gap-12">
        <MotionDiv className="flex flex-1 flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md">
            <p className="text-foreground/80 font-medium text-lg leading-relaxed">
              Got a project idea, a question, or just want to say hello? 
              I&apos;m open to collaborations, freelance opportunities, or even a friendly chat.
            </p>
            <p className="text-foreground/80 font-medium text-lg leading-relaxed mt-16 mb-2">
              I&apos;m reachable on the following social platforms.
            </p>
            <div className="mt-4">
               <Icons IconsList={socialIcons} groupTitle="Social" />
            </div>
          </div>
        </MotionDiv>

        <div className="relative hidden md:flex items-center justify-center px-4">
          <div className="w-px h-72 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <span className="absolute px-2 text-xs font-black bg-bgcolor py-1 border border-primary/10 rounded-full text-primary tracking-widest shadow-sm">
            OR
          </span>
        </div>

        <MotionDiv className="flex flex-1 flex-col items-center justify-center w-full">
           <div className="w-full max-w-md p-8 rounded-[2.5rem] bg-primary/[0.02] border border-primary/10">
            <Form action="#" className="flex flex-col space-y-4">
              <Input name="fullName" label="Full Name" placeholder="John Doe" />
              <Input
                name="email"
                label="Email Id"
                placeholder="johndoe@gmail.com"
                type="email"
              />
              <div className="flex flex-col gap-0.5">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-bgcolor border border-foreground/10 rounded-2xl p-4 outline-none focus:border-primary/50 transition-all resize-none placeholder:text-foreground/40"
                  placeholder="I feel that you are the right person for my project because..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-bgcolor font-bold rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform uppercase tracking-widest text-[10px]"
              >
                Submit
              </button>
            </Form>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default ContactMe;
