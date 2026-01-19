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
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 tracking-tighter">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Turning &quot;What if?&quot; into <br />
              <span className="text-primary">Reliable Software.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p className="italic font-medium text-foreground/60 border-l-4 border-primary/30 pl-4">
              &quot;I didn&apos;t grow up dreaming of becoming a developer—but
              once I compiled my first Hello World, I never looked back.&quot;
            </p>

            <p>
              I&apos;m Likith, a Full-Stack Engineer with{" "}
              <span className="text-foreground font-semibold">
                4+ years of experience
              </span>{" "}
              who finds joy in the intersection of rigorous backend logic and
              fluid user experiences. My journey began with a need to organize
              my own study life, which led to a realization:
              <span className="text-foreground font-semibold">
                {" "}
                software is the ultimate tool for problem-solving.
              </span>
            </p>

            <p>
              Today, I specialize in building robust systems using{" "}
              <strong className="text-primary">Go and Java</strong> for
              performance-critical backends, while crafting high-performance
              front-ends with{" "}
              <strong className="text-primary">React and Next.js</strong>. I
              don&apos;t just write code; I architect solutions that are
              maintainable, scalable, and—most importantly—useful.
            </p>

            <p>
              Whether I&lsquo;m optimizing a PostgreSQL query or fine-tuning a
              Framer Motion animation, my goal is always the same:{" "}
              <span className="text-foreground font-medium underline decoration-primary/20">
                leave the codebase better than I found it.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-24 w-full">
          <div className="bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/10 shadow-sm">
            <h4 className="text-xl font-bold text-foreground mb-6">Snapshot</h4>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-bgcolor flex items-center justify-center shadow-sm text-primary">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase font-bold tracking-tighter">
                    Current Focus
                  </p>
                  <p className="text-foreground font-medium">
                    Distributed Systems & SaaS Architecture
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-bgcolor flex items-center justify-center shadow-sm text-primary">
                  ⚡
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase font-bold tracking-tighter">
                    Preferred Stack
                  </p>
                  <p className="text-foreground font-medium">
                    Go, Next.js, PostgreSQL, Java
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-bgcolor flex items-center justify-center shadow-sm text-primary">
                  ♟️
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase font-bold tracking-tighter">
                    Beyond the Code
                  </p>
                  <p className="text-foreground font-medium">
                    Chess enthusiast & Python automator
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-6 bg-accent/10 rounded-2xl border border-accent/20">
              <p className="text-sm text-foreground/70 italic">
                &apos;Currently open to remote or hybrid engineering roles where
                I can make a meaningful impact.&apos;
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv className="py-8 md:p-8 rounded-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center py-8">
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
