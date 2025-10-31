import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import MotionDiv from "@/components/MotionDiv";
import { projectsList } from "@/lib/data";

function Projects({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="p-8 flex flex-col gap-8 scroll-mt-16"
      ref={ref}
      id="projects"
    >
      <h1 className="text-3xl font-bold text-center mt-8">Projects</h1>
      <MotionDiv className="flex flex-col items-center justify-center gap-4">
        {/* Project listings will go here */}
        {projectsList.map((project, index) => (
          <div
            key={index}
            className={`w-9/10 border-1 border-gray-300 flex p-8 rounded-md ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex-3 flex flex-col justify-center">
              <h2 className="text-2xl font-bold pb-2">{project.title}</h2>
              <p className="italic text-gray-500 pb-2">{project.description}</p>
              <div className="flex gap-8 text-lg items-center mt-4">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Project </span>
                  <span>
                    <LinkIcon className="size-6" />
                  </span>
                </Link>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Code </span>
                  <span>
                    <FaGithub className="size-6" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex-2 flex justify-center items-center">
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={200}
              />
            </div>
          </div>
        ))}
      </MotionDiv>
    </section>
  );
}

export default Projects;
