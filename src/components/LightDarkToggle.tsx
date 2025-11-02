"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
function LightDarkToggle() {
  const [theme, setTheme] = useState<Theme>("dark"); // Replace with actual state management logic

  function handleClick() {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button className="ml-4" onClick={handleClick}>
      {theme === "light" ? (
        <Sun className="w-6 h-6 hover:stroke-yellow-500 hover:fill-yellow-500 rotate-90 transition-all duration-300 ease-in-out" />
      ) : (
        <Moon className="w-6 h-6 hover:stroke-gray-700 hover:fill-gray-700 transition-all duration-300 ease-in-out" />
      )}
    </button>
  );
}

export default LightDarkToggle;
