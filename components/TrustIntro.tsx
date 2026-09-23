import React from "react";
import { CheckCircle2, ShieldCheck, Wrench, Headphones, Compass, Award } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function TrustIntro() {
  const pillars = [
    {
      icon: Award,
      title: "Established 1983",
      description: "Founded in Delhi, India, providing over four decades of trusted industrial machinery and consumable distribution.",
    },
    {
      icon: Wrench,
      title: "Technical Consultation",
      description: "Direct engineering advice matching machinery specs and blade metallurgy to your specific paper stock and runs.",
    },
    {
      icon: ShieldCheck,
      title: "Genuine Tooling & Consumables",
      description: "Authentic Conti-Air blankets, Polar and Seypa knife bars, and Saphira coatings engineered for high mechanical uptime.",
    },
    {
      icon: Headphones,
      title: "Direct WhatsApp Response",
      description: "Fast, human communication directly with knowledgeable equipment advisors without automated call centers.",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E2E8F0] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0796CC]">
            Press Sense Heritage
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D1B24] tracking-tight mt-2">
            Engineering Precision For Commercial Pressrooms
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
            We partner with packaging houses, bookbinders, and commercial printers
            to deliver industrial-grade machinery and consumables that stand up to
            demanding multi-shift operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#F7F8F7] border border-[#E2E8F0] rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0796CC] mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0D1B24]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
