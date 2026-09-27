"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import LightDarkToggle from "./LightDarkToggle";
import NavLinks from "./NavLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full py-3 transition-all duration-300">
      {/* Scroll Progress Indicator */}
      <div 
        className="h-[2px] bg-primary absolute top-0 left-0 transition-all duration-75 z-50 shadow-[0_0_8px_var(--primary)]" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav 
        className={`mx-4 md:mx-16 rounded-[2rem] transition-all duration-300 font-sans ${
          isScrolled 
            ? "glass-effect shadow-lg shadow-black/5 dark:shadow-black/40 py-2.5 px-6 md:px-10"
            : "bg-transparent py-4 px-4 md:px-8 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="tracking-wide text-xl md:text-2xl font-black font-sans">
            <Link href="/" className="flex justify-center items-center group">
              <span className="mr-2 md:mr-3 text-xs md:text-sm px-2 py-1 md:py-1.5 bg-panel text-primary border border-primary font-bold rounded-lg shadow-xs group-hover:scale-105 transition-transform font-mono">
                LA
              </span>
              <span className="text-foreground group-hover:text-primary transition-colors font-sans font-bold">
                Likith <span className="text-primary italic">Adusumalli</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="hidden md:flex space-x-6">
              <NavLinks />
            </div>
            <LightDarkToggle />
            <button
              className="md:hidden p-2 text-foreground focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full mt-2 px-4 animate-in slide-in-from-top-4 duration-300">
              <div
                className="flex flex-col items-center py-6 space-y-4 rounded-3xl glass-effect shadow-xl"
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
