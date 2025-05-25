"use client";

import {
  HeroSection,
  PricingPlans,
  CustomPricing,
  PricingFAQ,
  CTASection
} from "@/components/pages/pricing";
import { PricingPlan } from "@/lib/pricing";

interface PricingPageProps {
  initialPlans?: PricingPlan[];
}

export default function PricingPage({ initialPlans = [] }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PricingPlans initialPlans={initialPlans} />
      <CustomPricing />
      <PricingFAQ />
      <CTASection />
    </div>
  );
} 