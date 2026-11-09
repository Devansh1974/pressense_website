"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Factory, ChevronDown, ChevronUp } from "lucide-react";
import { industries } from "@/data/industries";

export default function IndustriesSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="relative bg-[#070B10] py-8 sm:py-12 lg:py-14 border-b border-slate-800 overflow-hidden text-white">
      {/* Subtle blueprint grid & warm glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-2">
              <Factory className="w-3.5 h-3.5" />
              <span>Application Sectors</span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              Engineered For Diverse Industrial Demands
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
              Consumables, in-house barred blankets, and machinery deployed in high-output lines across India.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#FA7533] text-xs sm:text-sm font-bold text-[#FA7533] hover:text-[#FF8D4D] shadow-xs transition-all duration-200 group shrink-0 self-start sm:self-auto"
          >
            <span>All Sectors</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industries.map((ind, idx) => {
            // On mobile, show first 2 by default, rest behind "See More"
            const isHiddenMobile = !showAllMobile && idx >= 2;

            return (
              <div
                key={ind.id}
                className={`bg-[#0D1522] border border-slate-800 hover:border-[#FA7533] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(250,117,51,0.2)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group text-white ${
                  isHiddenMobile ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  {/* 16:9 Image Header */}
                  <div className="relative w-full aspect-[16/9] bg-[#05080E] border-b border-slate-800 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      width={380}
                      height={215}
                      className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-2.5 left-2.5 bg-black/85 border border-slate-700 text-white text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded backdrop-blur-md">
                      {ind.name}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-[#FA7533] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#FA7533] mt-0.5 font-mono">
                      {ind.tagline}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="mt-3.5 pt-3 border-t border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Solutions:
                      </span>
                      <ul className="mt-1.5 space-y-1">
                        {ind.keyEquipment.slice(0, 3).map((eq, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-1.5 text-xs text-slate-300"
                          >
                            <Check className="w-3 h-3 text-[#FA7533] shrink-0" />
                            <span className="line-clamp-1">{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 bg-black/40 group-hover:bg-[#FA7533]/15 border border-slate-800 group-hover:border-[#FA7533] text-xs font-bold text-slate-300 group-hover:text-[#FA7533] rounded-lg transition-all duration-200"
                  >
                    <span>Sector Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FA7533] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile See More / See Less Button */}
        <div className="mt-4 text-center md:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#FA7533]/50 transition-colors"
          >
            <span>{showAllMobile ? "Show Less" : "See All 5 Production Sectors"}</span>
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
