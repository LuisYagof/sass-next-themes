"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useToggleCounter } from "@/store/toggleCounter.store";

export function ThemeButton() {
  // STORE
  const { increase } = useToggleCounter();

  // DATA
  const [mounted, setMounted] = useState(false);

  // HOOKS
  const { setTheme, resolvedTheme } = useTheme();

  // LIFECYCLE
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <span style={{ userSelect: "none", cursor: "pointer" }}>⚡</span>;
  if (resolvedTheme === "dark")
    return (
      <span
        onClick={() => {
          setTheme("light"), increase(1);
        }}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        🌞
      </span>
    );
  if (resolvedTheme === "light")
    return (
      <span
        onClick={() => {
          setTheme("dark"), increase(1);
        }}
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        🌙
      </span>
    );
}
