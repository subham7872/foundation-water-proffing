
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-brand-yellow p-2 rounded text-brand-navy font-bold text-xl">AFS</div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
            Foundation Specialists
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8 text-white font-medium">
          <a href="#services" className="hover:text-brand-yellow transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
          <a href="#locations" className="hover:text-brand-yellow transition-colors">Locations</a>
          <a href="#reviews" className="hover:text-brand-yellow transition-colors">Reviews</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:8662578991" className="hidden sm:flex items-center text-white font-bold hover:text-brand-yellow">
            <i className="fa-solid fa-phone mr-2"></i>
            866-257-8991
          </a>
          <button 
            onClick={onOpenForm}
            className="bg-brand-yellow text-brand-navy px-6 py-2 rounded-full font-bold shadow-md hover:bg-brand-orange transition-all transform hover:scale-105"
          >
            Free Inspection
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
