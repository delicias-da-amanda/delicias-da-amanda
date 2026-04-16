import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-xl bg-secondary hover:bg-accent transition-all"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}