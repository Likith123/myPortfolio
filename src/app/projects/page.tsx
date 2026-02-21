import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { MotionDiv } from "@/components/MotionTags";
import { projectsList } from "@/lib/data";

function Projects({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="px-6 md:px-8 py-8 flex flex-col items-center gap-8 scroll-mt-16"
      ref={ref}
      id="projects"
    >
      <h1 className="text-3xl md:text-4xl font-black text-center mt-8 mb-6 md:mb-12 tracking-tighter">
        My <span className="text-primary italic">Projects</span>
      </h1>

      <div className="flex flex-col gap-8 md:gap-12 w-full max-w-5xl">
        {projectsList.map((project, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-6 rounded-3xl md:rounded-4xl border border-foreground/5 bg-primary/5 hover:border-primary/20 transition-all duration-300 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-2/5 group">
              <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden bg-bgcolor border border-foreground/5 shadow-inner">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 translate-x-4 translate-y-4 scale-95 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-3 text-center md:text-left px-1 md:px-2">
              <div className="space-y-0.5">
                <span className="text-primary font-black text-[9px] tracking-[0.2em] uppercase opacity-60">
                  Project {index + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-medium line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 font-bold text-[10px] md:text-[11px] uppercase tracking-widest text-primary hover:opacity-70 transition-all"
                >
                  <LinkIcon className="size-3.5" />
                  <span>Live Demo</span>
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 font-bold text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/90 hover:text-foreground/70 transition-all"
                >
                  <FaGithub className="size-4" />
                  <span>Source</span>
                </Link>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

export default Projects;
