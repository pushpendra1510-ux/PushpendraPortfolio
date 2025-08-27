import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className={`font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${scrolled ? '' : 'text-white'}`}>
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
            Pushpendra Regar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
<<<<<<< HEAD
                className={`capitalize font-semibold transition-all duration-300 relative group ${
                  scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
=======
                className={`capitalize font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {section}
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
=======
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
=======
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
            <div className="py-4 space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
<<<<<<< HEAD
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 capitalize font-medium"
=======
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300 capitalize"
>>>>>>> 471872cc76fa825e93ef4532a3b0e01a8bce91de
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;