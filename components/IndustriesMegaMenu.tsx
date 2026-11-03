"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Layers, Factory, BookOpen, Package, Newspaper } from "lucide-react";
import { industries } from "@/data/industries";

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const industryIcons: Record<string, React.ReactNode> = {
  "commercial-printing": <Layers className="w-4 h-4 text-[#FA7533]" />,
  "packaging-folding-carton": <Package className="w-4 h-4 text-[#FA7533]" />,
  "publishing-bookbinding": <BookOpen className="w-4 h-4 text-[#FA7533]" />,
  "print-finishing-post-press": <Factory className="w-4 h-4 text-[#FA7533]" />,
  "industrial-production": <Newspaper className="w-4 h-4 text-[#FA7533]" />,
};

export default function IndustriesMegaMenu({
  isOpen,
  onClose,
}: IndustriesMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Industries Mega Menu"
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-white border-b border-[#E2E8F0] shadow-2xl z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FA7533]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533]" />
              <span>Production Sectors Served</span>
            </div>
            <p className="text-sm font-semibold text-[#111827] mt-0.5">
              Targeted machinery, blankets &amp; consumables engineered for your specific print line
            </p>
          </div>
          <Link
            href="/industries"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FA7533] hover:text-[#E05D1C] group transition-colors"
          >
            <span>Explore All Industry Sectors</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 5 Column / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind) => {
            const icon = industryIcons[ind.slug] || <Layers className="w-4 h-4 text-[#FA7533]" />;

            return (
              <Link
                key={ind.id}
                href={`/industries#${ind.slug}`}
                onClick={onClose}
                className="group flex flex-col bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl p-4 transition-all duration-200 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-white rounded-lg border border-[#E2E8F0] overflow-hidden mb-3.5 flex items-center justify-center p-2">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    width={260}
                    height={160}
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 p-1.5 bg-white/95 rounded-md border border-[#E2E8F0] shadow-xs">
                    {icon}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#FA7533] transition-colors leading-snug">
                      {ind.name}
                    </h4>
                    <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                      {ind.tagline}
                    </p>
                  </div>

                  {/* Key equipment preview bullets */}
                  <div className="mt-3 pt-2.5 border-t border-[#E2E8F0]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Key Solutions:
                    </p>
                    <ul className="space-y-1">
                      {ind.keyEquipment.slice(0, 2).map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[11px] text-[#475569] truncate flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#FA7533] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#FA7533]">
                    <span>View Solutions</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
