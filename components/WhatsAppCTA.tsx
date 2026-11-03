import React from "react";
import { MessageCircle, ArrowRight, PhoneCall, Clock } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

export default function WhatsAppCTA() {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D171F] rounded-2xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl">
          {/* Subtle accent border line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FA7533]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#FA7533] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Direct Consultation Desk Active</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Need Technical Guidance or Machine Availability?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl leading-relaxed">
                Connect directly with Raj Kumar on WhatsApp or phone. Inquire about in-house barred
                blankets, DIC inks, Böttcher pressroom chemicals, thermal laminating units,
                rigid box &amp; paper bag machinery, or pre-owned offset presses.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-[#FA7533]" />
                  <span>Raj Kumar: {companyInfo.displayPhone} / {companyInfo.displayAltPhone}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FA7533]" />
                  <span>{companyInfo.operatingHours}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-bold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <span>Call Sales Desk Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
