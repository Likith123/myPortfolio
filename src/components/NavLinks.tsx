"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/contactMe": "Contact Me",
};

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {Object.entries(navItems).map(([key, value]) => (
        <Link
          key={key}
          href={key}
          className={
            pathname === key
              ? "bg-gradient-to-br from-blue-500 via-purple-300 bg-blend-overlay to-green-500 font-bold text-transparent bg-clip-text"
              : ""
          }
        >
          {value}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
