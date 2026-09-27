import { Briefcase, GraduationCap, Mail, Phone } from "lucide-react";
import React from "react";
import { DiJava } from "react-icons/di";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// Experience Data
const experiences = [
  {
    icon: React.createElement(GraduationCap),
    iconFillColor: "rgb(var(--primary))",
    title: "VR Siddhartha Engineering College",
    titleColor: "text-primary",
    subtitle: "Vijayawada, India",
    date: "2017 – 2021",
    description:
      "B.Tech in Computer Science and Engineering (CGPA: 8.1 / 10). Specialized in software development, data structures, algorithms, and web technologies.",
  },
  {
    icon: React.createElement(Briefcase),
    iconFillColor: "rgb(var(--primary))",
    title: "EdgeVerve Systems Ltd — Finacle Core Banking Platform",
    titleColor: "text-primary",
    subtitle: "Bangalore, India",
    date: "Oct 2021 – Present",
    roles: [
      {
        role: "Product Technical Analyst",
        duration: "Jul 2026 – Present",
        responsibilities: [
          "Developed and delivered 30+ enterprise UI features for the Finacle Core Banking platform used by global financial institutions.",
          "Designed complex banking workflows, scalable menu-driven interfaces, and reusable component-based UI architecture improving usability and UI consistency.",
          "Automated framework update processes and integrated CodeGen tooling with CI/CD pipelines, reducing repository size by 50%.",
          "Diagnosed and resolved 140+ production defects, including mission-critical issues impacting banking workflows.",
          "Awarded Over-Achiever of the Year (2023) at EdgeVerve Systems.",
        ],
      },
      {
        role: "Product Developer",
        duration: "Dec 2023 – Jun 2026 ",
        responsibilities: [
          "Developed and delivered 30+ enterprise UI features for the Finacle Core Banking platform used by global financial institutions.",
          "Designed complex banking workflows, scalable menu-driven interfaces, and reusable component-based UI architecture improving usability and UI consistency.",
          "Automated framework update processes and integrated CodeGen tooling with CI/CD pipelines, reducing repository size by 50%.",
          "Diagnosed and resolved 140+ production defects, including mission-critical issues impacting banking workflows.",
          "Awarded Over-Achiever of the Year (2023) at EdgeVerve Systems.",
        ],
      },
      {
        role: "Associate Product Developer",
        duration: "Oct 2021 – Dec 2023",
        responsibilities: [
          "Built responsive UI components and workflows for enterprise banking applications using React and Redux.",
          "Collaborated in Agile teams participating in sprint planning, code reviews, and technical design discussions.",
          "Worked with Java, Spring Boot, Node.js, and REST APIs for enterprise services integration.",
        ],
      },
    ],
  },
];

// Skills Data
const programmingLanguagesIcons = [
  {
    color: "hover:text-[#ea2d2e]",
    Icon: React.createElement(DiJava),
    name: "Java",
  },
  {
    color: "hover:text-[#3178c6]",
    Icon: React.createElement(SiTypescript),
    name: "TypeScript",
  },
  {
    color: "hover:text-[#f7df1e]",
    Icon: React.createElement(SiJavascript),
    name: "JavaScript",
  },
  {
    color: "hover:text-[#3776ab]",
    Icon: React.createElement(SiPython),
    name: "Python",
  },
  {
    color: "hover:text-[#00599c]",
    Icon: React.createElement(SiCplusplus),
    name: "C++",
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
    color: "hover:text-[#764abc]",
    Icon: React.createElement(SiRedux),
    name: "Redux",
  },
  {
    color: "hover:text-[#e34f26]",
    Icon: React.createElement(SiHtml5),
    name: "HTML5",
  },
  {
    color: "hover:text-[#1572b6]",
    Icon: React.createElement(SiCss3),
    name: "CSS3",
  },
  {
    color: "hover:text-[#cc6699]",
    Icon: React.createElement(SiSass),
    name: "SASS",
  },
  {
    color: "hover:text-[#38bdf8]",
    Icon: React.createElement(TbBrandFramerMotion),
    name: "Framer Motion",
  },
];

const backEndIcons = [
  {
    color: "hover:text-[#6db33f]",
    Icon: React.createElement(SiSpringboot),
    name: "Spring Boot",
  },
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
    color: "hover:text-[#2d3748]",
    Icon: React.createElement(SiPrisma),
    name: "Prisma ORM",
  },
  {
    color: "hover:text-[#336791]",
    Icon: React.createElement(SiPostgresql),
    name: "PostgreSQL",
  },
  {
    color: "hover:text-[#47a248]",
    Icon: React.createElement(SiMongodb),
    name: "MongoDB",
  },
  {
    color: "hover:text-[#4479a1]",
    Icon: React.createElement(SiMysql),
    name: "MySQL",
  },
];

const socialIcons = [
  {
    Icon: React.createElement(FaLinkedin),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/likith-naga-sai-adusumalli/",
  },
  {
    Icon: React.createElement(FaGithub),
    name: "GitHub",
    link: "https://github.com/Likith123",
  },
  {
    Icon: React.createElement(Mail),
    name: "Mail",
    link: "mailto:likithadusumalli@gmail.com",
  },
  {
    Icon: React.createElement(FaXTwitter),
    name: "Twitter / X",
    link: "https://x.com/LikithDeveloper",
  },
];

// Projects Data
const projectsList = [
  {
    title: "JoAT : Job Applications Tracker",
    description:
      "Architected and deployed a full-stack SaaS platform for tracking and managing job applications. Built application pipelines with filtering, status tracking, CRUD workflows, secure authentication with Better Auth, relational database models via Prisma ORM on PostgreSQL (Supabase), and responsive Next.js App Router UI.",
    link: "https://yourjoat.vercel.app",
    github: "https://github.com/Likith123/job-application-tracker",
    image: "https://yourjoat.vercel.app/og-image.png",
    techUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Framer Motion",
      "Vercel",
    ],
  },
  {
    title: "Tic Tac Toe",
    description:
      "Built an interactive Tic Tac Toe game using HTML5, CSS3, and JavaScript featuring dynamic DOM updates, responsive UI, game state management, and winner detection logic handling player turns, draw conditions, and board resets.",
    link: "https://likith123.github.io/TicTacToe",
    github: "https://github.com/Likith123/TicTacToe",
    image: "/tictactoe.png",
    techUsed: ["HTML5", "CSS3", "JavaScript"],
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
