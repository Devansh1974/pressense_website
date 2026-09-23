import Hero from "@/components/Hero";
import TrustIntro from "@/components/TrustIntro";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import IndustriesSection from "@/components/IndustriesSection";
import WhyPressSense from "@/components/WhyPressSense";
import AboutPreview from "@/components/AboutPreview";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Company / Trust introduction */}
      <TrustIntro />

      {/* 3. Product Categories */}
      <CategoryGrid />

      {/* 4. Featured Machines Showcase */}
      <FeaturedCarousel />

      {/* 5. Industries / Applications */}
      <IndustriesSection />

      {/* 6. Why Press Sense */}
      <WhyPressSense />

      {/* 7. About Press Sense */}
      <AboutPreview />

      {/* 8. WhatsApp CTA */}
      <WhatsAppCTA />
    </>
  );
}
