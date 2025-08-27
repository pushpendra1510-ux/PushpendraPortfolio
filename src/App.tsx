import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { personalInfo, skills, projects } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;