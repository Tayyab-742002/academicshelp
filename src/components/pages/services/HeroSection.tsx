import AnimatedHero from "@/components/ui/animated-hero";
import { ArrowRight, FileQuestion } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <AnimatedHero
      title="Our Services"
      tagline="Our Services"
      TagLineIcon={<FileQuestion className="w-4 h-4 mr-2" />}
      subtitle="We offer a wide range of services to help you achieve your goals."
      benefits={[
        "We offer a wide range of services to help you achieve your goals.",
      ]}
      primaryCta="Contact Us"
      primaryCtaLink="/contact"
      secondaryCta="View Pricing"
      secondaryCtaLink="/pricing"
    />
  );
};

export default HeroSection;
