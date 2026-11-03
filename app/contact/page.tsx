import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactFormClient from "@/components/ContactFormClient";
import { companyInfo } from "@/data/company";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us | Press Sense",
  description:
    "Direct contact details and sales desk for Press Sense in Delhi, India. Inquire about printing machinery, cutting knives, and offset consumables.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F7F8F7] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
            Direct Sales &amp; Technical Consultation Desk
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0D171F] tracking-tight mt-1.5">
            Contact Press Sense
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl leading-relaxed">
            Reach out directly to Raj Kumar for in-house barred printing blankets, DIC inks,
            Böttcher press chemicals, creasing matrix, thermal laminating machinery, or pre-owned offset presses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="bg-[#0D171F] text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA7533]">
                Primary Consultation Desk
              </span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1">
                WhatsApp Direct Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Send photos of your current blanket cylinders, knife bars, or machinery specifications
                directly for immediate assistance and quotation.
              </p>

              <div className="mt-6">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                  <span>Start WhatsApp with Raj Kumar</span>
                </a>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-heading font-bold text-lg text-[#0D171F] pb-3 border-b border-[#E2E8F0]">
                Contact &amp; Facility Details
              </h3>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <Phone className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D171F] block">Raj Kumar (Key Contact)</strong>
                  <a
                    href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#FA7533] transition-colors font-medium text-[#111827]"
                  >
                    {companyInfo.displayPhone}
                  </a>
                  <br />
                  <a
                    href={`tel:${companyInfo.displayAltPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#FA7533] transition-colors text-slate-500 text-xs"
                  >
                    Alt Mobile: {companyInfo.displayAltPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <Mail className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D171F] block">Official Email</strong>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-[#FA7533] transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <MapPin className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D171F] block">Headquarters &amp; Blanket Baring Facility</strong>
                  <span>{companyInfo.address.line1}</span>
                  <br />
                  <span>
                    {companyInfo.address.city}, {companyInfo.address.state}{" "}
                    {companyInfo.address.postalCode}
                  </span>
                  <br />
                  <span className="text-xs text-[#64748B]">Established 1983 • Delhi, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <Clock className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D171F] block">Working Hours</strong>
                  <span>{companyInfo.operatingHours}</span>
                  <p className="text-xs text-[#64748B] mt-0.5">Emergency breakdown support available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>
        </div>
      </div>
    </div>
  );
}
