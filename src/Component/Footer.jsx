import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full  border-t border-slate-800/60 text-slate-400 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        
        {/* Top Section: Brand + Links */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          
          {/* Brand & Newsletter */}
          <div className="space-y-6 xl:col-span-1 ">
            <div className="text-2xl font-bold tracking-wider text-gray-400">
              H H <span className="text-[#ff2a6d]">Rajput</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building modern web experiences with clean code and robust architecture. Subscribe to follow my journey and latest insights.
            </p>
            
            {/* Newsletter Input matching your contact form style */}
            <form className="flex flex-col sm:flex-row gap-2 max-w-sm">
              <input
                type="email"
                required
                className="w-full rounded-lg border border-slate-800 bg-[#12141c] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a6d]/50 transition-colors"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#ff2a6d] hover:bg-[#e0245e] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links Nav */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold text-slate-200 tracking-widest uppercase">Solutions</h3>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Frontend Development</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">MERN Stack</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">UI/UX Design</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-200 tracking-widest uppercase">Support</h3>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Guides</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">API Status</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-slate-200 tracking-widest uppercase">Company</h3>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Home</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">About</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Skills</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Services</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Experience</a></li>
                <li><a href="#" className="text-sm hover:text-[#ff2a6d] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section: Divider + Socials + Copyright */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* Icons with subtle glowing hover state */}
          <div className="flex space-x-6 order-2 sm:order-1">
            <a href="#" className="text-slate-400 hover:text-[#ff2a6d] drop-shadow-[0_0_8px_rgba(255,42,109,0.3)] transition-all">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#ff2a6d] drop-shadow-[0_0_8px_rgba(255,42,109,0.3)] transition-all">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#ff2a6d] drop-shadow-[0_0_8px_rgba(255,42,109,0.3)] transition-all">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#ff2a6d] drop-shadow-[0_0_8px_rgba(255,42,109,0.3)] transition-all">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#ff2a6d] drop-shadow-[0_0_8px_rgba(255,42,109,0.3)] transition-all">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-slate-500 order-1 sm:order-2">
            &copy; {new Date().getFullYear()} H H Rajput digitals, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;