"use client";

import { useState, useEffect } from "react";
import {
  HeroSection,
  ServicesSection,
  GuaranteesSection,
  HowItWorksSection,
  TestimonialsSection,
  DisclaimerSection,
} from "@/components/pages/home";
import CTASection from "@/components/common/CTASection";

// Animation utility function
function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

export default function Home() {
  const scrollY = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <GuaranteesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <DisclaimerSection />
    </div>
  );
}
