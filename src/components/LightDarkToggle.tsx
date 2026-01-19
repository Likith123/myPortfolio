"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
function LightDarkToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  function handleClick() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    const initialTheme = savedTheme || (prefersLight ? "light" : "dark");
    
    setTheme(initialTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  }, []);

  return (
    <button 
      className="ml-2 md:ml-4 p-2 rounded-xl active:scale-90 md:hover:bg-primary/5 transition-all duration-200" 
      onClick={handleClick}
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {theme === "light" ? (
          <Sun className="w-6 h-6 text-yellow-500 fill-yellow-500 rotate-0 transition-all duration-500 ease-spring" />
        ) : (
          <Moon className="w-6 h-6 text-slate-400 fill-slate-400 -rotate-12 transition-all duration-500 ease-spring" />
        )}
      </div>
    </button>
  );
}

export default LightDarkToggle;