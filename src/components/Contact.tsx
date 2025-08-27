import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { PersonalInfo } from '../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  return (
<<<<<<< HEAD
    <section id="contact" className="py-20 bg-black text-cyan-400 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating cyber particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Neon orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in font-mono">
            Let's Work Together
          </h2>
          <p className="text-xl text-cyan-200 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay font-mono">
=======
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto">
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
<<<<<<< HEAD
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8 text-cyan-300 font-mono">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="group flex items-center gap-6 p-6 bg-cyan-500/10 rounded-2xl backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 border border-cyan-400/30 hover:border-cyan-400">
                  <div className="p-3 bg-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-cyan-300 font-mono">Email</p>
                    <p className="text-cyan-200 group-hover:text-cyan-100 transition-colors font-mono">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-6 p-6 bg-purple-500/10 rounded-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 border border-purple-400/30 hover:border-purple-400">
                  <div className="p-3 bg-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-400/25">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-purple-300 font-mono">Phone</p>
                    <p className="text-purple-200 group-hover:text-purple-100 transition-colors font-mono">{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-6 p-6 bg-pink-500/10 rounded-2xl backdrop-blur-sm hover:bg-pink-500/20 transition-all duration-300 hover:scale-105 border border-pink-400/30 hover:border-pink-400">
                  <div className="p-3 bg-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-400/25">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-pink-300 font-mono">Location</p>
                    <p className="text-pink-200 group-hover:text-pink-100 transition-colors font-mono">{personalInfo.location}</p>
=======
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <div className="text-left">
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <div className="text-left">
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-blue-200" />
                  <div className="text-left">
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-100">{personalInfo.location}</p>
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
<<<<<<< HEAD
              <div className="flex justify-center gap-6 pt-8">
=======
              <div className="flex justify-center gap-6 pt-6">
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="group p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6 group-hover:animate-bounce" />
=======
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                >
                  <Linkedin className="w-6 h-6" />
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="group p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl hover:from-gray-900 hover:to-black transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="w-6 h-6 group-hover:animate-bounce" />
=======
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                >
                  <Github className="w-6 h-6" />
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
<<<<<<< HEAD
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 text-purple-200">Send Message</h3>
              <form className="space-y-6">
=======
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-4">
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
<<<<<<< HEAD
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl placeholder-white/70 text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
=======
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50 backdrop-blur-sm"
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
<<<<<<< HEAD
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl placeholder-white/70 text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
=======
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50 backdrop-blur-sm"
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
<<<<<<< HEAD
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl placeholder-white/70 text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm resize-none"
=======
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50 backdrop-blur-sm resize-none"
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                  ></textarea>
                </div>
                <button
                  type="submit"
<<<<<<< HEAD
                  className="group w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Send className="w-5 h-5 group-hover:animate-bounce" />
=======
                  className="w-full bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;