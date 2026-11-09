"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";
import { categories } from "@/data/categories";
import { WhatsAppQuickButton } from "./WhatsAppButtons";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const category = categories.find((c) => c.slug === product.categorySlug);

  return (
    <div className="group flex flex-col bg-white border border-slate-200 hover:border-[#FA7533] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-slate-900">
      {/* 4:3 Image Container with clean light background */}
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 p-3 sm:p-4 flex items-center justify-center overflow-hidden"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          width={340}
          height={255}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges / Model Code */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="bg-[#FA7533] text-white text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {product.modelCode && (
          <span className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-xs border border-slate-200 text-slate-700 text-[9px] sm:text-[10px] font-mono font-semibold px-2 py-0.5 rounded shadow-2xs">
            {product.modelCode}
          </span>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#FA7533] font-mono font-semibold mb-1">
            <span className="uppercase tracking-wider line-clamp-1">
              {category?.name || product.categorySlug}
            </span>
          </div>

          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="block"
          >
            <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#FA7533] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Bar: View Product & WhatsApp Lead */}
        <div className="mt-3.5 pt-3 sm:mt-4 sm:pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#FA7533] transition-colors"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <WhatsAppQuickButton product={product} />
        </div>
      </div>
    </div>
  );
}
