"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/data";
import Underline from "./ui/Underline";

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
            className="flex flex-col items-center justify-center relative text-lg"
          >
            <span
              className={`pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-primary/90 font-bold"
                  : "text-primary/70 hover:text-primary/85 font-semibold"
              }`}
            >
              {label}
            </span>

            {isActive ? <Underline /> : null}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
