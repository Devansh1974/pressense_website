import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, MapPin, UserCheck, ShieldCheck, Award, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Press Sense",
  description:
    "Founded in 1983 in Delhi, India, Press Sense specializes in wholesale distribution of printing and coating blankets, die making machines, and precision paper cutting knives.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F8F7] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Press Sense" }]} />

        {/* Hero Section */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-12 my-6 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0796CC]">
              Four Decades in Industrial Supply
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#0D1B24] tracking-tight mt-2">
              Engineering Heritage Since 1983
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed">
              Founded in Delhi, India, Press Sense operates as an established supplier
              and distributor to the printing, publishing, and paper packaging industries
              across India.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[#E2E8F0]">
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#0796CC]">
                1983
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Year Established
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#0D1B24]">
                Delhi, IN
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Headquarters
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#0796CC]">
                4 Divisions
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Machinery &amp; Consumables
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#0D1B24]">
                Direct
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Technical Consultation
              </p>
            </div>
          </div>
        </div>

        {/* Company Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-12">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#475569] leading-relaxed">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0D1B24] tracking-tight">
              Specialized Industrial Trading &amp; Technical Support
            </h2>
            <p>
              We specialize in the wholesale distribution, trading, and precision supply
              of diverse products including Printing &amp; Coating Blankets, Paper Cutting
              Sticks &amp; Spare Parts, and high-tolerance Paper Cutting Knives.
            </p>
            <p>
              All our equipment and consumable offerings are produced exclusively by
              reliable, vetted manufacturers who consider our customers&apos; exacting
              substrate tolerances, machine run speeds, and mechanical specifications.
            </p>
            <p>
              Under the direct leadership of Director <strong>{companyInfo.director}</strong>,
              Press Sense has attained a commendable position in the market, attributed to
              our consistent focus on product authenticity, responsive communication, and
              commitment to fair trade practices.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex items-center justify-center overflow-hidden">
              <Image
                src="/images/products/man-roland-cromoman.jpg"
                alt="Press Sense industrial engineering press unit"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 my-12 shadow-xs">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#0D1B24] mb-6">
            Our Business Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
              <ShieldCheck className="w-6 h-6 text-[#0796CC] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D1B24]">
                Authentic Metallurgy &amp; Material
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                Whether supplying Tungsten Carbide guillotine knives or Conti-Air
                compressible blankets, we deliver strictly verified factory grades.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
              <UserCheck className="w-6 h-6 text-[#0796CC] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D1B24]">
                Direct Technical Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                Customers converse directly with experienced equipment personnel who
                comprehend press cylinder configurations and post-press finishing constraints.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
              <Award className="w-6 h-6 text-[#0796CC] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D1B24]">
                Commitment to Fair Trade
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                We believe in transparent lead times, accurate specifications, and
                long-term partnerships with pressrooms nationwide.
              </p>
            </div>
          </div>
        </div>

        <WhatsAppCTA />
      </div>
    </div>
  );
}
