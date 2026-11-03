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
        className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] transition-colors"
        onMouseLeave={() => {
          setMegaMenuOpen(false);
          setIndustriesMenuOpen(false);
        }}
      >
        {/* Top utility sub-bar */}
        <div className="hidden lg:block bg-[#0D171F] text-white py-1.5 px-4 sm:px-6 lg:px-8 text-xs border-b border-[#1E293B]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <span className="text-[#FA7533] font-bold">PRESS SENSE</span>
              <span className="text-slate-500">•</span>
              <span>Printing • Packaging • Industrial Solutions</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">In-House Blanket Baring &amp; Service Support</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FA7533]" />
                <span>Raj Kumar: {companyInfo.displayPhone} / {companyInfo.displayAltPhone}</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FA7533] hover:text-white font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center py-1">
                <Image
                  src="/images/logo/pressense-logo-light.svg"
                  alt="PRESS SENSE | Printing • Packaging • Industrial Solutions"
                  width={260}
                  height={48}
                  priority
                  unoptimized
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                onMouseEnter={() => {
                  setMegaMenuOpen(false);
                  setIndustriesMenuOpen(false);
                }}
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/")
                    ? "text-[#FA7533] bg-[#FFF4ED]"
                    : "text-[#111827] hover:text-[#FA7533] hover:bg-[#F8FAFC]"
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
                  className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive("/products") || megaMenuOpen
                      ? "text-[#FA7533] bg-[#FFF4ED]"
                      : "text-[#111827] hover:text-[#FA7533] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? "rotate-180 text-[#FA7533]" : "text-[#64748B]"
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
                  className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive("/industries") || industriesMenuOpen
                      ? "text-[#FA7533] bg-[#FFF4ED]"
                      : "text-[#111827] hover:text-[#FA7533] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      industriesMenuOpen ? "rotate-180 text-[#FA7533]" : "text-[#64748B]"
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
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/about")
                    ? "text-[#FA7533] bg-[#FFF4ED]"
                    : "text-[#111827] hover:text-[#FA7533] hover:bg-[#F8FAFC]"
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
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/contact")
                    ? "text-[#FA7533] bg-[#FFF4ED]"
                    : "text-[#111827] hover:text-[#FA7533] hover:bg-[#F8FAFC]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop & Mobile Search Button */}
              <button
                onClick={openSearch}
                aria-label="Open search catalogue"
                className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-[#64748B] hover:text-[#111827] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#FA7533]" />
                <span className="hidden sm:inline">Search Catalogue</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-[#64748B] bg-white border border-[#E2E8F0] rounded">
                  ⌘K
                </kbd>
              </button>

              {/* WhatsApp Lead Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp Us</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-2 text-[#111827] hover:bg-[#F1F5F9] rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
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
