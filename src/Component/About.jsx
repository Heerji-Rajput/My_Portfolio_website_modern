import React from 'react';
import { Terminal, Briefcase, Users, Coffee, Play } from 'lucide-react';
import image2 from '../pages/image1.jpg'
const About = () => {
  const statistics = [
    { icon: <Terminal className="text-red-400" size={24} />, count: '50+', label: 'Projects Completed' },
    { icon: <Briefcase className="text-emerald-400" size={24} />, count: '2+', label: 'Years Experience' },
    { icon: <Users className="text-yellow-400" size={24} />, count: '30+', label: 'Happy Clients' },
    { icon: <Coffee className="text-pink-400" size={24} />, count: '200+', label: 'Cups of Coffee' },
  ];

  return (
    <section id='about' className="w-full  text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 clear-both block relative z-30">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Media Video Card */}
        <div className="relative group flex-shrink-0 mb-8 lg:mb-0">
          {/* Accent Dots */}
          <div className="absolute -left-6 -top-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {[...Array(16)].map((_, i) => <span key={i} className="w-1.5 h-1.5 bg-white rounded-full"></span>)}
          </div>
          <div className="absolute -left-6 -bottom-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {[...Array(16)].map((_, i) => <span key={i} className="w-1.5 h-1.5 bg-white rounded-full"></span>)}
          </div>

          {/* Main Visual Image Window */}
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-[#070714]">
            <img 
              src={image2} 
              alt="Heerji Working" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80"}} // Backup placeholder
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
              <button className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition group-hover:scale-110">
                <Play fill="white" size={20} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Counters */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold tracking-tight leading-tight text-gray-600">
            Building digital solutions <br />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">passion</span> and <span className="text-yellow-400">precision</span>
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-2xl">
            I'm a passionate Full Stack Developer with expertise in building modern web and mobile applications. 
            With a strong foundation in both frontend and backend technologies, I love turning ideas into reality.
          </p>

          {/* Grid Counter Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {statistics.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#070714]/80 border border-gray-900 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-gray-800 hover:-translate-y-1"
              >
                <div className="mb-3">{stat.icon}</div>
                <span className="text-2xl font-bold text-white tracking-tight">{stat.count}</span>
                <span className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;