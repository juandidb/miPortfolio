import React, { useEffect, useState } from 'react';
import { Moon, Sun } from './icons';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
