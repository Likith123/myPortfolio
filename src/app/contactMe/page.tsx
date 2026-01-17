import ContactForm from "@/components/ContactForm";
import Icons from "@/components/Icons";
import { MotionDiv } from "@/components/MotionTags";
import { socialIcons } from "@/lib/data";

function ContactMe({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="w-full h-auto py-14 md:pb-24 flex flex-col items-center justify-start scroll-mt-16 bg-bgcolor"
      ref={ref}
      id="contactMe"
    >
      <h1 className="text-4xl font-black text-center mb-12 tracking-tighter">
        Let&apos;s <span className="text-primary italic">Connect</span>
      </h1>

      <div className="flex flex-col w-full md:flex-row items-stretch px-6 max-w-7xl mx-auto gap-12">
        <MotionDiv className="flex flex-1 flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md flex flex-col items-center justify-center">
            <p className="text-foreground/80 font-medium text-lg leading-relaxed">
              Got a project idea, a question, or just want to say hello?
              I&apos;m open to collaborations, freelance opportunities, or even
              a friendly chat.
            </p>
            <p className="text-foreground/80 font-medium text-lg leading-relaxed mt-16 mb-2">
              I&apos;m reachable on the following social platforms.
            </p>
            <div className="mt-4">
              <Icons
                IconsList={socialIcons}
                groupTitle="Social"
                width={500}
                height={160}
                flexStyle="flex-wrap md:flex-nowrap"
              />
            </div>
          </div>
        </MotionDiv>

        <div className="relative hidden md:flex items-center justify-center px-4">
          <div className="w-px h-72 bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>
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
