"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedCarousel() {
  const featured = getFeaturedProducts();

  // Embla setup with autoplay (pause on hover enabled by default)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-[#090E15] py-8 sm:py-12 lg:py-14 border-b border-slate-800 overflow-hidden text-white">
      {/* Subtle industrial grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#FA7533]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Equipment &amp; Consumables</span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              Production Machinery &amp; Pressroom Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl leading-relaxed">
              High-demand equipment engineered for precision, speed, and continuous industrial production.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FA7533] hover:text-[#FF8D4D] mr-2 sm:mr-3 transition-colors"
            >
              <span>All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={scrollPrev}
              aria-label="Previous featured machine"
              className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-800 bg-[#0E1522] hover:bg-[#FA7533] hover:border-[#FA7533] text-white transition-colors shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next featured machine"
              className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-800 bg-[#0E1522] hover:bg-[#FA7533] hover:border-[#FA7533] text-white transition-colors shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {featured.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_82%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots pagination */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Jump to slide ${index + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === selectedIndex
                  ? "w-6 sm:w-8 bg-[#FA7533] shadow-[0_0_10px_#FA7533]"
                  : "w-1.5 sm:w-2 bg-slate-800 hover:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
