import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/data/industries";

export default function IndustriesSection() {
  return (
    <section className="bg-[#F7F8F7] py-16 lg:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
            Application Sectors
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D171F] tracking-tight mt-1.5">
            Engineered For Diverse Industrial Demands
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2">
            Our machinery, in-house barred blankets, and precision pressroom consumables integrate directly into high-output manufacturing lines across print, packaging, and bookbinding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl overflow-hidden shadow-xs flex flex-col justify-between transition-colors"
            >
              <div>
                {/* 16:9 Image Header */}
                <div className="relative w-full aspect-[16/9] bg-[#F1F5F9] border-b border-[#E2E8F0] p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    width={400}
                    height={225}
                    className="object-contain max-h-full max-w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0D171F]/10" />
                  <span className="absolute bottom-3 left-3 bg-[#0D171F]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                    {ind.name}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-[#0D171F]">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FA7533] mt-0.5">
                    {ind.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-3 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D171F]">
                      Key Solutions Provided:
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {ind.keyEquipment.map((eq, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-[#475569]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#FA7533] shrink-0" />
                          <span className="line-clamp-1">{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/industries#${ind.slug}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#F8FAFC] hover:bg-[#FFF4ED] border border-[#E2E8F0] hover:border-[#FA7533] text-xs font-semibold text-[#0D171F] rounded-lg transition-colors group"
                >
                  <span>Explore Suitable Products</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FA7533] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
