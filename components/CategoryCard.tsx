"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@/lib/types";
import { getProductCountByCategory } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const count = getProductCountByCategory(category.slug);

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col bg-[#0D1522] border border-slate-800 hover:border-[#FA7533] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(250,117,51,0.2)] transition-all duration-300 hover:-translate-y-1 text-white"
    >
      {/* Aspect Ratio Container with dark background */}
      <div className="relative w-full aspect-[4/3] bg-[#05080C] border-b border-slate-800 p-3 sm:p-5 flex items-center justify-center overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          width={350}
          height={260}
          className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/80 backdrop-blur-md border border-slate-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[10px] sm:text-xs font-mono font-bold text-slate-300 shadow-xs group-hover:border-[#FA7533]/50 group-hover:text-[#FA7533] transition-colors">
          {count} {count === 1 ? "Product" : "Products"}
        </div>
      </div>

      {/* Card Content - Compact padding on mobile */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-xs sm:text-base text-white group-hover:text-[#FA7533] transition-colors leading-snug line-clamp-2">
            {category.name}
          </h3>
          <p className="hidden sm:block text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {category.shortDescription}
          </p>
        </div>

        <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#FA7533]">
          <span>View Range</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
