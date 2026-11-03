"use client";

import React, { useState } from "react";
import { X, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Product } from "@/lib/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

interface QuoteModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({
  product,
  isOpen,
  onClose,
}: QuoteModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [requirements, setRequirements] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Press Sense team,\n\nI would like to request an official quote for:\n• Machine: ${product.name} (Code: ${product.modelCode || "N/A"})\n• Name: ${name}\n• Company: ${company || "Individual/Independent"}\n• Phone: ${phone}\n• Location: ${city || "India"}\n• Specific Requirements: ${requirements || "Please provide pricing, lead time, and technical data sheet."}`;

    // Open WhatsApp with encoded message
    window.open(getWhatsAppUrl(text), "_blank");
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a Formal Quote"
      className="fixed inset-0 z-[120] bg-[#0D171F]/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white border border-[#E2E8F0] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA7533]">
              Request a Quotation
            </span>
            <h3 className="font-heading font-bold text-lg text-[#0D171F]">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0D171F] hover:bg-[#E2E8F0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
            <h4 className="font-heading font-bold text-lg text-[#0D171F]">
              Connecting to WhatsApp Consultation Desk
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Your inquiry has been formulated and routed to Raj Kumar at Press Sense.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#111827] focus:border-[#FA7533] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  Company / Press Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Alpha Print Solutions"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#111827] focus:border-[#FA7533] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#111827] focus:border-[#FA7533] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  City / State
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Delhi, Chennai, Mumbai"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#111827] focus:border-[#FA7533] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#111827] mb-1">
                Specific Technical Details or Quantities
              </label>
              <textarea
                rows={3}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Mention required cutting sizes, blanket thickness, press models, or delivery timeframe..."
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#111827] focus:border-[#FA7533] focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Transmit Quote Request via WhatsApp</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-[#64748B]">
              Direct B2B enquiry • Responded by technical personnel within business hours
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
