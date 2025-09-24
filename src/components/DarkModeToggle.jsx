// src/components/DarkModeToggle.jsx

import React, { useState, useEffect } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  // localStorage එකෙන් කලින් theme එක තියෙනවද බලනවා. නැත්නම්, system එකේ theme එක බලනවා.
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
    >
      {isDark ? (
        <BsSunFill className="w-6 h-6 text-yellow-400" />
      ) : (
        <BsMoonFill className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;