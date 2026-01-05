import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
