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
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-xs">
      <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
        <h2 className="font-heading font-bold text-xl text-[#0D1B24]">
          Send an Enquiry
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Fill in your machine requirements and our technical sales team will assist you.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 text-center bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl">
          <CheckCircle2 className="w-12 h-12 text-[#16A34A] mx-auto mb-3" />
          <h3 className="font-heading font-bold text-lg text-[#0D1B24]">
            Enquiry Dispatched
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-sm mx-auto">
            Your inquiry details were forwarded to our WhatsApp sales desk. An equipment specialist will be in touch shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0D1B24] rounded-lg hover:bg-[#F8FAFC]"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#111827] mb-1">
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
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#FA7533] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#111827] mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Print Systems Ltd"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#FA7533] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#111827] mb-1">
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
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#FA7533] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#111827] mb-1">
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
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#FA7533] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111827] mb-1">
              Interested Product / Machine
            </label>
            <select
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#FA7533] focus:outline-none"
            >
              <option value="">-- Select Equipment or Consumable --</option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="General Machine Inquiry">Other / Custom Requirement</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111827] mb-1">
              Message or Technical Specifications
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Please provide details regarding your machine models, desired cut radii, paper gsm, or quantity..."
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#FA7533] focus:outline-none resize-none"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D171F] hover:bg-[#FA7533] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Enquiry</span>
            </button>

            <span className="text-xs text-[#64748B]">or</span>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                "Hi Press Sense, I am reaching out to discuss your printing machinery catalogue."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
