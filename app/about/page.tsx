import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, MapPin, UserCheck, ShieldCheck, Award, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Press Sense",
  description:
    "Founded in 2010 in Delhi, India, Press Sense specializes in wholesale distribution of printing and coating blankets, die making machines, and precision paper cutting knives.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#070B10] text-white min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Press Sense" }]} />

        {/* Hero Section */}
        <div className="bg-[#0D1520] border border-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 my-4 sm:my-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FA7533] to-transparent" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FA7533]/15 text-[#FA7533] border border-[#FA7533]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ESTABLISHED 2010 • DELHI HQ</span>
            </div>
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1">
              Engineering Heritage &amp; Production Reliability
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Press Sense provides printing and packaging solutions to printers, publishers,
              converters, and packaging companies. Our focus is to supply reliable consumables,
              quality machinery, and practical solutions based on each customer&apos;s production
              requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800">
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#FA7533]">
                2010
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono uppercase">
                Year Established
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-white">
                In-House
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono uppercase">
                Blanket Baring Center
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#FA7533]">
                Global
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono uppercase">
                Machine Sourcing
              </p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl sm:text-3xl text-white">
                Dedicated
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono uppercase">
                In-House Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Company Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-12">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              Consumables, Machinery &amp; End-to-End Service
            </h2>
            <p>
              <strong className="text-white">Consumables &amp; Materials:</strong> Selected for performance, application,
              and value. Featuring genuine DIC printing inks, Böttcher pressroom chemicals,
              non-adhesive anti-marking films imported from Japan and China, and our proprietary
              own-brand creasing matrix with strong market acceptance.
            </p>
            <p>
              <strong className="text-white">In-House Blanket Baring Facility:</strong> Our dedicated in-house baring
              facility allows us to prepare and finish blankets according to exact customer
              requirements, helping us maintain strict control over accuracy, consistency,
              and fast turnaround across Economical Chinese blankets, Continental, UV, and Acoma.
            </p>
            <p>
              <strong className="text-white">Machinery &amp; Equipment:</strong> Sourced around your production needs,
              available space, and investment level. We supply thermal, wet, and dry laminators
              (including Chennai and pan-India installations), automated rigid box and paper bag
              making machinery, and pre-owned offset presses from international markets (Mitsubishi,
              Ryobi, Sakurai, Heidelberg).
            </p>
            <p>
              Under the active leadership of <strong className="text-[#FA7533]">{companyInfo.contactPerson}</strong>, our
              relationship with customers continues beyond the sale through our dedicated in-house
              service engineers who provide mechanical troubleshooting, ongoing servicing, and
              spares replenishment to keep your machines running.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] bg-[#0D1520] border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-center overflow-hidden">
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
        <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-10 my-12 shadow-xl">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-6">
            Our Four Production Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="p-5 bg-[#070B10] border border-slate-800 hover:border-[#FA7533] rounded-xl transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-white">
                In-House Blanket Baring
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Finished in our dedicated facility for maximum precision, squareness, and rapid delivery.
              </p>
            </div>

            <div className="p-5 bg-[#070B10] border border-slate-800 hover:border-[#FA7533] rounded-xl transition-colors">
              <Award className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-white">
                DIC &amp; Böttcher Supplies
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                High-performance DIC inks, Böttcher chemicals, and own-brand creasing matrix.
              </p>
            </div>

            <div className="p-5 bg-[#070B10] border border-slate-800 hover:border-[#FA7533] rounded-xl transition-colors">
              <UserCheck className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-white">
                Global Machine Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Pre-owned Heidelberg, Ryobi, Mitsubishi presses, plus rigid box &amp; bag machinery.
              </p>
            </div>

            <div className="p-5 bg-[#070B10] border border-slate-800 hover:border-[#FA7533] rounded-xl transition-colors">
              <Calendar className="w-6 h-6 text-[#FA7533] mb-3" />
              <h3 className="font-heading font-bold text-base text-white">
                In-House Service Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
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
