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
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D1B24]/90 text-white p-4 rounded-xl backdrop-blur-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-slate-300">Headquarters</p>
                  <p className="text-sm font-semibold">Daryaganj, New Delhi, India</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-slate-300">Legacy</p>
                  <p className="text-sm font-semibold text-[#0796CC]">Est. 1983</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (6 cols) */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0796CC]">
              About Press Sense
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0D1B24] tracking-tight mt-1.5 leading-tight">
              A Four-Decade Tradition of Printing Engineering Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-4 leading-relaxed">
              Founded in 1983 in Delhi, India, Press Sense specializes in the wholesale
              distribution, trading, and precision supply of printing and coating blankets,
              die making machinery, digital-offset finishing units, and heavy-duty paper
              cutting knives.
            </p>
            <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
              All our equipment and consumable offerings are produced exclusively by reliable
              manufacturing partners who understand the demanding tolerances of high-speed
              commercial pressrooms and publishing houses.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0796CC]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#64748B]">Founded</p>
                  <p className="text-sm font-bold text-[#0D1B24]">1983 (40+ Years)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0796CC]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#64748B]">Leadership</p>
                  <p className="text-sm font-bold text-[#0D1B24]">K. J. Paul, Director</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D1B24] hover:bg-[#0796CC] text-white text-sm font-semibold rounded-lg transition-colors group"
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
