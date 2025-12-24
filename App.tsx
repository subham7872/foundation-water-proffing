
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { TESTIMONIALS, LOCATIONS, FAQS } from './constants.tsx';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onOpenForm={() => setIsFormOpen(true)} />
      
      <main>
        <Hero onOpenForm={() => setIsFormOpen(true)} />

        {/* Trust Badges Bar */}
        <section className="bg-white py-8 border-b border-gray-100">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/BBB_logo.svg/1200px-BBB_logo.svg.png" alt="BBB" className="h-10" />
            <img src="https://picsum.photos/seed/award1/120/40" alt="Award 1" className="h-10" />
            <img src="https://picsum.photos/seed/award2/120/40" alt="Award 2" className="h-10" />
            <img src="https://picsum.photos/seed/award3/120/40" alt="Award 3" className="h-10" />
          </div>
        </section>

        <Services />

        {/* How It Works Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-brand-navy text-sm font-bold uppercase tracking-widest mb-3">Our Process</h2>
              <h3 className="text-4xl font-bold">How We Restore Your Home</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
              {[
                { step: '01', title: 'Free Inspection', desc: 'Our certified pros assess your home thoroughly.', icon: 'fa-magnifying-glass' },
                { step: '02', title: 'Custom Solution', desc: 'A detailed plan tailored to your structural needs.', icon: 'fa-file-invoice' },
                { step: '03', title: 'Expert Install', desc: 'Our trained crews implement the fix with precision.', icon: 'fa-tools' },
                { step: '04', title: 'Warranty', desc: 'Sleep easy with our lifetime transferable warranties.', icon: 'fa-shield-check' }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 bg-white border-2 border-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-yellow transition-all duration-300">
                    <i className={`fa-solid ${item.icon} text-brand-navy text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-brand-navy text-white overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="https://picsum.photos/seed/team_afs/800/800" 
                  alt="AFS Team" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-brand-yellow font-bold uppercase tracking-widest mb-4">About AFS</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">Serving the South with Integrity Since 2000</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  What started in a garage has grown into the Southeastern leader in foundation repair. As a partner in the Groundworks network, AFS brings national-level engineering with local, family-owned service values.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-4xl font-bold text-brand-yellow mb-2">250K+</h4>
                    <p className="text-gray-400">Homes Served</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-brand-yellow mb-2">25+</h4>
                    <p className="text-gray-400">Years Experience</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-brand-yellow text-brand-navy px-8 py-4 rounded-lg font-bold hover:bg-brand-orange transition-all"
                >
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Profiles Section */}
        <section id="locations" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-brand-navy text-sm font-bold uppercase tracking-widest mb-3">Our Local Presence</h2>
            <h3 className="text-4xl font-bold mb-6">Local Trust, Regional Power</h3>
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOCATIONS.map(loc => (
              <div key={loc.name} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <img src={loc.managerPhoto} alt={loc.manager} className="w-20 h-20 rounded-full mb-6 border-4 border-brand-yellow/20" />
                <h4 className="text-2xl font-bold mb-2">{loc.name}</h4>
                <p className="text-brand-blue font-semibold mb-4">Mgr: {loc.manager}</p>
                <p className="text-gray-500 mb-2">{loc.address}</p>
                <p className="text-brand-navy font-bold mb-6">{loc.phone}</p>
                <a href={`tel:${loc.phone.replace(/-/g, '')}`} className="w-full py-3 border-2 border-brand-navy rounded-lg font-bold hover:bg-brand-navy hover:text-white transition-all">
                  Call Local Branch
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-xl font-bold mb-3 flex items-center">
                    <i className="fa-solid fa-circle-question text-brand-blue mr-3"></i>
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-brand-orange py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Ready for your free inspection?</h2>
              <p className="text-xl opacity-90 text-white/90">Don't wait for structural issues to get worse.</p>
            </div>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-blue shadow-2xl transition-all transform hover:scale-105"
            >
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <AIAssistant />
    </div>
  );
};

export default App;
