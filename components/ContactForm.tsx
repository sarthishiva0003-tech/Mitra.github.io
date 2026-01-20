import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, ShoppingBag, ExternalLink } from 'lucide-react';
import { ContactFormState } from '../types';
import { GOOGLE_FORM_URL, COMPANY_DETAILS } from '../constants';

interface ContactFormProps {
  initialProductInterest?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialProductInterest = '' }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    productInterest: initialProductInterest,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link components
    const subject = `Enquiry from Website: ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct Interest: ${formData.productInterest}\nMessage: ${formData.message}`;
    
    // Use window.location.href instead of window.open for better mobile compatibility with Mail apps
    // This ensures the default mail app opens directly
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 10000); // Increased timeout to give user more time to read
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in h-full flex flex-col justify-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Opening Email App...</h3>
        
        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm mb-4">
          <p className="text-green-700 mb-1">We are directing your message to:</p>
          <p className="font-bold text-lg text-brand-700 break-all">{COMPANY_DETAILS.email}</p>
        </div>

        <p className="text-green-700 mb-6 text-sm">
           Please press the <b>"Send"</b> button in your email app to complete the process.
        </p>

        <p className="text-xs text-gray-500 mb-2">Email didn't open?</p>
        <a 
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 w-full md:w-auto"
        >
          Use Google Form Instead <ExternalLink className="ml-2 -mr-1 h-4 w-4" />
        </a>
        
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-green-600 font-semibold hover:underline text-xs block mx-auto"
        >
          Return to website form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-brand-600 h-full" id="contact-form-container">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Get a Quote</h3>
      <p className="text-gray-500 mb-6">Fill out the form below and we will contact you with the best price.</p>
      
      <form id="hs-contact-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:border-brand-500 focus:ring-brand-500 py-3 transition-colors"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:border-brand-500 focus:ring-brand-500 py-3 transition-colors"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:border-brand-500 focus:ring-brand-500 py-3 transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Interested In</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ShoppingBag className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:border-brand-500 focus:ring-brand-500 py-3 transition-colors appearance-none"
            >
              <option value="">Select a Product...</option>
              <option value="A Type Standee">A Type Standee</option>
              <option value="L Type Standee">L Type Standee</option>
              <option value="Wall Mount Display">Wall Mount Display</option>
              <option value="P4 LED Display">P4 LED Display</option>
              <option value="Other">Other / General Enquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <div className="relative">
             <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:border-brand-500 focus:ring-brand-500 py-3 transition-colors"
              placeholder="Any specific requirements?"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-800 hover:bg-brand-900 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
        >
          Send Enquiry via Email <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Google Form Alternative */}
      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500 mb-3">Prefer filling a detailed form?</p>
        <a 
          href={GOOGLE_FORM_URL}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 transition-colors"
        >
          Fill Google Form <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;