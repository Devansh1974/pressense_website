"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronDown,
  ChevronRight,
  Search,
  MessageCircle,
  Phone,
} from "lucide-react";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { getProductCountByCategory } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onOpenSearch,
}: MobileMenuProps) {
  const [productsExpanded, setProductsExpanded] = useState(true);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-black/80 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm h-full bg-white ml-auto flex flex-col border-l border-slate-200 shadow-2xl transition-transform animate-in slide-in-from-right duration-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/images/logo/pressense-logo-light.svg"
              alt="PRESS SENSE"
              width={180}
              height={36}
              unoptimized
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search Button */}
        <div className="p-4 border-b border-slate-100">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-500 hover:text-slate-900 hover:border-[#FA7533] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#FA7533]" />
              Search equipment &amp; parts...
            </span>
            <span className="text-xs bg-white border border-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-500 shadow-2xs">
              Find
            </span>
          </button>
        </div>

        {/* Navigation Links Accordion */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-[#FA7533] transition-colors"
          >
            Home
          </Link>

          {/* Products Accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setProductsExpanded(!productsExpanded)}
              className="w-full flex items-center justify-between py-3 text-base font-semibold text-slate-800"
              aria-expanded={productsExpanded}
            >
              <span>Products &amp; Machinery</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  productsExpanded ? "rotate-180 text-[#FA7533]" : ""
                }`}
              />
            </button>

            {productsExpanded && (
              <div className="pl-3 pb-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link
                  href="/products"
                  onClick={onClose}
                  className="flex items-center justify-between py-2 text-xs font-bold text-[#FA7533] hover:underline"
                >
                  <span>All Products Directory</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                {categories.map((cat) => {
                  const count = getProductCountByCategory(cat.slug);
                  return (
                    <Link
                      key={cat.id}
                      href={`/products/${cat.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between py-2 text-sm text-slate-600 hover:text-[#FA7533] transition-colors"
                    >
                      <span className="line-clamp-1">{cat.name}</span>
                      <span className="text-xs font-mono text-slate-400 ml-2">
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setIndustriesExpanded(!industriesExpanded)}
              className="w-full flex items-center justify-between py-3 text-base font-semibold text-slate-800"
              aria-expanded={industriesExpanded}
            >
              <span>Industry Sectors</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  industriesExpanded ? "rotate-180 text-[#FA7533]" : ""
                }`}
              />
            </button>

            {industriesExpanded && (
              <div className="pl-3 pb-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="flex items-center justify-between py-2 text-xs font-bold text-[#FA7533] hover:underline"
                >
                  <span>All Industries Overview</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                {industries.map((ind) => (
                  <Link
                    key={ind.id}
                    href={`/industries#${ind.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-sm text-slate-600 hover:text-[#FA7533] transition-colors"
                  >
                    <span className="line-clamp-1">{ind.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-[#FA7533] transition-colors"
          >
            About Press Sense
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-base font-semibold text-slate-800 hover:text-[#FA7533] transition-colors"
          >
            Contact &amp; Location
          </Link>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            WhatsApp Consultation
          </a>

          <div className="text-center text-xs text-slate-500">
            <p className="font-semibold text-slate-800">Raj Kumar: {companyInfo.displayPhone}</p>
            <p className="mt-0.5 font-mono text-[11px]">Est. 2010 • Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
