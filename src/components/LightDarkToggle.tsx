"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function LightDarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Replace with actual state management logic

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <button className="ml-4" onClick={handleClick}>
      {isDarkMode ? (
        <Sun className="w-6 h-6 hover:stroke-yellow-500 hover:fill-yellow-500 rotate-90 transition-all duration-300 ease-in-out" />
      ) : (
        <Moon className="w-6 h-6 hover:stroke-gray-700 hover:fill-gray-700 transition-all duration-300 ease-in-out" />
      )}
    </button>
  );
}

export default LightDarkToggle;