"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <span style={{ userSelect: "none", cursor: "pointer" }}>⚡</span>;
  if (resolvedTheme === "dark")
    return (
      <span
        onClick={() => setTheme("light")}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        🌞
      </span>
    );
  if (resolvedTheme === "light")
    return (
      <span
        onClick={() => setTheme("dark")}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        🌙
      </span>
    );
}
