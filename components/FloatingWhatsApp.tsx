"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-3.5 sm:p-3"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent shrink-0" />
        
        {/* Desktop Expand Label on Hover */}
        <span
          className={`hidden sm:inline-block overflow-hidden whitespace-nowrap text-xs font-bold transition-all duration-300 ${
            isHovered
              ? "max-w-xs ml-2.5 mr-2 opacity-100"
              : "max-w-0 opacity-0"
          }`}
        >
          Chat with Sales Desk
        </span>
      </a>
    </div>
  );
}
