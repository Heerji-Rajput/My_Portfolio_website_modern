import React, { useState } from 'react';
import { Award, ShieldCheck, Landmark, X, ZoomIn } from 'lucide-react';
import certificate1 from '../pages/certificate1.jpeg'
import certificate2 from '../pages/certificate2.jpeg'
import certificate3 from '../pages/certificate3.jpeg'
import certificate5 from '../pages/certificate5.png'
import certificate6 from '../pages/certificate6.png'
import certificate7 from '../pages/certificate7.png'
import certificate8 from '../pages/certificate8.png'
import certificate4 from '../pages/certificate4.jpeg.png'

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const certificatesData = [
    // Technical Category Certificates
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB, Inc",
      date: "May 2026",
      category: "tech",
      // Replace with your real image files placed in your public folder (e.g., "/mern-cert.jpg")
      imageSrc: certificate4, 
      icon: <ShieldCheck className="text-pink-500" size={18} />,
      skillsVerified: ["MongoDB"]
    },
    {
      title: "Intermediate Machine Learning",
      issuer: "Kaggle Certificate",
      date: "Feb 2026",
      category: "tech",
      imageSrc: certificate5,
      icon: <ShieldCheck className="text-pink-500" size={18} />,
      skillsVerified: ["State Management", "Vite Optimization", "Tailwind CSS"]
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Kaggle Certificate",
      date: "Feb 2026",
      category: "tech",
      imageSrc: certificate7,
      icon: <ShieldCheck className="text-pink-500" size={18} />,
      skillsVerified: ["State Management", "Vite Optimization", "Tailwind CSS"]
    },
    {
      title: "Introduction to AI Ethics",
      issuer: "Kaggle Certificate",
      date: "Feb 2026",
      category: "tech",
      imageSrc: certificate6,
      icon: <ShieldCheck className="text-pink-500" size={18} />,
      skillsVerified: ["State Management", "Vite Optimization", "Tailwind CSS"]
    },
    {
      title: "Introdution to Machine Learning",
      issuer: "Kaggle Certificate",
      date: "Feb 2026",
      category: "tech",
      imageSrc: certificate8,
      icon: <ShieldCheck className="text-pink-500" size={18} />,
      skillsVerified: ["State Management", "Vite Optimization", "Tailwind CSS"]
    },
    // Non-Technical / Professional Category Certificates
    {
      title: "Representative Member in Sindh Rajput Student Organization",
      issuer: "Sindh Rajput Student Organization",
      date: "Mar 2025 - present",
      category: "non-tech",
      imageSrc: certificate1,
      icon: <Landmark className="text-yellow-400" size={18} />,
      skillsVerified: ["Social Development", "Leadership", "Team Operations"]
    },
    {
      title: "SIBAU MUN",
      issuer: "Sukkur IBA University",
      date: "Feb 2024",
      category: "non-tech",
      imageSrc: certificate2,
      icon: <Landmark className="text-yellow-400" size={18} />,
      skillsVerified: ["Public Speaking", "Technical Writing", "Collaboration"]
    },
    {
      title: "Organizing committee of Visionary Diplomats Model United Nation",
      issuer: "Sukkur IBA University",
      date: "Jan 2026",
      category: "non-tech",
      imageSrc: certificate3,
      icon: <Landmark className="text-yellow-400" size={18} />,
      skillsVerified: ["Public Speaking", "Technical Writing", "Collaboration"]
    }
  ];

  const filteredCertificates = certificatesData.filter(cert => {
    if (activeTab === 'all') return true;
    return cert.category === activeTab;
  });

  return (
    <section id="certificates" className="w-full  text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 block relative z-30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/10 border border-pink-500/30 rounded-xl text-pink-500">
              <Award size={22} />
            </div>
            <div>
              <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Achievements</span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-500">Certificates & Credentials</h2>
            </div>
          </div>

          {/* Filter Navigation Control Switches */}
          <div className="flex items-center gap-1 bg-[#070714] border border-gray-900 p-1.5 rounded-xl self-start">
            {['all', 'tech', 'non-tech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-semibold capitalize rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'Show All' : tab === 'tech' ? 'Technical' : 'Non-Technical'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid Display Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-[#070714]/60 border border-gray-900 rounded-2xl p-5 hover:border-gray-800/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft Ambient Background Category Gradient Glow Overlay */}
              <div className={`absolute -right-12 -top-12 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none ${
                cert.category === 'tech' ? 'bg-pink-500' : 'bg-yellow-400'
              }`} />

              <div>
                {/* Header Metadata Info Line */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    {cert.icon}
                    <span className="text-[11px] font-mono tracking-wider text-gray-500 uppercase">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-gray-900/60 border border-gray-800 px-2 py-0.5 rounded-md">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors duration-200 mb-4 line-clamp-1">
                  {cert.title}
                </h3>

                {/* --- NEW FEATURE: IMAGE SHOWCASE WINDOW --- */}
                <div 
                  onClick={() => setSelectedImage(cert.imageSrc)}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 bg-[#03030d] mb-4 cursor-pointer group/img shadow-inner"
                >
                  <img 
                    src={cert.imageSrc} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="p-2.5 bg-black/60 border border-gray-700 rounded-full text-white backdrop-blur-sm transform scale-90 group-hover/img:scale-100 transition-transform duration-300">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>

                {/* Skill tags list verified by certificate badge */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.skillsVerified.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#0d0d22]/80 border border-gray-900 text-gray-400 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- NEW FEATURE: LIGHTBOX MODAL PREVIEW --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300">
          {/* Close Click Shield Trigger Area */}
          <div className="absolute inset-0" onClick={() => setSelectedImage(null)} />
          
          <div className="relative max-w-4xl w-full border border-gray-800 rounded-2xl overflow-hidden bg-[#070714] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Top Close Button Control Area */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-black/80 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
            
            {/* High-Res Preview Image Container */}
            <img 
              src={selectedImage} 
              alt="Certificate Credential Full View" 
              className="w-full h-auto max-h-[80vh] object-contain mx-auto block"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;