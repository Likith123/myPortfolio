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
  {
    color: "hover:fill-[#f7df1e]",
    Icon: React.createElement(SiJavascript),
    name: "JavaScript",
  },
  {
    color: "hover:fill-[#3178c6]",
    Icon: React.createElement(SiTypescript),
    name: "TypeScript",
  },
  {
    color: "hover:fill-[#3776ab]",
    Icon: React.createElement(SiPython),
    name: "Python",
  },
  {
    color: "hover:fill-[#00add8]",
    Icon: React.createElement(SiGo),
    name: "Go",
  },
  { color: "hover:fill-[#010256]", Icon: React.createElement(SiC), name: "C" },
  {
    color: "hover:fill-[#010256]",
    Icon: React.createElement(SiCplusplus),
    name: "C++",
  },
  {
    color: "hover:fill-[#010256]",
    Icon: React.createElement(DiJava),
    name: "Java",
  },
];
const frameworksIcons = [
  {
    color: "hover:fill-[#61dafb]",
    Icon: React.createElement(SiReact),
    name: "React",
  },
  {
    color: "hover:fill-[#000000]",
    Icon: React.createElement(SiNextdotjs),
    name: "Next.js",
  },
  {
    color: "hover:fill-[#38bdf8]",
    Icon: React.createElement(SiTailwindcss),
    name: "Tailwind CSS",
  },
  {
    color: "hover:fill-[#68a063]",
    Icon: React.createElement(SiNodedotjs),
    name: "Node.js",
  },
  {
    color: "hover:fill-[#000000]",
    Icon: React.createElement(SiExpress),
    name: "Express.js",
  },
];
const toolsIcons = [
  {
    color: "hover:fill-[#f05033]",
    Icon: React.createElement(SiGit),
    name: "Git",
  },
  {
    color: "hover:fill-[#2496ed]",
    Icon: React.createElement(SiDocker),
    name: "Docker",
  },
  {
    color: "hover:fill-[#47a248]",
    Icon: React.createElement(SiMongodb),
    name: "MongoDB",
  },
  {
    color: "hover:fill-[#010256]",
    Icon: React.createElement(SiPostgresql),
    name: "PostgreSQL",
  },
];
const databaseIcons = [
  {
    color: "hover:fill-[#47a248]",
    Icon: React.createElement(SiJavascript),
    name: "MongoDB",
  },
  {
    color: "hover:fill-[#010256]",
    Icon: React.createElement(SiJavascript),
    name: "PostgreSQL",
  },
];
const socialIcons = [
  {
    color: "hover:text-neutral-500",
    Icon: React.createElement(FaXTwitter),
    name: "Twitter",
  },
  {
    color: "hover:text-sky-500",
    Icon: React.createElement(FaLinkedin),
    name: "LinkedIn",
  },
  {
    color: "hover:text-gray-500",
    Icon: React.createElement(FaGithub),
    name: "GitHub",
  },
  {
    color: "hover:text-red-500",
    Icon: React.createElement(Mail),
    name: "Mail",
  },
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

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contactMe", label: "Contact Me" },
];

export {
  databaseIcons,
  experiences,
  frameworksIcons,
  navItems,
  programmingLanguagesIcons,
  projectsList,
  socialIcons,
  toolsIcons,
};
