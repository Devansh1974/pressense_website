"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface IntroLoaderProps {
  onComplete?: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading Press Sense Solutions...");
  const [isOpening, setIsOpening] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    // Prevent background scrolling during loader
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = Date.now();
    const duration = 2000; // 2 seconds clean load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(pct);

      if (pct < 30) {
        setStatusText("Est. 2010 • In-House Blanket Baring Center");
      } else if (pct < 65) {
        setStatusText("Printing & Packaging Industrial Machinery");
      } else if (pct < 95) {
        setStatusText("Precision Consumables & Dedicated Service");
      } else {
        setStatusText("Welcome to Press Sense");
      }

      if (pct >= 100) {
        clearInterval(interval);
        // Trigger vertical split animation
        setTimeout(() => {
          setIsOpening(true);
          // Complete and unmount after vertical split finishes
          setTimeout(() => {
            setIsDestroyed(true);
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 800);
        }, 250);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsDestroyed(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 350);
  };

  if (isDestroyed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
    >
      {/* Top Half Shutter (Clean White / Light Surface) */}
      <div
        className={`absolute top-0 left-0 right-0 w-full h-[50vh] bg-white border-b border-orange-200/80 flex flex-col justify-end items-center overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] shadow-sm ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Subtle warm orange top glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-orange-100/50 blur-[90px] rounded-full pointer-events-none" />

        {/* Top Header Row */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FA7533] animate-pulse" />
            <span className="text-slate-900 font-bold tracking-wide">PRESS SENSE</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-600 hidden sm:inline">Delhi Facility</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-400 font-mono text-[11px]">Est. 2010</span>
            <button
              onClick={handleSkip}
              className="text-xs text-slate-600 hover:text-[#FA7533] px-3 py-1 rounded-full bg-slate-100 hover:bg-orange-50 border border-slate-200 transition-colors cursor-pointer font-medium"
            >
              Skip [Esc]
            </button>
          </div>
        </div>

        {/* Logo Presentation in Top Shutter */}
        <div className="pb-4 sm:pb-6 flex flex-col items-center z-10 px-4 text-center">
          <div className="relative mb-2">
            <div className="absolute inset-0 bg-orange-200/30 blur-2xl rounded-full scale-125" />
            <Image
              src="/images/logo/pressense-logo-light.svg"
              alt="PRESS SENSE | Printing • Packaging • Industrial Solutions"
              width={420}
              height={78}
              priority
              className="h-14 sm:h-20 lg:h-24 w-auto object-contain relative z-10 drop-shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Seam */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FA7533] to-transparent z-20 pointer-events-none transition-opacity duration-300 ${
          isOpening ? "opacity-100 shadow-[0_0_15px_#FA7533]" : "opacity-60"
        }`}
      />

      {/* Bottom Half Shutter (Clean White / Light Surface) */}
      <div
        className={`absolute bottom-0 left-0 right-0 w-full h-[50vh] bg-white border-t border-orange-200/80 flex flex-col justify-start items-center overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] shadow-sm ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Subtle warm orange bottom glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-orange-100/50 blur-[90px] rounded-full pointer-events-none" />

        {/* Content in Bottom Shutter: Mandatory Words & Clean Progress Bar */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center z-10 px-4 w-full max-w-xl text-center">
          {/* THE MANDATORY WORDS FROM USER REQUEST */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 rounded-full bg-orange-50/80 border border-orange-200 text-xs sm:text-sm font-semibold tracking-wide text-slate-800 shadow-2xs">
            <span className="text-[#FA7533] font-bold">Consumables</span>
            <span className="text-orange-300">•</span>
            <span className="text-slate-800">Machinery</span>
            <span className="text-orange-300">•</span>
            <span className="text-slate-700">Pre-Press</span>
            <span className="text-orange-300">•</span>
            <span className="text-slate-700">Post-Press</span>
            <span className="text-orange-300">•</span>
            <span className="text-[#FA7533] font-bold">Service Support</span>
          </div>

          {/* Clean Progress Bar & Percentage */}
          <div className="w-full max-w-md mt-6 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533] animate-pulse" />
                {statusText}
              </span>
              <span className="font-bold font-mono text-[#FA7533]">{progress}%</span>
            </div>

            {/* Clean Light Progress Bar with Orange Fill */}
            <div className="relative w-full h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-[#FA7533] to-[#FF8D4D] rounded-full transition-all duration-75 relative shadow-xs"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <span>In-House Baring Facility</span>
            <span>•</span>
            <span>Engineer Support</span>
            <span>•</span>
            <span>Pan-India Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
