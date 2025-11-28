"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  ArrowLeft, CheckCircle, Phone, Calendar, Clock, 
  ShieldCheck, Star, Award, ChevronRight, Zap, ArrowRight 
} from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
}

// Helper to generate rich content based on service category
const getServiceContent = (service: ServiceItem) => {
  const commonProcess = [
    { step: '01', title: 'Consultation', desc: 'We meet to discuss your vision, requirements, and budget.' },
    { step: '02', title: 'Planning & Design', desc: 'Our team crafts a tailored plan including logistics and timeline.' },
    { step: '03', title: 'Execution', desc: 'On the day, we handle everything ensuring flawless delivery.' },
    { step: '04', title: 'Wrap-up', desc: 'Post-event breakdown and feedback collection.' }
  ];

  switch (service.category) {
    case 'Catering':
      return {
        tagline: "Culinary Excellence Meets Impeccable Service",
        intro: "Experience the art of fine dining at your venue. Our culinary team brings passion, creativity, and the freshest ingredients to every plate.",
        benefits: [
          { title: 'Custom Menus', desc: 'Tailored to dietary needs and themes.', icon: Star },
          { title: 'Live Stations', desc: 'Interactive cooking experiences.', icon: Zap },
          { title: 'Hygiene First', desc: 'HACCP certified preparation.', icon: ShieldCheck },
          { title: 'Premium Presentation', desc: 'Elegant tableware and styling.', icon: Award },
        ],
        process: [
          { step: '01', title: 'Tasting', desc: 'Sample our signature dishes and finalize your menu.' },
          { step: '02', title: 'Logistics', desc: 'Site visit to plan kitchen setup and flow.' },
          { step: '03', title: 'Service', desc: 'Professional waitstaff and culinary team on-site.' },
        ]
      };
    case 'Events':
      return {
        tagline: "Creating Moments That Last a Lifetime",
        intro: "From concept to curtain call, we orchestrate every detail. Our event management services ensure you can be a guest at your own event.",
        benefits: [
          { title: 'Vendor Management', desc: 'We handle all third-party contracts.', icon: CheckCircle },
          { title: 'Creative Design', desc: 'Immersive themes and decor.', icon: Star },
          { title: 'On-site Coord', desc: 'Dedicated managers present all day.', icon: Clock },
          { title: 'Budget Control', desc: 'Transparent pricing with no surprises.', icon: ShieldCheck },
        ],
        process: commonProcess
      };
    case 'Rental':
      return {
        tagline: "Premium Equipment for Every Occasion",
        intro: "Transform your space with our high-end furniture and kitchen rentals. We provide clean, modern, and reliable equipment delivered to your door.",
        benefits: [
          { title: 'Wide Inventory', desc: 'From spoons to sofas, we have it all.', icon: CheckCircle },
          { title: 'Sanitized', desc: 'Deep cleaned before every delivery.', icon: ShieldCheck },
          { title: 'Flexible Terms', desc: 'Daily, weekly, or monthly rates.', icon: Calendar },
          { title: 'Setup Crew', desc: 'We do the heavy lifting for you.', icon: Zap },
        ],
        process: [
          { step: '01', title: 'Selection', desc: 'Browse our catalog and select items.' },
          { step: '02', title: 'Delivery', desc: 'Timely drop-off at your venue.' },
          { step: '03', title: 'Collection', desc: 'Hassle-free pickup after the event.' },
        ]
      };
    default:
      return {
        tagline: "Professional Service Solutions",
        intro: "Dedicated to excellence in every aspect of hospitality.",
        benefits: [
          { title: 'Expert Team', desc: 'Highly trained professionals.', icon: Award },
          { title: 'Reliability', desc: 'On time, every time.', icon: Clock },
          { title: 'Quality', desc: 'Top-tier equipment and service.', icon: Star },
          { title: 'Support', desc: '24/7 customer assistance.', icon: Phone },
        ],
        process: commonProcess
      };
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const content = getServiceContent(service);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Immersive Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-cater-blue">
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
        ></div>
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cater-blue/90 via-cater-blue/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <button 
                onClick={onBack}
                className="absolute top-8 left-4 sm:left-8 text-white/80 hover:text-white flex items-center gap-2 transition-all hover:-translate-x-1 group mb-8"
            >
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-cater-red transition-colors">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-medium tracking-wide text-sm uppercase">Back to Services</span>
            </button>

            <div className="max-w-3xl animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4 text-cater-red font-bold tracking-widest uppercase text-sm">
                    <span className="w-8 h-[2px] bg-cater-red"></span>
                    {service.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    {service.title}
                </h1>
                <p className="text-xl text-slate-100 font-light leading-relaxed border-l-4 border-cater-red pl-6 max-w-2xl">
                    {content.tagline}
                </p>
            </div>
        </div>
      </div>

      {/* Main Content Layout with Pattern Background */}
      <div className="relative bg-slate-50 w-full">
         {/* Visible Sleek Pattern Background */}
         <div className="absolute inset-0 opacity-[0.06]" 
              style={{ 
                  backgroundImage: `radial-gradient(#312a82 1.5px, transparent 1.5px), radial-gradient(#312a82 1.5px, transparent 1.5px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px'
              }}>
         </div>
         {/* Top Gradient Fade */}
         <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Column: Rich Content (8 Cols) */}
                <div className="lg:col-span-8 space-y-20">
                    
                    {/* Introduction */}
                    <div className="animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl font-serif font-bold text-cater-blue mb-6">The Experience</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                           <span className="text-5xl font-serif text-cater-red float-left mr-3 mt-[-10px]">{content.intro.charAt(0)}</span>
                           {content.intro.substring(1)}
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We believe that every event is unique, and our approach reflects that. 
                            By combining traditional hospitality values with modern innovation, we deliver a service 
                            that is not just functional, but truly memorable.
                        </p>
                    </div>

                    {/* Why Choose Us - Redesigned Minimal */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-cater-blue mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-cater-red rounded-full"></span>
                            Why Choose Us
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {content.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex gap-5 group items-start bg-white/50 p-4 rounded-xl border border-slate-100 hover:border-cater-blue/20 transition-all shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-cater-blue/5 text-cater-blue flex items-center justify-center group-hover:bg-cater-red group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                        <benefit.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-cater-blue transition-colors">{benefit.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process Timeline - Redesigned Minimal */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-cater-blue mb-10 flex items-center gap-3">
                            <span className="w-2 h-8 bg-cater-red rounded-full"></span>
                            How We Work
                        </h3>
                        <div className="pl-4">
                            {content.process.map((step, idx) => (
                                <div key={idx} className="flex gap-8 relative pb-12 last:pb-0 group">
                                    {/* Connecting Line */}
                                    <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-slate-200 last:hidden group-hover:bg-cater-red/20 transition-colors"></div>
                                    
                                    {/* Number Bubble */}
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-slate-200 group-hover:border-cater-red flex items-center justify-center font-bold text-sm text-slate-400 group-hover:text-cater-red shadow-sm transition-all duration-300 shrink-0">
                                        {step.step}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="pt-1">
                                        <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cater-blue transition-colors">{step.title}</h4>
                                        <p className="text-slate-500 leading-relaxed max-w-lg">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Showcase - Redesigned Masonry */}
                    <div>
                         <h3 className="text-2xl font-serif font-bold text-cater-blue mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-cater-red rounded-full"></span>
                            Service Showcase
                         </h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
                            {/* Main large image */}
                            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                <Image 
                                    src={`https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop`} 
                                    alt="Showcase Main" 
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                <div className="absolute bottom-4 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    Premium Events
                                </div>
                            </div>
                            
                            {/* Secondary images */}
                            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                <Image 
                                    src={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop`} 
                                    alt="Showcase Detail" 
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                <Image 
                                    src={`https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop`} 
                                    alt="Showcase Detail" 
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-cater-red/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm tracking-widest uppercase border-b border-white pb-1">View Gallery</span>
                                </div>
                            </div>
                         </div>
                    </div>

                </div>

                {/* Right Column: Sticky Sidebar (4 Cols) */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-28 space-y-6 animate-slide-up-fade" style={{ animationDelay: '0.5s' }}>
                        
                        {/* Main CTA Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cater-blue to-cater-red"></div>
                            
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold text-cater-blue font-serif">Book This Service</h3>
                                <span className="bg-green-50 text-green-700 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-green-100 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    Available
                                </span>
                            </div>
                            
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                                Interested in our {service.title}? Request a customized quote today.
                            </p>
                            
                            <a 
                                href="#contact" 
                                className="w-full group flex items-center justify-center gap-2 py-4 bg-cater-blue hover:bg-cater-blue-900 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4"
                            >
                                <span>Request Quote</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            
                            <a 
                                href="tel:+97141234567"
                                className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors border border-slate-200"
                            >
                                <Phone size={16} />
                                <span>+971 4 123 4567</span>
                            </a>

                            <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center text-xs text-slate-400">
                                <span>Response time: ~1 hour</span>
                                <span>Licensed & Insured</span>
                            </div>
                        </div>

                        {/* Testimonial Snippet */}
                        <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100">
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_,i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-600 text-sm italic mb-4 leading-relaxed">
                                &quot;The {service.title.toLowerCase()} service was beyond expectations. Professional, timely, and exquisite quality.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-cater-red to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                    SJ
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-800">Sarah Jenkins</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wide">Verified Client</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;