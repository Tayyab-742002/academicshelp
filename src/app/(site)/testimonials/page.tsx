"use client";

import {
  HeroSection,
  TestimonialsGrid,
  StatsSection,
  CTASection
} from "@/components/pages/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <StatsSection />
      <TestimonialsGrid />
      <CTASection />
    </div>
  );
}
