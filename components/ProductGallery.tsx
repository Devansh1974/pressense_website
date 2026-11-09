"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, nextImage, prevImage]);

  // Lock scroll in fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const activeImage = images[activeIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Display with 4:3 Aspect Ratio Container */}
      <div className="relative w-full aspect-[4/3] bg-[#0D1520] border border-slate-800 rounded-xl p-4 sm:p-8 flex items-center justify-center overflow-hidden shadow-xl">
        <Image
          src={activeImage}
          alt={`${productName} view ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-contain p-2 transition-all duration-200"
        />

        {/* Fullscreen Expand Trigger Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          aria-label="Expand image fullscreen"
          className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-[#FA7533] border border-slate-700 text-slate-300 hover:text-white rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Prev / Next Arrows if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous product image"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-[#FA7533] border border-slate-700 text-slate-300 hover:text-white rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next product image"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-[#FA7533] border border-slate-700 text-slate-300 hover:text-white rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        <div className="absolute bottom-3 left-3 bg-black/75 border border-white/10 text-white text-[11px] font-mono px-2 py-0.5 rounded">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden border-2 bg-[#0D1520] p-1 shrink-0 transition-all cursor-pointer ${
                idx === activeIndex
                  ? "border-[#FA7533] ring-2 ring-[#FA7533]/30"
                  : "border-slate-800 hover:border-slate-600"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="96px"
                loading="lazy"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal Viewer */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen Product Viewer"
          className="fixed inset-0 z-[110] bg-[#070B10]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Top control bar */}
          <div className="w-full max-w-5xl flex items-center justify-between pb-4 text-white">
            <span className="text-sm font-semibold truncate pr-4">
              {productName} — View {activeIndex + 1} of {images.length}
            </span>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close fullscreen view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Fullscreen Image Area */}
          <div
            className="relative w-full max-w-5xl flex-1 max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt={productName}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
