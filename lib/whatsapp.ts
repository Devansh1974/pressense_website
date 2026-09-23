import { companyInfo } from "@/data/company";

/**
 * Creates an encoded WhatsApp click-to-chat URL
 * @param message Pre-filled message text
 * @param phoneNumber Phone number in international format without + or symbols
 */
export function getWhatsAppUrl(
  message?: string,
  phoneNumber: string = companyInfo.whatsappNumber
): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates product specific inquiry URL
 */
export function getProductWhatsAppUrl(
  productName: string,
  modelCode?: string
): string {
  const modelStr = modelCode ? ` (Ref: ${modelCode})` : "";
  const message = `Hi, I'm interested in ${productName}${modelStr}. I would like to know more about its specifications, pricing and availability.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates quote request URL
 */
export function getQuoteWhatsAppUrl(
  productName: string,
  companyName?: string
): string {
  const companyStr = companyName ? ` from ${companyName}` : "";
  const message = `Hi, I would like to request a formal quotation for ${productName}${companyStr}. Please share commercial pricing, delivery lead time, and technical data sheet.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates general catalogue inquiry URL
 */
export function getGeneralWhatsAppUrl(): string {
  const message = `Hi Press Sense team, I would like to inquire about your printing machinery and industrial catalogue solutions.`;
  return getWhatsAppUrl(message);
}
