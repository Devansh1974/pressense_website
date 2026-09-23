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
          <span className="text-xs font-bold uppercase tracking-widest text-[#0796CC]">
            Direct Sales &amp; Consultation Desk
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0D1B24] tracking-tight mt-1.5">
            Contact Press Sense
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl leading-relaxed">
            Reach out to our equipment specialists for technical recommendations,
            custom blade sizes, blanket barring requests, or formal quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="bg-[#0D1B24] text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0796CC]">
                Primary Lead Channel
              </span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1">
                WhatsApp Direct Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Send photos of your current blade, cylinder serial numbers, or
                specs for immediate identification and quote.
              </p>

              <div className="mt-6">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-heading font-bold text-lg text-[#0D1B24] pb-3 border-b border-[#E2E8F0]">
                Headquarters &amp; Distribution
              </h3>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <MapPin className="w-5 h-5 text-[#0796CC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D1B24] block">Press Sense (Sole Proprietorship)</strong>
                  <span>{companyInfo.address.line1}</span>
                  <br />
                  <span>
                    {companyInfo.address.city}, {companyInfo.address.state}{" "}
                    {companyInfo.address.postalCode}
                  </span>
                  <br />
                  <span className="text-xs text-[#64748B]">Established in Delhi, 1983</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <Phone className="w-5 h-5 text-[#0796CC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D1B24] block">Telephone Desk</strong>
                  <a
                    href={`tel:${companyInfo.whatsappNumber}`}
                    className="hover:text-[#0796CC] transition-colors"
                  >
                    {companyInfo.displayPhone}
                  </a>
                  <br />
                  <span className="text-xs text-[#64748B]">
                    Landline: {companyInfo.displayAltPhone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <Mail className="w-5 h-5 text-[#0796CC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D1B24] block">Email Inquiries</strong>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-[#0796CC] transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                  <br />
                  <span className="text-xs text-[#64748B]">{companyInfo.supportEmail}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#475569]">
                <Clock className="w-5 h-5 text-[#0796CC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D1B24] block">Business Hours</strong>
                  <span>{companyInfo.operatingHours}</span>
                  <p className="text-xs text-[#64748B] mt-0.5">Closed on Sundays &amp; Public Holidays</p>
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
