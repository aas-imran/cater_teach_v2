import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'gallery' | 'service-detail' | 'blogs';
  onNavigate: (page: 'home' | 'gallery' | 'service-detail') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, page?: 'home' | 'gallery') => {
    setIsOpen(false);
    if (page) {
      onNavigate(page);
    } else if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services', action: () => handleNavClick('#services') },
    { name: 'Equipments', href: '#equipments', action: () => handleNavClick('#equipments') },
    { name: 'About', href: '#about', action: () => handleNavClick('#about') },
    { name: 'Blogs', href: '#blogs', action: () => handleNavClick('#blogs') },
    { name: 'Gallery', href: '#', action: () => handleNavClick('#', 'gallery') },
    { name: 'Contact', href: '#contact', action: () => handleNavClick('#contact') },
  ];

  const isDetailPage = currentPage === 'gallery' || currentPage === 'service-detail';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isDetailPage ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className={`p-2 rounded-lg transition-colors ${scrolled || isDetailPage ? 'bg-cater-blue text-white group-hover:bg-cater-red' : 'bg-white text-cater-blue'}`}>
              <UtensilsCrossed size={24} />
            </div>
            <span className={`text-2xl font-serif font-bold transition-colors ${scrolled || isDetailPage ? 'text-cater-blue' : 'text-white'}`}>
              CaterTech
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isDetailPage ? (
               <button 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-cater-blue font-semibold hover:text-cater-red transition-colors"
               >
                 <ArrowLeft size={18} /> Back to Home
               </button>
            ) : (
              navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className={`font-medium transition-colors hover:text-cater-red text-sm uppercase tracking-wide ${
                    scrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </button>
              ))
            )}
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className={`px-6 py-2.5 rounded-md font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 ${
                scrolled || isDetailPage
                  ? 'bg-cater-red text-white hover:bg-red-700'
                  : 'bg-white text-cater-blue hover:bg-cater-gray'
              }`}
            >
              <Phone size={16} />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || isDetailPage ? 'text-cater-blue' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-slide-up">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            {isDetailPage ? (
              <button
                 onClick={() => { setIsOpen(false); onNavigate('home'); }}
                 className="text-lg font-medium text-slate-700 hover:text-cater-red text-left block px-2 py-2 border-b border-slate-50 flex items-center gap-2"
              >
                 <ArrowLeft size={18} /> Back to Home
              </button>
            ) : (
              navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-lg font-medium text-slate-700 hover:text-cater-red text-left block px-2 py-2 border-b border-slate-50"
                >
                  {link.name}
                </button>
              ))
            )}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full text-center px-5 py-3 rounded-lg bg-cater-blue text-white font-bold mt-4"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;