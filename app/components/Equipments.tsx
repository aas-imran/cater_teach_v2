import React, { useState, useMemo, useEffect } from 'react';
import { ArrowRight, ShoppingBag, ChevronLeft, ChevronRight, X, Phone, MessageSquare, Send, Heart } from 'lucide-react';

// Base Templates for generating dummy data
const baseTemplates = [
  {
    name: 'Chiavari Chair Gold',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2118&auto=format&fit=crop',
    specs: 'Gold Finish • Velvet Cushion'
  },
  {
    name: 'Banquet Round Table',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1628151016625-78c7755a5b06?q=80&w=2070&auto=format&fit=crop',
    specs: '180cm Diameter • Foldable'
  },
  {
    name: 'Royal Chafing Dish',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1587244291618-22a32c2441c2?q=80&w=2070&auto=format&fit=crop',
    specs: 'Stainless Steel • Roll Top'
  },
  {
    name: 'Crystal Wine Glass Set',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=3456&auto=format&fit=crop',
    specs: 'Premium Crystal • 6 Pc Set'
  },
  {
    name: 'Outdoor AC Unit (5 Ton)',
    category: 'Cooling',
    image: 'https://images.unsplash.com/photo-1620633879204-66ae68266224?q=80&w=2070&auto=format&fit=crop',
    specs: 'Freestanding • High Capacity'
  },
  {
    name: 'Porcelain Dinner Plates',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1603194228966-291771146860?q=80&w=2070&auto=format&fit=crop',
    specs: 'Bone China • Gold Rim'
  },
  {
    name: 'VIP Leather Sofa',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
    specs: 'White Leather • 3 Seater'
  },
  {
    name: 'Industrial Coffee Machine',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=2024&auto=format&fit=crop',
    specs: 'Dual Group • Barista Grade'
  },
];

// Generate 48 items (8 * 6) to simulate a larger catalog
const equipmentList = Array.from({ length: 48 }, (_, i) => {
  const template = baseTemplates[i % baseTemplates.length];
  // Add variation to names to make them look distinct
  const variant = Math.floor(i / baseTemplates.length) + 1;
  return {
    id: i + 1,
    name: `${template.name} ${variant > 1 ? `V${variant}` : ''}`,
    category: template.category,
    image: template.image,
    price: 'Ask for Quote',
    specs: template.specs
  };
});

const categories = ['All', 'Furniture', 'Dining', 'Kitchen', 'Cooling'];
const ITEMS_PER_PAGE = 8;

const Equipments: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isLoading, setIsLoading] = useState(true);
  
  // Wishlist State
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Load wishlist from local storage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('catertech_wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
  }, []);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleWishlist = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent card click
    let newWishlist;
    if (wishlist.includes(id)) {
      newWishlist = wishlist.filter(itemId => itemId !== id);
    } else {
      newWishlist = [...wishlist, id];
    }
    setWishlist(newWishlist);
    localStorage.setItem('catertech_wishlist', JSON.stringify(newWishlist));
  };

  // Filter Logic
  const filteredItems = useMemo(() => {
    let items = equipmentList;
    
    if (showWishlistOnly) {
      items = items.filter(item => wishlist.includes(item.id));
    } else if (activeCategory !== 'All') {
      items = items.filter(item => item.category === activeCategory);
    }
    
    return items;
  }, [activeCategory, showWishlistOnly, wishlist]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredItems]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowWishlistOnly(false);
    setCurrentPage(1); 
  };

  const handleWishlistToggleView = () => {
    setShowWishlistOnly(!showWishlistOnly);
    setCurrentPage(1);
    // Reset category to All visually when switching to wishlist, though logic handles it
    if (!showWishlistOnly) setActiveCategory('All');
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <section id="equipments" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-cater-red font-bold uppercase tracking-widest text-sm mb-3">Our Inventory</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-cater-blue mb-6">
            Premium Rentals
          </h3>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            Explore our extensive collection of high-quality event essentials. From elegant furniture to industrial kitchen equipment, we have everything to build your event from the ground up.
          </p>
        </div>

        {/* Categories Tab & Wishlist Button */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            
            {/* Wishlist Button - Mobile First or Side */}
            <button
              onClick={handleWishlistToggleView}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                showWishlistOnly
                  ? 'bg-cater-red text-white border-cater-red shadow-md'
                  : 'bg-white text-cater-red border-slate-200 hover:border-cater-red hover:bg-red-50'
              }`}
            >
              <Heart size={16} fill={showWishlistOnly ? "currentColor" : "none"} />
              My Wishlist
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${showWishlistOnly ? 'bg-white text-cater-red' : 'bg-cater-red text-white'}`}>
                {wishlist.length}
              </span>
            </button>

            {!showWishlistOnly && (
              <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white border border-slate-200 rounded-full shadow-sm">
                  {categories.map(cat => (
                      <button
                          key={cat}
                          onClick={() => handleCategoryChange(cat)}
                          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                              activeCategory === cat 
                                  ? 'bg-cater-blue text-white shadow-md' 
                                  : 'text-slate-500 hover:text-cater-blue hover:bg-slate-50'
                          }`}
                      >
                          {cat}
                      </button>
                  ))}
              </div>
            )}
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[500px]">
              {Array.from({ length: 8 }).map((_, i) => (
                 <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-full flex flex-col">
                    <div className="relative aspect-[4/3] bg-slate-200 animate-pulse" />
                    <div className="p-6 flex-1 flex flex-col">
                       <div className="h-6 bg-slate-200 rounded animate-pulse mb-3 w-3/4" />
                       <div className="h-4 bg-slate-100 rounded animate-pulse w-1/2 mb-auto" />
                       <div className="mt-8 pt-4 border-t border-slate-50 flex justify-between items-center">
                          <div className="h-4 bg-slate-200 rounded animate-pulse w-1/3" />
                          <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        ) : (
          <>
            {/* Empty Wishlist State */}
            {showWishlistOnly && filteredItems.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed animate-slide-up">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart size={32} className="text-slate-300" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-700 mb-2">Your wishlist is empty</h4>
                  <p className="text-slate-400 mb-8 max-w-sm mx-auto">Start exploring our inventory and save items here to request a consolidated quote.</p>
                  <button 
                    onClick={() => handleWishlistToggleView()}
                    className="px-8 py-3 bg-cater-blue text-white font-bold rounded-lg hover:bg-cater-blue-900 transition-colors"
                  >
                    Browse Inventory
                  </button>
              </div>
            )}

            {/* Equipment Grid */}
            {filteredItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[500px] animate-slide-up">
                  {currentItems.map(item => {
                      const isWishlisted = wishlist.includes(item.id);
                      return (
                        <div 
                            key={item.id} 
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col relative"
                        >
                            {/* Image Area */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-cater-blue shadow-sm z-10">
                                    {item.category}
                                </div>

                                {/* Wishlist Toggle Button */}
                                <button
                                    onClick={(e) => toggleWishlist(e, item.id)}
                                    className={`absolute top-3 right-3 p-2 rounded-full z-10 transition-all duration-300 shadow-sm ${
                                      isWishlisted 
                                        ? 'bg-cater-red text-white' 
                                        : 'bg-white/90 text-slate-400 hover:text-cater-red hover:bg-white'
                                    }`}
                                >
                                    <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4 flex-1">
                                    <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-cater-blue transition-colors mb-1 truncate">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs font-medium text-slate-400">
                                        {item.specs}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                                    <span className="text-sm font-bold text-slate-500">
                                        Rent Now
                                    </span>
                                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-cater-red group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                      );
                  })}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredItems.length > 0 && (
              <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in">
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 hover:text-cater-blue transition-colors shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm font-bold text-slate-500">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 hover:text-cater-blue transition-colors shadow-sm"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Request Catalog Button */}
        <div className="text-center mt-16">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-cater-blue font-bold rounded-lg hover:bg-cater-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
                <ShoppingBag size={18} />
                {showWishlistOnly && wishlist.length > 0 ? "Request Quote for Wishlist" : "Request Full Catalog"}
            </button>
        </div>

      </div>

      {/* Request Catalog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-cater-blue p-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                   {showWishlistOnly && wishlist.length > 0 ? "Request Wishlist Quote" : "Request Full Catalog"}
                </h3>
                <p className="text-cater-gray/80 text-sm">
                   {showWishlistOnly && wishlist.length > 0 
                    ? `Inquiring about ${wishlist.length} selected items.`
                    : "We'll send our complete inventory list to you."}
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Request Sent!</h4>
                  <p className="text-slate-500">
                    Thank you. We will contact you on WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-4 text-slate-400">
                        <Phone size={18} />
                      </div>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+971 50 000 0000"
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Specific Requirements (Optional)
                    </label>
                    <div className="relative">
                       <div className="absolute top-3 left-4 text-slate-400">
                        <MessageSquare size={18} />
                      </div>
                      <textarea 
                        rows={3}
                        placeholder={showWishlistOnly ? "I need these items for a wedding on 25th Dec..." : "e.g., I need 200 gold chairs and round tables..."}
                        defaultValue={showWishlistOnly && wishlist.length > 0 ? `I am interested in ${wishlist.length} items from my wishlist: ${filteredItems.map(i => i.name).join(', ')}` : ""}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-cater-red hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Request via WhatsApp</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-slate-400 text-center mt-2">
                    Our team typically responds within 30 minutes during working hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Equipments;