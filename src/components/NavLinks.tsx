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

            {isActive ? <Underline /> : null}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
