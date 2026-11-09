import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles } from "lucide-react";
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
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-orange-50 text-[#FA7533] border border-orange-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Sales &amp; Technical Consultation Desk</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mt-1.5">
            Contact Press Sense
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Reach out directly to Raj Kumar for in-house barred printing blankets, DIC inks,
            Böttcher press chemicals, creasing matrix, thermal laminating machinery, or pre-owned offset presses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="bg-white border border-slate-200 text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] via-[#FA7533] to-[#25D366]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FA7533]">
                Primary Consultation Desk
              </span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                WhatsApp Direct Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Send photos of your current blanket cylinders, knife bars, or machinery specifications
                directly for immediate assistance and quotation.
              </p>

              <div className="mt-6">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                  <span>Start WhatsApp with Raj Kumar</span>
                </a>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 text-slate-900">
              <h3 className="font-heading font-bold text-lg text-slate-900 pb-3 border-b border-slate-100">
                Contact &amp; Facility Details
              </h3>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Phone className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">Raj Kumar (Key Contact)</strong>
                  <a
                    href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#FA7533] transition-colors font-mono font-medium text-slate-800"
                  >
                    {companyInfo.displayPhone}
                  </a>
                  <br />
                  <a
                    href={`tel:${companyInfo.displayAltPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#FA7533] transition-colors text-slate-500 text-xs font-mono"
                  >
                    Alt Mobile: {companyInfo.displayAltPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">Official Email</strong>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-[#FA7533] transition-colors font-mono text-slate-800"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">Headquarters &amp; Blanket Baring Facility</strong>
                  <span>{companyInfo.address.line1}</span>
                  <br />
                  <span>
                    {companyInfo.address.city}, {companyInfo.address.state}{" "}
                    {companyInfo.address.postalCode}
                  </span>
                  <br />
                  <span className="text-xs text-slate-500 font-mono">Established 2010 • Delhi, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Clock className="w-5 h-5 text-[#FA7533] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">Working Hours</strong>
                  <span>{companyInfo.operatingHours}</span>
                  <p className="text-xs text-slate-500 mt-0.5">Emergency breakdown support available</p>
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
