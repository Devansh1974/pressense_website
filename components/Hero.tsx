"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Play,
  Pause,
} from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";
import MachineDetailModal, { HeroMachineDetail } from "./MachineDetailModal";

const heroSlides: HeroMachineDetail[] = [
  {
    id: "hero-1",
    name: "Pre-Owned Offset Printing Machinery",
    subtitle: "Heidelberg • Mitsubishi • Ryobi • Sakurai",
    category: "01 | Offset Printing Machinery",
    categorySlug: "digital-offset-finishing-machines",
    productSlug: "pre-owned-offset-printing-machines",
    image: "/images/products/heidelberg-quickmaster-46di.jpg",
    description:
      "Internationally sourced high-precision offset presses, thoroughly inspected, cleaned, and supported by dedicated in-house engineers throughout their working life. Sourced to fit your production volume and budget.",
    badge: "Global Sourcing • Inspected",
    modelCode: "PS-OFFSET-HEIDELBERG",
    specs: {
      "Speed Range": "10,000 – 15,000 sheets/hour",
      "Format Capability": "B3, B2 to Large B1 Format",
      "Supported Brands": "Heidelberg, Mitsubishi, Ryobi, Sakurai",
      "Engineer Support": "Dedicated In-House Service & Spares",
      "Delivery Reach": "Pan-India Installation & Commissioning",
    },
    features: [
      "Rigorous multi-point electrical and mechanical tolerance testing",
      "Cylinder and blanket inspection ensuring zero plate scarring",
      "In-house service engineers handle installation and breakdown support",
      "Genuine spare parts sourcing and consumable packages included",
    ],
    applications: [
      "High-volume commercial publication printing",
      "Multi-color folding carton packaging",
      "Brochures, catalog runs, and marketing collateral",
    ],
    href: "/products/digital-offset-finishing-machines/pre-owned-offset-printing-machines",
  },
  {
    id: "hero-2",
    name: "In-House Barred Printing Blankets",
    subtitle: "Custom Finished in our Delhi Baring Center",
    category: "02 | In-House Baring Facility",
    categorySlug: "offset-consumables-spare-parts",
    productSlug: "in-house-barred-printing-blankets",
    image: "/images/products/conti-air-printing-blankets.png",
    description:
      "Custom prepared, cut, barred, and tension-calibrated in our Delhi facility. Economical China imported blankets, Continental, UV-cure, and Acoma options engineered for tight registration and long run life.",
    badge: "In-House Facility • Express Dispatch",
    modelCode: "PS-BARRED-BLANKET",
    specs: {
      "Thickness Range": "1.70 mm / 1.95 mm Compressible",
      "Barring Types": "Precision Aluminum & Stainless Steel Bars",
      "Surface Finish": "Micro-ground true dot reproduction",
      "Facility Location": "Ansari Road, Daryaganj, Delhi Facility",
      "Supported Presses": "Heidelberg, Komori, Mitsubishi, Sakurai, KBA",
    },
    features: [
      "Barred to manufacturer millimeter tolerances in-house",
      "Superior smash resistance and rapid recovery under shock",
      "Compatible with conventional, hybrid, and 100% UV curable inks",
      "Rigorous quality control with instant same-day/next-day turnaround",
    ],
    applications: [
      "Commercial sheetfed offset presses",
      "High-speed packaging carton printing",
      "Spot UV and specialty coating applications",
    ],
    href: "/products/offset-consumables-spare-parts/in-house-barred-printing-blankets",
  },
  {
    id: "hero-3",
    name: "Large-Format Offset Pressroom Solutions",
    subtitle: "Consumables, Chemistry & Heavy Equipment",
    category: "03 | Pressroom Consumables",
    categorySlug: "offset-consumables-spare-parts",
    image: "/images/products/kba-rapida-162a-6.jpg",
    description:
      "Complete pressroom supply contracts featuring DIC printing inks, Böttcher pressroom chemicals, anti-marking films, and heavy machinery support tailored to commercial printers and packaging converters.",
    badge: "Authorized Supply Partner",
    modelCode: "PS-PRESSROOM-DIC",
    specs: {
      "Printing Inks": "Official DIC Process & Spot Pantone Series",
      "Press Chemistry": "Böttcher Founts, Washes & Calcium Deglazers",
      "Anti-Marking": "Imported Japan & China Anti-Marking Films",
      "Technical Advisory": "Pressroom wash cycle & alcohol reduction audits",
      "Coverage": "Pan-India Warehousing & Fast Dispatch",
    },
    features: [
      "Authorized supply of DIC process series for vivid color depth",
      "Böttcher pressroom chemistry extends roller and blanket life",
      "Specialty anti-marking films prevent ink set-off on transfer cylinders",
      "Consultative matching of ink viscosity to your pressroom temperature",
    ],
    applications: [
      "Heavy board packaging converting",
      "Premium glossy publication and art catalog printing",
      "Continuous commercial 24/7 offset pressrooms",
    ],
    href: "/products/offset-consumables-spare-parts",
  },
  {
    id: "hero-4",
    name: "Thermal, Wet & Dry Laminating Machines",
    subtitle: "High-Throughput Digital & Offset Web Laminating",
    category: "04 | Finishing Machinery",
    categorySlug: "digital-offset-finishing-machines",
    productSlug: "thermal-wet-dry-laminating-machines",
    image: "/images/categories/digital-offset.jpg",
    description:
      "High-efficiency industrial laminators supplied to printers in Delhi, Chennai, and nationwide. Engineered with precision ceramic heating rollers to eliminate curl, silvering, and film delamination on digital and offset stocks.",
    badge: "Chennai & Pan-India Supply",
    modelCode: "PS-LAM-AUTO",
    specs: {
      "Lamination Width": "380 mm to 1080 mm options",
      "Speed Capacity": "Variable 0 – 45 meters / minute",
      "Heating Technology": "Precision Internal Oil / Ceramic Roller",
      "Substrates": "BOPP, PET, Thermal Velvet, Scuff-Free Matt",
      "De-Curling Unit": "Integrated precision mechanical de-curler",
    },
    features: [
      "Heavy-duty pneumatic pressure rollers ensure bubble-free adhesion",
      "Independent temperature PID controllers with digital LED telemetry",
      "Automatic sheet overlap registration and flying knife separation",
      "Handles sensitive digital toner prints with zero heat distortion",
    ],
    applications: [
      "Luxury rigid boxes, folding cartons, and cosmetics packaging",
      "Softcover and hardcover book jackets and textbooks",
      "Waterproof menu cards and point-of-sale display boards",
    ],
    href: "/products/digital-offset-finishing-machines/thermal-wet-dry-laminating-machines",
  },
  {
    id: "hero-5",
    name: "Press Sense Own-Brand Creasing Matrix",
    subtitle: "Proprietary Imported Packaging Consumable",
    category: "05 | Packaging Consumables",
    categorySlug: "die-making-machines",
    productSlug: "press-sense-creasing-matrix",
    image: "/images/categories/die-making-machines.png",
    description:
      "Our proprietary imported creasing matrix with strong market acceptance across India. Precision engineered to provide clean, crisp fold lines and eliminate board cracking on folding cartons and corrugated boxes.",
    badge: "Own-Brand Market Leader",
    modelCode: "PS-CM-PRO",
    specs: {
      "Base Construction": "Narrow thin steel base for tight crease spacing",
      "Locator System": "High-accuracy plastic locator for true register",
      "Sizes Available": "Comprehensive channel widths and depths",
      "Adhesion": "Industrial-grade self-adhesive backing tape",
      "Board Compatibility": "Solid bleached sulfate (SBS), duplex & kraft",
    },
    features: [
      "Smooth chamfered shoulders prevent board tearing during auto feeding",
      "High-tack adhesive tape stays firmly positioned through 100k+ impressions",
      "Color-coded channel strips for effortless operator identification",
      "Significantly competitively priced compared to Western imports",
    ],
    applications: [
      "Pharmaceutical folding carton crease lines",
      "Food and beverage carton packaging",
      "High-speed auto-platen die-cutting machines (Bobst, Heidelberg)",
    ],
    href: "/products/die-making-machines/press-sense-creasing-matrix",
  },
  {
    id: "hero-6",
    name: "Paper Cutting Machines & Guillotine Knives",
    subtitle: "High-Speed Steel & Tungsten Carbide Blades",
    category: "06 | Precision Cutting Tools",
    categorySlug: "paper-cutting-knives",
    image: "/images/categories/paper-cutting-knives.png",
    description:
      "Industrial paper cutting machinery sourced according to format and budget, accompanied by ultra-durable guillotine blades and 3-knife trimmer sets for Polar, Seypa, Wohlenberg, and Kolbus systems.",
    badge: "Micro-Precision Edges",
    modelCode: "PS-KNIVES-TUNGSTEN",
    specs: {
      "Blade Steel Grade": "Inlaid High-Speed Steel (18% W) & Solid Carbide",
      "Hardness Rating": "62 – 65 HRC for maximum edge retention",
      "Fitment Specifications": "Polar, Seypa, Perfecta, Wohlenberg, Kolbus",
      "Machine Formats": "Benchtop to 115cm / 137cm / 155cm Guillotines",
      "Grinding Tolerance": "Mirror-finish bevel, ±0.01mm parallel tolerance",
    },
    features: [
      "Ultra-fine micro-ground cutting edge prevents paper dust and drag",
      "Carbide inlay triples cutting lifespan between regrinds",
      "Includes precision matched sets for three-knife book trimming",
      "Guillotine machinery equipped with dual optical infrared safety curtains",
    ],
    applications: [
      "Publication ream trimming and squaring",
      "Heavy commercial bindery finishing lines",
      "Synthetic paper, plastic film, and heavy grayboard cutting",
    ],
    href: "/products/paper-cutting-knives",
  },
];

const SLIDE_INTERVAL = 5000; // 5 seconds

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);
  const [selectedMachine, setSelectedMachine] = useState<HeroMachineDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);

  // Reliable, continuous auto-scroll ticker
  useEffect(() => {
    if (!isAutoScrollActive || modalOpen) return;

    const tickInterval = 50; // update progress every 50ms
    const step = (tickInterval / SLIDE_INTERVAL) * 100;

    const timer = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % heroSlides.length);
          return 0;
        }
        return prev + step;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [isAutoScrollActive, modalOpen, currentIndex]);

  // Reset progress when index changes manually
  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setSlideProgress(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    setSlideProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setSlideProgress(0);
  };

  const currentSlide = heroSlides[currentIndex];

  const handleOpenDetail = useCallback((machine: HeroMachineDetail) => {
    setSelectedMachine(machine);
    setModalOpen(true);
  }, []);

  return (
    <>
      <section
        aria-label="Press Sense Industrial Machinery Showcase"
        className="relative bg-[#070B10] text-white overflow-hidden border-b border-slate-800 py-6 sm:py-8 lg:py-12"
      >
        {/* Subtle background industrial grid & warm ambient glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#FA7533]/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
            
            {/* 1. MACHINE IMAGE UP (Mobile: Order 1, Desktop: Order 2 Right Column 6 cols) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col">
              {/* Dedicated Image Showcase Container */}
              <div
                className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-[#0A1018] rounded-2xl border border-slate-800 hover:border-[#FA7533] shadow-2xl p-3 sm:p-5 flex items-center justify-center cursor-pointer group overflow-hidden transition-all duration-300"
                onClick={() => handleOpenDetail(currentSlide)}
                title="Click to inspect complete technical specifications"
              >
                {/* Active Machine Image with smooth transition */}
                <div
                  key={currentSlide.id}
                  className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-300"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain p-2 sm:p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Machine Badge Floating Top-Left */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#FA7533] text-white shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    {currentSlide.badge}
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-slate-300">
                    Est. 2010
                  </span>
                </div>

                {/* Model Code Floating Bottom-Right */}
                {currentSlide.modelCode && (
                  <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10 text-[10px] sm:text-[11px] font-mono bg-black/85 border border-slate-700 text-slate-300 px-2 py-0.5 rounded shadow-xs backdrop-blur-xs">
                    {currentSlide.modelCode}
                  </span>
                )}

                {/* Tap to inspect Floating Bottom-Left */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold text-white bg-black/80 border border-white/15 backdrop-blur-xs group-hover:bg-[#FA7533] group-hover:border-[#FA7533] transition-colors shadow-xs">
                  <Maximize2 className="w-3 h-3 text-[#FA7533] group-hover:text-white" />
                  <span>Tap to inspect specs</span>
                </div>
              </div>

              {/* Dedicated Image Navigation & Progress Bar (Right below Image, zero overlapping!) */}
              <div className="flex items-center justify-between gap-3 mt-3 p-2 sm:p-2.5 rounded-xl bg-[#0D1520] border border-slate-800 shadow-sm">
                {/* Left: Counter & Auto-scroll Segmented Indicators */}
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <span className="text-xs font-mono font-bold text-[#FA7533] shrink-0">
                    0{currentIndex + 1} / 0{heroSlides.length}
                  </span>

                  {/* 6 Interactive Segmented Progress Bars */}
                  <div className="flex items-center gap-1 sm:gap-1.5 flex-1 max-w-[200px] sm:max-w-xs">
                    {heroSlides.map((slide, i) => {
                      const isActive = i === currentIndex;
                      return (
                        <button
                          key={slide.id}
                          onClick={() => goToSlide(i)}
                          aria-label={`Jump to slide ${i + 1}: ${slide.name}`}
                          className="relative flex-1 h-1.5 sm:h-2 rounded-full overflow-hidden bg-slate-800 transition-all cursor-pointer hover:bg-slate-700"
                        >
                          {isActive && (
                            <div
                              className="h-full bg-gradient-to-r from-[#FA7533] to-[#FF8D4D] rounded-full transition-all duration-75 shadow-[0_0_8px_#FA7533]"
                              style={{ width: `${slideProgress}%` }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Auto-scroll Pause / Play Toggle */}
                  <button
                    onClick={() => setIsAutoScrollActive(!isAutoScrollActive)}
                    aria-label={isAutoScrollActive ? "Pause auto-scroll" : "Play auto-scroll"}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                  >
                    {isAutoScrollActive ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 text-[#FA7533]" />
                    )}
                  </button>
                </div>

                {/* Right: Prev & Next Arrow Controls */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous machine slide"
                    className="p-1.5 sm:p-2 rounded-lg bg-black/60 hover:bg-[#FA7533] text-white border border-slate-700 hover:border-[#FA7533] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next machine slide"
                    className="p-1.5 sm:p-2 rounded-lg bg-black/60 hover:bg-[#FA7533] text-white border border-slate-700 hover:border-[#FA7533] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 2. THEORIES & SPECS DOWN (Mobile: Order 2, Desktop: Order 1 Left Column 6 cols) */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center">
              <div key={currentSlide.id} className="animate-in fade-in duration-300">
                {/* Category & Heritage Subtitle */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FA7533]">
                    {currentSlide.subtitle}
                  </span>
                </div>

                {/* Machine Name */}
                <h1 className="font-heading font-black text-xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                  {currentSlide.name}
                </h1>

                {/* Machine Description */}
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {currentSlide.description}
                </p>

                {/* 2x2 Specs Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-800">
                  {Object.entries(currentSlide.specs)
                    .slice(0, 4)
                    .map(([key, val], i) => (
                      <div
                        key={i}
                        className="bg-[#0A1018] border border-slate-800/80 rounded-xl p-2.5 flex flex-col justify-center"
                      >
                        <span className="text-[10px] font-mono uppercase text-slate-400 truncate">
                          {key}
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-white truncate mt-0.5">
                          {val}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex flex-row gap-2">
                    <button
                      onClick={() => handleOpenDetail(currentSlide)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-3 bg-[#FA7533] hover:bg-[#E05D1C] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(250,117,51,0.3)] transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Machine</span>
                    </button>

                    <a
                      href={getProductWhatsAppUrl(
                        currentSlide.name,
                        currentSlide.modelCode
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                      <span>WhatsApp Raj Kumar</span>
                    </a>
                  </div>

                  <Link
                    href={currentSlide.href}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <span>View In Product Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Machine Details Modal */}
      <MachineDetailModal
        machine={selectedMachine}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
