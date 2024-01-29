"use client";

import { useState } from "react";

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme(isDark: boolean) {
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark");
  }

  if (isDarkMode) {
    return (
      <span
        onClick={() => toggleTheme(false)}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        ☀
      </span>
    );
  } else {
    return (
      <span
        onClick={() => toggleTheme(true)}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        🌙
      </span>
    );
  }
}
