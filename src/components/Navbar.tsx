"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LightDarkToggle from "./LightDarkToggle";
import NavLinks from "./NavLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-bgcolor/20 shadow-md blur-backdrop-filter backdrop-filter backdrop-blur-lg">
      <nav className="">
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          <div className="tracking-wide text-xl md:text-3xl font-black">
            <Link href="/" className="flex justify-center items-center">
              <span className="mr-2 md:mr-3 text-md md:text-lg px-1.5 py-1 md:p-2 bg-primary text-foreground rounded-lg">
                LA
              </span>
              <span>
                Likith <span className="text-primary italic">Adusumalli</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <NavLinks />
            </div>
            <LightDarkToggle />
            <button
              className="md:hidden p-2 text-foreground focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-bgcolor/95 border-b border-white/10 backdrop-blur-xl animate-in slide-in-from-top duration-300">
              <div
                className="flex flex-col items-center py-8 space-y-6"
                onClick={() => setIsOpen(false)}
              >
                <NavLinks />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
