"use client";
import Icons from "@/components/Icons";
import { socialIcons } from "@/lib/Icons";
import { motion } from "motion/react";
import Form from "next/form";

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
        className="border-2 border-slate-300 rounded-md p-2"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

function ContactMe({ref}: {ref: React.RefObject<HTMLElement | null>}) {
  return (
    <motion.section
        className="w-full h-[100vh] md:flex-row scroll-mt-16" ref={ref}>
      {/* <h1 className="text-4xl text-center font-bold mt-8">Contact Me</h1> */}
      <div className="flex flex-col w-full h-[100vh] md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center space-y-16 w-1/2 h-[100vh]">
          <div className="w-3/5 p-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
            <p className="text-blue-100 font-semibold text-xl">
              Got a project idea, a question, or just want to say hello?
              I&apos;m open to collaborations, freelance opportunities, or even
              a friendly chat.
            </p>
          </div>
          <div className="w-3/5 p-8 rounded-md">
            {/* social icons like Github, LinkedIn, Twitter */}
            <p className="font-bold text-lg mb-2">
              I&apos;m reachable on the following social platforms.
            </p>
            <div className="flex gap-6 mt-4">
              <Icons IconsList={socialIcons} />
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="relative px-8 flex items-center justify-center md:py-48">
          {/* <!-- Vertical line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          {/* <!-- OR text in the middle --> */}
          <span className="absolute px-2 text-lg font-semibold bg-[#0a0a0a] p-2">
            OR
          </span>
        </div>

        {/* Contact Form */}
        <div className="flex flex-1 flex-col items-center justify-center space-y-16 w-1/2 h-[100vh]">
          <div className="w-3/5 p-8 rounded-md">
            <Form action="/search" className="flex flex-col space-y-4">
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
                  cols={4}
                  maxLength={300}
                  className="border-2 border-slate-300 rounded-md p-2"
                  placeholder="I feel that you are the right person for my project because..."
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-12 w-2/3 px-4 py-2 text-center border-2 border-slate-300 bg-slate-500 rounded-lg hover:bg-slate-700"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactMe;
