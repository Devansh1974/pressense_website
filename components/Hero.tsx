"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck, Clock, Award } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

const heroMachines = [
  {
    name: "Paper Corner Rounder & Cutter",
    category: "Die Making & Post-Press",
    image: "/images/products/paper-corner-rounder-cutter.png",
    description: "Heavy-duty lever action with interchangeable R3–R13 precision tool steel dies.",
    href: "/products/die-making-machines/paper-corner-rounder-cutter",
    spec: "30mm Max Stack",
  },
  {
    name: "Motorized Round Corner Cutting Machine",
    category: "Digital-Offset Finishing",
    image: "/images/products/round-corner-cutting-machine.png",
    description: "High-throughput electric cutting cycle with optical safety guard and foot pedal trigger.",
    href: "/products/digital-offset-finishing-machines/round-corner-cutting-machine",
    spec: "50mm Block Height",
  },
  {
    name: "Paper Creasing & Perforating Machine",
    category: "Digital-Offset Finishing",
    image: "/images/products/paper-creasing-perforating.png",
    description: "Precision scoring and tear-off perforation preventing toner cracking on heavy cardstocks.",
    href: "/products/digital-offset-finishing-machines/paper-creasing-perforating-machine",
    spec: "460mm Bed Width",
  },
  {
    name: "Conti-Air High-Performance Blankets",
    category: "Offset Consumables",
    image: "/images/products/conti-air-printing-blankets.png",
    description: "Closed-cell compressible technology for true dot fidelity and rapid smash recovery.",
    href: "/products/offset-consumables-spare-parts/conti-air-printing-blankets",
    spec: "Continental Certified",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMachines.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentMachine = heroMachines[currentIndex];

  return (
    <section
      aria-label="Hero Section"
      className="relative bg-[#F7F8F7] border-b border-[#E2E8F0] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Heritage pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#0D1B24] w-fit mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0796CC]" />
              <span>Established 1983 • Delhi, India</span>
              <span className="text-[#94A3B8]">|</span>
              <span className="text-[#64748B]">B2B Direct Supply</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0D1B24] tracking-tight leading-[1.08]">
              Printing &amp; Finishing Solutions for Modern Businesses.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#64748B] mt-6 max-w-2xl leading-relaxed">
              Explore professional machinery, finishing equipment and printing
              solutions designed for demanding production environments. Direct
              factory consultation and immediate WhatsApp quotation.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0D1B24] hover:bg-[#0796CC] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm transition-all duration-200 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust bullet markers */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-[#E2E8F0]">
              <div>
                <p className="font-heading font-bold text-lg sm:text-xl text-[#0D1B24]">
                  Since 1983
                </p>
                <p className="text-xs text-[#64748B] mt-0.5">Four Decades in Delhi</p>
              </div>
              <div>
                <p className="font-heading font-bold text-lg sm:text-xl text-[#0D1B24]">
                  Direct Stock
                </p>
                <p className="text-xs text-[#64748B] mt-0.5">Genuine Consumables</p>
              </div>
              <div>
                <p className="font-heading font-bold text-lg sm:text-xl text-[#0D1B24]">
                  Fast Dispatch
                </p>
                <p className="text-xs text-[#64748B] mt-0.5">Across All India</p>
              </div>
            </div>
          </div>

          {/* Right Product Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col relative">
              {/* Top tag & slide indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0796CC]">
                    {currentMachine.category}
                  </span>
                  <p className="text-xs font-mono text-[#64748B] mt-0.5">
                    Feature Showcase
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {heroMachines.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Show machine ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "w-6 bg-[#0796CC]"
                          : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 4:3 Image Container with object-fit: contain */}
              <div className="relative w-full aspect-[4/3] bg-white rounded-lg my-6 flex items-center justify-center p-4">
                <Image
                  key={currentMachine.image}
                  src={currentMachine.image}
                  alt={currentMachine.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority={true}
                  fetchPriority="high"
                  className="object-contain p-2 transition-all duration-500"
                />
                <span className="absolute bottom-2 right-2 text-xs font-mono font-semibold bg-[#F1F5F9] border border-[#E2E8F0] text-[#0D1B24] px-2.5 py-1 rounded">
                  {currentMachine.spec}
                </span>
              </div>

              {/* Machine Details */}
              <div className="pt-2">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0D1B24] leading-snug">
                  {currentMachine.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2 leading-relaxed">
                  {currentMachine.description}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#E2E8F0]">
                  <Link
                    href={currentMachine.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0796CC] hover:text-[#0684b3] group"
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
                      className="p-1.5 rounded border border-[#E2E8F0] text-[#64748B] hover:text-[#0D1B24] hover:bg-[#F1F5F9] transition-colors"
                      aria-label="Previous equipment slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % heroMachines.length)
                      }
                      className="p-1.5 rounded border border-[#E2E8F0] text-[#64748B] hover:text-[#0D1B24] hover:bg-[#F1F5F9] transition-colors"
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
