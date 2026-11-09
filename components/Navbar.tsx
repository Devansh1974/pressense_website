"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  MessageCircle,
  Menu,
  ChevronDown,
  Phone,
} from "lucide-react";
import MegaMenu from "./MegaMenu";
import IndustriesMegaMenu from "./IndustriesMegaMenu";
import MobileMenu from "./MobileMenu";
import { useSearch } from "@/context/SearchContext";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

export default function Navbar() {
  const pathname = usePathname();
  const { openSearch } = useSearch();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-colors shadow-xs"
        onMouseLeave={() => {
          setMegaMenuOpen(false);
          setIndustriesMenuOpen(false);
        }}
      >
        {/* Top utility sub-bar */}
        <div className="hidden lg:block bg-slate-100/90 text-slate-600 py-1 px-4 sm:px-6 lg:px-8 text-xs border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-slate-600 font-medium font-mono text-[10.5px]">
              <span className="text-[#FA7533] font-bold">PRESS SENSE</span>
              <span className="text-slate-300">•</span>
              <span>Printing • Packaging • Industrial Solutions</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">Est. 2010 • Delhi Facility</span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                className="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors font-mono text-[11px]"
              >
                <Phone className="w-3 h-3 text-[#FA7533]" />
                <span>Raj Kumar: {companyInfo.displayPhone}</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FA7533] hover:text-[#E05D1C] font-semibold flex items-center gap-1 transition-colors text-[11px]"
              >
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-15">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center py-0.5">
                <Image
                  src="/images/logo/pressense-logo-light.svg"
                  alt="PRESS SENSE | Printing • Packaging • Industrial Solutions"
                  width={220}
                  height={38}
                  priority
                  unoptimized
                  className="h-7 sm:h-8.5 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                onMouseEnter={() => {
                  setMegaMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isActive("/")
                    ? "text-[#FA7533] bg-orange-50 border border-orange-200"
                    : "text-slate-700 hover:text-[#FA7533] hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* Products Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setMegaMenuOpen(true);
                  setIndustriesMenuOpen(false);
                }}
              >
                <Link
                  href="/products"
                  className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    isActive("/products") || megaMenuOpen
                      ? "text-[#FA7533] bg-orange-50 border border-orange-200"
                      : "text-slate-700 hover:text-[#FA7533] hover:bg-slate-50"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      megaMenuOpen ? "rotate-180 text-[#FA7533]" : "text-slate-400"
                    }`}
                  />
                </Link>
              </div>

              {/* Industries Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setIndustriesMenuOpen(true);
                  setMegaMenuOpen(false);
                }}
              >
                <Link
                  href="/industries"
                  className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    isActive("/industries") || industriesMenuOpen
                      ? "text-[#FA7533] bg-orange-50 border border-orange-200"
                      : "text-slate-700 hover:text-[#FA7533] hover:bg-slate-50"
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      industriesMenuOpen ? "rotate-180 text-[#FA7533]" : "text-slate-400"
                    }`}
                  />
                </Link>
              </div>

              <Link
                href="/about"
                onMouseEnter={() => {
                  setMegaMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isActive("/about")
                    ? "text-[#FA7533] bg-orange-50 border border-orange-200"
                    : "text-slate-700 hover:text-[#FA7533] hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onMouseEnter={() => {
                  setMegaMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "text-[#FA7533] bg-orange-50 border border-orange-200"
                    : "text-slate-700 hover:text-[#FA7533] hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button
                onClick={openSearch}
                aria-label="Open search catalogue"
                className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-[#FA7533]" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono text-slate-500 bg-white border border-slate-200 rounded">
                  ⌘K
                </kbd>
              </button>

              {/* WhatsApp Lead Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-lg shadow-xs transition-colors shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Products Mega Menu Dropdown */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />

        {/* Desktop Industries Mega Menu Dropdown */}
        <IndustriesMegaMenu
          isOpen={industriesMenuOpen}
          onClose={() => setIndustriesMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={openSearch}
      />
    </>
  );
}
