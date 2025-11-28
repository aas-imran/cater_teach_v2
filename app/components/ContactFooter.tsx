// import React from 'react';
// import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// const ContactFooter: React.FC = () => {
//   return (
//     <footer id="contact" className="bg-cater-blue text-white border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
//           {/* Contact Info */}
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-white mb-6">
//               Let's Plan Your Next Event
//             </h2>
//             <p className="text-slate-300 mb-8 leading-relaxed text-lg">
//               Ready to create something spectacular? Reach out to us for catering, rentals, or full event management. Our team is ready to serve you.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4 group">
//                 <div className="bg-white/10 p-3 rounded-full text-cater-red group-hover:bg-cater-red group-hover:text-white transition-colors shrink-0">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Phone</h4>
//                   <p className="text-slate-300">+971 4 123 4567</p>
//                   <p className="text-slate-500 text-sm">Mon-Fri 9am to 6pm</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 group">
//                 <div className="bg-white/10 p-3 rounded-full text-cater-red group-hover:bg-cater-red group-hover:text-white transition-colors shrink-0">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Email</h4>
//                   <p className="text-slate-300">info@catertech.ae</p>
//                   <p className="text-slate-500 text-sm">Online support</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 group">
//                 <div className="bg-white/10 p-3 rounded-full text-cater-red group-hover:bg-cater-red group-hover:text-white transition-colors shrink-0">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-white">Location</h4>
//                   <p className="text-slate-300">Business Bay, Dubai, UAE</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10 flex gap-4">
//               {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
//                 <a 
//                     key={i} 
//                     href="#" 
//                     className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-cater-red transition-all transform hover:-translate-y-1"
//                 >
//                   <Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Simple Contact Form */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-cater-red">
//             <h3 className="text-xl font-bold text-cater-blue mb-6">Send us a message</h3>
//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
//                   <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-red focus:border-transparent outline-none transition-all text-slate-800" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
//                   <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-red focus:border-transparent outline-none transition-all text-slate-800" />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
//                 <input type="email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-red focus:border-transparent outline-none transition-all text-slate-800" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
//                 <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-red focus:border-transparent outline-none transition-all text-slate-800">
//                   <option>Catering Service</option>
//                   <option>Event Management</option>
//                   <option>Equipment Rental</option>
//                   <option>Staffing</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
//                 <textarea rows={4} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-red focus:border-transparent outline-none transition-all text-slate-800"></textarea>
//               </div>

//               <button className="w-full py-3 bg-cater-blue hover:bg-cater-blue-900 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
//                 Submit Inquiry
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
//           <span>&copy; {new Date().getFullYear()} CaterTech. All rights reserved.</span>
//           <div className="flex gap-6">
//              <a href="#" className="hover:text-white">Privacy Policy</a>
//              <a href="#" className="hover:text-white">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ContactFooter;




import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Clock, Send } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact Form (Span 5) - Full Height */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 border border-white/10 relative h-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cater-blue to-cater-red"></div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Send us a Message</h3>
                <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-5 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">First Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm" />
                        </div>
                        <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Service Required</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm">
                        <option>Food Catering</option>
                        <option>Event Management</option>
                        <option>Corporate Event</option>
                        <option>Equipment Rental</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Message</label>
                        <textarea rows={4} className="w-full h-full min-h-[120px] px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cater-blue/20 focus:border-cater-blue outline-none transition-all text-slate-800 text-sm resize-none"></textarea>
                    </div>

                    <button className="w-full py-4 bg-cater-blue hover:bg-cater-blue-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-auto">
                        <span>Send Inquiry</span>
                        <Send size={16} />
                    </button>
                </form>
            </div>
          </div>

          {/* Right Column: Info & Links (Span 7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col h-full justify-between">
            <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Let's Create Magic.</h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                    Ready to elevate your event? Whether it's a corporate gala, an intimate wedding, or a grand exhibition, CaterTech brings the expertise to make it unforgettable.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                 {/* Quick Links */}
                 <div>
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg">
                        <span className="w-8 h-[2px] bg-cater-red"></span> Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 text-sm group w-fit">
                                    <ArrowRight size={14} className="text-cater-red opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 duration-300" />
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg">
                        <span className="w-8 h-[2px] bg-cater-red"></span> Contact Us
                    </h4>
                    
                    <div className="flex items-start gap-4">
                        <div className="bg-slate-800 p-2.5 rounded-lg text-cater-red shrink-0">
                            <Phone size={18} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Call Us</p>
                            <p className="text-white font-serif text-lg">+971 4 123 4567</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-slate-800 p-2.5 rounded-lg text-cater-red shrink-0">
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Email</p>
                            <p className="text-white font-medium">info@catertech.ae</p>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <div className="bg-slate-800 p-2.5 rounded-lg text-cater-red shrink-0">
                            <Clock size={18} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Working Hours</p>
                            <p className="text-white font-medium text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Colorful Map */}
            <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 group shadow-2xl">
                <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.27218771500953!3d25.197197983896188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1623839293123!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                ></iframe>
                
                {/* Custom Map Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
                    <MapPin size={14} className="text-cater-red" />
                    Business Bay, Dubai
                </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} CaterTech Event Services. All rights reserved.
          </p>
          
          <div className="flex gap-4">
             {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a 
                    key={i} 
                    href="#" 
                    className="p-2.5 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cater-red transition-all transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;