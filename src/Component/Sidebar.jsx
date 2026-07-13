import React, { useState, useEffect } from 'react';
import { 
  Home, User, Briefcase, Code, GraduationCap, 
  FolderGit, Award, Server, Mail, Download, Sun, Moon,
  Menu, X 
} from 'lucide-react'; 

import MyPro from '../pages/image3.jpeg';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window == 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; 
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const menuItems = [
    { icon: <Home size={18} />, label: 'Home', path: '#home' },
    { icon: <User size={18} />, label: 'About', path: '#about' },
    { icon: <Briefcase size={18} />, label: 'Experience', path: '#projects' },
    { icon: <Code size={18} />, label: 'Skills', path: '#skills' },
    { icon: <GraduationCap size={18} />, label: 'Education', path: '#education' },
    { icon: <FolderGit size={18} />, label: 'Projects', path: '#projects' }, 
    { icon: <Award size={18} />, label: 'Certificates', path: '#certificates' },
    { icon: <Server size={18} />, label: 'Services', path: '#services' },
    { icon: <Mail size={18} />, label: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg md:hidden border transition bg-slate-100 text-slate-800 border-slate-200 dark:bg-gray-900 dark:text-white dark:border-gray-800 hover:bg-slate-200 dark:hover:bg-gray-800"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed left-0 top-0 z-40 w-64 h-screen flex flex-col justify-between py-6 px-4 overflow-y-auto transition-all duration-300 ease-in-out
        bg-slate-50 text-slate-900 border-r border-slate-200
        dark:bg-[#070714] dark:text-white dark:border-gray-800
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}
      >
        <div className="flex flex-col items-center text-center mt-12 md:mt-0">
          <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-red-500 mb-3">
            <img
              src={MyPro}
              alt="Heerji Rajput"
              className="w-full h-full object-cover rounded-full border-2 border-slate-50 dark:border-[#070714]"
            />
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-semibold tracking-wide">
            Heerji Rajput
          </h2>
          <p className="text-pink-500 text-xs font-medium mt-1">
            Full Stack Developer
          </p>
        </div>

        <nav className="mt-8 flex-1">
          <ul className="space-y-1">
            {menuItems.map((item, index) => {
              const isItemActive = activeHash === item.path;
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveHash(item.path);
                    }}
                    className={`flex items-center gap-4 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isItemActive
                        ? "bg-gradient-to-r from-purple-950/20 to-pink-950/10 text-pink-500 border-l-2 border-pink-500 dark:from-purple-950/40 dark:to-pink-950/20"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-gray-900 flex flex-col items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="w-full flex items-center justify-center gap-2 border border-pink-500/40 text-pink-500 hover:bg-pink-500/10 transition px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Download size={16} />
            Download CV
          </a>

          <div className="text-center">
            <p className="text-xs text-slate-400 dark:text-gray-500 mb-2">
              Follow Me
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Heerji-Rajput/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/heerji-rajput-b50b052b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:heerjisingh875@gmail.com"
                className="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-200 dark:bg-gray-900 p-1 rounded-full">
            <button
              onClick={() => setIsDarkMode(false)}
              className={`p-1.5 rounded-full transition-all duration-200 ${!isDarkMode ? "bg-pink-500 text-white shadow-md" : "text-slate-500 dark:text-gray-400"}`}
              aria-label="Light Mode"
            >
              <Sun size={14} />
            </button>
            <button
              onClick={() => setIsDarkMode(true)}
              className={`p-1.5 rounded-full transition-all duration-200 ${isDarkMode ? "bg-pink-500 text-white shadow-md" : "text-slate-500 dark:text-gray-400"}`}
              aria-label="Dark Mode"
            >
              <Moon size={14} />
            </button>
          </div>

          <p className="text-[10px] text-slate-400 dark:text-gray-600 text-center">
            © 2026 Heerji Rajput <br /> All Rights Reserved
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;