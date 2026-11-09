"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { companyInfo } from "@/data/company";

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Press Sense,\n\nI would like to submit an enquiry via your website catalogue:\n• Name: ${formData.name}\n• Company: ${formData.company || "Individual"}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Interested Product: ${formData.product || "General Catalogue"}\n• Message: ${formData.message}`;

    // Open WhatsApp with encoded text
    window.open(getWhatsAppUrl(formattedMessage), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0D1520] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl text-white">
      <div className="mb-6 pb-4 border-b border-slate-800">
        <h2 className="font-heading font-bold text-xl text-white">
          Send an Enquiry
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Fill in your machine requirements and our technical sales team will assist you.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 text-center bg-[#070B10] border border-emerald-500/30 rounded-xl">
          <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
          <h3 className="font-heading font-bold text-lg text-white">
            Enquiry Dispatched
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm mx-auto">
            Your inquiry details were forwarded to our WhatsApp sales desk. An equipment specialist will be in touch shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-slate-900 border border-slate-700 text-xs font-semibold text-white rounded-lg hover:bg-slate-800"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Ramesh Kumar"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 bg-[#05080E] text-white placeholder-slate-500 focus:border-[#FA7533] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Print Systems Ltd"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 bg-[#05080E] text-white placeholder-slate-500 focus:border-[#FA7533] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 bg-[#05080E] text-white placeholder-slate-500 focus:border-[#FA7533] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="ramesh@company.com"
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 bg-[#05080E] text-white placeholder-slate-500 focus:border-[#FA7533] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Interested Product / Machine
            </label>
            <select
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 bg-[#05080E] text-white focus:border-[#FA7533] focus:outline-none transition-colors"
            >
              <option value="">-- Select Equipment or Consumable --</option>
              {products.map((p) => (
                <option key={p.id} value={p.name} className="bg-[#05080E] text-white">
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Requirements / Machine Specifications *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Please share format size, speed requirements, machine make (e.g. Heidelberg, Polar, Sakurai), or blanket barring specifications..."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 bg-[#05080E] text-white placeholder-slate-500 focus:border-[#FA7533] focus:outline-none transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#FA7533] hover:bg-[#E05D1C] text-white text-sm font-bold rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit &amp; Open on WhatsApp</span>
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2 font-mono">
              Direct connection with Raj Kumar • Pan-India Technical Assistance
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
