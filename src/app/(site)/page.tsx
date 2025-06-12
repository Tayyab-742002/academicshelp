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
import { NotebookPen } from "lucide-react";
import FAQSchema from "@/components/structured-data/FAQSchema";
import ServiceSchema from "@/components/structured-data/ServiceSchema";

export default function HomePage() {
  const [services, setServices] = useState<Service[]>([]);

  // Fetch services from Sanity
  useEffect(() => {
    async function fetchServices() {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
        
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

  // FAQ data optimized for SEO
  const faqs = [
    {
      id: 1,
      question: "How does AcademicsHelp's academic assistance service work?",
      answer:
        "Our academic help process is simple: you submit your requirements through our contact form, and we match you with an expert in your subject area. You'll receive regular updates and can communicate directly with your academic assistant throughout the process. Once completed, you'll receive your work for review and can request revisions if needed.",
      category: "general",
    },
    {
      id: 2,
      question: "What academic levels does AcademicsHelp support?",
      answer:
        "We provide comprehensive academic assistance for all educational levels, from high school to doctoral studies. Our team includes experts with advanced degrees across various disciplines to ensure high-quality academic help regardless of your subject or level of study.",
      category: "general",
    },
    {
      id: 3,
      question: "Is AcademicsHelp's homework help service confidential?",
      answer:
        "Absolutely. We take your privacy extremely seriously. All personal information and assignment details are kept strictly confidential. We use secure systems and never share your information with third parties. Your academic journey with us remains completely private.",
      category: "privacy",
    },
    {
      id: 4,
      question: "Does AcademicsHelp guarantee original, plagiarism-free work?",
      answer:
        "Yes, all academic assistance we provide is 100% original and plagiarism-free. Our experts create custom solutions according to your specific requirements. We conduct thorough plagiarism checks before delivery to ensure complete originality. Upon request, we can provide a plagiarism report with your completed work.",
      category: "quality",
    },
    {
      id: 5,
      question: "What if I'm not satisfied with my assignment help?",
      answer:
        "We strive for your complete satisfaction with our academic assistance. If you're not happy with the delivered work, you can request revisions within the revision period. Our experts will address your concerns and make necessary changes according to your initial instructions to ensure you receive the highest quality help.",
      category: "satisfaction",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data for SEO */}
      <FAQSchema />
      <ServiceSchema />
      
      {/* Hero Section */}
      <AnimatedHero
        title="Expert Academic Help & Homework Assistance"
        subtitle="Professional academic assistance with essays, research papers, assignments, and homework to help you achieve academic excellence."
        primaryCta="Get Academic Help"
        primaryCtaLink="/contact"
        secondaryCta="Our Services"
        secondaryCtaLink="/services"
        benefits={[
          "24/7 Expert Academic Support",
          "100% Original, Plagiarism-Free Work",
          "On-time Delivery Guaranteed",
          "Completely Confidential Service",
        ]}
      />

      {/* Services Section */}
      <section className="py-20 relative ">
        <div className="absolute inset-0 bg-background/90 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <TagLine tagline="Academic Services We Offer"  
            TagLineIcon={<NotebookPen className="h-4 w-4 mr-2"/>}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Academic Assistance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert academic help services tailored to your specific needs.
              From essays and homework to dissertations, we provide assistance at all educational levels.
            </p>
          </div>

          <ServicesGrid services={formattedServices} />

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block px-6 py-3 rounded-xl border border-primary/50 hover:bg-primary/10 text-primary font-medium transition-colors duration-200"
            >
              View All Academic Services
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
        title="Ready to Excel in Your Academic Journey?"
        description="Join thousands of students who have improved their grades with our professional academic assistance and homework help services."
        primaryCta="Get Academic Help Today"
        primaryCtaLink="/contact"
        secondaryCta="Explore Services"
        secondaryCtaLink="/services"
      />
    </div>
  );
}
