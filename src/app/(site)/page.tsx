"use client";

import Link from "next/link";
import AnimatedHero from "@/components/ui/animated-hero";
import PricingTable from "@/components/ui/pricing-table";
import { ServicesGrid } from "@/components/ui/services-grid";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { AnimatedCarousel } from "@/components/ui/animated-carousel";
import CTASection from "@/components/common/CTASection";
import { GraduationCap, BookOpen, Clock, CheckCircle2, FileCheck, Users } from "lucide-react";

export default function HomePage() {
  // Sample service data
  const services = [
    {
      id: "essay-writing",
      title: "Essay Writing",
      description: "Professional essay writing services for all academic levels and subjects.",
      slug: "/services/essay-writing",
      category: "writing",
      features: ["Professional writers", "Plagiarism-free", "On-time delivery"],
      icon: <FileCheck className="h-6 w-6 text-primary" />,
    },
    {
      id: "research-papers",
      title: "Research Papers",
      description: "Comprehensive research papers with thorough analysis and proper citations.",
      slug: "/services/research-papers",
      category: "writing",
      features: ["In-depth research", "APA/MLA formatting", "Professional citations"],
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      popular: true,
    },
    {
      id: "dissertation",
      title: "Dissertation Help",
      description: "Expert guidance and writing assistance for dissertations and theses.",
      slug: "/services/dissertation",
      category: "advanced",
      features: ["PhD experts", "Chapter-by-chapter help", "Editing & proofreading"],
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      id: "editing",
      title: "Editing & Proofreading",
      description: "Professional editing services to perfect your academic papers.",
      slug: "/services/editing",
      category: "editing",
      features: ["Grammar correction", "Style improvement", "Quick turnaround"],
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    },
    {
      id: "tutoring",
      title: "Online Tutoring",
      description: "One-on-one tutoring sessions with subject matter experts.",
      slug: "/services/tutoring",
      category: "assistance",
      features: ["Flexible scheduling", "Expert tutors", "All subjects"],
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      id: "homework",
      title: "Homework Help",
      description: "Get assistance with challenging homework assignments across all subjects.",
      slug: "/services/homework-help",
      category: "assistance",
      features: ["Step-by-step solutions", "24/7 support", "All academic levels"],
      icon: <Clock className="h-6 w-6 text-primary" />,
    }
  ];

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Graduate Student",
      content: "The essay writing service was exceptional. My paper was delivered ahead of schedule and exceeded my expectations. The writer followed all my requirements perfectly.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Undergraduate Student",
      content: "I was struggling with my research paper until I found this service. The support team was very helpful, and the paper I received was thoroughly researched and well-written.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "PhD Candidate",
      content: "Their dissertation assistance was invaluable. My advisor was impressed with the quality of research and writing. I would highly recommend their services to any graduate student.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "James Taylor",
      role: "MBA Student",
      content: "The tutoring service helped me pass a challenging course I was struggling with. My tutor was knowledgeable, patient, and made complex concepts easy to understand.",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 4
    }
  ];

  // Sample pricing data
  const pricingPlans = [
    {
      id: "basic",
      name: "Standard",
      description: "Perfect for basic academic assignments",
      price: {
        monthly: "$19.99",
        yearly: "$199.99"
      },
      features: [
        { name: "Essay Writing", included: true },
        { name: "Homework Help", included: true },
        { name: "Basic Editing", included: true },
        { name: "72-Hour Delivery", included: true },
        { name: "Research Papers", included: false },
        { name: "Dissertation Help", included: false },
        { name: "Plagiarism Report", included: false },
        { name: "Priority Support", included: false }
      ],
      cta: {
        text: "Get Started",
        href: "/contact"
      },
      discount: "Save $40 yearly"
    },
    {
      id: "professional",
      name: "Professional",
      description: "For serious students needing comprehensive help",
      price: {
        monthly: "$39.99",
        yearly: "$399.99"
      },
      features: [
        { name: "Essay Writing", included: true, highlight: true },
        { name: "Homework Help", included: true },
        { name: "Advanced Editing", included: true },
        { name: "48-Hour Delivery", included: true },
        { name: "Research Papers", included: true, highlight: true },
        { name: "Dissertation Help", included: false },
        { name: "Plagiarism Report", included: true },
        { name: "Priority Support", included: false }
      ],
      cta: {
        text: "Choose Professional",
        href: "/contact"
      },
      popular: true,
      badge: "Most Popular",
      discount: "Save $80 yearly"
    },
    {
      id: "premium",
      name: "Premium",
      description: "Complete academic support for advanced needs",
      price: {
        monthly: "$59.99",
        yearly: "$599.99"
      },
      features: [
        { name: "Essay Writing", included: true },
        { name: "Homework Help", included: true },
        { name: "Premium Editing", included: true },
        { name: "24-Hour Delivery", included: true, highlight: true },
        { name: "Research Papers", included: true },
        { name: "Dissertation Help", included: true, highlight: true },
        { name: "Plagiarism Report", included: true },
        { name: "Priority Support", included: true, highlight: true }
      ],
      cta: {
        text: "Choose Premium",
        href: "/contact"
      },
      discount: "Save $120 yearly"
    }
  ];

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: "How does your service work?",
      answer: "Our process is simple: you place an order, provide detailed instructions, and we match you with an expert writer. You'll receive regular updates and can communicate directly with your writer. Once completed, you'll receive your paper for review and can request revisions if needed.",
      category: "general"
    },
    {
      id: 2,
      question: "What academic levels do you support?",
      answer: "We provide academic assistance for all levels, from high school to doctoral studies. Our team includes experts with advanced degrees across various disciplines to ensure high-quality support regardless of your academic level.",
      category: "general"
    },
    {
      id: 3,
      question: "Is your service confidential?",
      answer: "Absolutely. We take your privacy very seriously. All personal information and order details are kept strictly confidential. We use secure payment methods and never share your information with third parties.",
      category: "privacy"
    },
    {
      id: 4,
      question: "Do you guarantee original, plagiarism-free work?",
      answer: "Yes, all papers are written from scratch according to your requirements. We conduct thorough plagiarism checks before delivery to ensure 100% originality. Upon request, we can provide a plagiarism report with your completed paper.",
      category: "quality"
    },
    {
      id: 5,
      question: "What if I'm not satisfied with the work?",
      answer: "We strive for your complete satisfaction. If you're not happy with the delivered work, you can request revisions within the revision period. Our writers will address your concerns and make necessary changes according to your initial instructions.",
      category: "satisfaction"
    }
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
          "Confidential Service"
        ]}
      />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90 relative">
        <div className="absolute inset-0 bg-primary/5 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic assistance services tailored to your needs. From essays to dissertations, we've got you covered.
            </p>
          </div>
          
          <ServicesGrid services={services} />
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 text-primary font-medium transition-colors duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background/90 to-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what students like you have to say about our services.
            </p>
          </div>
          
          <AnimatedCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your academic needs. All plans include our quality guarantee.
            </p>
          </div>
          
          <PricingTable plans={pricingPlans} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background/90 to-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our academic services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
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
