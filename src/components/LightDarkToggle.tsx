"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function LightDarkToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

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

  return (
    <button
      className="ml-2 md:ml-4 p-2.5 rounded-xl border border-foreground/10 bg-foreground/[0.03] hover:border-primary/40 hover:bg-primary/10 active:scale-90 transition-all duration-200 cursor-pointer shadow-sm"
      onClick={handleClick}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {mounted && theme === "light" ? (
          <Sun className="w-5 h-5 text-amber-500 fill-amber-400 rotate-0 transition-all duration-500" />
        ) : (
          <Moon className="w-5 h-5 text-primary fill-primary/20 -rotate-12 transition-all duration-500" />
        )}
      </div>
    </button>
  );
}

export default LightDarkToggle;