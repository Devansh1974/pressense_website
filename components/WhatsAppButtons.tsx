import React from "react";
import { MessageCircle } from "lucide-react";
import { getProductWhatsAppUrl, getGeneralWhatsAppUrl, getQuoteWhatsAppUrl } from "@/lib/whatsapp";
import { Product } from "@/lib/types";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  message?: string;
}

export function WhatsAppButton({
  label = "WhatsApp Us",
  className = "",
  message,
}: WhatsAppButtonProps) {
  const url = message ? `https://wa.me/919871495758?text=${encodeURIComponent(message)}` : getGeneralWhatsAppUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors duration-200 cursor-pointer ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
      <span>{label}</span>
    </a>
  );
}

interface WhatsAppProductButtonProps {
  product: Product;
  label?: string;
  className?: string;
}

export function WhatsAppProductButton({
  product,
  label = "WhatsApp About This Machine",
  className = "",
}: WhatsAppProductButtonProps) {
  const url = getProductWhatsAppUrl(product.name, product.modelCode);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm sm:text-base font-semibold rounded-lg shadow-sm transition-colors duration-200 cursor-pointer ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
      <span>{label}</span>
    </a>
  );
}

interface WhatsAppQuickButtonProps {
  product: Product;
  className?: string;
}

export function WhatsAppQuickButton({
  product,
  className = "",
}: WhatsAppQuickButtonProps) {
  const url = getProductWhatsAppUrl(product.name, product.modelCode);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire via WhatsApp about ${product.name}`}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#F0FDF4] hover:bg-[#25D366] text-[#16A34A] hover:text-white border border-[#BBF7D0] hover:border-[#25D366] text-xs font-semibold rounded-md transition-all duration-200 shrink-0 ${className}`}
    >
      <MessageCircle className="w-3.5 h-3.5 fill-current text-transparent shrink-0" />
      <span>WhatsApp</span>
    </a>
  );
}
