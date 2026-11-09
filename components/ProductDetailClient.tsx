"use client";

import React, { useState } from "react";
import { MessageCircle, FileText, Check, ArrowRight, Shield, Clock, HelpCircle } from "lucide-react";
import { Product, Category } from "@/lib/types";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecifications from "@/components/ProductSpecifications";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { WhatsAppProductButton } from "@/components/WhatsAppButtons";
import { companyInfo } from "@/data/company";

interface ProductDetailClientProps {
  product: Product;
  category: Category;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  category,
  relatedProducts,
}: ProductDetailClientProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      {/* Top Main Section: Gallery + Primary Purchase Action */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
        {/* Left Column: Product Gallery (7 cols) */}
        <div className="lg:col-span-7">
          <ProductGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Right Column: Machine Info & Conversion Funnel (5 cols) */}
        <div className="lg:col-span-5 bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA7533]">
                {category.name}
              </span>
              {product.modelCode && (
                <span className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  Ref: {product.modelCode}
                </span>
              )}
            </div>

            <h1 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Quick Highlights */}
            <div className="my-6 p-4 bg-[#070B10] border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <Shield className="w-4 h-4 text-[#FA7533] shrink-0" />
                <span>Heavy-Duty Industrial Specification</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <Clock className="w-4 h-4 text-[#FA7533] shrink-0" />
                <span>Direct Stock • In-House Technical Support</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col gap-3">
              <WhatsAppProductButton
                product={product}
                label="WhatsApp About This Product"
                className="w-full"
              />

              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#FA7533] text-sm sm:text-base font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FA7533]" />
                <span>Request a Quote</span>
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p>• Technical personnel available for sizing and format consultation</p>
              <p>• Custom sizes &amp; bar configurations available upon request</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Deep Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        {/* Left Column (8 cols): Overview, Features, Specs, Applications */}
        <div className="lg:col-span-8 space-y-12">
          {/* Machine Overview */}
          <section className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 pb-3 border-b border-slate-800">
              Equipment Overview &amp; Capabilities
            </h2>
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
              <p>{product.description}</p>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-6 pb-3 border-b border-slate-800">
              Key Features &amp; Engineering Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-[#070B10] border border-slate-800 rounded-lg"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FA7533]/15 text-[#FA7533] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section>
            <ProductSpecifications
              specifications={product.specifications}
              modelCode={product.modelCode}
            />
          </section>

          {/* Applications */}
          <section className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 pb-3 border-b border-slate-800">
              Common Pressroom &amp; Packaging Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#070B10] border border-slate-800 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA7533] shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sticky Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-28">
            <h3 className="font-heading font-bold text-base text-white mb-3">
              Need Verification or Advice?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Our specialists confirm dimensional compatibility with your cutter or press model before you order.
            </p>

            <div className="space-y-3">
              <WhatsAppProductButton
                product={product}
                label="Direct WhatsApp Enquiry"
                className="w-full text-xs"
              />

              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer"
              >
                Request Quotation Sheet
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Direct Sales Desk:</span>
                <strong className="text-white font-mono">{companyInfo.displayPhone}</strong>
              </div>
              <div className="flex justify-between">
                <span>Dispatch Location:</span>
                <span className="text-slate-200">Delhi, India</span>
              </div>
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="text-[#25D366] font-medium">Within 1 Hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="my-16">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Related Equipment in {category.name}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Explore complementary finishing units and tooling
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal
        product={product}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
