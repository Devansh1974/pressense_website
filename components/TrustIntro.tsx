import React from "react";
import { CheckCircle2, ShieldCheck, Wrench, Headphones, Compass, Award } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function TrustIntro() {
  const pillars = [
    {
      icon: Award,
      title: "In-House Blanket Baring",
      description: "Our dedicated baring facility allows us to prepare and finish blankets according to customer requirements with tight control over accuracy and turnaround.",
    },
    {
      icon: Wrench,
      title: "Application-Led Sourcing",
      description: "New and pre-owned printing machinery sourced from international markets, including Heidelberg, Mitsubishi, Ryobi, Sakurai, rigid box and paper bag units.",
    },
    {
      icon: ShieldCheck,
      title: "DIC & Böttcher Consumables",
      description: "Authentic DIC inks, Böttcher pressroom chemicals, Japan/China anti-marking films, and our own-brand creasing matrix with strong market acceptance.",
    },
    {
      icon: Headphones,
      title: "In-House Service Engineer",
      description: "Direct relationship beyond the sale: ongoing machine servicing, troubleshooting, and spare parts supply across India.",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E2E8F0] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
            PRESS SENSE | PRINTING • PACKAGING • INDUSTRIAL SOLUTIONS
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D171F] tracking-tight mt-2">
            Your Dedicated Partner In Printing &amp; Packaging
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
            Press Sense provides printing and packaging solutions to printers, publishers,
            converters, and packaging companies based on each customer&apos;s production requirements and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] group-hover:border-[#FA7533]/40 flex items-center justify-center text-[#FA7533] mb-4 shadow-xs transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0D171F] group-hover:text-[#FA7533] transition-colors">
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
