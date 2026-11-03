import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="bg-[#F7F8F7] py-16 lg:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
              Product Divisions
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D171F] tracking-tight mt-1.5">
              Explore Our Machinery &amp; Consumables
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl">
              Categorized industrial machinery, in-house barred blankets, packaging solutions, and precision pressroom supplies.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FA7533] hover:text-[#E05D1C] group shrink-0"
          >
            <span>Browse Full Catalogue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid (4 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
