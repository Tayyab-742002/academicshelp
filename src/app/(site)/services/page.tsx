"use client";

import {
  HeroSection,
  ServicesGrid,
  CTASection
} from "@/components/pages/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}
