import React from 'react';
import { Users, CalendarCheck, Heart, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: CalendarCheck, value: '500+', label: 'Events Managed', sub: 'Successful Occasions' },
    { icon: Users, value: '50+', label: 'Corporate Clients', sub: 'Trust Our Services' },
    { icon: Heart, value: '100%', label: 'Satisfaction', sub: 'Client Approval' },
    { icon: Clock, value: '24/7', label: 'Support', sub: 'Always Available' },
  ];

  // Real remote images representing landmark clients & events
   const clientImages = [
    { name: 'Jumeirah', src: 'https://logo.clearbit.com/jumeirah.com' },
    { name: 'Address Hotels', src: 'https://logo.clearbit.com/addresshotels.com' },
    { name: 'Atlantis The Palm', src: 'https://logo.clearbit.com/atlantis.com' },
    { name: 'Four Seasons', src: 'https://logo.clearbit.com/fourseasons.com' },
    { name: 'The Ritz-Carlton', src: 'https://logo.clearbit.com/ritzcarlton.com' },
    { name: 'JW Marriott', src: 'https://logo.clearbit.com/marriott.com' },
    { name: 'Flydubai', src: 'https://logo.clearbit.com/flydubai.com' },
    { name: 'Dubai Police', src: 'https://logo.clearbit.com/dubaipolice.gov.ae' },
    { name: 'Dubai Airshow', src: 'https://logo.clearbit.com/dubaiairshow.aero' },
    { name: 'Expo City Dubai', src: 'https://logo.clearbit.com/expocitydubai.com' },
    { name: 'Government of Dubai', src: 'https://logo.clearbit.com/dubai.ae' },
    { name: 'Nakheel', src: 'https://logo.clearbit.com/nakheel.com' },
  ];

  // Duplicate to create seamless loop
  const marqueeList = [...clientImages, ...clientImages];

  return (
    <section className="relative z-30 w-full bg-white border-b border-slate-100 overflow-hidden">
      {/* Pattern Background similar to services */}
      <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23312a82' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center sm:items-start text-center sm:text-left relative group"
            >
              {/* Separator Line (Desktop) */}
              {index !== 3 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-200 to-transparent translate-x-4"></div>
              )}

              <div className="flex items-center gap-4 mb-4">
                  {/* Icon Container */}
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                     <div className="relative p-3 bg-cater-blue/5 rounded-xl text-cater-blue ring-1 ring-cater-blue/10 group-hover:bg-cater-red group-hover:text-white transition-all duration-300">
                        <stat.icon size={24} strokeWidth={1.5} />
                     </div>
                  </div>
                  
                  {/* Value */}
                  <div className="text-4xl lg:text-5xl font-serif font-bold text-cater-blue tracking-tight">
                    {stat.value}
                  </div>
              </div>

              {/* Label & Sub */}
              <div className="pl-1">
                  <div className="text-sm font-bold text-cater-red uppercase tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-500 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {stat.sub}
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Marquee embedded under stats */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Trusted by leading brands</h2>
            <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>

          {/* Shader container */}
          <div className="relative overflow-hidden  border-slate-100 bg-white">
            {/* Edge fade mask via utility class */}
            <div className="absolute inset-0 pointer-events-none shader-overlay" />

        
                    {/* Full width marquee with only side shader */}
          <div className="relative overflow-hidden full-bleed marquee-edges bg-white">
            <div className="marquee-track flex gap-10 w-max px-8 py-6 mask-edge-fade">
              {marqueeList.map((client, idx) => (
                <div key={`${client.name}-${idx}`} className="group flex flex-col items-center">
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    className="h-12 sm:h-14 w-auto object-contain grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;