import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SearchModal from "@/components/SearchModal";
import { SearchProvider } from "@/context/SearchContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FA7533",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pressense.com"),
  title: {
    default: "Press Sense | Printing • Packaging • Industrial Solutions",
    template: "%s | Press Sense",
  },
  description:
    "Press Sense provides printing and packaging solutions to printers, publishers, converters, and packaging companies. In-house blanket baring facility, DIC Inks, Böttcher pressroom chemicals, imported creasing matrix, laminating machines, and pre-owned Heidelberg & Mitsubishi equipment.",
  keywords: [
    "Press Sense",
    "printing consumables",
    "DIC printing inks",
    "Böttcher pressroom chemicals",
    "printing blankets",
    "blanket baring facility",
    "creasing matrix",
    "thermal laminating machines",
    "pre-owned printing machinery",
    "Heidelberg",
    "Mitsubishi",
    "Ryobi",
    "Sakurai",
    "rigid box making machine",
    "paper bag making machine",
    "paper cutting machine",
    "shrink wrapping",
    "paper banding",
    "spiral binding",
    "packaging machinery",
    "printing solutions India",
    "Chennai printers machinery",
    "Raj Kumar Press Sense",
  ],
  authors: [{ name: "Press Sense" }, { name: "Raj Kumar" }],
  creator: "Press Sense",
  publisher: "Press Sense",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo/pressense-icon-orange.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Press Sense | Printing • Packaging • Industrial Solutions",
    description:
      "Reliable consumables, quality machinery, and practical solutions tailored to production requirements and budgets across India.",
    url: "https://pressense.com",
    siteName: "Press Sense",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/pressense-logo-light.png",
        width: 468,
        height: 96,
        alt: "Press Sense - Printing & Packaging Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Sense | Printing • Packaging • Industrial Solutions",
    description:
      "Reliable consumables, quality machinery, and practical solutions tailored to production requirements and budgets across India.",
    images: ["/images/logo/pressense-logo-light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pressense.com/#organization",
      name: "Press Sense",
      url: "https://pressense.com",
      logo: "https://pressense.com/images/logo/pressense-logo-light.png",
      description:
        "Press Sense provides printing and packaging solutions to printers, publishers, converters and packaging companies across India.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9840089494",
          contactType: "sales and customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Tamil"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9944588469",
          contactType: "technical support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Tamil"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 42, Okhla Industrial Area, Phase-III",
        addressLocality: "New Delhi",
        postalCode: "110020",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://pressense.com/#website",
      url: "https://pressense.com",
      name: "Press Sense",
      publisher: {
        "@id": "https://pressense.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFBFB] text-[#0F172A] antialiased selection:bg-[#FA7533] selection:text-white">
        <SearchProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <SearchModal />
        </SearchProvider>
      </body>
    </html>
  );
}
