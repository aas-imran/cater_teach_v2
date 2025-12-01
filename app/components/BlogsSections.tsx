"use client"
import React from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { BlogPost } from '../../types';
import { useRouter } from 'next/navigation';

interface BlogsSectionProps {
  onBlogClick?: (blog: BlogPost) => void;
}

const BlogsSection: React.FC<BlogsSectionProps> = ({ onBlogClick }) => {
  const router = useRouter();
  return (
    <section id="blogs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-cater-red font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cater-red"></span>
              Latest Insights
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-cater-blue">
              News & Articles
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-slate-500 font-bold hover:text-cater-blue transition-colors group">
            View All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div 
              key={blog.id} 
              onClick={() => onBlogClick ? onBlogClick(blog) : router.push(`/blogs/${blog.id}`)}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cater-blue shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>

                <h4 className="text-xl font-serif font-bold text-slate-900 mb-3 leading-snug group-hover:text-cater-blue transition-colors">
                  {blog.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-bold text-slate-600">{blog.author}</span>
                   </div>
                   <span className="text-cater-red text-sm font-bold flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read More <ArrowRight size={14} />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
             <a href="#" className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-cater-blue transition-colors group border border-slate-200 px-6 py-3 rounded-full">
                View All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;