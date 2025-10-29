"use client";
import {
  databaseIcons,
  frameworksIcons,
  programmingLanguagesIcons,
  toolsIcons,
} from "@/lib/Icons";
import { motion } from "motion/react";

import Icons from "@/components/Icons";

import ExperienceTimeline from "@/components/ui/Timeline";

function About({ref}: {ref: React.RefObject<HTMLElement | null>}) {
  return (
    <motion.section
        className="p-8 flex flex-col gap-8 scroll-mt-16"
        ref={ref}
      >
      <h1 className="text-3xl font-bold text-center mt-8">About Me</h1>
      {/* About Myself */}
      <div className="bg-slate-600 p-8 rounded-md">
        <div className="font-medium text-lg italic text-slate-300 pb-4">
          **I didn&apos;t grow up dreaming of becoming a developer — but once I
          started, I never looked back.**
        </div>
        <div className="pb-4">
          Hi, I&apos;m Likith — a full-stack developer with a curious mind, a
          love for clean code, and a habit of asking “what if we built this?”
          more often than I probably should.
        </div>

        <div className="pb-4">
          My coding journey began with a simple problem I wanted to solve —
          organizing study notes with a self-built app. That tiny project opened
          the door to something bigger: a passion for building digital tools
          that are simple, fast, and actually useful.
        </div>

        <div className="pb-4">
          Since then, I&apos;ve been exploring the full web stack — crafting
          intuitive front-ends with React and Next.js, and building reliable
          back-ends with Node.js, Express, PostgreSQL. I enjoy working across
          the stack because it lets me see the whole picture and fine-tune the
          details that make a product feel just right.
        </div>

        <div className="pb-4">
          I&apos;ve led development on several SaaS tools used by thousands,
          contributing both to robust REST APIs and intuitive front-end
          experiences. I believe in writing clean, maintainable code and always
          leave the repo better than I found it.
        </div>

        <div>
          Outside of work, I enjoy reading about software architecture,
          automating things with Python, and playing chess. I&apos;m currently
          open to freelance and full-time roles — feel free to reach out!
        </div>
      </div>

      {/* Skills */}
      <div className="bg-slate-600 p-8 rounded-md">
        <h2 className="text-2xl font-bold text-center py-8">Skills</h2>
        <div className="flex flex-col justify-around items-center space-y-4 md:flex-row md:space-x-4">
          {/* Languages */}
          <Icons IconsList={programmingLanguagesIcons} />

          {/* Frontend */}
          <Icons IconsList={frameworksIcons} />

          {/* Backend */}

          <Icons IconsList={toolsIcons} />

          {/* Database */}
          <Icons IconsList={databaseIcons} />
        </div>
      </div>

      {/* Experience */}
      <div className="bg-slate-600 p-8 rounded-md">
        <ExperienceTimeline />
      </div>
    </motion.section>
  );
}

export default About;
