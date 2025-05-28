"use client";

import CTASection from "@/components/common/CTASection";
import {
  HeroSection,
  TestimonialsGrid,
  StatsSection,

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
