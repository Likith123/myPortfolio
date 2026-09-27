import Icons from "@/components/Icons";
import { MotionDiv } from "@/components/MotionTags";
import ExperienceTimeline from "@/components/ui/Timeline";
import {
  backEndIcons,
  frontEndIcons,
  programmingLanguagesIcons,
} from "@/lib/data";

function About({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="p-6 md:p-16 flex flex-col gap-8 scroll-mt-16"
      ref={ref}
      id="about"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 tracking-tight font-sans text-foreground">
        About <span className="text-primary italic">Me</span>
      </h1>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
      >
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight font-sans">
              Turning &quot;What if?&quot; into <br />
              <span className="text-primary">Reliable Software.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg text-muted leading-relaxed">
            <p className="italic font-medium text-foreground/90 border-l-2 border-primary pl-4">
              &quot;Frontend-focused Full Stack Engineer passionate about building clean UI,
              performant systems, and impactful enterprise products.&quot;
            </p>

            <p>
              I&apos;m <span className="text-foreground font-semibold">Likith Naga Sai Adusumalli</span>,
              a Frontend-focused Full Stack Engineer with{" "}
              <span className="text-foreground font-semibold font-mono">4+ years of experience</span>{" "}
              building enterprise banking interfaces and modern web applications.
              Specialized in <strong className="text-primary">React, Next.js, and TypeScript</strong> with
              deep expertise in designing responsive UI systems and scalable frontend architectures.
            </p>

            <p>
              At <strong className="text-foreground font-semibold">EdgeVerve Systems Ltd</strong>, I engineer core solutions for the{" "}
              <strong className="text-primary">Finacle Core Banking Platform</strong> used by financial institutions worldwide.
              I have delivered <strong className="text-foreground font-semibold font-mono">30+ enterprise UI features</strong>, designed complex
              banking workflows, automated CodeGen tooling to cut repository size by <strong className="text-foreground font-semibold font-mono">50%</strong>,
              and resolved <strong className="text-foreground font-semibold font-mono">140+ mission-critical production defects</strong>.
            </p>

            <p>
              On the full-stack spectrum, I build production-ready SaaS platforms with{" "}
              <strong className="text-primary">Next.js, Prisma, PostgreSQL, Better Auth, and Vercel</strong>,
              complemented by strong backend capabilities in{" "}
              <strong className="text-primary">Java, Spring Boot, and Node.js</strong>.
              I have also solved <span className="text-foreground font-semibold font-mono">150+ algorithmic problems on LeetCode</span>.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-24 w-full">
          <div className="glass-card rounded-[2.5rem] p-6 md:p-8 border border-panel-line bg-panel">
            <h4 className="text-xl font-bold text-foreground mb-6 font-sans">Snapshot</h4>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-panel flex items-center justify-center shadow-sm text-primary border border-panel-line">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider font-mono">
                    Current Role
                  </p>
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    Product Technical Analyst @ EdgeVerve (Finacle)
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-panel flex items-center justify-center shadow-sm text-primary border border-panel-line">
                  ⚡
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider font-mono">
                    Core Stack
                  </p>
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    React, Next.js, TypeScript, Java, Spring Boot
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/15 flex items-center justify-center shadow-sm text-primary border border-primary">
                  🏆
                </div>
                <div>
                  <p className="text-xs text-primary uppercase font-bold tracking-wider font-mono">
                    Recognition
                  </p>
                  <p className="text-foreground font-medium text-sm sm:text-base flex items-center gap-2">
                    Over-Achiever of the Year (2023)
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/40 font-bold">Award</span>
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-panel flex items-center justify-center shadow-sm text-primary border border-panel-line">
                  🎓
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider font-mono">
                    Education
                  </p>
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    B.Tech CSE, VRSEC (CGPA: 8.1 / 10)
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-panel flex items-center justify-center shadow-sm text-primary border border-panel-line">
                  💡
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider font-mono">
                    Algorithmic Edge
                  </p>
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    150+ LeetCode Problems Solved
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-5 bg-bgcolor rounded-2xl border border-panel-line">
              <p className="text-xs sm:text-sm text-muted italic">
                &apos;Open to remote, hybrid, and relocation engineering roles worldwide.&apos;
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv className="py-8 md:p-8 rounded-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center py-8 text-foreground font-sans">
          My <span className="text-primary italic">Skills</span>
        </h1>
        <div className="flex flex-col gap-8 md:flex-row md:justify-around md:items-start md:space-x-4">
          <Icons IconsList={programmingLanguagesIcons} groupTitle="Languages" />
          <Icons IconsList={frontEndIcons} groupTitle="Frontend" />
          <Icons IconsList={backEndIcons} groupTitle="Backend" />
        </div>
      </MotionDiv>

      <div className="py-8 md:p-8 overflow-x-hidden">
        <ExperienceTimeline />
      </div>
    </section>
  );
}

export default About;
