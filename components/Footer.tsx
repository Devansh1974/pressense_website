import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, User } from "lucide-react";
import { companyInfo } from "@/data/company";
import { categories } from "@/data/categories";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#0D171F] text-white border-t border-slate-800">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo/pressense-logo-dark.svg"
                alt="PRESS SENSE | Printing • Packaging • Industrial Solutions"
                width={260}
                height={48}
                unoptimized
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Press Sense provides printing and packaging solutions to printers,
              publishers, converters and packaging companies. Our focus is to supply
              reliable consumables, quality machinery, in-house blanket baring, and
              practical solutions backed by dedicated engineering support.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Direct WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Product Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FA7533] mb-4">
              Product Catalogue
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-[#FA7533] hover:text-white inline-flex items-center gap-1"
                >
                  <span>All Products &amp; Machinery</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Industries (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FA7533] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FA7533] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-[#FA7533] shrink-0" />
                <span className="font-semibold text-white">Raj Kumar</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FA7533] shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {companyInfo.displayPhone}
                  </a>
                  <a
                    href={`tel:${companyInfo.displayAltPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors text-slate-400"
                  >
                    {companyInfo.displayAltPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FA7533] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#FA7533] shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address.line1}, {companyInfo.address.city},{" "}
                  {companyInfo.address.state} {companyInfo.address.postalCode},{" "}
                  {companyInfo.address.country}
                </span>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                <p>Hours: {companyInfo.operatingHours}</p>
                <p className="mt-1 text-slate-500">In-House Baring Facility • Established 1983</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#070E14] py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PRESS SENSE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Sales Lead Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
