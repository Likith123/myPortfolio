import { Briefcase, GraduationCap, Mail } from "lucide-react";
import React from "react";
import { DiJava } from "react-icons/di";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiExpress,
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
import { TbBrandFramerMotion } from "react-icons/tb";

// Experience Data
const experiences = [
  {
    icon: React.createElement(GraduationCap),
    iconFillColor: "rgb(var(--primary))",
    title: "Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)",
    titleColor: "text-primary",
    subtitle: "Vijayawada, India",
    date: "2017 - 2021",
    description:
      "Graduated B.Tech in Computer Science and Engineering with distinction, specializing in software development and web technologies.",
  },
  {
    icon: React.createElement(Briefcase),
    iconFillColor: "rgb(var(--primary))",
    title: "EdgeVerve Systems Limited",
    titleColor: "text-primary",
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
    color: "hover:text-[#f7df1e]",
    Icon: React.createElement(SiJavascript),
    name: "JavaScript",
  },
  {
    color: "hover:text-[#3178c6]",
    Icon: React.createElement(SiTypescript),
    name: "TypeScript",
  },
  {
    color: "hover:text-[#3776ab]",
    Icon: React.createElement(SiPython),
    name: "Python",
  },
  {
    color: "hover:text-[#00add8]",
    Icon: React.createElement(SiGo),
    name: "Go",
  },
  { color: "hover:text-[#010256]", Icon: React.createElement(SiC), name: "C" },
  {
    color: "hover:text-[#010256]",
    Icon: React.createElement(SiCplusplus),
    name: "C++",
  },
  {
    color: "hover:text-[#010256]",
    Icon: React.createElement(DiJava),
    name: "Java",
  },
];
const frontEndIcons = [
  {
    color: "hover:text-[#61dafb]",
    Icon: React.createElement(SiReact),
    name: "React",
  },
  {
    color: "hover:text-[#000000]",
    Icon: React.createElement(SiNextdotjs),
    name: "Next.js",
  },
  {
    color: "hover:text-[#38bdf8]",
    Icon: React.createElement(SiTailwindcss),
    name: "Tailwind CSS",
  },
  {
    color: "hover:text-[#38bdf8]",
    Icon: React.createElement(TbBrandFramerMotion),
    name: "Framer Motion",
  },
];
const backEndIcons = [
  {
    color: "hover:text-[#68a063]",
    Icon: React.createElement(SiNodedotjs),
    name: "Node.js",
  },
  {
    color: "hover:text-[#000000]",
    Icon: React.createElement(SiExpress),
    name: "Express.js",
  },
  {
    color: "hover:text-[#2496ed]",
    Icon: React.createElement(SiDocker),
    name: "Docker",
  },
  {
    color: "hover:text-[#47a248]",
    Icon: React.createElement(SiMongodb),
    name: "MongoDB",
  },
  {
    color: "hover:text-[#010256]",
    Icon: React.createElement(SiPostgresql),
    name: "PostgreSQL",
  },
];
const socialIcons = [
  {
    Icon: React.createElement(FaXTwitter),
    name: "Twitter",
    link: "https://twitter.com/likithadusumalli",
  },
  {
    Icon: React.createElement(FaLinkedin),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/likith-naga-sai-adusumalli/",
  },
  {
    Icon: React.createElement(FaGithub),
    name: "GitHub",
    link: "https://github.com/Likith123"
  },
  {
    Icon: React.createElement(Mail),
    name: "Mail",
    link: "mailto:likithadusumalli@gmail.com"
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
  backEndIcons,
  experiences,
  frontEndIcons,
  navItems,
  programmingLanguagesIcons,
  projectsList,
  socialIcons,
};
