import { MotionDiv, MotionSpan } from "@/components/MotionTags";
import RotatingText from "@/components/ui/RotatingText";
import { Download } from "lucide-react";
import HeroConsole from "@/components/HeroConsole";
import Link from "next/link";

export default function Home({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  const modes = ["Remote", "Hybrid", "Relocation"];
  return (
    <section
      className="flex flex-col-reverse md:flex-row w-full min-h-screen items-center justify-center scroll-mt-16 overflow-x-hidden"
      ref={ref}
      id="home"
    >
      <MotionDiv
        className="flex flex-col flex-1 justify-center w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-8 md:py-6 space-y-4"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="gap-1.5 md:gap-2 flex flex-col animate-in fade-in duration-1000">
          <h1 className="tracking-tight text-xl md:text-2xl font-sans">
            <span className="text-muted font-normal">Hi there, I&apos;m{" "}</span>
            <span className="text-foreground font-bold">Likith Naga Sai Adusumalli</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight font-sans">
            Full-Stack Engineer
          </h2>
          <div className="font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold text-primary flex items-center gap-2 pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Product Technical Analyst — EdgeVerve Systems
          </div>
        </div>

        {/* Quantified Proof Ledger */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 rounded-2xl bg-panel border border-panel-line backdrop-blur-md">
          <div className="flex flex-col">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight">4+ Years</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-muted font-medium uppercase tracking-wider leading-tight mt-0.5">
              Enterprise Exp
            </span>
          </div>
          <div className="flex flex-col border-x border-panel-line px-2 sm:px-3">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-primary tracking-tight">Finacle</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-muted font-medium uppercase tracking-wider leading-tight mt-0.5">
              Core Banking
            </span>
          </div>
          <div className="flex flex-col pl-1 sm:pl-2">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight">30+ Features</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-muted font-medium uppercase tracking-wider leading-tight mt-0.5">
              Delivered
            </span>
          </div>
        </div>

        <div className="space-y-2 text-sm md:text-[15px]">
          <p className="font-medium text-foreground leading-relaxed">
            Frontend-focused Full Stack Engineer specializing in{" "}
            <span className="text-primary font-semibold">React, Next.js, and TypeScript</span>,
            backed by enterprise banking backends in{" "}
            <span className="text-primary font-semibold">Java and Spring Boot</span>.
          </p>
          <p className="text-muted leading-relaxed text-xs sm:text-sm">
            Product Technical Analyst at <strong className="font-semibold text-foreground">EdgeVerve Systems</strong> (Finacle Core Banking Platform), building mission-critical UI architectures for global financial institutions and shipping production-ready SaaS platforms.
          </p>
        </div>

        <div className="text-sm md:text-base font-medium flex flex-wrap gap-2 items-center text-foreground pt-1">
          <span className="text-muted">Open to</span>
          <RotatingText modes={modes} />
          <span className="text-muted">roles worldwide.</span>
        </div>

        <div className="flex flex-row flex-wrap gap-3 sm:gap-4 pt-1">
          <Link
            href="/contactMe"
            className="font-sans px-6 sm:px-8 py-3 rounded-full text-background font-bold transition-all bg-primary hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:scale-95 text-center text-sm md:text-base cursor-pointer"
          >
            Let&apos;s Work Together
          </Link>

          <a
            href="/Likith_Adusumalli_Resume.pdf"
            download="Likith_Adusumalli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans group px-6 sm:px-8 py-3 border border-panel-line bg-panel/70 rounded-full font-bold text-foreground 
                       hover:bg-panel hover:border-primary hover:text-primary transition-all 
                       flex items-center justify-center cursor-pointer active:scale-95 text-sm md:text-base shadow-xs"
          >
            Resume / CV
            <MotionSpan
              className="ml-2"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Download size={16} />
            </MotionSpan>
          </a>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-1 items-center justify-center w-full md:w-1/2 p-6 md:p-8"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <HeroConsole />
      </MotionDiv>
    </section>
  );
}