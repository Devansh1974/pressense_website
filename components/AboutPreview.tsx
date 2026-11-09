"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, UserCheck, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutPreview() {
  return (
    <section className="relative bg-white text-slate-900 py-8 sm:py-12 lg:py-14 border-b border-slate-200 overflow-hidden">
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-80 h-80 bg-orange-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[16/10] bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-5 shadow-xs flex items-center justify-center group">
              <Image
                src="/images/products/kba-rapida-162a-6.jpg"
                alt="Press Sense industrial printing press solutions"
                width={550}
                height={350}
                className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 text-slate-800 p-3 rounded-lg backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs shadow-2xs">
                <div>
                  <p className="text-[10px] font-mono text-slate-500">Operations Base</p>
                  <p className="text-xs font-semibold text-slate-900">Delhi • In-House Baring Center</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-500">Engineering Heritage</p>
                  <p className="text-xs font-bold text-[#FA7533]">Est. 2010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-orange-50 text-[#FA7533] border border-orange-200 mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Press Sense</span>
            </div>

            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight leading-tight">
              15+ Years of Dedicated Printing &amp; Packaging Engineering
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              Press Sense provides printing and packaging solutions to printers, publishers,
              converters, and packaging companies. Our focus is to supply reliable consumables,
              quality machinery, and practical solutions based on each customer&apos;s production
              requirements and budget.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              From our dedicated In-House Blanket Baring Facility to sourcing new and pre-owned
              printing machinery (Heidelberg, Mitsubishi, Sakurai), DIC printing inks, and
              Böttcher pressroom chemicals, our in-house engineers provide dedicated technical
              support throughout the working life of the equipment.
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FA7533] shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500">Established</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 font-mono">2010 (15+ Years)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FA7533] shrink-0">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500">Leadership</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 font-mono">Raj Kumar</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FA7533] hover:bg-[#E05D1C] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors group cursor-pointer"
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
