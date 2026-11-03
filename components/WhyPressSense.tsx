import React from "react";
import { companyInfo } from "@/data/company";
import { CheckCircle2, Shield, Cog, HeadphonesIcon, HelpCircle } from "lucide-react";

export default function WhyPressSense() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
              Operational Advantage
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D171F] tracking-tight mt-1.5 leading-tight">
              Why Printing &amp; Packaging Leaders Rely on Press Sense
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-4 leading-relaxed">
              Press Sense provides printing and packaging solutions to printers, publishers,
              converters, and packaging companies. Our focus is to supply reliable consumables,
              quality machinery, and practical solutions based on each customer&apos;s production
              requirements and budget.
            </p>

            <div className="mt-8 p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0D171F]">
                Leadership Commitment
              </p>
              <p className="text-sm text-[#475569] italic mt-2 leading-relaxed">
                &ldquo;Our relationship with customers continues beyond the sale. From in-house blanket baring
                and genuine DIC inks to new and pre-owned offset machines, our in-house engineers provide practical
                support throughout the working life of the equipment.&rdquo;
              </p>
              <p className="text-xs font-semibold text-[#FA7533] mt-3">
                — {companyInfo.contactPerson}, Press Sense
              </p>
            </div>
          </div>

          {/* Right Column Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyInfo.whyUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-[#0D171F] group-hover:bg-[#FA7533] text-white flex items-center justify-center font-bold text-xs mb-4 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0D171F] group-hover:text-[#FA7533] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
