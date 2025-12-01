"use client"
import React from 'react';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BlogPost } from '../../../types';
import { useRouter } from 'next/navigation';
import { blogsData } from '../../data/blogs';

interface BlogDetailProps {
  blog: BlogPost;
  onBack: () => void;
}

const BlogsDetails: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  const router = useRouter();

  // Compute next blog for navigation
  const currentIndex = blogsData.findIndex((b) => b.id === blog.id);
  const nextBlog = blogsData[(currentIndex + 1) % blogsData.length];

  // Normalize blog HTML: remove inline classes and downsize headings to regular text
  const raw = blog.content || '';
  const cleanHtml = raw
    .replace(/ class="[^"]*"/g, '')
    .replace(/<h1[^>]*>/g, '<p><strong>')
    .replace(/<\/h1>/g, '</strong></p>')
    .replace(/<h2[^>]*>/g, '<p><strong>')
    .replace(/<\/h2>/g, '</strong></p>')
    .replace(/<h3[^>]*>/g, '<p><strong>')
    .replace(/<\/h3>/g, '</strong></p>');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero with overlayed title/meta */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Blogs above category chip */}
            <button
              onClick={onBack}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-md text-white/90 border border-white/20 hover:bg-white/10"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </button>
            <span className="inline-block px-3 py-1 bg-cater-red text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/85 text-sm font-medium mb-2">
              <span className="flex items-center gap-2">
                <User size={16} /> {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content grid: left article, right sticky sidebar */}
      <section className="-mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link removed from here; moved to hero */}

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Article card */}
            <article className="lg:w-2/3 bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-slate-700 text-base leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: cleanHtml }} />

              {/* Bottom navigation */}
              <div className="mt-10 mb-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onBack}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  onClick={() => router.push(`/blogs/${nextBlog.id}`)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cater-blue text-white hover:bg-cater-blue-900"
                >
                  Next Blog <ArrowRight size={16} />
                </button>
              </div>
            </article>

            {/* Right: Sticky sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Share card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                <h3 className="text-lg font-serif font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Share2 size={18} className="text-cater-red" /> Share this article
                </h3>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-lg bg-[#1877F2] text-white hover:opacity-90 transition-opacity flex items-center justify-center">
                    <Facebook size={20} />
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity flex items-center justify-center">
                    <Twitter size={20} />
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 transition-opacity flex items-center justify-center">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>

              {/* Newsletter card */}
              <div className="bg-cater-blue p-8 rounded-2xl text-white sticky top-24">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <h3 className="text-xl font-serif font-bold mb-2">Join our Newsletter</h3>
                <p className="text-white/80 text-sm mb-6">Get the latest event tips and catering trends delivered to your inbox.</p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 mb-3"
                />
                <button className="w-full py-3 bg-white text-cater-blue font-bold rounded-lg hover:bg-slate-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsDetails;