"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
  Maximize2,
  Phone,
  Info,
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
        className="relative bg-[#070B10] text-white overflow-hidden border-b border-slate-800"
      >
        {/* Full-bleed Slideshow Viewport */}
        <div className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
          {/* Background Images with Cross-fade Transition */}
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
                onClick={() => handleOpenDetail(slide)}
              >
                {/* Full-Sized Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center scale-100 transform transition-transform duration-7000 ease-out"
                  style={{
                    transform: isActive ? "scale(1.04)" : "scale(1.0)",
                  }}
                />

                {/* Layered Cinematic Overlays for Optimal Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070B10]/95 via-[#070B10]/85 to-transparent sm:w-3/4 lg:w-3/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B10] via-transparent to-[#070B10]/40" />
                <div className="absolute inset-0 bg-[#070B10]/40" />

                {/* Subtle Ambient Orange Glow in Corner */}
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FA7533]/20 blur-[120px] rounded-full pointer-events-none" />

                {/* Interactive Click Indicator Pill (Floating on Image) */}
                <div className="absolute top-5 right-5 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-[#FA7533] backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg transition-colors group">
                  <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Click to Inspect Machine Details</span>
                </div>
              </div>
            );
          })}

          {/* Foreground Content: Text & Descriptions directly ON the images */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
            <div className="max-w-2xl sm:max-w-3xl">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533] text-white shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  {currentSlide.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-300 bg-white/10 backdrop-blur-md border border-white/15">
                  <span>Est. 2010</span>
                  <span className="text-[#FA7533]">•</span>
                  <span>Delhi Facility</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-Scrolling Active
                </span>
              </div>

              {/* Slide Subtitle */}
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#FA7533] font-bold">
                {currentSlide.subtitle}
              </p>

              {/* Big Machine Name */}
              <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1.5 leading-[1.15] drop-shadow-md">
                {currentSlide.name}
              </h1>

              {/* Machine Description directly ON the image */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-200 mt-2.5 sm:mt-3 leading-relaxed max-w-2xl font-normal drop-shadow-xs line-clamp-3 sm:line-clamp-none">
                {currentSlide.description}
              </p>

              {/* Specs Pills Grid directly ON the image */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/15 max-w-2xl">
                {Object.entries(currentSlide.specs)
                  .slice(0, 4)
                  .map(([key, val], i) => (
                    <div
                      key={i}
                      className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-2.5 shadow-sm"
                    >
                      <p className="text-[10px] font-mono uppercase text-slate-400 truncate">
                        {key}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white truncate mt-0.5 font-mono">
                        {val}
                      </p>
                    </div>
                  ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
                {/* 1. Click to Inspect Detailed Section */}
                <button
                  onClick={() => handleOpenDetail(currentSlide)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#FA7533] hover:bg-[#E05D1C] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(250,117,51,0.4)] transition-all duration-200 group cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Inspect Machine</span>
                </button>

                {/* 2. Direct WhatsApp Consultation */}
                <a
                  href={getProductWhatsAppUrl(
                    currentSlide.name,
                    currentSlide.modelCode
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                  <span>WhatsApp Raj Kumar</span>
                </a>

                {/* 3. Direct Link to Product Page */}
                <Link
                  href={currentSlide.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3.5 py-2 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
                >
                  <span>Catalogue Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Controls & Continuous Dots Bar at the Bottom */}
          <div className="absolute bottom-6 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Interactive Dots for Auto Scrolled Slides with Progress Bar */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-slate-400 mr-1">
                0{currentIndex + 1} / 0{heroSlides.length}
              </span>

              {heroSlides.map((slide, i) => {
                const isActive = i === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(i)}
                    aria-label={`Switch to machine slide ${i + 1}: ${slide.name}`}
                    className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive ? "w-12 sm:w-16 bg-white/20" : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
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

              {/* Auto-scroll Pause / Play Toggle */}
              <button
                onClick={() => setIsAutoScrollActive(!isAutoScrollActive)}
                aria-label={isAutoScrollActive ? "Pause auto-scroll" : "Play auto-scroll"}
                className="p-1 rounded-full text-slate-400 hover:text-white transition-colors ml-1 cursor-pointer"
              >
                {isAutoScrollActive ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-[#FA7533]" />
                )}
              </button>
            </div>

            {/* Slide Arrows & Facility Hotline */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 mr-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Delhi Center: +91 98400 89494</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  aria-label="Previous machine slide"
                  className="p-2.5 rounded-xl bg-black/60 hover:bg-[#FA7533] text-white border border-white/20 transition-colors backdrop-blur-md cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next machine slide"
                  className="p-2.5 rounded-xl bg-black/60 hover:bg-[#FA7533] text-white border border-white/20 transition-colors backdrop-blur-md cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Machine Modal (Triggered on Click) */}
      <MachineDetailModal
        machine={selectedMachine}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
