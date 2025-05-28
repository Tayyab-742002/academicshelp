"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedHero from "@/components/ui/animated-hero";
import { ServicesGrid } from "@/components/ui/services-grid";

import CTASection from "@/components/common/CTASection";
import { getServices } from "@/lib/services";
import AnimatedTestimonials from "@/components/pages/home/TestimonialsSection";
import FAQSection from "@/components/ui/faq-accordion";
import { Service } from "@/lib/fallbackdata/service";
import TagLine from "@/components/ui/TagLine";
import {  NotebookPen } from "lucide-react";

export default function HomePage() {
  const [services, setServices] = useState<Service[]>([]);

  // Fetch services from Sanity
  useEffect(() => {
    async function fetchServices() {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
        console.log(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchServices();
  }, []);

  // Format services for ServicesGrid component
  const formattedServices = services.map((service) => ({
    id: service._id,
    title: service.title,
    description: service.shortDescription,
    slug: service.slug.current,
    category: service.category || "other",
    features: service.features || [],
    price: `$${service.basePrice}/${service.pricingUnit}`,
    icon: service.icon,
    popular: service.featured,
    image: service.mainImage?.asset.url || "",
  }));

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: "How does your service work?",
      answer:
        "Our process is simple: you place an order, provide detailed instructions, and we match you with an expert writer. You&apos;ll receive regular updates and can communicate directly with your writer. Once completed, you&apos;ll receive your paper for review and can request revisions if needed.",
      category: "general",
    },
    {
      id: 2,
      question: "What academic levels do you support?",
      answer:
        "We provide academic assistance for all levels, from high school to doctoral studies. Our team includes experts with advanced degrees across various disciplines to ensure high-quality support regardless of your academic level.",
      category: "general",
    },
    {
      id: 3,
      question: "Is your service confidential?",
      answer:
        "Absolutely. We take your privacy very seriously. All personal information and order details are kept strictly confidential. We use secure payment methods and never share your information with third parties.",
      category: "privacy",
    },
    {
      id: 4,
      question: "Do you guarantee original, plagiarism-free work?",
      answer:
        "Yes, all papers are written from scratch according to your requirements. We conduct thorough plagiarism checks before delivery to ensure 100% originality. Upon request, we can provide a plagiarism report with your completed paper.",
      category: "quality",
    },
    {
      id: 5,
      question: "What if I&apos;m not satisfied with the work?",
      answer:
        "We strive for your complete satisfaction. If you&apos;re not happy with the delivered work, you can request revisions within the revision period. Our writers will address your concerns and make necessary changes according to your initial instructions.",
      category: "satisfaction",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AnimatedHero
        title="Excel in Your Academic Journey"
        subtitle="Professional assistance with essays, research papers, and assignments to help you achieve academic success."
        primaryCta="Get Started"
        primaryCtaLink="/contact"
        secondaryCta="Learn More"
        secondaryCtaLink="/services"
        benefits={[
          "24/7 Expert Support",
          "Plagiarism-Free Guarantee",
          "On-time Delivery",
          "Confidential Service",
        ]}
      />

      {/* Services Section */}
      <section className="py-20 relative ">
        <div className="absolute inset-0 bg-background/90 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <TagLine tagline="Services We Offer"  
            TagLineIcon={<NotebookPen  className="h-4 w-4 mr-2"/>}
            
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Academic Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic assistance services tailored to your needs.
              From essays to dissertations, we&apos;ve got you covered.
            </p>
          </div>

          <ServicesGrid services={formattedServices} />

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block px-6 py-3 rounded-xl border border-primary/50 hover:bg-primary/10 text-primary font-medium transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-background/90 to-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedTestimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-background/90 to-background relative">  
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={faqs} />
          </div> 
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Excel in Your Studies?"
        description="Join thousands of students who have improved their grades with our professional academic assistance."
        primaryCta="Get Started Today"
        primaryCtaLink="/contact"
        secondaryCta="Learn More"
        secondaryCtaLink="/services"
      />
    </div>
  );
}
