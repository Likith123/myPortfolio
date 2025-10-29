"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/contactMe": "Contact Me",
};
// font-semibold border-b-4 border-white rounded-b-md
function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {Object.entries(navItems).map(([key, value]) => (
        <Link key={key} href={key}>
          <motion.span
            className={
              pathname === key
                ? "relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-blue-500 after:rounded-b-lg text-gray-300"
                : "relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0"
            }
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          >
            {value}
          </motion.span>
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
