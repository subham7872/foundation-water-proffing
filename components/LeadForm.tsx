
import React, { useState } from 'react';
import { SERVICES } from '../constants.tsx';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Captured:', formData);
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-check text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-gray-600">A local AFS specialist will contact you within 24 hours to schedule your free inspection.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <button 
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>

            <h2 className="text-3xl font-bold text-brand-navy mb-2">Get Your Free Estimate</h2>
            <p className="text-gray-600 mb-8">No obligation. No pressure. Just solutions.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    placeholder="35801"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition-all bg-white"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full mt-8 bg-brand-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-navy transition-all shadow-lg shadow-brand-orange/20"
            >
              Request Free Inspection
            </button>

            <p className="mt-4 text-[10px] text-gray-400 text-center leading-tight">
              By clicking "Request Free Inspection", you agree to our Terms and consent to be contacted by phone/text/email for marketing purposes.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadForm;
