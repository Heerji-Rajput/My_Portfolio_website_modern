import React from 'react';
import { Mail, Download, Eye } from 'lucide-react';
import image from '../pages/bg_removed.png';
// import Mycv from '../pages/Heerji_Rajput_CV.pdf';

const HeroSection = () => {
  const techIcons = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', style: 'top-4 left-12' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', style: 'top-8 right-12' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', style: 'top-1/3 -left-4' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', style: 'top-1/3 -right-4' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', style: 'bottom-1/3 -left-2' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', style: 'bottom-1/3 -right-2', invert: true },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', style: 'bottom-12 left-12' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', style: 'bottom-12 right-12' },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 pt-20 pb-16 overflow-hidden">
      <div className="absolute top-6 left-8 flex items-center gap-2 bg-emerald-500/10 dark:bg-[#0a1912] border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-600 dark:text-emerald-400 text-xs font-medium">
        <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></span>
        Available for Hire
      </div>

      <div className="flex-1 max-w-xl z-10 mt-10 lg:mt-0">
        <span className="text-slate-500 dark:text-gray-400 text-lg font-medium">
          Hi, I'm
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold mt-2 tracking-wide text-slate-900 dark:text-gray-100">
          Heerji{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
            Rajput
          </span>
        </h1>

        <h3 className="text-lg lg:text-xl font-semibold mt-4 text-slate-800 dark:text-gray-300">
          I'm a{" "}
          <span className="text-amber-600 dark:text-yellow-400 px-1 font-mono">
            React.js Developer | MERN Stack Developer
          </span>
        </h3>

        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mt-4 max-w-md">
          Specializing in the React.js and MERN ecosystem to bridge the gap
          between elegant UI design and robust backend engineering. Experienced
          in designing secure, scalable RESTful APIs, optimizing database
          queries, and creating modular, reusable component systems. Committed
          to building fast, production-ready applications that solve real-world
          problems.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="https://api.whatsapp.com/send?phone=923473170460"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transition px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-pink-500/20"
          >
            <Mail size={16} /> Hire Me
          </a>

         <a
  href='/resume.pdf'
  download="Heerji_Rajput_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border text-slate-700 dark:text-gray-400 border-slate-200 dark:border-gray-800 transition px-5 py-3 rounded-xl text-sm font-medium"
>
  <Download size={16} />
  <span>Download Resume</span>
</a>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border text-slate-700 dark:text-gray-400 border-slate-200 dark:border-gray-800 transition px-5 py-3 rounded-xl text-sm font-medium cursor-pointer"
          >
            <Eye size={16} />
            View Projects
          </a>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="https://github.com/Heerji-Rajput/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-gray-800 rounded-full transition text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
          >
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/heerji-rajput-b50b052b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-gray-800 rounded-full transition text-slate-600 dark:text-gray-400 hover:text-blue-500"
          >
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:heerjisingh875@gmail.com"
            className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-gray-800 rounded-full transition text-slate-600 dark:text-gray-400 hover:text-rose-500"
          >
            <Mail size={18} />
          </a>
          <a
            href="#"
            className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-gray-800 rounded-full transition text-slate-600 dark:text-gray-400 hover:text-pink-500"
          >
            <svg
              className="w-[18px] h-[18px] fill-none stroke-current"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center mt-12 lg:mt-0 h-[450px] lg:h-[500px] w-full max-w-[500px]">
        <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-pink-600/20 via-purple-600/10 to-transparent blur-xl"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/20 animate-[spin_60s_linear_infinite]"></div>

        <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-pink-500/20 shadow-2xl z-10">
          <img
            src={image}
            alt="Heerji Rajput Profile"
            className="w-full h-full object-cover object-top filter contrast-120"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80";
            }}
          />
        </div>

        {techIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.style} z-20 p-2 bg-slate-50 dark:bg-[#0a0a16] border border-slate-200 dark:border-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center w-12 h-12`}
          >
            <img
              src={icon.src}
              alt="tech icon"
              className={`w-7 h-7 object-contain ${icon.invert ? "dark:invert-0 invert" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;