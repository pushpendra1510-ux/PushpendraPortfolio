import React, { useState, useEffect } from 'react';
import { PersonalInfo } from '../types';
import { Code, Cloud, Github, Lightbulb } from 'lucide-react';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}

        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in font-mono">
            About Me
          </h2>

          <div className="bg-black/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-[1.02]">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse"></div>

            <p className="text-lg md:text-xl text-cyan-200 leading-relaxed mb-8 animate-fade-in-delay font-mono">
              {personalInfo.bio}
            </p>

            {/* Animated cyber skill badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="group flex flex-col items-center p-4 bg-cyan-500/10 rounded-2xl hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-cyan-400/30 hover:border-cyan-400">
                <Code className="w-8 h-8 text-cyan-400 mb-2 group-hover:animate-bounce" />
                <span className="text-sm font-semibold text-cyan-300 font-mono">
                  Full Stack Development
                </span>
              </div>

              <div className="group flex flex-col items-center p-4 bg-purple-500/10 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-purple-400/30 hover:border-purple-400">
                <Cloud className="w-8 h-8 text-purple-400 mb-2 group-hover:animate-bounce" />
                <span className="text-sm font-semibold text-purple-300 font-mono">
                  Cloud Services
                </span>
              </div>

              <div className="group flex flex-col items-center p-4 bg-pink-500/10 rounded-2xl hover:bg-pink-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-pink-400/30 hover:border-pink-400">
                <Github className="w-8 h-8 text-pink-400 mb-2 group-hover:animate-bounce" />
                <span className="text-sm font-semibold text-pink-300 font-mono">
                  Open Source
                </span>
              </div>

              <div className="group flex flex-col items-center p-4 bg-green-500/10 rounded-2xl hover:bg-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-green-400/30 hover:border-green-400">
                <Lightbulb className="w-8 h-8 text-green-400 mb-2 group-hover:animate-bounce" />
                <span className="text-sm font-semibold text-green-300 font-mono">
                  Problem Solving
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
              <div
                className="w-3 h-3 bg-blue-500 rounded-full animate-ping"
                style={{ animationDelay: '0.5s' }}
              ></div>
              <div
                className="w-3 h-3 bg-pink-500 rounded-full animate-ping"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/50 rounded-full animate-ping"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-pink-500/50 rounded-full animate-ping"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-blue-500/50 rounded-full animate-ping"
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
};

export default About;
