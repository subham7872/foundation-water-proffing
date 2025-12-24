
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-navy text-sm font-bold uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Specialized Solutions for Every Home</h3>
          <p className="text-gray-600 text-lg">
            Whether your home is settling, your basement is leaking, or your crawl space is damp, AFS has the certified solutions to fix it right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-navy/20"></div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center mb-6 text-brand-yellow text-2xl group-hover:bg-brand-orange transition-colors">
                  <i className={service.icon}></i>
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center text-brand-blue font-bold group-hover:text-brand-orange transition-colors">
                  Learn More <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
