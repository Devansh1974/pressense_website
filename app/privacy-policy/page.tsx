import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Press Sense",
  description: "Privacy policy and data handling guidelines for Press Sense catalogue.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 my-6 shadow-xs space-y-6 text-sm text-slate-600 leading-relaxed">
          <h1 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">Last updated: {new Date().getFullYear()}</p>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              1. Information Collection &amp; Use
            </h2>
            <p>
              Press Sense operates as a B2B product catalogue and equipment enquiry
              service. When you contact us via WhatsApp, phone, email, or our web
              enquiry form, we collect the details you voluntarily provide (such as
              your name, company name, telephone number, and equipment specifications)
              solely to answer inquiries, provide quotations, and fulfill commercial orders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              2. No E-Commerce or Payment Data
            </h2>
            <p>
              This website does not conduct online financial transactions, store credit
              card numbers, or operate a consumer shopping cart. All commercial transactions
              are negotiated and invoiced directly via traditional B2B commercial agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              3. Communication Channels
            </h2>
            <p>
              When initiating communication via WhatsApp, WhatsApp&apos;s own privacy policy
              and end-to-end encryption standards apply to the chat transmission. We do
              not sell, rent, or share your contact details with external third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900">
              4. Contact Information
            </h2>
            <p>
              For any questions regarding your data privacy, contact our office at:
              <br />
              <strong className="text-slate-900">{companyInfo.name}</strong>, {companyInfo.address.line1},{" "}
              {companyInfo.address.city}, {companyInfo.address.state},{" "}
              {companyInfo.address.country}. Email: {companyInfo.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
