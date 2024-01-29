import { useTheme } from "@/context/_ThemeContext";

export default function ThemeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

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
