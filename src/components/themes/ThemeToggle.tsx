"use client";

import { useTheme } from "next-themes";
import { useToggleCounter } from "@/store/toggleCounter.store";
import AppToggleButton from "@/components/core/AppToggleButton";
import MoonIcon from "@/assets/icons/themes/moon.svg";
import SunIcon from "@/assets/icons/themes/sun.svg";

export function ThemeToggle() {
  // STORE
  const { increase } = useToggleCounter();

  // HOOKS
  const { setTheme, resolvedTheme } = useTheme();

  // FUNCTIONS
  function toggleTheme(isChecked: boolean) {
    if (isChecked) setTheme("dark");
    else setTheme("light");
    increase(1);
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
