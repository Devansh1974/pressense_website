"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface IntroLoaderProps {
  onComplete?: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING PRESS SENSE SYSTEMS...");
  const [isOpening, setIsOpening] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    // Prevent background scrolling during loader
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = Date.now();
    const duration = 2200; // 2.2 seconds smooth load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(pct);

      if (pct < 30) {
        setStatusText("EST. 2010 • IN-HOUSE BLANKET BARING FACILITY");
      } else if (pct < 65) {
        setStatusText("CONNECTING INDUSTRIAL PRINT & PACKAGING CORE...");
      } else if (pct < 95) {
        setStatusText("CALIBRATING PRECISION TOOLING & SPARES...");
      } else {
        setStatusText("SYSTEMS SYNCHRONIZED • WELCOME TO PRESS SENSE");
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
          }, 900); // 900ms split duration
        }, 300);
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
    }, 400);
  };

  if (isDestroyed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
    >
      {/* Top Half Shutter (Curtain) */}
      <div
        className={`absolute top-0 left-0 right-0 w-full h-[50vh] bg-[#070B0F] border-b border-[#FA7533]/40 flex flex-col justify-end items-center overflow-hidden transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Top ambient orange glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FA7533]/15 blur-[100px] rounded-full pointer-events-none" />

        {/* Top Telemetry Header */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FA7533] animate-ping" />
            <span className="text-[#FA7533] font-bold">PRESS SENSE</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">DELHI, INDIA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-500">HERITAGE: EST. 2010</span>
            <button
              onClick={handleSkip}
              className="text-xs text-slate-400 hover:text-[#FA7533] px-3 py-1 rounded bg-white/5 border border-white/10 hover:border-[#FA7533]/50 transition-colors cursor-pointer"
            >
              Skip Intro [Esc]
            </button>
          </div>
        </div>

        {/* Content in Top Shutter: Logo & Brand Name */}
        <div className="pb-4 sm:pb-6 flex flex-col items-center z-10 px-4 text-center">
          {/* Animated Glowing Official Logo */}
          <div className="relative mb-3 group">
            {/* Ambient Pulsing Glow behind Logo */}
            <div className="absolute inset-0 bg-[#FA7533]/25 blur-3xl rounded-full scale-125 animate-pulse" />
            
            <Image
              src="/images/logo/pressense-logo-dark.svg"
              alt="PRESS SENSE | Printing • Packaging • Industrial Solutions"
              width={420}
              height={78}
              priority
              className="h-14 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_25px_rgba(250,117,51,0.35)]"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Laser Seam (Flashes at split) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FA7533] to-transparent z-20 pointer-events-none transition-opacity duration-300 ${
          isOpening ? "opacity-100 shadow-[0_0_25px_#FA7533]" : "opacity-40"
        }`}
      />

      {/* Bottom Half Shutter (Curtain) */}
      <div
        className={`absolute bottom-0 left-0 right-0 w-full h-[50vh] bg-[#070B0F] border-t border-[#FA7533]/40 flex flex-col justify-start items-center overflow-hidden transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Bottom ambient orange glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FA7533]/15 blur-[100px] rounded-full pointer-events-none" />

        {/* Content in Bottom Shutter: Required Words & Loading Progress */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center z-10 px-4 w-full max-w-xl text-center">
          {/* THE MANDATORY WORDS FROM USER REQUEST */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-wide text-slate-200 shadow-inner">
            <span className="text-[#FA7533] font-bold">Consumables</span>
            <span className="text-[#FA7533]">•</span>
            <span className="text-white">Machinery</span>
            <span className="text-[#FA7533]">•</span>
            <span className="text-slate-300">Pre-Press</span>
            <span className="text-[#FA7533]">•</span>
            <span className="text-slate-300">Post-Press</span>
            <span className="text-[#FA7533]">•</span>
            <span className="text-[#FA7533] font-bold">Service Support</span>
          </div>

          {/* Progress Bar & Numeric Calibration */}
          <div className="w-full max-w-md mt-6 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533] animate-pulse" />
                {statusText}
              </span>
              <span className="font-bold text-[#FA7533]">{progress}%</span>
            </div>

            {/* Glowing Orange Progress Bar */}
            <div className="relative w-full h-1.5 sm:h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#FA7533] via-[#FF8D4D] to-[#FFAA75] rounded-full transition-all duration-75 relative shadow-[0_0_12px_rgba(250,117,51,0.8)]"
                style={{ width: `${progress}%` }}
              >
                {/* Leading spark */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Status Details */}
          <div className="mt-8 flex items-center justify-center gap-6 text-[11px] font-mono text-slate-500">
            <span>BARING FACILITY: READY</span>
            <span>•</span>
            <span>ENGINEER SUPPORT: ACTIVE</span>
            <span>•</span>
            <span>PAN-INDIA DISPATCH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

