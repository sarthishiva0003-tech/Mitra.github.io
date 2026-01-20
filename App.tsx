import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS, PRODUCTS } from './constants';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import { Phone, MapPin, Mail, Menu, X, Facebook, Instagram, Twitter, ChevronRight, PlayCircle, Percent } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Rotating ads data
  const ads = [
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      label: "Exclusive Shoes",
      offer: "50% OFF",
      subtext: "Walk in Style"
    },
    {
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
      label: "Premium Jewelry",
      offer: "New Collection",
      subtext: "Shine Bright"
    },
    {
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=80",
      label: "Computer Courses",
      offer: "Learn & Grow",
      subtext: "Master Coding Today"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, 4000); // Change ad every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const handleEnquire = (productName: string) => {
    setSelectedProduct(productName);
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-brand-900 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {COMPANY_DETAILS.phone}</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {COMPANY_DETAILS.email}</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-300 transition-colors">GSTIN: {COMPANY_DETAILS.gstin}</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-brand-900 tracking-tight leading-none">{COMPANY_DETAILS.name}</h1>
              <p className="text-[10px] md:text-xs text-brand-600 uppercase tracking-wider hidden sm:block">Advertising Digital Standee</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            <button onClick={() => scrollToSection('home')} className="hover:text-brand-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-brand-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-brand-600 transition-colors">Products</button>
            <button onClick={() => scrollToSection('contact')} className="bg-brand-600 text-white px-6 py-2 rounded-full hover:bg-brand-700 transition-all shadow-md">Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
             <button onClick={() => scrollToSection('home')} className="text-left py-2 border-b border-gray-50">Home</button>
             <button onClick={() => scrollToSection('about')} className="text-left py-2 border-b border-gray-50">About</button>
             <button onClick={() => scrollToSection('products')} className="text-left py-2 border-b border-gray-50">Products</button>
             <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-brand-600 font-bold">Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-brand-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-800 skew-x-12 transform translate-x-20 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your Business With <span className="text-brand-300">Digital Signage</span>
            </h2>
            <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto md:mx-0">
              Premium Indoor Digital Standees, Wall Mounts, and LED Displays designed to captivate your audience and boost brand visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-white text-brand-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-brand-900 transition-all"
              >
                Get a Quote
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Hero Image / Illustration */}
            <div className="relative">
              {/* Primary Standee - Now with Rotating Ads */}
              <div className="w-64 md:w-80 h-96 md:h-[500px] bg-black rounded-xl border-8 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden transform -rotate-6 relative z-10 group">
                
                {/* Rotating Content */}
                <div className="relative w-full h-full bg-gray-900">
                    {ads.map((ad, index) => (
                      <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentAdIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                        <img 
                          src={ad.image} 
                          alt={ad.label} 
                          className="w-full h-full object-cover opacity-90" 
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Ad Content */}
                        <div className="absolute top-6 right-6">
                            <div className="bg-brand-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase tracking-wide">
                                AD
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-0 right-0 p-6 text-center">
                            <div className="inline-block bg-white text-brand-900 font-bold text-xs px-3 py-1 rounded-full mb-3 shadow-lg transform scale-100 animate-pulse">
                              {ad.label}
                            </div>
                            <h3 className="text-white font-extrabold text-3xl drop-shadow-md leading-none mb-1">{ad.offer}</h3>
                            <p className="text-brand-200 text-sm font-medium drop-shadow-md">{ad.subtext}</p>
                        </div>
                      </div>
                    ))}
                </div>
                
                {/* Reflection/Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
              </div>

              {/* Secondary Background Standee (Static) */}
              <div className="w-64 md:w-80 h-96 md:h-[500px] bg-black rounded-xl border-8 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden transform rotate-6 absolute top-10 left-10 md:left-20 z-0 opacity-50">
                 <img src="https://picsum.photos/400/700?random=11" alt="Standee 2" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Description */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-brand-600 font-bold tracking-widest uppercase mb-2">About Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Modern Digital Advertising Solutions</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Indoor Digital Standee is a modern digital advertising solution. It is widely used for promotion, information, and branding in shops, malls, hotels, hospitals, and offices. With high-resolution displays, it showcases images, videos, and ads in the most attractive way possible. We are committed to providing robust metal body structures with plug-and-play systems.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with "Google Form" style */}
      <section id="contact" className="py-20 bg-brand-900 relative">
         <div className="absolute inset-0 overflow-hidden">
             <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-700 rounded-full blur-3xl opacity-20"></div>
             <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
         </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Contact Info */}
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-brand-100 mb-10 text-lg">
                Ready to upgrade your advertising? Reach out to us for a custom quote or more information about our products.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Visit Us</h4>
                    {/* Updated to open in Google Maps */}
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_DETAILS.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-100 leading-relaxed max-w-xs hover:text-white hover:underline transition-all block"
                    >
                      {COMPANY_DETAILS.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Call Us</h4>
                    <p className="text-brand-100 text-lg">{COMPANY_DETAILS.phone}</p>
                    <p className="text-brand-400 text-sm">Mon-Sat: 9am - 8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email Us</h4>
                    <p className="text-brand-100">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-800 bg-opacity-50 rounded-xl border border-brand-700">
                <h4 className="font-bold text-lg mb-2">Why Choose {COMPANY_DETAILS.name}?</h4>
                <ul className="space-y-2 text-brand-100">
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Strong Metal Body Construction</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 24x7 Continuous Operation</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Comprehensive After-Sales Support</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 w-full">
              <ContactForm initialProductInterest={selectedProduct} />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{COMPANY_DETAILS.name}</h3>
            <p className="mb-4 text-sm">Providing top-tier digital signage solutions including Standees, Wall Mounts, and LED Video Walls.</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
             <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
             <ul className="space-y-2 text-sm">
               <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
               <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">All Products</button></li>
               <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Company</button></li>
               <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Support</button></li>
             </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
             <ul className="space-y-2 text-sm">
               <li>GSTIN: <span className="text-slate-200">{COMPANY_DETAILS.gstin}</span></li>
               <li>Privacy Policy</li>
               <li>Terms of Service</li>
             </ul>
             <p className="mt-6 text-xs">&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;