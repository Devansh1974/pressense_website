"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  MessageCircle,
  Menu,
  ChevronDown,
} from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { useSearch } from "@/context/SearchContext";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const pathname = usePathname();
  const { openSearch } = useSearch();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] transition-colors">
        {/* Top utility sub-bar */}
        <div className="hidden lg:block bg-[#0D1B24] text-white py-1.5 px-4 sm:px-6 lg:px-8 text-xs border-b border-[#0D1B24]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-slate-300 font-medium">
              <span>Industrial Printing Machinery &amp; Precision Consumables</span>
              <span className="text-slate-500">•</span>
              <span>Direct Factory Supply Since 1983</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-slate-300">Delhi, India</span>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0796CC] hover:text-white font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Direct Sales Desk: +91 98714 95758</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="group flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#0D1B24] flex items-center justify-center font-heading font-black text-white text-base tracking-tighter group-hover:bg-[#0796CC] transition-colors">
                  PS
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#0D1B24] leading-none">
                    PRESS<span className="text-[#0796CC]">SENSE</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B] mt-1">
                    Industrial Catalogue
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/")
                    ? "text-[#0796CC] bg-[#F1F5F9]/70"
                    : "text-[#111827] hover:text-[#0796CC] hover:bg-[#F8FAFC]"
                }`}
              >
                Home
              </Link>

              {/* Products Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
                <Link
                  href="/products"
                  className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive("/products") || megaMenuOpen
                      ? "text-[#0796CC] bg-[#F1F5F9]/70"
                      : "text-[#111827] hover:text-[#0796CC] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? "rotate-180 text-[#0796CC]" : "text-[#64748B]"
                    }`}
                  />
                </Link>
              </div>

              <Link
                href="/industries"
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/industries")
                    ? "text-[#0796CC] bg-[#F1F5F9]/70"
                    : "text-[#111827] hover:text-[#0796CC] hover:bg-[#F8FAFC]"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/about")
                    ? "text-[#0796CC] bg-[#F1F5F9]/70"
                    : "text-[#111827] hover:text-[#0796CC] hover:bg-[#F8FAFC]"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive("/contact")
                    ? "text-[#0796CC] bg-[#F1F5F9]/70"
                    : "text-[#111827] hover:text-[#0796CC] hover:bg-[#F8FAFC]"
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
                <Search className="w-4 h-4 text-[#0796CC]" />
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

        {/* Desktop Mega Menu Dropdown */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
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
