
import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/afs_hero/1920/1080" 
          alt="AFS Team Working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            25+ Years of Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Protect Your Home's <br/>
            <span className="text-brand-yellow">Foundation & Basement</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Huntsville's trusted experts for structural repair, waterproofing, and crawl space solutions. 
            Free inspections and permanent solutions for every homeowner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={onOpenForm}
              className="bg-brand-yellow text-brand-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-orange transition-all shadow-xl"
            >
              Schedule Free Inspection
            </button>
            <a 
              href="tel:8662578991"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              Call 866-257-8991
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-80">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-star text-brand-yellow"></i>
              <span className="text-sm font-medium">BBB A+ Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-award text-brand-yellow"></i>
              <span className="text-sm font-medium">Top Workplaces</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-shield-halved text-brand-yellow"></i>
              <span className="text-sm font-medium">Life-time Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-dollar-sign text-brand-yellow"></i>
              <span className="text-sm font-medium">Financing Available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-gray">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.39,120,131.29,120,196.39,112.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
