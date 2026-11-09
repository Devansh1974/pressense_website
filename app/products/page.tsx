"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let list = products;

    if (activeCategory !== "all") {
      list = list.filter((p) => p.categorySlug === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.modelCode?.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#070B10] text-white min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Products Catalogue" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Machinery &amp; Consumables</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1.5">
            Products Catalogue
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Explore our range of printing, finishing and industrial solutions
            engineered for demanding production environments. Select any machine to
            view comprehensive technical specifications or initiate direct WhatsApp
            inquiry.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#FA7533] text-white shadow-md font-bold"
                  : "bg-[#070B10] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              All Categories ({products.length})
            </button>

            {categories.map((cat) => {
              const count = products.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.slug
                      ? "bg-[#FA7533] text-white shadow-md font-bold"
                      : "bg-[#070B10] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Inline Filter Search */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, model or feature..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-800 bg-[#05080E] text-white placeholder-slate-500 focus:border-[#FA7533] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-mono">
          <span>
            Showing <strong className="text-white font-bold">{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1 ? "machine" : "machines & items"}
          </span>
          {activeCategory !== "all" && (
            <Link
              href={`/products/${activeCategory}`}
              className="text-[#FA7533] font-semibold hover:text-[#FF8D4D] inline-flex items-center gap-1 transition-colors"
            >
              <span>View dedicated {categories.find((c) => c.slug === activeCategory)?.name} page</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-12 text-center">
            <p className="text-base font-semibold text-white">
              No products found matching your current filter.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search terms or switch to &ldquo;All Categories&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 bg-[#FA7533] hover:bg-[#E05D1C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 3}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
