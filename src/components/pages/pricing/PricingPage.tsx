"use client";

import {
  HeroSection,
  PricingPlans,
  CustomPricing,
  PricingFAQ,
  CTASection
} from "@/components/pages/pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PricingPlans />
      <CustomPricing />
      <PricingFAQ />
      <CTASection />
    </div>
  );
} 