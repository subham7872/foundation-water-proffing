
import React from 'react';
import { LOCATIONS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-yellow p-1 rounded text-brand-navy font-bold text-lg">AFS</div>
              <span className="font-bold text-xl">Foundation Specialists</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing foundation repair, basement waterproofing, crawl space repair, and concrete leveling for homeowners since 2000. Part of the Groundworks network.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 underline decoration-brand-yellow underline-offset-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About AFS</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 underline decoration-brand-yellow underline-offset-8">Locations</h4>
            <ul className="space-y-4 text-gray-400">
              {LOCATIONS.map(loc => (
                <li key={loc.name}>
                  <p className="text-white font-medium">{loc.name}</p>
                  <p className="text-sm">{loc.phone}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 underline decoration-brand-yellow underline-offset-8">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-phone text-brand-yellow mt-1"></i>
                <div className="text-gray-400">
                  <p className="text-white font-medium">Customer Support</p>
                  <p className="text-lg font-bold text-brand-yellow">866-257-8991</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-envelope text-brand-yellow mt-1"></i>
                <div className="text-gray-400">
                  <p className="text-white font-medium">Email Us</p>
                  <p>support@afsrepair.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 AFS Foundation & Waterproofing Specialists. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Accessibility Statement</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
