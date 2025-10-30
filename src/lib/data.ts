import { Briefcase, GraduationCap, Mail } from "lucide-react";
import React from "react";
import { DiJava } from "react-icons/di";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
    SiC,
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiGit,
    SiGo,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

// Experience Data
const experiences = [
  {
    icon: React.createElement(GraduationCap),
    iconFillColor: "#16a34a",
    title: "B.Tech in Computer Science and Engineering",
    titleColor: "text-green-400",
    subtitle:
      "Velgapudi Ramakrishna Siddhartha Engineering College, Vijayawada, India",
    date: "2017 - 2021",
    description:
      "Graduated with distinction, specializing in software development and web technologies.",
  },
  {
    icon: React.createElement(Briefcase),
    iconFillColor: "#2563eb",
    title: "EdgeVerve Systems Limited",
    titleColor: "text-blue-400",
    subtitle: "Bangalore, India",
    date: "Oct 2021 - Present",
    roles: [
      {
        role: "Associate Product Developer",
        duration: "Oct 2021 - Dec 2023",
        responsibilities: [
          "Developed backend automation tools in Python & Node.js.",
          "Built reusable React components for internal dashboards.",
        ],
      },
      {
        role: "Product Developer",
        duration: "Dec 2023 - Present",
        responsibilities: [
          "Leading internal tool development using Next.js + Go.",
          "Optimized API performance by 25%.",
        ],
      },
    ],
  },
];

// Skills Data
const programmingLanguagesIcons = [
  {  name: "JavaScript", color: "hover:fill-[#f7df1e]" },
  {  name: "TypeScript", color: "hover:fill-[#3178c6]" },
  {  name: "Python", color: "hover:fill-[#3776ab]" },
  {  name: "Go", color: "hover:fill-[#00add8]" },
  {  name: "C", color: "hover:fill-[#010256]" },
  {  name: "C++", color: "hover:fill-[#010256]" },
  {  name: "Java", color: "hover:fill-[#010256]" },
];
const frameworksIcons = [
  {  name: "React", color: "hover:fill-[#61dafb]" },
  {  name: "Next.js", color: "hover:fill-[#000000]" },
  {  name: "Tailwind CSS", color: "hover:fill-[#38bdf8]" },
  {  name: "Node.js", color: "hover:fill-[#68a063]" },
  {  name: "Express.js", color: "hover:fill-[#000000]" },
];
const toolsIcons = [
  {  name: "Git", color: "hover:fill-[#f05033]" },
  {  name: "Docker", color: "hover:fill-[#2496ed]" },
  {  name: "MongoDB", color: "hover:fill-[#47a248]" },
  {  name: "PostgreSQL", color: "hover:fill-[#010256]" },
];
const databaseIcons = [
  {  name: "MongoDB", color: "hover:fill-[#47a248]" },
  {  name: "PostgreSQL", color: "hover:fill-[#010256]" },
];
const socialIcons = [
  {  name: "Twitter", color: "hover:text-neutral-500" },
  {  name: "LinkedIn", color: "hover:text-sky-500" },
  {  name: "GitHub", color: "hover:text-gray-500" },
  {  name: "Mail", color: "hover:text-red-500" },
];

// Projects Data
const projectsList = [
  {
    title: "Project Alpha",
    description:
      "An innovative project that revolutionizes technology. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    link: "https://example.com/project-alpha",
    image: "/undraw_coding_joxb.svg",
  },
  {
    title: "Project Beta",
    description:
      "A groundbreaking project that changes the way we interact. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    link: "https://example.com/project-beta",
    image: "/globe.svg",
  },
];

export {
    databaseIcons, experiences, frameworksIcons,
    programmingLanguagesIcons, projectsList, socialIcons,
    toolsIcons
};
