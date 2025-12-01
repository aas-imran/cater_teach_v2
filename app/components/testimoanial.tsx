"use client"
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { PlayCircle, Star } from "lucide-react";

interface VideoItem {
  id: number;
  src: string;
  title: string;
  client: string;
}

interface TextItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string; // local client svg
  rating?: number; // 1-5
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Corporate Gala Highlights",
    client: "Jumeirah",
  },
  {
    id: 2,
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    title: "Luxury Wedding Moments",
    client: "Four Seasons",
  },
  {
    id: 3,
    src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    title: "Exhibition Setup Showcase",
    client: "Dubai Expo",
  },
];

const textItems: TextItem[] = [
  {
    id: 1,
    quote:
      "Security and scalability were our top concerns. CaterTech delivered a solution that exceeded our requirements.",
    name: "David Ross",
    role: "Director, FinCorp",
    company: "JW Marriott",
    avatar: "/clients/jw-marriott.svg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Exceptional code quality and communication. They delivered the project two weeks ahead of schedule.",
    name: "Lisa Ray",
    role: "VP Engineering",
    company: "Four Seasons",
    avatar: "/clients/four-seasons.svg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "From planning to execution, their professionalism stood out. Highly recommended for premium events.",
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    company: "Ritz-Carlton",
    avatar: "/clients/ritz-carlton.svg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "CaterTech exceeded expectations with equipment quality and on-time delivery across a complex multi-day event.",
    name: "Mohammad Khan",
    role: "Operations Lead",
    company: "Address Hotels",
    avatar: "/clients/address-hotels.svg",
    rating: 5,
  },
];

const Testimoanial: React.FC = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  
  // Auto advance video every 7s
  useEffect(() => {
    const t = setInterval(() => setVideoIndex((p) => (p + 1) % videoItems.length), 7000);
    return () => clearInterval(t);
  }, []);

  // Duplicate list for seamless vertical scroll
  const scrollCards = useMemo(() => [...textItems, ...textItems], []);

  return (
    <section id="testimonials" className="py-24 bg-grey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Header at top + video below */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <h2 className="text-cater-red font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-8 h-[2px] bg-cater-red"></span> Client Feedback
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-cater-blue mt-2">Trusted by Industry Leaders</h3>
              <p className="text-slate-400 mt-3 max-w-xl">
                Delivering high-impact solutions that drive growth and efficiency for startups and enterprises alike.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-black">
              <div className="relative">
                <video
                  key={videoItems[videoIndex].id}
                  src={videoItems[videoIndex].src}
                  muted
                  playsInline
                  autoPlay
                  loop
                  className="w-full h-[340px] object-cover"
                />
                {/* Play overlay indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cater-red">
                    <PlayCircle size={28} />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-cater-red text-sm font-bold uppercase tracking-widest">Client Video</span>
                  <span className="text-white/60">{videoItems[videoIndex].client}</span>
                </div>
                <span className="text-white font-serif font-bold">
                  {videoItems[videoIndex].title}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Continuous vertical auto-scroll list */}
          <div className="lg:col-span-6">
            <div className="relative h-[460px] overflow-hidden">
              {/* fade mask top/bottom for a polished look */}
              <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
              <div className="flex flex-col animate-scrollY">
                {scrollCards.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl p-5 mb-4 flex items-start gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center ring-1 ring-white/10">
                      <Image src={item.avatar} alt={`${item.company} logo`} width={36} height={36} className="w-9 h-9 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-white">{item.name}</p>
                          <p className="text-xs text-slate-400">{item.role}</p>
                        </div>
                        <div className="flex items-center gap-1 text-cater-red">
                          {Array.from({ length: item.rating || 5 }).map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-300 mt-3 text-sm">“{item.quote}”</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* local keyframes for continuous marquee */}
              <style jsx>{`
                @keyframes scrollY {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .animate-scrollY { animation: scrollY 22s linear infinite; }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoanial;