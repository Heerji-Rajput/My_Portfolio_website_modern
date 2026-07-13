import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, Building2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Sukkur IBA University",
      location: "Sukkur, Sindh, Pakistan",
      duration: "2023 - Present",
      status: "In Progress",
      details: "Focusing on Full-Stack Development (MERN Stack), Database Management Systems, and Information Security principles. Actively participating in campus tech communities and laboratory initiatives.",
      highlights: ["MERN Stack Specialization", "Data Structures & Algorithms", "Information Security Principles","Object Oriented Programming","Design and Analyse Algorithms","Java","C++","Python","Computer Netwroking","Operating System","Linux"]
    }
  ];

  return (
    <section id="projects" className="w-full  text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 block relative z-30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/10 border border-pink-500/30 rounded-xl text-pink-500">
            <GraduationCap size={22} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Academic Journey</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-500">Education</h2>
          </div>
        </div>

        {/* Timeline Layout Stream */}
        <div className="relative border-l-2 border-gray-900 ml-4 pl-6 lg:pl-10 space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Ring */}
              <div className="absolute -left-[31px] lg:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#03030d] border-2 border-pink-500 flex items-center justify-center z-10 group-hover:bg-pink-500 transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-[#03030d] rounded-full"></div>
              </div>

              {/* Title & Duration Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Building2 size={14} className="text-gray-500" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="flex flex-col items-end gap-1.5 self-start md:self-center">
                  <span className="flex items-center gap-2 text-xs font-mono text-yellow-400 bg-yellow-400/5 border border-yellow-400/20 px-3 py-1 rounded-full">
                    <Calendar size={12} />
                    {edu.duration}
                  </span>
                  {edu.status && (
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded">
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Description Body Box */}
              <div className="bg-[#070714]/60 border border-gray-900 rounded-2xl p-6 lg:p-8 hover:border-gray-800 transition-all duration-300">
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {edu.details}
                </p>

                {/* Highlights Subgrid */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Award size={14} className="text-pink-500" />
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-[#09091b] border border-gray-900 text-gray-300 rounded-xl hover:border-gray-850 transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;