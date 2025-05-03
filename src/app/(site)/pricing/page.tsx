"use client";

import {
  HeroSection,
  PricingPlans,
  CustomPricing,
  PricingFAQ,
  CTASection
} from "@/components/pages/pricing";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <PricingPlans />
      <CustomPricing />
      <PricingFAQ />
      <CTASection />
    </div>
  );
}
