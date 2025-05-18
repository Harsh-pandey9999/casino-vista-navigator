
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-casino-primary">
            <span className="text-casino-accent">Cashino</span>Partners
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('featured-casinos')}
            className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer"
          >
            Casinos
          </a>
          <a 
            onClick={() => scrollToSection('game-types')}
            className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer"
          >
            Games
          </a>
          <a 
            onClick={() => scrollToSection('bonuses')}
            className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer"
          >
            Bonuses
          </a>
          <a 
            onClick={() => scrollToSection('news')}
            className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer"
          >
            News
          </a>
          <a 
            onClick={() => scrollToSection('blog')}
            className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer"
          >
            Blog
          </a>
          <button className="bg-casino-primary text-white px-4 py-2 rounded-lg hover:bg-casino-secondary transition-colors duration-300">
            Join Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-casino-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-3">
            <a 
              onClick={() => scrollToSection('featured-casinos')}
              className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer py-2"
            >
              Casinos
            </a>
            <a 
              onClick={() => scrollToSection('game-types')}
              className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer py-2"
            >
              Games
            </a>
            <a 
              onClick={() => scrollToSection('bonuses')}
              className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer py-2"
            >
              Bonuses
            </a>
            <a 
              onClick={() => scrollToSection('news')}
              className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer py-2"
            >
              News
            </a>
            <a 
              onClick={() => scrollToSection('blog')}
              className="text-slate-700 hover:text-casino-primary font-medium transition-colors cursor-pointer py-2"
            >
              Blog
            </a>
            <button className="bg-casino-primary text-white px-4 py-2 rounded-lg hover:bg-casino-secondary transition-colors duration-300 mt-2">
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
