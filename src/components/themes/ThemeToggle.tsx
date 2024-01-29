"use client";

import { useTheme } from "next-themes";
import AppToggleButton from "@/components/core/AppToggleButton";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme(isChecked: boolean) {
    if (isChecked) setTheme("dark");
    else setTheme("light");
  }

  return (
    <AppToggleButton
      previousValue={resolvedTheme === "dark"}
      toggleFn={toggleTheme}
    />
  );
}
