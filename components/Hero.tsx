"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Sparkles,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

const heroMachines = [
  {
    name: "In-House Barred Printing Blankets",
    category: "02 | In-House Baring Facility",
    image: "/images/products/conti-air-printing-blankets.png",
    description:
      "Custom prepared and finished in our in-house facility. Economical China imports, Continental, UV, and Acoma options.",
    href: "/products/offset-consumables-spare-parts/in-house-barred-printing-blankets",
    spec: "Custom Barred In-House",
    highlight: "Heidelberg, Mitsubishi, Ryobi, Sakurai",
  },
  {
    name: "Thermal, Wet & Dry Laminating Machines",
    category: "03 | Printing Machinery",
    image: "/images/categories/digital-offset.jpg",
    description:
      "High-efficiency laminators supplied to printers in Chennai and nationwide, tailored to format and production volume.",
    href: "/products/digital-offset-finishing-machines/thermal-wet-dry-laminating-machines",
    spec: "Thermal / Wet / Dry",
    highlight: "Chennai & Pan-India Supply",
  },
  {
    name: "Press Sense Own-Brand Creasing Matrix",
    category: "04 | Packaging Consumables",
    image: "/images/categories/die-making-machines.png",
    description:
      "Our proprietary imported product with strong market acceptance. Practical, competitively priced for packaging converters.",
    href: "/products/die-making-machines/press-sense-creasing-matrix",
    spec: "Own-Brand Leader",
    highlight: "High Market Acceptance",
  },
  {
    name: "Pre-Owned Offset Printing Machinery",
    category: "03 | Internationally Sourced",
    image: "/images/products/heidelberg-quickmaster-46di.jpg",
    description:
      "Sourced internationally from top brands: Heidelberg, Mitsubishi, Ryobi, Sakurai. Inspected and supported by in-house engineers.",
    href: "/products/digital-offset-finishing-machines/pre-owned-offset-printing-machines",
    spec: "Global Sourcing",
    highlight: "Heidelberg • Ryobi • Mitsubishi",
  },
  {
    name: "Rigid Box & Paper Bag Making Machines",
    category: "05 | Packaging Machinery",
    image: "/images/categories/die-making-machines.png",
    description:
      "Automated solutions for luxury rigid boxes and retail paper bags, selected around your space, investment, and capacity.",
    href: "/products/die-making-machines/rigid-box-making-machines",
    spec: "New & Pre-Owned",
    highlight: "Luxury Boxes & Eco-Bags",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMachines.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentMachine = heroMachines[currentIndex];

  return (
    <section
      aria-label="Hero Section"
      className="relative bg-gradient-to-b from-[#F8FAFC] via-[#F7F8F7] to-[#F1F5F9] border-b border-[#E2E8F0] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle industrial grid ambient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live facility badge with animated pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#0D171F] w-fit mb-5 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA7533] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FA7533]" />
              </span>
              <span>In-House Blanket Baring Facility</span>
              <span className="text-[#CBD5E1]">|</span>
              <span className="text-[#64748B] font-medium">Est. 1983</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-[54px] text-[#0D171F] tracking-tight leading-[1.1]">
              PRINTING &amp; PACKAGING <span className="text-[#FA7533]">SOLUTIONS</span>
            </h1>

            {/* Core Pillars Subtitle */}
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#475569] mt-3">
              Consumables • Machinery • Pre-Press • Post-Press • Service Support
            </p>

            {/* Supporting Copy from brochure */}
            <p className="text-base sm:text-lg text-[#64748B] mt-4 max-w-2xl leading-relaxed">
              Press Sense provides reliable consumables, quality machinery, and practical solutions
              tailored to each customer&apos;s production requirements and budget. Backed by an in-house
              service engineer and custom blanket finishing center.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-7 sm:mt-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0D171F] hover:bg-[#FA7533] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm transition-all duration-200 group"
              >
                <span>Browse Catalogue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Direct WhatsApp: Raj Kumar</span>
              </a>
            </div>

            {/* Brochure highlights pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-[#E2E8F0]">
              <div className="bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5">
                <p className="font-heading font-bold text-xs sm:text-sm text-[#0D171F]">
                  DIC &amp; Böttcher
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">Inks &amp; Press Chemicals</p>
              </div>
              <div className="bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5">
                <p className="font-heading font-bold text-xs sm:text-sm text-[#0D171F]">
                  Barred Blankets
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">China, Conti, UV, Acoma</p>
              </div>
              <div className="bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5">
                <p className="font-heading font-bold text-xs sm:text-sm text-[#0D171F]">
                  Creasing Matrix
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">Press Sense Own-Brand</p>
              </div>
              <div className="bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5">
                <p className="font-heading font-bold text-xs sm:text-sm text-[#0D171F]">
                  In-House Engineer
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">Service &amp; Spares Support</p>
              </div>
            </div>
          </div>

          {/* Right Product Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col relative transition-all duration-300">
              {/* Category indicator & slide navigation */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FA7533]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA7533]">
                    {currentMachine.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {heroMachines.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Show equipment slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === currentIndex
                          ? "w-6 bg-[#FA7533]"
                          : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 4:3 Image Container with object-fit: contain */}
              <div className="relative w-full aspect-[4/3] bg-[#F8FAFC] rounded-xl my-4 flex items-center justify-center p-4 border border-[#F1F5F9] overflow-hidden group">
                <Image
                  key={currentMachine.image}
                  src={currentMachine.image}
                  alt={currentMachine.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority={true}
                  fetchPriority="high"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 text-xs font-mono font-semibold bg-white/95 border border-[#E2E8F0] text-[#0D171F] px-2.5 py-1 rounded shadow-xs">
                  {currentMachine.spec}
                </span>
                <span className="absolute top-3 left-3 text-[10px] font-semibold bg-[#FA7533] text-white px-2 py-0.5 rounded shadow-xs">
                  {currentMachine.highlight}
                </span>
              </div>

              {/* Machine Details */}
              <div className="pt-1">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0D171F] leading-snug">
                  {currentMachine.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2 leading-relaxed">
                  {currentMachine.description}
                </p>

                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[#E2E8F0]">
                  <Link
                    href={currentMachine.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FA7533] hover:text-[#E05D1C] group"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setCurrentIndex(
                          (prev) => (prev - 1 + heroMachines.length) % heroMachines.length
                        )
                      }
                      className="p-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:text-[#0D171F] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                      aria-label="Previous equipment slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % heroMachines.length)
                      }
                      className="p-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:text-[#0D171F] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                      aria-label="Next equipment slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
