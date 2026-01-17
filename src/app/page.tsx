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
      className="flex w-full h-screen items-center justify-center scroll-mt-16 bg-linear-to-b from-bgcolor/90 to-bgcolor"
      ref={ref}
      id="home"
    >
      <MotionDiv
        className="flex flex-col flex-1 justify-center w-1/2 px-16 py-8 space-y-8"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl gap-4 flex flex-col ">
          <h1>
            <span className="opacity-80">Hi there, I&apos;m{" "}</span>
            <span className="text-primary/90 font-bold">Likith Adusumalli</span>
          </h1>
          <p className="text-5xl font-bold bg-linear-to-b from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Full-Stack Developer
          </p>
        </span>
        <p className="font-medium">
          I bridge the gap between complex backend logic and seamless frontend
          experiences <br />
          using{" "}
          <span className="text-primary/90 font-semibold">
            MERN, Next.js, Go, and Java
          </span>
          .
        </p>
        <p>
          I build scalable, user-centric web applications that bridge the gap
          between complex backend logic and seamless frontend experiences.
          Currently focused on crafting clean code and solving real-world
          problems with the MERN stack.
        </p>

        <p className="text-lg font-medium items-center">
          Open to <RotatingText modes={modes} /> opportunities globally.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          <Link
            href="/contactMe"
            className="px-8 py-3 rounded-full text-white font-bold transition-all bg-gradient-to-r from-primary/90 to-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 text-center"
          >
            Let&apos;s Work Together
          </Link>

          <a
            href="/Likith_Adusumalli_Resume.pdf"
            download="Likith_Adusumalli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border-2 border-primary/20 rounded-full font-bold text-primary 
                     hover:bg-primary/5 hover:border-primary transition-all 
                     flex items-center justify-center cursor-pointer active:scale-95"
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
        className="flex flex-1 items-center justify-center w-1/2 h-screen"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* 3 / 4 cards */}
        <div className="relative flex justify-center">
          <Image
            src="/undraw_coding_joxb.svg"
            alt="SVG"
            height={400}
            width={400}
          ></Image>
        </div>
      </MotionDiv>
    </section>
  );
}
