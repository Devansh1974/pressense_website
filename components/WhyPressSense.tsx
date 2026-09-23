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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0796CC]">
              Operational Advantage
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D1B24] tracking-tight mt-1.5 leading-tight">
              Why Printing &amp; Packaging Leaders Rely on Press Sense
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-4 leading-relaxed">
              In high-speed production environments, machine downtime and incorrect
              blade tolerances lead directly to spoiled paper rolls and missed shipping deadlines.
              Press Sense provides direct technical consultation before you purchase.
            </p>

            <div className="mt-8 p-6 bg-[#F7F8F7] border border-[#E2E8F0] rounded-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0D1B24]">
                Director&apos;s Commitment
              </p>
              <p className="text-sm text-[#475569] italic mt-2 leading-relaxed">
                &ldquo;Our focus since 1983 has been singular: supplying pressrooms and
                binderies with honest technical guidance, authentic consumables, and
                machinery that delivers exact mechanical repeatability day after day.&rdquo;
              </p>
              <p className="text-xs font-semibold text-[#0796CC] mt-3">
                — {companyInfo.director}, Director
              </p>
            </div>
          </div>

          {/* Right Column Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyInfo.whyUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F7F8F7] border border-[#E2E8F0] rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-[#0D1B24] text-white flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0D1B24]">
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
