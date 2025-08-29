import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail, Phone, Github, Linkedin, Sparkles, Code, Zap } from 'lucide-react';
import { PersonalInfo } from '../types';
import { getAssetPath, handleAssetError } from '../utils/fileUtils';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const titles = [
    "Creative Full Stack Developer",
    "Python Enthusiast",
    "React Developer",
    "Problem Solver",
    "Tech Innovator"
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[currentTextIndex];
    let charIndex = 0;

    setIsTyping(true);
    setDisplayText('');

    const typingInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Wait before starting to delete
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentTitle.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deletingInterval);
              setCurrentTextIndex((prev) => (prev + 1) % titles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);
  }, [currentTextIndex]);

  return (
    <section className="min-h-screen bg-black text-cyan-400 flex items-center justify-center relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
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
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Animated profile section */}
          <div className="relative mb-12">
            {/* Profile Image with animated border */}
            <div className="relative w-40 h-40 mx-auto mb-8 mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl overflow-hidden border-2 border-cyan-400">
                  <img 
                    src={getAssetPath('image.jpeg', 'images')}
                    alt="Pushpendra Regar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      handleAssetError(e.nativeEvent, target.nextElementSibling as HTMLElement);
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              
              {/* Floating cyber icons around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-cyan-400/50">
                <Code className="w-4 h-4 text-black" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-purple-400/50" style={{animationDelay: '0.5s'}}>
                <Zap className="w-4 h-4 text-black" />
              </div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-pink-400/50" style={{animationDelay: '1s'}}>
                <Sparkles className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Main heading with cyber glow effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse font-mono">
            {personalInfo.name}
          </h1>
          
          {/* Animated title with typing effect */}
          <div className="h-12 mb-8 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-cyan-300 font-mono">
              {displayText}
              <span className={`inline-block w-1 h-8 bg-cyan-400 ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
            </p>
          </div>

          {/* Animated bio */}
          <p className="text-lg md:text-xl mb-12 text-cyan-200 max-w-3xl mx-auto leading-relaxed animate-fade-in font-mono">
            {personalInfo.bio}
          </p>

          {/* Contact Info with cyber hover effects */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="group flex items-center gap-3 px-6 py-3 bg-cyan-500/10 rounded-full backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-cyan-400/30 hover:border-cyan-400">
              <MapPin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className="text-cyan-200 group-hover:text-cyan-100 transition-colors font-mono">{personalInfo.location}</span>
            </div>
            <div className="group flex items-center gap-3 px-6 py-3 bg-purple-500/10 rounded-full backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-purple-400/30 hover:border-purple-400">
              <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-purple-200 group-hover:text-purple-100 transition-colors font-mono">{personalInfo.email}</span>
            </div>
            <div className="group flex items-center gap-3 px-6 py-3 bg-pink-500/10 rounded-full backdrop-blur-sm hover:bg-pink-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-pink-400/30 hover:border-pink-400">
              <Phone className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
              <span className="text-pink-200 group-hover:text-pink-100 transition-colors font-mono">{personalInfo.phone}</span>
            </div>
          </div>

          {/* Social and CTA buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* Social buttons */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github className="w-5 h-5 group-hover:animate-bounce" />
              GitHub
            </a>
            
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
              LinkedIn
            </a>

            {/* Main CTA */}
            <button
              onClick={scrollToAbout}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 animate-pulse"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>

          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['⚡ JavaScript', '🐍 Python', '⚛️ React', '🌐 HTML', '🎨 CSS', '🚀 Node.js'].map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/50 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-500/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;