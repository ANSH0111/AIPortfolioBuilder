import React, { useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white cursor-pointer">
      {theme === 'dark' ? '🌞 Light Mode' : '🌜 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;