import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:35px_35px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating cyber particles */}
        {[...Array(20)].map((_, i) => (
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
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in font-mono">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.name} className="group bg-black/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-[1.02] border border-cyan-400/30 hover:border-cyan-400">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4 group-hover:text-cyan-200 transition-colors font-mono">{project.name}</h3>
                  <p className="text-cyan-200 mb-6 leading-relaxed text-lg font-mono">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105 border border-cyan-400/30 hover:border-cyan-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 font-mono">
                      <ExternalLink className="w-5 h-5 group-hover/btn:animate-bounce" />
                      Live Demo
                    </button>
                    <button className="group/btn flex items-center gap-3 px-6 py-3 border-2 border-cyan-400 text-cyan-300 rounded-xl hover:border-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 font-semibold hover:scale-105 font-mono">
                      <Github className="w-5 h-5 group-hover/btn:animate-bounce" />
                      Code
                    </button>
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

export default Projects;