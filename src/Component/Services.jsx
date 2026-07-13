import React from 'react';
import { Code2, Palette, BarChart3, ShieldCheck, Rocket, Smartphone } from 'lucide-react';

const Services = () => {
  // 1. Define your services data array
  const servicesData = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "MERN Stack Web Application Development",
      description: "Building complete, scalable web applications from scratch using MongoDB, Express, React, and Node.js. I handle everything from front-facing interactive features to secure back-end architecture and database management.",
    },
    {
      icon: <Palette className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Frontend Engineering (React.js)",
      description: "Crafting ultra-fast, responsive Single Page Applications (SPAs) with optimized state management and pixel-perfect layouts using Tailwind CSS. I turn complex UI/UX designs into modular, reusable components that ensure a seamless user experience across all devices.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: "Backend & API Development (Node.js & Express)",
      description: "Architecting robust RESTful APIs with Node.js and Express to power smooth data flow between your server and client. I implement industry-standard security features like JWT authentication, password hashing, and seamless third-party service integrations.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
      title: "Database Management & Architecture",
      description: "Designing structured, high-performance NoSQL database schemas in MongoDB to manage your application data efficiently. I focus on writing clean aggregation pipelines and optimized queries to ensure your app stays fast as your user base grows.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Optimization & Performance Tuning",
      description: "Refactoring legacy codebases, upgrading older React components to modern hooks, and eliminating performance bottlenecks to improve page speeds. I diagnose and resolve critical bugs quickly to keep your platform running smoothly and securely..",
    },
    
  ];

  return (
    <section id='services' className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            What We Do
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-950 dark:text-white sm:text-4xl tracking-tight">
            Services Built to Grow Your Business
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We provide end-to-end digital solutions designed to help you scale efficiently and stay ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="inline-flex p-3 bg-gray-50 dark:bg-gray-700 rounded-xl mb-6 group-hover:bg-blue-50 dark:group-hover:bg-gray-600 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* "Learn More" Link */}
              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300"
                >
                  Learn more 
                  <span className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;