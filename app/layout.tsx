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
  themeColor: "#0D1B24",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pressense.com"),
  title: {
    default: "Press Sense | Premium Industrial Printing & Finishing Solutions",
    template: "%s | Press Sense",
  },
  description:
    "Explore professional printing machinery, digital-offset finishing equipment, die making solutions, and premium consumables engineered for demanding production environments.",
  keywords: [
    "industrial machinery",
    "printing solutions",
    "die making machines",
    "digital offset finishing",
    "paper cutting knives",
    "printing blankets",
    "reprographic supplies",
    "Press Sense",
  ],
  authors: [{ name: "Press Sense" }],
  openGraph: {
    title: "Press Sense | Premium Industrial Printing & Finishing Solutions",
    description:
      "Explore professional printing machinery, digital-offset finishing equipment, and precision consumables.",
    url: "https://pressense.com",
    siteName: "Press Sense",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Sense | Premium Industrial Printing & Finishing Solutions",
    description:
      "Explore professional printing machinery, digital-offset finishing equipment, and precision consumables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F8F7] text-[#111827] antialiased selection:bg-[#0796CC] selection:text-white">
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
