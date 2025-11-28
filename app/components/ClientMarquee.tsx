"use client";
import React from "react";
import Image from "next/image";

const clients = [
  { name: "Burj Khalifa", logo: "/clients/burj-khalifa.svg" },
  { name: "Palm Jumeirah", logo: "/clients/palm-jumeirah.svg" },
  { name: "Dubai Expo", logo: "/clients/dubai-expo.svg" },
  { name: "Dubai Airshow", logo: "/clients/dubai-airshow.svg" },
  { name: "Dubai Police", logo: "/clients/dubai-police.svg" },
  { name: "Dubai Army", logo: "/clients/dubai-army.svg" },
  { name: "Atlantis The Palm", logo: "/clients/atlantis.svg" },
  { name: "Jumeirah Hotels", logo: "/clients/jumeirah.svg" },
  { name: "Address Hotels", logo: "/clients/address-hotels.svg" },
  { name: "Four Seasons", logo: "/clients/four-seasons.svg" },
  { name: "Ritz-Carlton", logo: "/clients/ritz-carlton.svg" },
  { name: "JW Marriott Marquis", logo: "/clients/jw-marriott.svg" },
];

// Duplicated list for seamless marquee
const marqueeList = [...clients, ...clients];

const ClientMarquee: React.FC = () => {
  return (
    <section aria-label="Trusted clients" className="relative z-30 w-full bg-white border-b border-slate-100">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Trusted by leading brands</h2>
          <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden py-8">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Track */}
        <div className="[animation:marquee_30s_linear_infinite] flex gap-10 w-max px-10">
          {marqueeList.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="h-16 flex items-center justify-center px-6 rounded-xl bg-white/60 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={40}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-slate-600 font-semibold">{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientMarquee;