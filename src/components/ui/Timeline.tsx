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
  iconFillColor,
  title,
  titleColor,
  subtitle,
  date,
  description,
  roles,
}: VerticalTimelineElementProps) {
  
  const accentBorder = titleColor.includes("primary") 
    ? "border-primary/40" 
    : "border-secondary/40";

  return (
    <VerticalTimelineElement
      icon={Icon}
      iconStyle={{ 
        background: iconFillColor,
        color: "rgb(var(--bgcolor))", 
        boxShadow: `0 0 0 4px rgb(var(--bgcolor)), 0 4px 10px rgba(0,0,0,0.1)` 
      }}
      contentStyle={{
        background: "rgba(var(--primary), 0.03)",
        color: "rgb(var(--foreground))",
        boxShadow: "none",
        border: "1px solid rgba(var(--primary), 0.1)",
        borderRadius: "2.5rem",
        padding: "2rem"
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(var(--primary), 0.1)" }}
      date={date}
      dateClassName="text-foreground/50 font-bold px-4"
    >
      <h3 className={`text-xl font-black tracking-tight ${titleColor}`}>{title}</h3>
      <h4 className="text-foreground/60 font-medium text-sm italic mb-4">{subtitle}</h4>
      
      {description && (
        <p className="text-foreground/80 text-sm leading-relaxed !font-normal">
          {description}
        </p>
      )}

      {roles && (
        <div className="space-y-6 mt-6">
          {roles.map((roleItem, index) => (
            <div key={index} className={`border-l-2 ${accentBorder} pl-5 py-1`}>
              <h5 className="font-bold text-foreground leading-none">{roleItem.role}</h5>
              <p className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2 font-black">
                {roleItem.duration}
              </p>
              <ul className="mt-3 space-y-2">
                {roleItem.responsibilities.map((responsibility, rIndex) => (
                  <li key={rIndex} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-primary/50">•</span>
                    {responsibility}
                  </li>
                ))}
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
    <div className="bg-bgcolor pt-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-4xl font-black text-foreground tracking-tighter">
          My <span className="text-primary italic">Journey</span>
        </h1>
        <p className="text-foreground/50 mt-2 font-medium">Education & Professional Experience</p>
      </div>

      <VerticalTimeline lineColor="rgba(var(--primary), 0.15)">
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