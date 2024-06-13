import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ModeSwitcher() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <span onClick={toggleDarkMode} className="cursor-pointer mx-1">
      {darkMode ? (
        <MoonIcon className="h-auto w-8 text-gray-900 dark:text-white" />
      ) : (
        <SunIcon className="h-auto w-8 text-gray-900 dark:text-white" />
      )}
    </span>
  );
}

export default ModeSwitcher;