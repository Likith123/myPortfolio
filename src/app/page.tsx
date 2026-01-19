import { MotionDiv, MotionSpan } from "@/components/MotionTags";
import RotatingText from "@/components/ui/RotatingText";
import { Download } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  const modes = ["Remote", "Hybrid", "On-site"];
  return (
    <section
      className="flex flex-col-reverse md:flex-row w-full min-h-screen items-center justify-center scroll-mt-16 overflow-x-hidden"
      ref={ref}
      id="home"
    >
      <MotionDiv
        className="flex flex-col flex-1 justify-center w-full md:w-1/2 px-6 md:px-16 py-12 md:py-8 space-y-6 md:space-y-8"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl md:text-3xl gap-2 md:gap-4 flex flex-col">
          <h1>
            <span className="opacity-80">Hi there, I&apos;m{" "}</span>
            <span className="text-primary/90 font-bold">Likith Adusumalli</span>
          </h1>
          <p className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary/80 via-primary to-accent/80 bg-clip-text text-transparent leading-tight">
            Full-Stack Developer
          </p>
        </div>
        <div className="space-y-4 text-sm md:text-base">
            <p className="font-medium">
              I bridge the gap between complex backend logic and seamless frontend
              experiences using{" "}
              <span className="text-primary/90 font-semibold">
                MERN, Next.js, Go, and Java
              </span>.
            </p>
            <p className="opacity-90">
              I build scalable, user-centric web applications. Currently focused on crafting clean code and solving real-world
              problems with the MERN stack.
            </p>
        </div>

        <p className="text-base md:text-lg font-medium flex flex-wrap gap-1 items-center">
          Open to <RotatingText modes={modes} /> opportunities globally.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-4">
          <Link
            href="/contactMe"
            className="px-8 py-4 md:py-3 rounded-full text-white font-bold transition-all bg-linear-to-r from-primary/90 to-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 text-center w-full sm:w-auto"
          >
            Let&apos;s Work Together
          </Link>

          <a
            href="/Likith_Adusumalli_Resume.pdf"
            download="Likith_Adusumalli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 md:py-3 border-2 border-primary/20 rounded-full font-bold text-primary 
                       hover:bg-primary/5 hover:border-primary transition-all 
                       flex items-center justify-center cursor-pointer active:scale-95 w-full sm:w-auto"
          >
            Resume
            <MotionSpan
              className="ml-2"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Download size={20} />
            </MotionSpan>
          </a>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-1 items-center justify-center w-full md:w-1/2 p-8 md:h-screen"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex justify-center w-full max-w-[300px] md:max-w-[400px]">
          <Image
            src="/undraw_coding_joxb.svg"
            alt="SVG"
            height={400}
            width={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </MotionDiv>
    </section>
  );
}