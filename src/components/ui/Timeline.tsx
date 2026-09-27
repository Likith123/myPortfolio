"use client";
import { experiences } from "@/lib/data";
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
  title,
  subtitle,
  date,
  description,
  roles,
}: VerticalTimelineElementProps) {
  return (
    <VerticalTimelineElement
      icon={Icon}
      iconStyle={{ 
        background: "var(--primary)",
        color: "var(--background)", 
        boxShadow: `0 0 0 4px var(--background), 0 4px 14px rgba(201, 161, 90, 0.35)` 
      }}
      contentStyle={{
        background: "var(--panel)",
        backdropFilter: "blur(16px)",
        color: "var(--foreground)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        border: "1px solid var(--panel-border)",
        borderRadius: "2rem",
        padding: "2rem"
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--panel-border)" }}
      date={date}
      dateClassName="!hidden md:!block md:text-muted font-mono font-bold px-4"
    >
      <h3 className="text-lg md:text-xl font-black tracking-tight text-foreground font-sans">{title}</h3>
      <h4 className="text-muted font-medium text-xs md:text-sm font-mono mb-4 flex gap-2">
        {subtitle}
        <span className="flex md:hidden">({date})</span>
      </h4>
      {description && (
        <p className="text-muted text-sm leading-relaxed !font-normal">
          {description}
        </p>
      )}

      {roles && (
        <div className="space-y-6 mt-6">
          {roles.map((roleItem, index) => (
            <div
              key={index}
              className="border-l-2 border-primary/40 pl-3 md:pl-5 py-1"
            >
              <h5 className="font-bold text-sm md:text-base text-foreground leading-tight font-sans">
                {roleItem.role}
              </h5>
              <p className="text-[10px] uppercase tracking-widest text-primary mt-1 md:mt-2 font-mono font-bold">
                {roleItem.duration}
              </p>
              <ul className="mt-3 space-y-2">
                {roleItem.responsibilities.map((responsibility, rIndex) => {
                  const isAward = responsibility.includes("Over-Achiever");
                  return (
                    <li
                      key={rIndex}
                      className={`text-xs md:text-sm flex gap-2 ${
                        isAward ? "text-primary font-semibold" : "text-muted"
                      }`}
                    >
                      <span className="text-primary shrink-0">•</span>
                      {responsibility}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="pt-12 md:pt-24 px-2 md:px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto mb-12 md:mb-20 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight font-sans">
          My <span className="text-primary italic">Journey</span>
        </h1>
        <p className="text-muted mt-2 text-sm md:text-base font-mono">
          Education & Professional Experience
        </p>
      </div>

      <VerticalTimeline lineColor="var(--panel-border)" animate={true}>
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