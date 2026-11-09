"use client";

import React, { useState } from "react";
import {
  Award,
  Wrench,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function TrustIntro() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const pillars = [
    {
      icon: Award,
      title: "In-House Blanket Baring",
      badge: "Delhi Facility",
      description:
        "Our dedicated in-house baring facility prepares and finishes blankets according to customer requirements with tight control over accuracy, consistency, and express turnaround.",
    },
    {
      icon: Wrench,
      title: "Application-Led Sourcing",
      badge: "Global Network",
      description:
        "New and pre-owned printing machinery sourced internationally: Heidelberg, Mitsubishi, Ryobi, Sakurai, rigid box machines, and automatic paper bag lines.",
    },
    {
      icon: ShieldCheck,
      title: "DIC & Böttcher Consumables",
      badge: "Official Supply",
      description:
        "Authorized DIC printing inks, Böttcher pressroom chemicals, Japan/China anti-marking films, and our own-brand creasing matrix with high market acceptance.",
    },
    {
      icon: Headphones,
      title: "In-House Service Engineer",
      badge: "Direct Support",
      description:
        "Long-term relationship beyond the sale: dedicated in-house service engineer for on-site troubleshooting, routine maintenance, and genuine spares.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#090E15] via-[#0D141F] to-[#0A0F17] text-white py-8 sm:py-12 lg:py-14 border-b border-slate-800 overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Center ambient orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Tightened margins */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRESS SENSE | ESTABLISHED 2010</span>
          </div>

          <h2 className="font-heading font-black text-xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Engineering Precision &amp; Production Reliability
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Providing tailored consumables, quality machinery, and dedicated engineering support to
            printers, publishers, and packaging converters across India based on your exact production requirements.
          </p>
        </div>

        {/* 4 Feature Pillars Grid - Compact padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            // On mobile, hide items 2 and 3 unless showAllMobile is true
            const isHiddenMobile = !showAllMobile && idx >= 2;

            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 bg-[#0E1622]/90 backdrop-blur-sm border border-slate-700/80 hover:border-[#FA7533] rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,117,51,0.2)] group ${
                  isHiddenMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-black/50 border border-slate-700 group-hover:border-[#FA7533] flex items-center justify-center text-[#FA7533] shadow-xs transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 group-hover:text-[#FA7533] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#FA7533] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#FA7533]">
                  <span className="font-mono text-[11px]">Division 0{idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FA7533]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile See More / See Less Toggle Button */}
        <div className="mt-4 text-center sm:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#FA7533]/50 transition-colors"
          >
            <span>{showAllMobile ? "Show Less" : "See All 4 Engineering Pillars"}</span>
            {showAllMobile ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#FA7533]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#FA7533]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
