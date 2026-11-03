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
            <span className="text-xs font-bold uppercase tracking-widest text-[#FA7533]">
              PRESS SENSE | PRINTING • PACKAGING • INDUSTRIAL SOLUTIONS
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#0D171F] tracking-tight mt-2">
              Engineering Heritage &amp; Production Reliability
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed">
              Press Sense provides printing and packaging solutions to printers, publishers,
              converters, and packaging companies. Our focus is to supply reliable consumables,
              quality machinery, and practical solutions based on each customer&apos;s production
              requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[#E2E8F0]">
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#FA7533]">
                1983
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Year Established
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#0D171F]">
                In-House
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Blanket Baring Center
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#FA7533]">
                Global
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Machine Sourcing
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#0D171F]">
                Dedicated
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                In-House Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Company Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-12">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#475569] leading-relaxed">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0D171F] tracking-tight">
              Consumables, Machinery &amp; End-to-End Service
            </h2>
            <p>
              <strong>Consumables &amp; Materials:</strong> Selected for performance, application,
              and value. Featuring genuine DIC printing inks, Böttcher pressroom chemicals,
              non-adhesive anti-marking films imported from Japan and China, and our proprietary
              own-brand creasing matrix with strong market acceptance.
            </p>
            <p>
              <strong>In-House Blanket Baring Facility:</strong> Our dedicated in-house baring
              facility allows us to prepare and finish blankets according to exact customer
              requirements, helping us maintain strict control over accuracy, consistency,
              and fast turnaround across Economical Chinese blankets, Continental, UV, and Acoma.
            </p>
            <p>
              <strong>Machinery &amp; Equipment:</strong> Sourced around your production needs,
              available space, and investment level. We supply thermal, wet, and dry laminators
              (including Chennai and pan-India installations), automated rigid box and paper bag
              making machinery, and pre-owned offset presses from international markets (Mitsubishi,
              Ryobi, Sakurai, Heidelberg).
            </p>
            <p>
              Under the active leadership of <strong>{companyInfo.contactPerson}</strong>, our
              relationship with customers continues beyond the sale through our dedicated in-house
              service engineers who provide mechanical troubleshooting, ongoing servicing, and
              spares replenishment to keep your machines running.
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
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#0D171F] mb-6">
            Our Four Production Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D171F]">
                In-House Blanket Baring
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                Finished in our dedicated facility for maximum precision, squareness, and rapid delivery.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl transition-colors">
              <Award className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D171F]">
                DIC &amp; Böttcher Supplies
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                High-performance DIC inks, Böttcher chemicals, and own-brand creasing matrix.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl transition-colors">
              <UserCheck className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D171F]">
                Global Machine Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                Pre-owned Heidelberg, Ryobi, Mitsubishi presses, plus rigid box &amp; bag machinery.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FA7533] rounded-xl transition-colors">
              <Calendar className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#0D171F]">
                In-House Service Support
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                Ongoing servicing, troubleshooting, and spare parts supply throughout machine life.
              </p>
            </div>
          </div>
        </div>

        <WhatsAppCTA />
      </div>
    </div>
  );
}
