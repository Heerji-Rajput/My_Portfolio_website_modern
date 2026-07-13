import React, { useState } from 'react';
import { Briefcase, Calendar, Play, CheckCircle2 } from 'lucide-react';
import offerletter from '../pages/offerletter.jpeg'

const Experience = () => {
  // Array containing three detailed internship roles and project showcases
  const internships = [
    {
      role: "Full Stack Developer Intern",
      company: "Sukkur IBA University Labs",
      duration: "Apr 2026 - Present",
      description: "Collaborating on engineering scalable internal enterprise applications using the MERN stack ecosystem. Optimizing back-end RESTful operations and constructing responsive interface utilities.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      projectVideo: "/Web_project_video.mp4", // Reference to your local file in public directory
      projectTitle: "Cartify E-Commerce System",
      projectDetails: "Engineered an e-commerce platform incorporating real-time mathematical state-driven cart manipulations, responsive grid design patterns, and modular item layouts."
    },
    {
      role: "Java Developer",
      company: "SyntxHub",
      duration: "Feb 2024 - Apr 2024",
      description: "Writing clean, object-oriented code to build and maintain desktop or backend web applications. Debugging existing programs, writing unit tests, and collaborating with teams to implement core business logic",
      techStack: ["Java","Programming core Concept", "OOPs Concepts", "Git and GitHub"],
      projectVideo: {offerletter}, // Reference to your Gym project file
      projectTitle: "FitLife GYM Hub",
      projectDetails: "Developed an interactive dashboard showcasing dual-state pricing subscription switches (Monthly/Yearly), custom reviews grid carousels, and verified viewport responsive layouts."
    },
    {
      role: "Web Application Developer Intern",
      company: "Foodie's Digital Labs",
      duration: "Dec 2025 - Jan 2026",
      description: "Developed consumer-centric digital storefront mockups emphasizing modal overlays, smooth cross-page component rendering, and asset deployment handling.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Framer Motion", "Vite"],
      projectVideo: "/Web_project3_video.mp4", // Reference to your Foodie's Hub project file
      projectTitle: "Foodie's Hub Storefront",
      projectDetails: "Built an interactive food delivery landing configuration integrating a modal video player overlay, active side-tab category menu selectors, and sliding customer feedback cards."
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#03030d] text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 block relative z-30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/10 border border-pink-500/30 rounded-xl text-pink-500">
            <Briefcase size={22} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">History & Showcase</span>
            <h2 className="text-3xl font-bold tracking-tight ">Internship Experience</h2>
          </div>
        </div>

        {/* Timeline Stack Container */}
        <div className="relative border-l-2 border-gray-900 ml-4 pl-6 lg:pl-10 space-y-16">
          {internships.map((intern, idx) => (
            <TimelineItem key={idx} intern={intern} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual timeline nodes to modularize video play states independently
const TimelineItem = ({ intern }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative group">
      
      {/* Timeline Node Ring Overlay */}
      <div className="absolute -left-[31px] lg:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-pink-500 flex items-center justify-center z-10 group-hover:bg-pink-500 transition-colors duration-300">
        <div className="w-1.5 h-1.5 bg-[#03030d] rounded-full"></div>
      </div>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors">{intern.role}</h3>
          <p className="text-sm text-gray-400 font-medium">{intern.company}</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 bg-yellow-400/5 border border-yellow-400/20 px-3 py-1 rounded-full self-start md:self-center">
          <Calendar size={12} />
          {intern.duration}
        </div>
      </div>

      {/* Core Split Content Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#070714]/60 border border-gray-900 rounded-2xl p-6 lg:p-8 hover:border-gray-800 transition-all duration-300">
        
        {/* Left Side: Role Text Context (7 cols out of 12) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {intern.description}
            </p>
            
            {/* Highlighted Project Detail Box */}
            <div className="border-l-2 border-yellow-400 bg-yellow-400/[0.02] p-4 rounded-r-xl mb-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-1">
                <CheckCircle2 size={14} className="text-yellow-400" />
                Featured Project: {intern.projectTitle}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {intern.projectDetails}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {intern.techStack.map((tech, i) => (
              <span 
                key={i} 
                className="text-[11px] font-mono px-2.5 py-1 bg-[#0d0d22] border border-gray-800 text-gray-400 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Showcase Video Player Window (5 cols out of 12) */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 bg-black group/video shadow-inner">
            
            {isPlaying ? (
  <div className="relative w-full h-full">
    {/* The visible image */}
    <img 
      src={intern.projectVideo} 
      alt={intern.projectTitle}
      className="w-full h-full object-cover"
    />
    
    {/* Optional: A close/stop button so the user can go back to the play screen */}
    <button 
      onClick={() => setIsPlaying(false)}
      className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white text-xs px-2 py-1 rounded transition-colors"
    >
      Close
    </button>
  </div>
) : (
  <>
    {/* Fallback frame overlay color or asset backdrop layout */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a1c] to-purple-950/20 flex flex-col items-center justify-center p-4 text-center">
      <span className="text-xs font-mono text-pink-500 mb-1">Project Demo</span>
      <span className="text-sm font-semibold text-gray-300 max-w-[200px] truncate">{intern.projectTitle}</span>
    </div>

    {/* Click to Play layer */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover/video:bg-black/50">
      <button 
        onClick={() => setIsPlaying(true)}
        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition duration-300 group-hover/video:scale-110 active:scale-95"
      >
        <Play fill="white" size={16} className="ml-0.5" />
      </button>
    </div>
  </>
)}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;