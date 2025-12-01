"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ContactFooter from "@/app/components/ContactFooter";
import BlogsDetails from "@/app/components/blogs/BlogsDetails";
import { blogsData } from "@/app/data/blogs";
import { BlogPost } from "@/types";

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const blog: BlogPost | undefined = blogsData.find((b) => b.id === id);

  const handleNavigate = (page: "home" | "gallery" | "service-detail" | "blogs") => {
    if (page === "home") router.push("/");
    if (page === "gallery") router.push("/#gallery");
    if (page === "blogs") router.push("/#blogs");
    if (page === "service-detail") router.push("/");
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage="blogs" onNavigate={handleNavigate} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-slate-600">Blog not found.</p>
        </div>
        <ContactFooter />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar currentPage="blogs" onNavigate={handleNavigate} />
      <BlogsDetails blog={blog} onBack={() => router.push("/")} />
      <ContactFooter />
    </div>
  );
}