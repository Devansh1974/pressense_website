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
      className="group flex flex-col bg-white border border-[#E2E8F0] hover:border-[#0796CC] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
    >
      {/* 4:3 Image Container with object-fit: contain */}
      <div className="relative w-full aspect-[4/3] bg-[#F7F8F7] border-b border-[#E2E8F0] p-6 flex items-center justify-center overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          width={400}
          height={300}
          className="object-contain max-h-full max-w-full group-hover:scale-[1.03] transition-transform duration-200"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/95 border border-[#E2E8F0] px-2.5 py-1 rounded text-xs font-mono font-semibold text-[#0D1B24] shadow-xs">
          {count} {count === 1 ? "Product" : "Products"}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg text-[#0D1B24] group-hover:text-[#0796CC] transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
            {category.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0796CC]">
          <span>View Products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
