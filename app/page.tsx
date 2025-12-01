"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import Equipments from "./components/Equipments";

import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import AIConsultant from "./components/AIConsultant";
import ContactFooter from "./components/ContactFooter";
import { ServiceItem } from "@/types";
import Testimoanial from "./components/testimoanial";
import BlogsSections from "./components/BlogsSections";

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<"home" | "gallery" | "service-detail">("home");

  const handleNavigate = (page: "home" | "gallery" | "service-detail") => {
    setCurrentPage(page);
    if (page === "home") {
      router.push("/");
    }
    if (page === "gallery") {
      const el = document.querySelector("#gallery");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (service: ServiceItem) => {
    router.push(`/services/${service.id}`);
  };

  return (
    <div className="bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <Hero />
      <Stats />
      <ServicesSection onServiceClick={handleServiceClick} />
      <Equipments />
      <Gallery />
      <AIConsultant />
      <Testimoanial />
      <BlogsSections />
      <ContactFooter />
    </div>
  );
}
