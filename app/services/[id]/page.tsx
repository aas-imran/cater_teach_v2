"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ContactFooter from "@/app/components/ContactFooter";
import ServiceDetail from "@/app/components/services/ServiceDetail";
import { servicesData } from "@/app/data/services";
import { ServiceItem } from "@/types";

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const service: ServiceItem | undefined = servicesData.find((s) => s.id === id);

  const handleNavigate = (page: "home" | "gallery" | "service-detail") => {
    if (page === "home") router.push("/");
    if (page === "gallery") router.push("/#gallery");
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage="service-detail" onNavigate={handleNavigate} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-slate-600">Service not found.</p>
        </div>
        <ContactFooter />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar currentPage="service-detail" onNavigate={handleNavigate} />
      <ServiceDetail service={service} onBack={() => router.push("/")} />
      <ContactFooter />
    </div>
  );
}