"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contactMe", label: "Contact Me" },
];

// font-semibold border-b-4 border-white rounded-b-md
function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {navItems.map(({ path, label }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            className="flex flex-col items-center justify-center relative"
          >
            <span
              className={`pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-gray-400 font-semibold"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              {label}
            </span>

            {/* underline */}
            {isActive && (
              <motion.span
                layoutId="underline"
                className="absolute -bottom-[2px] h-[3px] w-full bg-blue-500 rounded-b-lg"
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
