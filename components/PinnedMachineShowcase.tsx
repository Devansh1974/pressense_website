"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Maximize2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import MachineDetailModal, { HeroMachineDetail } from "./MachineDetailModal";

const pinnedMachines: HeroMachineDetail[] = [
  {
    id: "pin-1",
    name: "Pre-Owned Heidelberg & Sakurai Offset Presses",
    subtitle: "High-Speed Commercial Sheetfed Printing",
    category: "Offset Machinery",
    categorySlug: "digital-offset-finishing-machines",
    image: "/images/products/heidelberg-quickmaster-46di.jpg",
    description:
      "Sourced internationally from top Japanese and German manufacturers (Heidelberg, Sakurai, Ryobi, Mitsubishi). Every press undergoes comprehensive mechanical, electrical, and cylinder tolerance audits by in-house engineers prior to delivery.",
    badge: "Internationally Sourced",
    modelCode: "PS-HD-QM46",
    specs: {
      "Running Speed": "10,000 – 15,000 sph",
      "Plate Clamping": "Autoplate pneumatic clamping",
      "Dampening": "Direct continuous dampening",
      "Engineer Support": "Dedicated in-house service",
    },
    features: [
      "Rigorous precision cylinder and gear play testing",
      "In-house service engineers handle installation and commissioning",
      "Guaranteed access to replacement parts and consumable matching",
    ],
    applications: [
      "Commercial catalog, brochure, and magazine production",
      "Pharmaceutical leaflets and packaging inserts",
    ],
    href: "/products/digital-offset-finishing-machines/pre-owned-offset-printing-machines",
  },
  {
    id: "pin-2",
    name: "In-House Barred Printing Blankets & Finishing",
    subtitle: "Custom Fabricated in Delhi Facility",
    category: "In-House Baring Facility",
    categorySlug: "offset-consumables-spare-parts",
    image: "/images/products/conti-air-printing-blankets.png",
    description:
      "Our in-house blanket baring center finishes blankets to exact customer press specifications with tight millimeter tolerances. Featuring economical China imports, Continental, UV-cure, and Acoma blankets ready for rapid dispatch.",
    badge: "In-House Facility",
    modelCode: "PS-BAR-CUSTOM",
    specs: {
      "Thickness Gauge": "1.70mm / 1.95mm Compressible",
      "Barring Materials": "Aluminum & Stainless Steel Bars",
      "Dot Transfer": "Micro-ground for sharp screen dots",
      "Turnaround Time": "Express 24h custom barring dispatch",
    },
    features: [
      "Finished to exact cylinder circumference and width dimensions",
      "Anti-stretch carcass design maintains consistent print tension",
      "Compatible with conventional inks, UV coatings, and aggressive washes",
    ],
    applications: [
      "Heidelberg Speedmaster, Sakurai, Komori, and Mitsubishi presses",
      "High-speed carton packaging and spot varnishing towers",
    ],
    href: "/products/offset-consumables-spare-parts/in-house-barred-printing-blankets",
  },
  {
    id: "pin-3",
    name: "Thermal, Wet & Dry Laminating Machines",
    subtitle: "High-Volume Protective Web Laminating",
    category: "Post-Press Finishing",
    categorySlug: "digital-offset-finishing-machines",
    image: "/images/categories/digital-offset.jpg",
    description:
      "Continuous-feed laminating systems designed to eliminate substrate curling, film silvering, and glue peeling. Equipped with high-precision oil/ceramic heating drums and automated sheet overlap separation for maximum operator throughput.",
    badge: "High Throughput",
    modelCode: "PS-LAM-PRO",
    specs: {
      "Working Width": "Up to 1080 mm format",
      "Laminating Speed": "0 to 45 meters / minute",
      "Roller Heating": "Internal ceramic heating core",
      "Separation": "Integrated flying knife / burst roller",
    },
    features: [
      "High-pressure pneumatic rollers guarantee bubble-free bond strength",
      "Integrated mechanical anti-curl decurler unit for thin paper stocks",
      "Digital PID temperature control prevents substrate burn or distortion",
    ],
    applications: [
      "Luxury cosmetics, perfumery, and confectionery boxes",
      "Hardcover book jackets, catalogs, and textbook covers",
    ],
    href: "/products/digital-offset-finishing-machines/thermal-wet-dry-laminating-machines",
  },
  {
    id: "pin-4",
    name: "Motorized Round Corner Cutting Machine",
    subtitle: "Semi-Automatic Heavy Block Trimming",
    category: "Finishing Machinery",
    categorySlug: "digital-offset-finishing-machines",
    image: "/images/products/round-corner-cutting-machine.png",
    description:
      "Heavy-duty semi-automatic corner rounding machine featuring optical infrared safety interlocks and foot-switch operation. Cuts through 50mm paper stacks in under 1.5 seconds with zero corner tearing or edge flare.",
    badge: "Motorized Precision",
    modelCode: "PS-ECR-50E",
    specs: {
      "Stack Height": "50 mm stack capacity (approx. 500 sheets)",
      "Cutting Cycle": "30 – 35 cuts per minute",
      "Motor Capacity": "0.75 kW High-Torque Gear Drive",
      "Radii Range": "R2 to R25 mm modular tool steel dies",
    },
    features: [
      "Ergonomic hands-free foot pedal trigger leaves both hands free",
      "Automatic clamping engages firmly before blade enters the stock",
      "Infrared optical safety guard stops blade instantaneously upon obstruction",
    ],
    applications: [
      "Notebooks, calendars, diaries, and passport trimming",
      "Rigid carton packaging corner contouring",
    ],
    href: "/products/digital-offset-finishing-machines/round-corner-cutting-machine",
  },
  {
    id: "pin-5",
    name: "Press Sense Own-Brand Creasing Matrix",
    subtitle: "Proprietary Imported Packaging Consumable",
    category: "Packaging Tooling",
    categorySlug: "die-making-machines",
    image: "/images/categories/die-making-machines.png",
    description:
      "Our proprietary imported creasing matrix has gained broad market acceptance across India. Delivers crisp, deep score lines that prevent surface cracking along folds on coated SBS boards, corrugated card, and laminated stocks.",
    badge: "Own-Brand Leader",
    modelCode: "PS-CM-SERIES",
    specs: {
      "Base Construction": "Ultra-narrow thin steel base for tight creases",
      "Locator System": "Micro-precision high-durability plastic locator",
      "Adhesion Strength": "High-tack residue-free industrial transfer tape",
      "Channel Profiles": "Standard, Reverse, Off-Center, and Narrow",
    },
    features: [
      "Precision-chamfered edges prevent sheet snagging on auto-platens",
      "Maintains channel integrity over 100,000+ die-cut cycles",
      "High-contrast color-coded indicators for rapid size selection",
    ],
    applications: [
      "High-speed Bobst and automatic die-cutting platens",
      "Pharmaceutical folding carton cartons and blister pack cards",
    ],
    href: "/products/die-making-machines/press-sense-creasing-matrix",
  },
];

export default function PinnedMachineShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<HeroMachineDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Auto-scroll slideshow
  useEffect(() => {
    if (isPaused || modalOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pinnedMachines.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, modalOpen]);

  const activeMachine = pinnedMachines[activeIndex] || pinnedMachines[0];

  const handleOpenDetail = (machine: HeroMachineDetail) => {
    setSelectedMachine(machine);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="machine-showcase"
        aria-label="Core Industrial Equipment Showcase"
        className="relative bg-slate-50/60 text-slate-900 py-8 sm:py-12 lg:py-14 border-b border-slate-200 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle warm orange accent glow */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-orange-100/50 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-100/40 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-orange-50 border border-orange-200 text-[#FA7533] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Machinery &amp; Facilities Showcase</span>
              </div>
              <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight leading-tight">
                Engineering Showcase:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA7533] to-[#E05D1C]">
                  High-Uptime Solutions
                </span>
              </h2>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span className="text-xs font-mono text-slate-500">
                [ 0{activeIndex + 1} / 0{pinnedMachines.length} ]
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev - 1 + pinnedMachines.length) % pinnedMachines.length
                    )
                  }
                  aria-label="Previous equipment"
                  className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white hover:bg-[#FA7533] text-slate-700 hover:text-white border border-slate-200 hover:border-[#FA7533] transition-colors cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % pinnedMachines.length)
                  }
                  aria-label="Next equipment"
                  className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white hover:bg-[#FA7533] text-slate-700 hover:text-white border border-slate-200 hover:border-[#FA7533] transition-colors cursor-pointer shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick-Select Tab Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 mb-4 sm:mb-5 scrollbar-none">
            {pinnedMachines.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  idx === activeIndex
                    ? "bg-[#FA7533] text-white shadow-xs font-bold"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                }`}
              >
                <span className="font-mono text-[10px] opacity-80">0{idx + 1}</span>
                <span>{m.name.split(" ")[0]} {m.name.split(" ")[1] || ""}</span>
              </button>
            ))}
          </div>

          {/* Compact 2-Column Split Showcase Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            {/* RIGHT COLUMN ON MOBILE (order-1), DESKTOP (order-2): SLIDESHOW CARD VIEWPORT (7 cols) */}
            <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs relative overflow-hidden group">
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#FA7533]">
                    Equipment 0{activeIndex + 1}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-mono uppercase text-slate-500 truncate max-w-[180px] sm:max-w-none">
                    {activeMachine.subtitle}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-orange-50 text-[#FA7533] border border-orange-200 font-bold shrink-0">
                  {activeMachine.badge}
                </span>
              </div>

              {/* Main Machine Image Display */}
              <div
                className="relative w-full aspect-[16/10] bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden my-3 sm:my-4 border border-slate-200 cursor-pointer group/img flex items-center justify-center"
                onClick={() => handleOpenDetail(activeMachine)}
              >
                <Image
                  key={activeMachine.image}
                  src={activeMachine.image}
                  alt={activeMachine.name}
                  fill
                  className="object-contain p-3 sm:p-4 group-hover/img:scale-105 transition-transform duration-500"
                />

                {/* Click to inspect overlay pill */}
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FA7533] text-white text-xs font-bold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Inspect Full Details</span>
                  </span>
                </div>

                {/* Model badge */}
                {activeMachine.modelCode && (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono bg-white/95 border border-slate-200 text-slate-700 px-2 py-0.5 rounded shadow-2xs font-semibold">
                    {activeMachine.modelCode}
                  </span>
                )}
              </div>

              {/* Bottom Thumbnail Strip for Instant Machine Switching */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-[10px] font-mono uppercase text-slate-500 mb-1.5">
                  Equipment Queue:
                </p>
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {pinnedMachines.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border p-1 bg-slate-50 transition-all cursor-pointer ${
                        idx === activeIndex
                          ? "border-[#FA7533] shadow-xs ring-1 ring-[#FA7533]"
                          : "border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LEFT COLUMN: FIXED TELEMETRY & SPECIFICATIONS (order-2 mobile, order-1 desktop) (5 cols) */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FA7533] to-transparent" />

              <div>
                {/* Header telemetry */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FA7533] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#FA7533] uppercase">
                      {activeMachine.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Est. 2010 • Delhi HQ
                  </span>
                </div>

                {/* Active Machine Title & Description */}
                <div className="mt-3 sm:mt-4">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 leading-tight">
                    {activeMachine.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {activeMachine.description}
                  </p>
                </div>

                {/* Active Machine Specifications Grid */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-1.5">
                    Key Machine Specifications:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {Object.entries(activeMachine.specs).map(([k, v], idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs flex flex-col justify-center"
                      >
                        <span className="text-slate-500 text-[10px] uppercase truncate">{k}</span>
                        <span className="text-slate-900 font-bold font-mono text-xs truncate mt-0.5">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features Bullets */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                  <ul className="space-y-1">
                    {activeMachine.features.slice(0, 2).map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-xs text-slate-600 flex items-start gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FA7533] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-row gap-2">
                <button
                  onClick={() => handleOpenDetail(activeMachine)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#FA7533] hover:bg-[#E05D1C] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Specs</span>
                </button>

                <a
                  href={getProductWhatsAppUrl(
                    activeMachine.name,
                    activeMachine.modelCode
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <MachineDetailModal
        machine={selectedMachine}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
