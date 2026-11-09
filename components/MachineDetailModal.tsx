"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

export interface HeroMachineDetail {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  productSlug?: string;
  image: string;
  description: string;
  badge: string;
  specs: Record<string, string>;
  features: string[];
  applications: string[];
  modelCode?: string;
  href: string;
}

interface MachineDetailModalProps {
  machine: HeroMachineDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MachineDetailModal({
  machine,
  isOpen,
  onClose,
}: MachineDetailModalProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !machine) return null;

  const whatsappUrl = getProductWhatsAppUrl(
    machine.name,
    machine.modelCode
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-slate-50 text-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FA7533] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#FA7533] font-bold">
              {machine.category}
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-xs text-slate-500 hidden sm:inline font-mono">
              Est. 2010 • Delhi Facility
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close machine details modal"
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Hero Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Image Box */}
            <div className="md:col-span-5">
              <div className="relative w-full aspect-[4/3] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden p-4 flex items-center justify-center shadow-2xs group">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[#FA7533] text-white px-2.5 py-0.5 rounded shadow-xs">
                  {machine.badge}
                </span>
                {machine.modelCode && (
                  <span className="absolute bottom-3 right-3 text-[11px] font-mono bg-white/95 border border-slate-200 text-slate-700 px-2 py-0.5 rounded shadow-2xs font-semibold">
                    {machine.modelCode}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Core Copy */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA7533]">
                {machine.subtitle}
              </span>
              <h2
                id="modal-title"
                className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1 leading-tight"
              >
                {machine.name}
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {machine.description}
              </p>

              {/* Service & Guarantee Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
                <span className="inline-flex items-center gap-1.5 bg-orange-50 text-[#FA7533] px-2.5 py-1 rounded-md font-semibold border border-orange-200">
                  <Wrench className="w-3.5 h-3.5" />
                  In-House Engineer Support
                </span>
                <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Pre-Dispatch Quality Inspection
                </span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FA7533]" />
              Engineering Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(machine.specs).map(([key, val], idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 text-xs shadow-2xs"
                >
                  <span className="text-slate-500 font-medium">{key}</span>
                  <span className="font-bold text-slate-900 text-right font-mono ml-2">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages & Applications Dual Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Features */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FA7533] mb-3">
                Key Performance Features
              </h4>
              <ul className="space-y-2">
                {machine.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FA7533] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Production Applications
              </h4>
              <ul className="space-y-2">
                {machine.applications.map((app, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533] shrink-0 mt-1.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Phone className="w-3.5 h-3.5 text-[#FA7533]" />
            <span>Direct consultation with Raj Kumar: <strong className="text-slate-900 font-mono">{companyInfo.displayPhone}</strong></span>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href={machine.href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors shadow-2xs"
            >
              <span>View Product Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
