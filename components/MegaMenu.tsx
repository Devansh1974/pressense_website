"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductCountByCategory } from "@/data/products";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Products Mega Menu"
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-white border-b border-[#E2E8F0] shadow-xl z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2E8F0]">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0796CC]">
              Product Catalogue
            </h3>
            <p className="text-sm font-semibold text-[#111827] mt-0.5">
              Browse Machinery, Tooling & Precision Consumables
            </p>
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0796CC] hover:text-[#0684b3] group transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Column Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const count = getProductCountByCategory(cat.slug);

            return (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                onClick={onClose}
                className="group flex flex-col bg-[#F7F8F7] hover:bg-white border border-[#E2E8F0] hover:border-[#0796CC] rounded-lg p-4 transition-all duration-200"
              >
                {/* 4:3 Image Container with object-fit: contain */}
                <div className="relative w-full aspect-[4/3] bg-white rounded border border-[#E2E8F0] overflow-hidden p-3 mb-4 flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={320}
                    height={240}
                    className="object-contain max-h-full max-w-full group-hover:scale-[1.03] transition-transform duration-200"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 text-[11px] font-semibold font-mono bg-white/95 border border-[#E2E8F0] text-[#0D1B24] px-2 py-0.5 rounded">
                    {count} {count === 1 ? "Product" : "Products"}
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#0796CC] transition-colors leading-snug">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#0796CC]">
                    <span>View Category</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
