import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries & Applications | Press Sense",
  description:
    "Explore industrial machinery and precision printing consumables engineered for commercial printing, packaging, publishing, and print finishing sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#F7F8F7] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industries & Applications" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0796CC]">
            Industrial Sectors
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0D1B24] tracking-tight mt-1.5">
            Industries &amp; Applications
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl leading-relaxed">
            Our equipment, finishing machinery, and pressroom consumables are deployed
            in high-demand production facilities across India. Discover how our
            catalogue integrates with your specific manufacturing workflow.
          </p>
        </div>

        {/* Industries Detailed Cards */}
        <div className="space-y-8 mb-16">
          {industries.map((ind, idx) => (
            <div
              key={ind.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* 4:3 Contained Image on the left/right */}
                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] bg-[#F7F8F7] border border-[#E2E8F0] rounded-xl p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0796CC]">
                    0{idx + 1} • {ind.tagline}
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0D1B24] tracking-tight mt-1.5">
                    {ind.name}
                  </h2>
                  <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D1B24] mb-3">
                      Recommended Equipment &amp; Tooling:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ind.keyEquipment.map((eq, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#111827] font-medium"
                        >
                          <Check className="w-4 h-4 text-[#0796CC] shrink-0" />
                          <span className="truncate">{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B24] hover:bg-[#0796CC] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors group"
                    >
                      <span>Explore Equipment</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <WhatsAppCTA />
      </div>
    </div>
  );
}
