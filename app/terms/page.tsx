import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Press Sense",
  description: "Terms and conditions of catalogue usage and commercial quotations.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 my-6 shadow-xs space-y-6 text-sm text-slate-600 leading-relaxed">
          <h1 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-400">Last updated: {new Date().getFullYear()}</p>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              1. Catalogue Purpose
            </h2>
            <p>
              The information, technical specifications, dimensions, and photographs
              contained on this website are provided for commercial discovery and product
              specification reference. Press Sense reserves the right to modify technical
              specifications without prior notice as manufacturing improvements occur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              2. Quotations &amp; Commercial Terms
            </h2>
            <p>
              No binding agreement or commercial contract is formed merely by viewing this
              catalogue or requesting product details. Official quotations transmitted via
              WhatsApp or formal proforma invoice specify freight, GST/taxation, delivery
              lead time, and payment terms agreed upon between buyer and seller.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              3. Compatibility &amp; Fitment
            </h2>
            <p>
              While our knives, blankets, and spare parts are engineered to match Polar,
              Seypa, Kolbus, Heidelberg, Komori, and Mitsubishi equipment specifications,
              buyers are advised to verify machine serial numbers, hole patterns, and cylinder
              gauges prior to final purchase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
