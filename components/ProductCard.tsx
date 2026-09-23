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
    <div className="group flex flex-col bg-white border border-[#E2E8F0] hover:border-[#0796CC] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200">
      {/* 4:3 Image Container with object-fit: contain */}
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="relative w-full aspect-[4/3] bg-[#F7F8F7] border-b border-[#E2E8F0] p-4 sm:p-5 flex items-center justify-center overflow-hidden"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          width={360}
          height={270}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-contain max-h-full max-w-full group-hover:scale-[1.03] transition-transform duration-200"
        />

        {/* Badges / Model Code */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="bg-[#0D1B24] text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {product.modelCode && (
          <span className="absolute bottom-2.5 right-2.5 bg-white/95 border border-[#E2E8F0] text-[#64748B] text-[10px] font-mono px-2 py-0.5 rounded shadow-xs">
            {product.modelCode}
          </span>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-[#0796CC] font-semibold mb-1">
            <span className="uppercase tracking-wider line-clamp-1">
              {category?.name || product.categorySlug}
            </span>
          </div>

          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="block"
          >
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#0D1B24] group-hover:text-[#0796CC] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-[#64748B] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Bar: View Product & WhatsApp Lead */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0D1B24] group-hover:text-[#0796CC] transition-colors"
          >
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <WhatsAppQuickButton product={product} />
        </div>
      </div>
    </div>
  );
}
