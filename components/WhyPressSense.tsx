"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Sparkles,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function WhyPressSense() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="relative bg-[#0A0F17] text-white py-8 sm:py-12 lg:py-14 border-b border-slate-800 overflow-hidden">
      {/* Background industrial grid & glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-80 h-80 bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Advantage</span>
            </div>

            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
              Why Printing &amp; Packaging Leaders Rely on Press Sense
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
              Press Sense supplies printing and packaging solutions to printers, publishers, converters, and packaging companies across India. We deliver reliable consumables, quality machinery, and practical engineering solutions tailored to your production demands.
            </p>

            {/* Leadership commitment card - Compact padding */}
            <div className="mt-5 p-4 sm:p-5 bg-[#0E1624] border border-slate-700/80 rounded-xl sm:rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FA7533] to-transparent" />
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FA7533] animate-pulse" />
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Leadership Commitment • Est. 2010
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Our relationship with customers continues beyond the sale. From in-house blanket baring
                and genuine DIC inks to new and pre-owned offset machines, our in-house engineers provide practical
                support throughout the working life of the equipment.&rdquo;
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs">
                <p className="font-bold text-[#FA7533]">
                  — {companyInfo.contactPerson}, Press Sense
                </p>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Direct Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {companyInfo.whyUs.map((item, idx) => {
                const isHiddenMobile = !showAllMobile && idx >= 2;

                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 bg-[#0E1622]/90 backdrop-blur-sm border border-slate-700/80 hover:border-[#FA7533] rounded-xl sm:rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_15px_rgba(250,117,51,0.2)] group ${
                      isHiddenMobile ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-black/60 border border-slate-700 group-hover:border-[#FA7533] text-[#FA7533] flex items-center justify-center font-mono font-bold text-xs mb-3 transition-colors">
                        0{idx + 1}
                      </div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#FA7533] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-[#FA7533]">
                      <span>Proven Practice</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FA7533]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile See More / See Less Toggle */}
            <div className="mt-3.5 text-center sm:hidden">
              <button
                onClick={() => setShowAllMobile(!showAllMobile)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#FA7533]/50 transition-colors"
              >
                <span>{showAllMobile ? "Show Less" : "See All Advantages"}</span>
                {showAllMobile ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#FA7533]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-[#FA7533]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
