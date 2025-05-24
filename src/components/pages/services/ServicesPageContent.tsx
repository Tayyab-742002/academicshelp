"use client";

import {
  HeroSection,
  ServicesGrid,

} from "@/components/pages/services";
import ServiceSchema from "@/components/structured-data/ServiceSchema";

export default function ServicesPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ServiceSchema />
      <HeroSection />
      <ServicesGrid />
    
    </div>
  );
} 