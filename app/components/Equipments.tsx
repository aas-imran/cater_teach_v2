import React, { useState, useMemo } from 'react';
import { ArrowRight, ShoppingBag, ChevronLeft, ChevronRight, X, Phone, MessageSquare, Send } from 'lucide-react';

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

  // Filter Logic
  const filteredItems = useMemo(() => {
    return activeCategory === 'All' 
      ? equipmentList 
      : equipmentList.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredItems]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to first page on category change
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

        {/* Categories Tab */}
        <div className="flex justify-center mb-12">
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
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[500px]">
            {currentItems.map(item => (
                <div 
                    key={item.id} 
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
                >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-cater-blue shadow-sm">
                            {item.category}
                        </div>
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
            ))}
        </div>

        {/* Pagination Controls */}
        {filteredItems.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-12">
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

        {/* Request Catalog Button */}
        <div className="text-center mt-16">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-cater-blue font-bold rounded-lg hover:bg-cater-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
                <ShoppingBag size={18} />
                Request Full Catalog
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
                <h3 className="text-xl font-serif font-bold text-white mb-1">Request Full Catalog</h3>
                <p className="text-cater-gray/80 text-sm">We'll send our complete inventory list to you.</p>
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
                    Thank you. We will contact you on WhatsApp shortly with the full catalog.
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
                        placeholder="e.g., I need 200 gold chairs and round tables..."
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