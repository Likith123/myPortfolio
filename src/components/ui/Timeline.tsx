"use client";
import { experiences } from "@/lib/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type VerticalTimelineElementProps = {
  Icon: React.ReactElement;
  iconFillColor: string;
  title: string;
  titleColor: string;
  subtitle: string;
  date: string;
  description?: string;
  roles?: {
    role: string;
    duration: string;
    responsibilities: string[];
  }[];
};

function VerticalTimelineElementComponent({
  Icon,
  iconFillColor,
  title,
  titleColor,
  subtitle,
  date,
  description,
  roles,
}: VerticalTimelineElementProps) {
  return (
    <VerticalTimelineElement
      icon={Icon}
      iconStyle={{ background: `${iconFillColor}`, color: "#fff" }}
      contentStyle={{
        background: "#1f2937",
        color: "#fff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
      date={date}
    >
      <h3 className={`text-xl font-semibold ${titleColor}`}>{title}</h3>
      <h4 className="text-gray-400">{subtitle}</h4>
      {description ? (
        <p className="mt-2 text-gray-300 text-sm">{description}</p>
      ) : null}
      {roles
        ? roles.map((roleItem, index) => (
            <div key={index} className="mt-4 border-l-2 border-blue-500 pl-4">
              <h5 className="font-semibold text-white">{roleItem.role}</h5>
              <p className="text-sm text-gray-300">{roleItem.duration}</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 text-sm">
                {roleItem.responsibilities.map((responsibility, rIndex) => (
                  <li key={rIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))
        : null}
    </VerticalTimelineElement>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="bg-gray-900 py-10 rounded-md">
      <h2 className="text-3xl text-center font-bold mb-8 text-white">
        Education &amp; Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElementComponent
            key={index}
            Icon={exp.icon}
            iconFillColor={exp.iconFillColor}
            title={exp.title}
            titleColor={exp.titleColor}
            subtitle={exp.subtitle}
            date={exp.date}
            description={exp.description}
            roles={exp.roles}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}
