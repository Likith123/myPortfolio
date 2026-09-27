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
      <h1 className="text-4xl font-black text-center mb-12 tracking-tight text-foreground font-sans">
        Let&apos;s <span className="text-primary italic">Connect</span>
      </h1>

      <div className="flex flex-col w-full md:flex-row items-stretch px-6 max-w-7xl mx-auto gap-12">
        <MotionDiv className="flex flex-1 flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md flex flex-col items-start justify-center">
            <p className="text-foreground/90 font-medium text-lg leading-relaxed font-sans">
              Got a project idea, a question, or just want to say hello?
              I&apos;m open to collaborations, freelance opportunities, or even
              a friendly chat.
            </p>
            <p className="text-muted font-bold text-base md:text-lg mb-4 mt-8 font-sans">
              I&apos;m reachable on the following platforms:
            </p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {socialIcons.map(({ Icon, name, link }, index) => {
                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-panel-line bg-panel text-foreground font-semibold text-sm transition-all duration-300 group cursor-pointer hover:border-primary hover:text-primary hover:bg-panel/90 font-mono shadow-xs"
                  >
                    <span className="text-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all text-primary">
                      {Icon}
                    </span>
                    <span className="leading-none">{name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </MotionDiv>

        <div className="relative flex items-center justify-center py-8 md:py-0 md:px-4">
          {/* Vertical line for desktop */}
          <div className="hidden md:block w-px h-72 bg-linear-to-b from-transparent via-panel-line to-transparent"></div>
          
          {/* Horizontal line for mobile */}
          <div className="md:hidden w-full h-px bg-linear-to-r from-transparent via-panel-line to-transparent absolute"></div>
          
          <span className="absolute px-2.5 py-1 text-xs font-mono font-bold bg-bgcolor border border-panel-line rounded-full text-primary tracking-widest shadow-sm">
            OR
          </span>
        </div>

        <MotionDiv className="flex flex-1 flex-col items-center justify-center w-full">
          <div className="w-full max-w-md p-8 rounded-[2.5rem] glass-card border border-panel-line bg-panel">
            <ContactForm />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default ContactMe;