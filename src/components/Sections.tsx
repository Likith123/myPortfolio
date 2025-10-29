"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import About from "@/app/about/page";
import Contact from "@/app/contactMe/page";
import Home from "@/app/page";
import Projects from "@/app/projects/page";

function Sections() {
  const router = useRouter();
  const pathname = usePathname();

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // Map routes to refs
  const sections: Record<string, React.RefObject<HTMLElement | null>> = {
    "/": homeRef,
    "/about": aboutRef,
    "/projects": projectsRef,
    "/contactMe": contactRef,
  };

  useEffect(() => {
    const targetRef: React.RefObject<HTMLElement | null> = sections[pathname];
    if (targetRef?.current) {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default Sections;
