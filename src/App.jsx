import './App.css'
import Certificates from './Component/Certificates'
import Education from './Component/Education'
import Experience from './Component/Experience'
import HeroSection from './Component/HeroSection'
import Sidebar from './Component/Sidebar'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import About from './Component/About'
import Contact from './Component/Contact'
import Services from './Component/Services'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      {/* CHANGED: Removed 'grid grid-cols-[256px_1fr]' wrapper. 
        Used a clean, relative parent div setup instead.
      */}
      <div className="relative min-h-screen bg-white text-slate-900 dark:bg-[#03030d] dark:text-white transition-colors duration-300">
        
        {/* 1. Left Sidebar Container (Managed entirely responsively inside Sidebar now) */}
        <Sidebar />

        {/* 2. Right Main Layout Content Stream
          CHANGED: 
          - Added `md:pl-64` so it automatically adds 256px left padding ONLY on desktop viewports.
          - Added `pt-16 md:pt-0` to prevent your Hero component content from getting overlapping cut-off by the absolute mobile hamburger menu toggle.
        */}
        <main className="w-full min-h-screen pt-16 md:pt-0 md:pl-64 transition-all duration-300 ease-in-out">
          
          <div className="w-full block">
            <HeroSection />
          </div>
          
          <div className="w-full block">
            <About />
          </div>
          
          <div className="w-full block">
            <Projects />
          </div>
          
          <div className="w-full block">
            <Skills />
          </div>

          <div className="w-full block">
            <Certificates />
          </div>

          <div className="w-full block">
            <Education />
          </div>
          
          <div className="w-full block">
            <Services />
          </div>

          <div className="w-full block">
            <Contact />
          </div>

          <div className="w-full block">
            <Footer />
          </div>

        </main>
      </div>
    </>
  );
}

export default App;