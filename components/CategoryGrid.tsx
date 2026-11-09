"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="relative bg-[#070B10] py-8 sm:py-12 lg:py-14 border-b border-slate-800 overflow-hidden text-white">
      {/* Subtle industrial grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Product Divisions</span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              Explore Our Machinery &amp; Consumables
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
              Categorized industrial machinery, in-house barred blankets, converting solutions, and precision pressroom consumables.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#FA7533] text-xs sm:text-sm font-bold text-[#FA7533] hover:text-[#FF8D4D] shadow-xs transition-all duration-200 group shrink-0 self-start sm:self-auto"
          >
            <span>Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 columns on mobile, 4 columns on desktop - saves 50% mobile height */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
