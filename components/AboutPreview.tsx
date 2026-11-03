import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Award, UserCheck } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutPreview() {
  return (
    <section className="bg-[#F7F8F7] py-16 lg:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden p-6 shadow-sm flex items-center justify-center">
              <Image
                src="/images/products/kba-rapida-162a-6.jpg"
                alt="Press Sense industrial printing press solutions"
                width={600}
                height={450}
                className="object-contain max-h-full max-w-full"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D171F]/90 text-white p-4 rounded-xl backdrop-blur-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-slate-300">Operations Base</p>
                  <p className="text-sm font-semibold">Delhi • In-House Baring Center</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-slate-300">Heritage</p>
                  <p className="text-sm font-semibold text-[#FA7533]">Est. 1983</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (6 cols) */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
              About Press Sense
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D171F] tracking-tight mt-1.5 leading-tight">
              A Four-Decade Tradition of Printing &amp; Packaging Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-4 leading-relaxed">
              Press Sense provides printing and packaging solutions to printers, publishers,
              converters and packaging companies. Our focus is to supply reliable consumables,
              quality machinery and practical solutions based on each customer&apos;s production
              requirements and budget.
            </p>
            <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
              From our dedicated In-House Blanket Baring Facility to sourcing new and pre-owned
              printing machinery (Heidelberg, Mitsubishi, Ryobi, Sakurai), DIC printing inks, and
              Böttcher pressroom chemicals, our in-house engineers provide reliable technical
              support throughout the working life of the equipment.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[#FA7533]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#64748B]">Established</p>
                  <p className="text-sm font-bold text-[#0D171F]">1983 (40+ Years)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[#FA7533]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#64748B]">Leadership</p>
                  <p className="text-sm font-bold text-[#0D171F]">Raj Kumar</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D171F] hover:bg-[#FA7533] text-white text-sm font-semibold rounded-lg transition-colors group cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
