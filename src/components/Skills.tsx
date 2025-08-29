import React, { useState, useEffect } from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
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

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-black text-cyan-400 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating cyber particles */}
        {[...Array(25)].map((_, i) => (
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in font-mono">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/70 transition-all duration-500 hover:scale-105 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors font-mono">{skill.name}</h3>
                  <span className="ml-auto text-lg text-cyan-400 font-bold font-mono">
                    {skill.proficiency}%
                  </span>
                </div>
                
                <div className="w-full bg-cyan-400/20 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 ease-out relative"
                    style={{
                      width: isVisible ? `${skill.proficiency}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;