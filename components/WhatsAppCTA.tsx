"use client";

import React from "react";
import { MessageCircle, PhoneCall, Clock } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

export default function WhatsAppCTA() {
  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-14 border-b border-slate-200 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-orange-100/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-50/70 via-white to-amber-50/30 border border-orange-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-slate-900 relative overflow-hidden shadow-xs">
          {/* Subtle top line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] via-[#FA7533] to-[#25D366]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[#FA7533] mb-3 border border-orange-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Direct Engineering Desk Active • Est. 2010</span>
              </div>

              <h2 className="font-heading font-black text-xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
                Need Technical Guidance or Machine Availability?
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-2xl leading-relaxed">
                Connect directly with Raj Kumar on WhatsApp or phone. Inquire about in-house barred blankets, DIC inks, Böttcher pressroom chemicals, thermal laminating units, rigid box &amp; bag machines, or pre-owned offset presses.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-[11px] sm:text-xs text-slate-600 font-mono">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#FA7533]" />
                  <span>Raj Kumar: {companyInfo.displayPhone}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FA7533]" />
                  <span>{companyInfo.operatingHours}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${companyInfo.displayPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 transition-colors shadow-xs cursor-pointer"
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
