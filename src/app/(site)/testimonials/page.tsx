"use client";

import {
  HeroSection,
  TestimonialsGrid,
  StatsSection,
  CTASection
} from "@/components/pages/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <StatsSection />
      <TestimonialsGrid />
      <CTASection />
    </div>
  );
}
