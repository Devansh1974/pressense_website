"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProductGroup {
  title: string;
  categorySlug: string;
  description: string;
  items: { name: string; href: string; badge?: string }[];
}

const productGroups: ProductGroup[] = [
  {
    title: "Packaging Machinery & Consumables",
    categorySlug: "die-making-machines",
    description: "Rigid box, paper bags, die making & matrix",
    items: [
      {
        name: "Rigid Box Making Machines",
        href: "/products/die-making-machines/rigid-box-making-machines",
        badge: "Automated",
      },
      {
        name: "Paper Bag Making Machines",
        href: "/products/die-making-machines/paper-bag-making-machines",
      },
      {
        name: "Press Sense Own-Brand Creasing Matrix",
        href: "/products/die-making-machines/press-sense-creasing-matrix",
        badge: "Popular",
      },
      {
        name: "Paper Corner Rounder & Cutter",
        href: "/products/die-making-machines/paper-corner-rounder-cutter",
      },
      {
        name: "Heavy-Duty Die Making Platens",
        href: "/products/die-making-machines",
      },
    ],
  },
  {
    title: "Pre-Press & Post-Press Finishing",
    categorySlug: "digital-offset-finishing-machines",
    description: "Laminators, scoring, bundling & wrapping",
    items: [
      {
        name: "Pre-Owned Offset Printing Machinery",
        href: "/products/digital-offset-finishing-machines/pre-owned-offset-printing-machines",
        badge: "Heidelberg/Ryobi",
      },
      {
        name: "Thermal, Wet & Dry Laminators",
        href: "/products/digital-offset-finishing-machines/thermal-wet-dry-laminating-machines",
        badge: "High-Yield",
      },
      {
        name: "Motorized Round Corner Cutting",
        href: "/products/digital-offset-finishing-machines/round-corner-cutting-machine",
      },
      {
        name: "Paper Creasing & Perforating Unit",
        href: "/products/digital-offset-finishing-machines/paper-creasing-perforating-machine",
      },
      {
        name: "Automatic Paper Banding & Strapping",
        href: "/products/digital-offset-finishing-machines/automatic-paper-banding-machine",
      },
      {
        name: "Industrial Shrink Wrapping Systems",
        href: "/products/digital-offset-finishing-machines/shrink-wrapping-machine",
      },
    ],
  },
  {
    title: "Printing Consumables & Blankets",
    categorySlug: "offset-consumables-spare-parts",
    description: "In-house barred blankets, DIC inks & chemicals",
    items: [
      {
        name: "In-House Barred Printing Blankets",
        href: "/products/offset-consumables-spare-parts/in-house-barred-printing-blankets",
        badge: "In-House Center",
      },
      {
        name: "DIC Offset Process & Spot Inks",
        href: "/products/offset-consumables-spare-parts/dic-offset-printing-inks",
        badge: "Official DIC",
      },
      {
        name: "Böttcher Pressroom Chemicals & Washes",
        href: "/products/offset-consumables-spare-parts/bottcher-pressroom-chemicals",
      },
      {
        name: "Anti-Marking Films (Japan / China)",
        href: "/products/offset-consumables-spare-parts/anti-marking-films",
      },
      {
        name: "Custom Blanket Barring for Any Press",
        href: "/products/offset-consumables-spare-parts",
      },
    ],
  },
  {
    title: "Paper Cutting Machines & Knives",
    categorySlug: "paper-cutting-knives",
    description: "Guillotines & precision tungsten/HSS knives",
    items: [
      {
        name: "High-Speed Steel Guillotine Knives",
        href: "/products/paper-cutting-knives/standard-hss-guillotine-knives",
        badge: "Polar/Seypa",
      },
      {
        name: "Tungsten Carbide Guillotine Knives",
        href: "/products/paper-cutting-knives/tungsten-carbide-guillotine-knives",
        badge: "Ultra-Durable",
      },
      {
        name: "Three-Knife Trimmer Matched Sets",
        href: "/products/paper-cutting-knives/three-knife-trimmer-sets",
        badge: "Kolbus/Wohlenberg",
      },
      {
        name: "Industrial Guillotine Paper Cutters",
        href: "/products/paper-cutting-knives/automatic-paper-cutting-knife-guillotine",
      },
      {
        name: "Cutting Sticks & Replacement Parts",
        href: "/products/paper-cutting-knives",
      },
    ],
  },
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Products Dropdown Menu"
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-[#080D14]/98 backdrop-blur-2xl border-b border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.85)] z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-1 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30">
              <Sparkles className="w-3 h-3 text-[#FA7533]" />
              Product Directory
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-mono">
              Select any machine or consumable below for direct specifications
            </span>
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA7533] hover:text-[#FF8D4D] group transition-colors"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Grouped Lists - NO BOXES, Clean Cascading Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productGroups.map((group, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx !== productGroups.length - 1 ? "lg:border-r lg:border-slate-800/60 lg:pr-6" : ""
              }`}
            >
              {/* Category Group Header */}
              <div className="mb-3 pb-2 border-b border-slate-800/70">
                <Link
                  href={`/products/${group.categorySlug}`}
                  onClick={onClose}
                  className="group/hdr flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533] shrink-0" />
                  <h4 className="font-heading font-bold text-sm text-white group-hover/hdr:text-[#FA7533] transition-colors leading-tight">
                    {group.title}
                  </h4>
                </Link>
                <p className="text-[11px] text-slate-500 mt-0.5 pl-3.5 line-clamp-1 font-mono">
                  {group.description}
                </p>
              </div>

              {/* Machine Items List */}
              <ul className="space-y-1.5 flex-1">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1 px-2 rounded-md hover:bg-white/5 transition-all text-xs text-slate-300 hover:text-white"
                    >
                      <span className="truncate pr-2 font-medium group-hover/item:text-[#FA7533] group-hover/item:translate-x-0.5 transition-transform">
                        {item.name}
                      </span>
                      {item.badge ? (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 shrink-0">
                          {item.badge}
                        </span>
                      ) : (
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover/item:text-[#FA7533] shrink-0" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* View all in category link */}
              <div className="mt-3 pt-2">
                <Link
                  href={`/products/${group.categorySlug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-[#FA7533] transition-colors"
                >
                  <span>Explore All {group.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Support Bar */}
        <div className="mt-6 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              In-House Blanket Baring Center Active
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Pre-Owned Machine Sourcing</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Pan-India Engineer Support</span>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-white font-bold text-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-transparent" />
            <span>Consult Raj Kumar on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
