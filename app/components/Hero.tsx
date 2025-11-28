import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop', // Catering setup
  'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2000&auto=format&fit=crop', // Wedding Party
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop', // Chafing dishes/Food
  'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=3456&auto=format&fit=crop', // Fancy drinks/Glasses
  'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2118&auto=format&fit=crop', // Chairs/Furniture
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-cater-blue">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          {/* Gradients */}
          <div className="absolute inset-0 bg-cater-blue/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cater-blue via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cater-blue/50 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in justify-center sm:justify-start">
             <div className="flex text-cater-red">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
             </div>
             <span className="text-white/80 font-medium tracking-wide text-sm">
                PREMIER EVENT SOLUTIONS IN UAE
             </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 shadow-sm">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cater-red to-orange-500">Unforgettable</span> <br/>
            Experiences.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-100 mb-10 max-w-2xl font-light leading-relaxed">
            From corporate galas to intimate gatherings, CaterTech provides world-class catering, event management, and premium equipment rentals tailored to your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start">
            <a 
              href="#services"
              className="px-10 py-5 bg-cater-red hover:bg-red-700 text-white rounded-md font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
            >
              Explore Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-cater-blue text-white rounded-md font-bold text-lg transition-all flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Progress Indicators - Positioned at Bottom Center */}
      <div className="absolute bottom-10 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-3 justify-center">
                {images.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImage ? 'w-12 bg-cater-red' : 'w-3 bg-white/30 hover:bg-white/60'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;