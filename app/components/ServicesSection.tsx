"use client"
import React from 'react';
import { ChefHat, Calendar, Briefcase, Users, Presentation, Armchair, Microwave, Utensils, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/types';
import { servicesData } from '../data/services';

const IconMap: Record<string, React.FC<any>> = {
  ChefHat, Calendar, Briefcase, Users, Presentation, Armchair, Microwave, Utensils
};

interface ServicesSectionProps {
  onServiceClick: (service: ServiceItem) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Modern Clean Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23312a82' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}>
        </div>
        
        {/* Soft Gradients for depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-cater-red font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-cater-red"></span>
                  Our Expertise
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-cater-blue">
                   Curated Event Services
                </h3>
            </div>
            <p className="max-w-md text-slate-500 leading-relaxed text-right md:text-right text-left font-medium">
              From culinary masterpieces to logistical precision, we provide everything needed for a flawless occasion.
            </p>
        </div>

        {/* Creative Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-6">
          {servicesData.map((service, index) => {
            const Icon = IconMap[service.iconName];
            // Layout Logic
            // 0: 2x2 (Big Feature)
            // 3: 2 wide
            // 6: 2 wide
            // 7: Full width strip
            const spanClass = 
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 3 ? 'md:col-span-2' :
                index === 6 ? 'md:col-span-2' : 
                index === 7 ? 'md:col-span-3 lg:col-span-4' : '';

            return (
              <div 
                key={service.id} 
                onClick={() => onServiceClick(service)}
                className={`relative group overflow-hidden rounded-3xl bg-slate-900 shadow-xl cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${spanClass}`}
              >
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.imageUrl})` }}
                ></div>
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 group-hover:opacity-80 transition-all duration-500"></div>
                
                {/* Colored overlay on hover */}
                <div className="absolute inset-0 bg-cater-blue/60 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                        {/* Icon */}
                        <div className="p-3 glass-card rounded-2xl text-cater-blue group-hover:text-cater-red transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                           <Icon size={28} strokeWidth={1.5} />
                         </div>
                        <span className="text-white/20 text-5xl font-serif font-bold group-hover:text-white/40 transition-colors duration-500 select-none">
                            0{index + 1}
                        </span>
                    </div>

                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h4 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide">{service.title}</h4>
                        <p className="text-slate-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-relaxed mb-4 group-hover:text-white">
                            {service.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-cater-red font-bold text-xs uppercase tracking-widest opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                            View Details <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;