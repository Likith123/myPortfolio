import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";
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

export { experiences };

