import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/Hero";
import TrustIntro from "@/components/TrustIntro";
import PinnedMachineShowcase from "@/components/PinnedMachineShowcase";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import IndustriesSection from "@/components/IndustriesSection";
import WhyPressSense from "@/components/WhyPressSense";
import AboutPreview from "@/components/AboutPreview";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* 0. High-Tech Intro Loading Animation with Vertical Split Shutter Reveal */}
      <IntroLoader />

      {/* 1. Hero Section: Full-Sized Auto-Scrolled Image Showcase with Overlaid Specs */}
      <Hero />

      {/* 2. Trust Intro: Engineering Heritage (Est. 2010) & 4 Core Divisions */}
      <ScrollReveal delay={50}>
        <TrustIntro />
      </ScrollReveal>

      {/* 3. Pinned Machinery Showcase: Split Viewport with Interactive Queue */}
      <ScrollReveal delay={50}>
        <PinnedMachineShowcase />
      </ScrollReveal>

      {/* 4. Product Divisions Grid */}
      <ScrollReveal delay={50}>
        <CategoryGrid />
      </ScrollReveal>

      {/* 5. Featured Machines & Consumables Carousel */}
      <ScrollReveal delay={50}>
        <FeaturedCarousel />
      </ScrollReveal>

      {/* 6. Industries & Production Verticals */}
      <ScrollReveal delay={50}>
        <IndustriesSection />
      </ScrollReveal>

      {/* 7. Operational Advantage & Leadership Commitment */}
      <ScrollReveal delay={50}>
        <WhyPressSense />
      </ScrollReveal>

      {/* 8. About Press Sense (Est. 2010 • In-House Blanket Baring Center) */}
      <ScrollReveal delay={50}>
        <AboutPreview />
      </ScrollReveal>

      {/* 9. Direct WhatsApp Engineering Consultation */}
      <ScrollReveal delay={50}>
        <WhatsAppCTA />
      </ScrollReveal>
    </>
  );
}
