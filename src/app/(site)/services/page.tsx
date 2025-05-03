"use client";

import {
  HeroSection,
  ServicesGrid,
  CTASection
} from "@/components/pages/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}
