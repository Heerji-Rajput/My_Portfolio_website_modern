import React, { useEffect, useState } from 'react';
import { Code2, Server, Layout, Wrench,} from 'lucide-react';

const Skills = () => {
  // Skill categories with specific percentage levels
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-pink-500" size={20} />,
      skills: [
        { name: "React.js", percentage: 90, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", percentage: 85, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", percentage: 95, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5 / CSS3", percentage: 95, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Boostrap", percentage: 90, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="text-purple-400" size={20} />,
      skills: [
        { name: "Node.js", percentage: 80, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", percentage: 85, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
        { name: "MongoDB", percentage: 75, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", percentage: 85, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      title: "Other Tech Stack",
      icon: <Wrench className="text-yellow-400" size={20} />,
      skills: [
        { name: "Git & GitHub", percentage: 88, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "DSA", percentage: 90, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
        { name: "Design and Analysis Algorithm", percentage: 85, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Information Security", percentage: 85, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Java", percentage: 75, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Python", percentage: 80, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full  text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 block relative z-30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/10 border border-pink-500/30 rounded-xl text-pink-500">
            <Code2 size={22} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">My Expertise</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-500">Technical Skills</h2>
          </div>
        </div>

        {/* Categories Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#070714]/60 border border-gray-900 rounded-2xl p-6 hover:border-gray-800/80 transition-all duration-300 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-gray-900/60 pb-4 mb-6">
                {category.icon}
                <h3 className="text-md font-semibold tracking-wide text-gray-200">{category.title}</h3>
              </div>

              {/* Stacked Animated Progress Bars */}
              <div className="space-y-6 flex-1">
                {category.skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Sub-component to manage independent mounting transition trigger states 
const SkillBar = ({ skill }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Delays slightly to allow mounting before triggering the slide animation
    const timer = setTimeout(() => {
      setWidth(skill.percentage);
    }, 150);
    return () => clearTimeout(timer);
  }, [skill.percentage]);

  return (
    <div className="group">
      {/* Label and Info Header Row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img 
            src={skill.src} 
            alt={skill.name} 
            className={`w-4 h-4 object-contain ${skill.invert ? 'invert' : ''}`} 
          />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono font-semibold text-pink-500 bg-pink-500/5 border border-pink-500/10 px-2 py-0.5 rounded-md">
          {skill.percentage}%
        </span>
      </div>

      {/* Progress Track Background Container */}
      <div className="w-full h-2.5 bg-[#03030d] border border-gray-900 rounded-full overflow-hidden relative">
        {/* Fill Bar Indicator featuring linear transforms */}
        <div 
          className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(244,63,94,0.3)]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default Skills;