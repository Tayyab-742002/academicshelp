"use client";

import AnimatedHero from "@/components/ui/animated-hero";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
   

      <AnimatedHero 
        tagline="We respond within 24 hours"
        TagLineIcon={ <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>}
        title="Get in Touch With Our Team"
        subtitle="Have questions about our services or need help with an assignment? Our team of experts is here to assist you every step of the way."
        primaryCta="Send Message"
        primaryCtaLink="/contact"
        secondaryCta="View Services"
        secondaryCtaLink="/services"
        benefits={[
          "24/7 Expert Support",
          "Plagiarism-Free Guarantee",
          "On-time Delivery",
          "Confidential Service"
        ]}
      />
 
  );
}
