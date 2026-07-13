import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API form submission timeline
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="w-full  text-white px-8 lg:px-16 py-20 border-t border-gray-900/60 block relative z-30 overflow-hidden">
      
      {/* Dynamic Background Premium Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/10 border border-pink-500/30 rounded-xl text-pink-500">
            <Mail size={22} />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-500 ">Let's Connect</h2>
          </div>
        </div>

        {/* Outer Split Container Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Interactive Contact Card Grid Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-[#070714]/60 border border-gray-900 rounded-2xl p-6 lg:p-8 flex flex-col justify-center h-full relative group hover:border-gray-800 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/5 to-transparent rounded-tr-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold mb-2 text-white">Chat with me</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                Have an exciting project idea, internship opportunity, or just want to discuss modern web development? Drop me a line!
              </p>

              {/* Direct Info Channels List */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#03030d] border border-gray-800 flex items-center justify-center text-pink-500 group-hover/item:border-pink-500/30 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-500 uppercase">Email Address</p>
                    <a href="mailto:heerjisingh875@gmail.com" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      heerjisingh875@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#03030d] border border-gray-800 flex items-center justify-center text-purple-400 group-hover/item:border-purple-400/30 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-500 uppercase">Phone Link</p>
                    <span className="text-sm font-medium text-gray-300">+92347 3170460</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#03030d] border border-gray-800 flex items-center justify-center text-yellow-400 group-hover/item:border-yellow-400/30 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-500 uppercase">Current Location</p>
                    <span className="text-sm font-medium text-gray-300">Sukkur, Sindh, Pakistan</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Neon Glow Glassmorphic Contact Form Panel (7 cols) */}
          <div className="lg:col-span-7">
            <form 
              action="https://formspree.io/f/mnjeawlo"
              method="POST"
              className="bg-[#070714]/40 backdrop-blur-sm border border-gray-900 rounded-2xl p-6 lg:p-8 space-y-6 relative hover:border-gray-800/80 transition-all duration-300 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input Box */}
                <div className="relative group/input">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 mb-2">Your Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-3.5 text-gray-500 group-focus-within/input:text-pink-500 transition-colors" />
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#03030d] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email Input Box */}
                <div className="relative group/input">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 mb-2">Your Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-3.5 text-gray-500 group-focus-within/input:text-pink-500 transition-colors" />
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#03030d] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Input Box */}
              <div className="relative group/input">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 mb-2">Subject</label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-4 top-3.5 text-gray-500 group-focus-within/input:text-pink-500 transition-colors" />
                  <input 
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Internship Opportunity"
                    className="w-full bg-[#03030d] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message Textarea Box */}
              <div className="relative group/input">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your ideas or guidelines..."
                  className="w-full bg-[#03030d] border border-gray-800 rounded-xl p-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Trigger Action Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-sm font-semibold text-white py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] disabled:opacity-50 active:scale-[0.99] group/btn"
              >
               send
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;