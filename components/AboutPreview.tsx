"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, UserCheck, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutPreview() {
  return (
    <section className="relative bg-[#090E15] text-white py-8 sm:py-12 lg:py-14 border-b border-slate-800 overflow-hidden">
      {/* Background industrial grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-80 h-80 bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[16/10] bg-[#0E1520] border border-slate-700/80 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-5 shadow-xl flex items-center justify-center group">
              <Image
                src="/images/products/kba-rapida-162a-6.jpg"
                alt="Press Sense industrial printing press solutions"
                width={550}
                height={350}
                className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#070B10]/95 text-white p-3 rounded-lg backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="text-[10px] font-mono text-slate-400">Operations Base</p>
                  <p className="text-xs font-semibold">Delhi • In-House Baring Center</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-400">Engineering Heritage</p>
                  <p className="text-xs font-bold text-[#FA7533]">Est. 2010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Press Sense</span>
            </div>

            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
              15+ Years of Dedicated Printing &amp; Packaging Engineering
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
              Press Sense provides printing and packaging solutions to printers, publishers,
              converters, and packaging companies. Our focus is to supply reliable consumables,
              quality machinery, and practical solutions based on each customer&apos;s production
              requirements and budget.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              From our dedicated In-House Blanket Baring Facility to sourcing new and pre-owned
              printing machinery (Heidelberg, Mitsubishi, Sakurai), DIC printing inks, and
              Böttcher pressroom chemicals, our in-house engineers provide dedicated technical
              support throughout the working life of the equipment.
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2.5 bg-[#0E1520] p-2.5 sm:p-3 rounded-xl border border-slate-700/80">
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-slate-700 flex items-center justify-center text-[#FA7533] shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400">Established</p>
                  <p className="text-xs sm:text-sm font-bold text-white font-mono">2010 (15+ Years)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#0E1520] p-2.5 sm:p-3 rounded-xl border border-slate-700/80">
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-slate-700 flex items-center justify-center text-[#FA7533] shrink-0">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400">Leadership</p>
                  <p className="text-xs sm:text-sm font-bold text-white font-mono">Raj Kumar</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FA7533] hover:bg-[#E05D1C] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors group cursor-pointer"
              >
                <span>About Press Sense</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
