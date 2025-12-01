import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'Event', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop', title: 'Luxury Wedding' },
  { id: 2, type: 'Food', src: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop', title: 'Gourmet Catering' },
  { id: 3, type: 'Equipment', src: 'https://images.unsplash.com/photo-1587244291618-22a32c2441c2?q=80&w=2070&auto=format&fit=crop', title: 'Chafing Dishes' },
  { id: 4, type: 'Decor', src: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=3456&auto=format&fit=crop', title: 'Table Setting' },
  { id: 5, type: 'Event', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop', title: 'Outdoor Party' },
  { id: 6, type: 'Equipment', src: 'https://plus.unsplash.com/premium_photo-1661777196224-bdae4af78927?q=80&w=2070&auto=format&fit=crop', title: 'Kitchen Setup' },
  { id: 7, type: 'Furniture', src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2118&auto=format&fit=crop', title: 'Chiavari Chairs' },
  { id: 8, type: 'Food', src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop', title: 'Dessert Station' },
  { id: 9, type: 'Equipment', src: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=2024&auto=format&fit=crop', title: 'Coffee Machines' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  const visibleItems = filteredItems.slice(0, 8);

  const filters = ['All', 'Event', 'Food', 'Equipment', 'Furniture'];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-cater-red font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cater-blue mb-6">Our Gallery</h1>
          <p className="max-w-2xl mx-auto text-slate-500">
            A glimpse into our world of exquisite events, premium equipment, and culinary masterpieces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f 
                  ? 'bg-cater-blue text-white shadow-lg' 
                  : 'bg-cater-gray text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {visibleItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cater-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="text-white mx-auto mb-2" size={32} />
                  <p className="text-white font-serif font-bold text-xl">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white hover:text-cater-red transition-colors"
                onClick={() => setSelectedImage(null)}
            >
                <X size={40} />
            </button>
            <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
      )}
    </div>
  );
};

export default Gallery;