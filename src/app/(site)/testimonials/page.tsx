"use client";

import ComingSoonModal from "@/components/common/ComingSoonModal";
import CTASection from "@/components/common/CTASection";
import {
  HeroSection,
  TestimonialsGrid,
  StatsSection,

} from "@/components/pages/testimonials";

export default function TestimonialsPage() {
  return(
    <ComingSoonModal
      title="Testimonials Page"
      message="This page is currently under construction."
      estimatedTime="Q3 2025"
    />
  )
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <StatsSection />
      <TestimonialsGrid />
     <CTASection />
    </div>
  );
}
