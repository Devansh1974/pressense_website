"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";
import { useSearch } from "@/context/SearchContext";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function SearchModal() {
  const { isOpen, closeSearch } = useSearch();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery("");
      setSelectedIndex(0);
      setSelectedCategory("all");
    }
  }, [isOpen]);

  // Filtered results
  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    if (!query.trim()) {
      return result.slice(0, 6);
    }

    const q = query.toLowerCase().trim();
    return result.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.shortDescription.toLowerCase().includes(q);
      const matchCat = p.categorySlug.toLowerCase().includes(q);
      const matchCode = p.modelCode?.toLowerCase().includes(q);
      const matchFeat = p.features.some((f) => f.toLowerCase().includes(q));
      const matchSpec = Object.entries(p.specifications).some(
        ([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q)
      );
      return matchName || matchDesc || matchCat || matchCode || matchFeat || matchSpec;
    });
  }, [query, selectedCategory]);

  // Handle keyboard navigation in result list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredProducts.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredProducts[selectedIndex]) {
        const item = filteredProducts[selectedIndex];
        closeSearch();
        router.push(`/products/${item.categorySlug}/${item.slug}`);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Catalogue Search"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0D1B24]/60 backdrop-blur-[2px] transition-opacity duration-200"
      onClick={closeSearch}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#E2E8F0] shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[82vh] transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 sm:px-6 py-4 border-b border-[#E2E8F0] bg-white">
          <Search className="w-5 h-5 text-[#64748B] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search machines, knives, blankets, or model code..."
            className="w-full text-base sm:text-lg text-[#111827] placeholder:text-[#94A3B8] bg-transparent outline-none font-medium"
          />
          {query ? (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 rounded-md text-[#64748B] hover:text-[#111827] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-mono text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0] rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-x-auto text-xs scrollbar-none">
          <span className="text-[#64748B] font-medium shrink-0 mr-1">Filter:</span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-[#0D1B24] text-white"
                : "bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#111827]"
            }`}
          >
            All Equipment ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? "bg-[#0D1B24] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#111827]"
              }`}
            >
              {cat.name.split(" ")[0]} ({products.filter((p) => p.categorySlug === cat.slug).length})
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-[#F1F5F9]">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-[#111827]">
                No industrial equipment found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Try searching for Polar, Conti-Air, Corner Rounder, Heidelberg, or Seypa
              </p>
            </div>
          ) : (
            filteredProducts.map((product, idx) => {
              const isSelected = idx === selectedIndex;
              const category = categories.find((c) => c.slug === product.categorySlug);

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  onClick={closeSearch}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-[#F1F5F9] text-[#111827]"
                      : "hover:bg-[#F8FAFC] text-[#111827]"
                  }`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white border border-[#E2E8F0] rounded-md overflow-hidden p-1 flex items-center justify-center">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#FA7533] tracking-wider uppercase">
                        {category?.name || product.categorySlug}
                      </span>
                      {product.modelCode && (
                        <span className="text-[10px] font-mono text-[#64748B] bg-white border border-[#E2E8F0] px-1.5 py-0.5 rounded">
                          {product.modelCode}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#111827] truncate mt-0.5">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-1 mt-0.5">
                      {product.shortDescription}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-[#FA7533] translate-x-1"
                        : "text-[#94A3B8]"
                    }`}
                  />
                </Link>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-[#E2E8F0] rounded">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-[#E2E8F0] rounded">
                ↓
              </kbd>
              navigate
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-[#E2E8F0] rounded">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd>
              select
            </span>
          </div>
          <span>
            {filteredProducts.length} of {products.length} products listed
          </span>
        </div>
      </div>
    </div>
  );
}
