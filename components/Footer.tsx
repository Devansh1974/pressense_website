"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, User, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/company";
import { categories } from "@/data/categories";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 relative z-10">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Mission Column (md:col-span-4 lg:col-span-5) */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-3">
                <Image
                  src="/images/logo/pressense-logo-light.svg"
                  alt="PRESS SENSE | Printing • Packaging • Industrial Solutions"
                  width={240}
                  height={44}
                  unoptimized
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                Precision printing consumables, pre-owned &amp; new offset presses, and in-house blanket baring. Serving printers and converters across India with dedicated engineering support since 2010.
              </p>

              {/* In-House Center & Est Badge */}
              <div className="flex flex-wrap items-center gap-2 mt-4 text-[11px] font-mono text-slate-600">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#FA7533] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Est. 2010 • Delhi HQ
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 shadow-2xs">
                  In-House Blanket Baring Center
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* 2-Column Mobile Navigation & Products Grid (md:col-span-4 lg:col-span-4) */}
          <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Column 1: Product Categories */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FA7533] mb-3">
                Products
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/products/${cat.slug}`}
                      className="hover:text-[#FA7533] hover:underline transition-colors block line-clamp-1 py-0.5"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-1.5">
                  <Link
                    href="/products"
                    className="text-xs font-bold text-[#FA7533] hover:text-[#E05D1C] inline-flex items-center gap-1"
                  >
                    <span>Full Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation & Verticals */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FA7533] mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-[#FA7533] transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[#FA7533] transition-colors block py-0.5">
                    Machinery
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-[#FA7533] transition-colors block py-0.5">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FA7533] transition-colors block py-0.5">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FA7533] transition-colors block py-0.5">
                    Contact Desk
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details Column (md:col-span-4 lg:col-span-3) */}
          <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA7533]">
                  Direct Desk
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Mon – Sat
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#FA7533] shrink-0" />
                  <span className="font-bold text-slate-900">Raj Kumar</span>
                  <span className="text-[10px] text-slate-500 font-mono">Technical Lead</span>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FA7533] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <a
                      href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                      className="font-mono font-semibold text-slate-900 hover:text-[#FA7533] transition-colors"
                    >
                      {companyInfo.displayPhone}
                    </a>
                    <a
                      href={`tel:${companyInfo.displayAltPhone.replace(/\s+/g, "")}`}
                      className="font-mono text-slate-500 hover:text-[#FA7533] transition-colors text-[11px]"
                    >
                      {companyInfo.displayAltPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FA7533] shrink-0" />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-[#FA7533] transition-colors truncate"
                  >
                    {companyInfo.email}
                  </a>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-[#FA7533] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-500 leading-tight">
                    {companyInfo.address.line1}, {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.postalCode}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 text-[10px] text-slate-500 font-mono border-t border-slate-100">
              In-House Baring • Rapid Courier Dispatch Across India
            </div>
          </div>
        </div>
      </div>

      {/* Compact Bottom Bar */}
      <div className="border-t border-slate-200 bg-white py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} PRESS SENSE (Est. 2010). All rights reserved.</p>
          <div className="flex items-center gap-5 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-[#FA7533] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FA7533] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#FA7533] transition-colors">
              Sales Lead Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
