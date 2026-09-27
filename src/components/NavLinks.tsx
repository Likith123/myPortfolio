"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { navItems } from "@/lib/data";

function NavLinks() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <>
      {navItems.map(({ path, label }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            className="relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center justify-center cursor-pointer rounded-full"
            onMouseEnter={() => setHoveredPath(path)}
            onMouseLeave={() => setHoveredPath(null)}
          >
            {/* Sliding hover capsule */}
            {hoveredPath === path && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                }}
              />
            )}

            <span
              className={`transition-colors duration-300 font-sans ${
                isActive
                  ? "text-primary font-bold"
                  : "text-muted hover:text-foreground font-medium"
              }`}
            >
              {label}
            </span>

            {/* Active underline indicator */}
            {isActive && (
              <motion.span
                layoutId="nav-active-line"
                className="absolute bottom-1 left-4 right-4 h-[2.5px] bg-primary rounded-full shadow-xs"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
