import React, { useState } from 'react';
import { Briefcase, Calendar, ExternalLink, Play, CheckCircle2 } from 'lucide-react';
import Project1 from '../pages/Web_project_video.mp4'
import Project3 from '../pages/Web_project3_video.mp4'
import Project4 from '../pages/Web_project4_video.mp4'
import Project2 from '../pages/GymStatics.mp4'


const Projects = () => {
  // Mock data for your experiences containing description and video showcases
  const experiences = [
    {
      role: "MERN Stack Project",
      company: "Sukkur IBA University",
      duration: "Apr 2026 - Present",
      description: "Developing scalable internal web applications using the MERN stack. Collaborating closely with front-end components and integrating production-ready features.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS","SweetAlert2","Redux Toolkit","local Storage"],
      projectVideo: Project1, // Replace with your project demo video link
      projectTitle: "Cartify E-Commerce System",
      projectDetails: "Built an advanced e-commerce application featuring dynamic state-driven cart calculations, responsive interface, and secure checkout architecture."
    },
    {
        role: "Front-End Developer",
        company: "Personal Project",
        duration: "May 2026",
        description: "Engineered a high-performance, dark-themed fitness platform with fluid navigation, custom-styled multi-grid layouts, and responsive cross-device layout structures.",
        techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite"],
        projectVideo: Project2, // Referencing the file name verbatim as requested
        projectTitle: "FitLife GYM Hub",
        projectDetails: "Developed an interactive landing experience featuring dual-state pricing plan toggles (Monthly/Yearly), an expert trainer gallery, modular sliding user testimonials, and a fully functional validation contact form optimized with Chrome DevTools emulation."
},
{
  role: "Front-End Developer",
  company: "Personal Project",
  duration: "Jun 2026",
  description: "Engineered a vibrant, feature-rich food delivery and restaurant web interface featuring promotional video overlays, state-driven menus, and fluid carousel feedback animations.",
  techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons","React Icons","React Router", "Vite"],
  projectVideo: Project3, // Replace with your video filename
  projectTitle: "Foodie's Hub Platform",
  projectDetails: "Developed an interactive digital storefront including a fully responsive navbar, a modal-driven video promotion player, an active side-tab select menu (switching seamlessly between Burgers, Pizzas, Cupcakes, and Ice Cream), and a dynamic slider-based customer testimonial suite."
},
    {
      role: "Front-End Developer",
      company: "Personal Portfolio & Labs",
      duration: "Jan 2026 - Mar 2026",
      description: "Engineered high-performance web components and automated tools focusing on slick animations, state management optimization, and modular UI patterns.",
      techStack: ["JavaScript", "HTML5", "CSS3","SweetAlert"],
      projectVideo: Project4, // Replace with your project demo video link
      projectTitle: "Random Password Generator",
      projectDetails: "Designed and implemented a lightweight cryptographic utility suite utilizing fully customizable algorithmic string generation metrics and utility clip storage."
    }
  ];

  return (
    <section id="projects" className="w-full  text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 block relative z-30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/10 border border-pink-500/30 rounded-xl text-pink-500">
            <Briefcase size={22} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">History & Showcase</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-500">Work Experience & Projects</h2>
          </div>
        </div>

        {/* Timeline Stack Container */}
        <div className="relative border-l-2 border-gray-900 ml-4 pl-6 lg:pl-10 space-y-16">
          
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} exp={exp} />
          ))}

        </div>

      </div>
    </section>
  );
};

// Sub-component for individual timeline nodes to modularize video states independently
const TimelineItem = ({ exp }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative group">
      
      {/* Timeline Node Ring Overlay */}
      <div className="absolute -left-[31px] lg:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#03030d] border-2 border-pink-500 flex items-center justify-center z-10 group-hover:bg-pink-500 transition-colors duration-300">
        <div className="w-1.5 h-1.5 bg-[#03030d] rounded-full"></div>
      </div>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors">{exp.role}</h3>
          <p className="text-sm text-gray-400 font-medium">{exp.company}</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 bg-yellow-400/5 border border-yellow-400/20 px-3 py-1 rounded-full self-start md:self-center">
          <Calendar size={12} />
          {exp.duration}
        </div>
      </div>

      {/* Core Split Content Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#070714]/60 border border-gray-900 rounded-2xl p-6 lg:p-8 hover:border-gray-800 transition-all duration-300">
        
        {/* Left Side: Role Text Context (7 cols out of 12) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {exp.description}
            </p>
            
            {/* Highlighted Project Detail Box */}
            <div className="border-l-2 border-yellow-400 bg-yellow-400/[0.02] p-4 rounded-r-xl mb-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-1">
                <CheckCircle2 size={14} className="text-yellow-400" />
                Featured Project: {exp.projectTitle}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {exp.projectDetails}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.techStack.map((tech, i) => (
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
              <video 
                src={exp.projectVideo} 
                controls 
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                {/* Fallback frame overlay color or asset backdrop layout */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a1c] to-purple-950/20 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-xs font-mono text-pink-500 mb-1">Project Demo</span>
                  <span className="text-sm font-semibold text-gray-300 max-w-[200px] truncate">{exp.projectTitle}</span>
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

export default Projects;