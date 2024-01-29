"use client";

import { createServerContext, useContext, useState } from "react";

interface ThemeProviderType {
  isDarkMode: boolean;
  toggleTheme(isDark: boolean): void;
}

export const ThemeContext = createServerContext(
  "ThemeContext",
  {} as any // TODO: TYPE
);

export const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme(isDark: boolean) {
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
