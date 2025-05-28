"use client";

import ComingSoonModal from "@/components/common/ComingSoonModal";
import { HeroSection, ContactInfo, ContactForm, FAQSection } from "@/components/pages/contact";

export default function Contact() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ContactInfo />
      <ContactForm />
      <FAQSection />
    </div>
  );
} 