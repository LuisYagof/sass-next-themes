"use client";

import { useTheme } from "next-themes";
import AppToggleButton from "@/components/core/AppToggleButton";
import MoonIcon from "@/assets/icons/themes/moon.svg";
import SunIcon from "@/assets/icons/themes/sun.svg";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme(isChecked: boolean) {
    if (isChecked) setTheme("dark");
    else setTheme("light");
  }

  return (
    <AppToggleButton
      uniqueId="toggle-theme"
      previousValue={resolvedTheme === "dark"}
      toggleFn={toggleTheme}
      iconRight={MoonIcon}
      iconLeft={SunIcon}
    />
  );
}
