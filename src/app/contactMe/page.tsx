import ContactForm from "@/components/ContactForm";
import { MotionDiv } from "@/components/MotionTags";
import { socialIcons } from "@/lib/data";

function ContactMe({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="w-full h-auto py-14 md:pb-24 flex flex-col items-center justify-start scroll-mt-16"
      ref={ref}
      id="contactMe"
    >
      <h1 className="text-4xl font-black text-center mb-12 tracking-tighter">
        Let&apos;s <span className="text-primary italic">Connect</span>
      </h1>

      <div className="flex flex-col w-full md:flex-row items-stretch px-6 max-w-7xl mx-auto gap-12">
        <MotionDiv className="flex flex-1 flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md flex flex-col items-start justify-center">
            <p className="text-foreground/80 font-medium text-lg leading-relaxed">
              Got a project idea, a question, or just want to say hello?
              I&apos;m open to collaborations, freelance opportunities, or even
              a friendly chat.
            </p>
            <p className="text-foreground/80 font-bold text-lg leading-relaxed mt-10 md:mt-28 mb-2">
              I&apos;m reachable on the following social platforms
            </p>
            <div className="mt-4 flex gap-6 md:gap-5 w-full items-center justify-start">
              {socialIcons.map(({ Icon, name, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-foreground/80 opacity-80 font-extrabold md:font-bold text-sm md:text-lg tracking-wide hover:underline hover:text-primary hover:opacity-100 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">{Icon}</span>
                  <span className="leading-none">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </MotionDiv>

        <div className="relative flex items-center justify-center py-8 md:py-0 md:px-4">
          {/* Vertical line for desktop */}
          <div className="hidden md:block w-px h-72 bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>
          
          {/* Horizontal line for mobile */}
          <div className="md:hidden w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent absolute"></div>
          
          <span className="absolute px-2 text-xs font-black bg-bgcolor py-1 border border-primary/10 rounded-full text-primary tracking-widest shadow-sm">
            OR
          </span>
        </div>

        <MotionDiv className="flex flex-1 flex-col items-center justify-center w-full">
          <div className="w-full max-w-md p-8 rounded-[2.5rem] bg-primary/5 border border-primary/15">
            <ContactForm />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default ContactMe;