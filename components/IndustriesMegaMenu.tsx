"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, MessageCircle } from "lucide-react";
import { industries } from "@/data/industries";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IndustriesMegaMenu({
  isOpen,
  onClose,
}: IndustriesMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Industries Dropdown Menu"
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-[#080D14]/98 backdrop-blur-2xl border-b border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.85)] z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-1 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30">
              <Sparkles className="w-3 h-3 text-[#FA7533]" />
              Industry Verticals
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-mono">
              Tailored machinery, consumables &amp; tooling engineered for specific print lines
            </span>
          </div>
          <Link
            href="/industries"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA7533] hover:text-[#FF8D4D] group transition-colors"
          >
            <span>Explore All Industry Sectors</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Grouped Industry Lists - NO BOXES, Clean Cascading Directory */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={ind.id}
              className={`flex flex-col ${
                idx !== industries.length - 1 ? "lg:border-r lg:border-slate-800/60 lg:pr-5" : ""
              }`}
            >
              {/* Sector Title Header */}
              <div className="mb-3 pb-2 border-b border-slate-800/70">
                <Link
                  href={`/industries#${ind.slug}`}
                  onClick={onClose}
                  className="group/hdr flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533] shrink-0" />
                  <h4 className="font-heading font-bold text-sm text-white group-hover/hdr:text-[#FA7533] transition-colors leading-tight">
                    {ind.name}
                  </h4>
                </Link>
                <p className="text-[10px] text-slate-500 mt-0.5 pl-3.5 line-clamp-1 font-mono">
                  {ind.tagline}
                </p>
              </div>

              {/* Machinery & Equipment List */}
              <ul className="space-y-1.5 flex-1">
                {ind.keyEquipment.map((eq, eqIdx) => (
                  <li key={eqIdx}>
                    <Link
                      href={`/industries#${ind.slug}`}
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-white/5 transition-all text-xs text-slate-300 hover:text-white"
                    >
                      <span className="truncate pr-2 font-medium group-hover/item:text-[#FA7533] group-hover/item:translate-x-0.5 transition-transform">
                        {eq}
                      </span>
                      <ChevronRight className="w-3 h-3 text-slate-600 group-hover/item:text-[#FA7533] shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* View Sector Link */}
              <div className="mt-3 pt-2">
                <Link
                  href={`/industries#${ind.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-[#FA7533] transition-colors"
                >
                  <span>Explore {ind.name.split(" ")[0]}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Support Bar */}
        <div className="mt-6 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Machine Matching According to Production Format &amp; Budget
            </span>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-white font-bold text-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-transparent" />
            <span>Request Sector Equipment Consultation</span>
          </a>
        </div>
      </div>
    </div>
  );
}
