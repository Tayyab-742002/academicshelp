"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  DollarSign,
  Clock,
  Shield,
  BookOpen,
  FileQuestion,
} from "lucide-react";
import Link from "next/link";
import FAQSchema from "@/components/structured-data/FAQSchema";
import CTASection from "@/components/common/CTASection";
import FAQSection from "@/components/ui/faq-accordion";
import TagLine from "@/components/ui/TagLine";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    // General Questions
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We provide a range of academic assistance services including essay writing, research paper help, homework assistance, editing and proofreading, dissertation services, and more. Our goal is to support students in their academic journey with high-quality, personalized help.",
      category: "general",
    },
    {
      id: 2,
      question: "How do I place an order?",
      answer:
        "To place an order, simply navigate to the specific service page you're interested in, fill out the order form with your requirements, and proceed to checkout. You can also contact our customer support team for assistance with placing your order.",
      category: "general",
    },
    {
      id: 3,
      question: "What academic levels do you support?",
      answer:
        "We support students at all academic levels, from high school to doctoral studies. Our writers are matched to your academic level to ensure appropriate content and quality.",
      category: "general",
    },
    {
      id: 4,
      question: "How do you ensure quality?",
      answer:
        "We have a rigorous quality assurance process that includes writer selection, multiple rounds of editing, plagiarism checks, and final review before delivery. Additionally, we provide free revisions if you're not completely satisfied with the initial work.",
      category: "general",
    },

    // Pricing & Payment
    {
      id: 5,
      question: "How is pricing determined?",
      answer:
        "Our pricing is based on several factors, including the type of service, academic level, deadline, and complexity of the assignment. We strive to keep our prices competitive while ensuring high-quality work. You can get an instant quote by filling out the order form.",
      category: "pricing",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover. All payments are processed securely through industry-standard encryption and secure payment gateways.",
      category: "pricing",
    },
    {
      id: 7,
      question: "Do you offer any discounts?",
      answer:
        "Yes, we offer various discounts including first-time customer discounts, volume discounts for larger orders, and seasonal promotions. We also have a loyalty program for returning customers. Check our website or contact customer support for current offers.",
      category: "pricing",
    },
    {
      id: 8,
      question: "What is your refund policy?",
      answer:
        "We have a fair refund policy. If you're not satisfied with the quality of work, if we miss your deadline, or if we're unable to find a suitable writer for your project, you may be eligible for a partial or full refund. Please refer to our Terms of Service for detailed information.",
      category: "pricing",
    },

    // Process & Delivery
    {
      id: 9,
      question: "How quickly can you complete my assignment?",
      answer:
        "Our turnaround times vary depending on the complexity and length of the assignment. We can handle urgent requests with deadlines as short as 24 hours for most assignments, though complex projects like dissertations require more time. We always strive to deliver before your deadline.",
      category: "process",
    },
    {
      id: 10,
      question: "Can I communicate with my writer?",
      answer:
        "Yes, you can communicate with your assigned writer through our messaging system. This allows you to provide additional information, ask questions, and receive updates on the progress of your assignment.",
      category: "process",
    },
    {
      id: 11,
      question: "How do revisions work?",
      answer:
        "We offer free revisions within a specified time period after delivery (usually 7-30 days, depending on the service). Simply let us know what changes you need, and your writer will make the necessary adjustments to ensure your complete satisfaction.",
      category: "process",
    },
    {
      id: 12,
      question: "What happens if my deadline is missed?",
      answer:
        "We have a strong track record of meeting deadlines. However, in the rare case of a late delivery, you may be eligible for a partial or full refund according to our money-back guarantee policy.",
      category: "process",
    },

    // Privacy & Security
    {
      id: 13,
      question: "Is your service confidential?",
      answer:
        "Absolutely. We maintain strict confidentiality regarding your personal information and assignment details. Your privacy is our priority, and we never share your information with third parties. We use secure, encrypted connections for all communications and transactions.",
      category: "privacy",
    },
    {
      id: 14,
      question: "Do you keep my assignments on file?",
      answer:
        "We retain completed assignments in our secure system for a limited time to assist with any revision requests. After this period, or upon your request, we can completely remove your assignments from our system.",
      category: "privacy",
    },
    {
      id: 15,
      question: "How do you protect my payment information?",
      answer:
        "We use industry-standard encryption and secure payment processors to handle all transactions. We do not store your payment card details on our servers.",
      category: "privacy",
    },
    {
      id: 16,
      question: "Can my school find out I've used your service?",
      answer:
        "We maintain complete confidentiality about our clients. We never disclose your identity or the fact that you've used our services to any third parties, including educational institutions.",
      category: "privacy",
    },

    // Academic Integrity
    {
      id: 17,
      question: "How should I use the materials you provide?",
      answer:
        "The materials we provide are intended to be used as reference sources and learning aids. They should help you understand the subject matter better, serve as examples of proper research and writing techniques, and guide you in creating your own original work.",
      category: "integrity",
    },
    {
      id: 18,
      question: "Is using your service considered cheating?",
      answer:
        "Our service is designed to provide academic assistance and learning support. We encourage our clients to use our materials ethically, as research and reference tools to enhance their understanding and improve their own work. The proper use of our service aligns with academic integrity principles.",
      category: "integrity",
    },
    {
      id: 19,
      question: "Do you write completely original papers?",
      answer:
        "Yes, all our papers are written from scratch based on your specific requirements. We conduct thorough research and properly cite all sources. Every paper undergoes a plagiarism check before delivery to ensure 100% originality.",
      category: "integrity",
    },
    {
      id: 20,
      question: "What citation styles do you support?",
      answer:
        "We support all major citation styles, including APA, MLA, Chicago, Harvard, Vancouver, and others. Our writers are skilled in formatting papers according to any style guide you require.",
      category: "integrity",
    },
  ];

  const filteredFaqs = faqItems.filter(
    (faq) => faq.category === selectedCategory
  );

  const categories = [
    { id: "general", name: "General Questions", icon: HelpCircle },
    { id: "pricing", name: "Pricing & Payment", icon: DollarSign },
    { id: "process", name: "Process & Delivery", icon: Clock },
    { id: "privacy", name: "Privacy & Security", icon: Shield },
    { id: "integrity", name: "Academic Integrity", icon: BookOpen },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FAQSchema />
      {/* Hero Section */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />

        {/* Gradient accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />

        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40 z-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/90 dark:bg-primary/90"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="mb-12 text-center" variants={itemVariants}>
              {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-8 shadow-md dark:bg-card/60 dark:border-primary/40">
                <HelpCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Knowledge Base</span>
              </div> */}
              <TagLine
                tagline="Frequently Asked Questions"
                TagLineIcon={<FileQuestion className="h-4 w-4 mr-2" />}
              />
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 "
                variants={itemVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
                  Frequently Asked Questions
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Find answers to common questions about our academic help
                services, policies, and processes.
              </motion.p>

              {/* Category Selection */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-12"
                variants={itemVariants}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-2  cursor-pointer
                      ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-br from-primary/90 to-accent/90 text-white dark:text-white shadow-lg shadow-primary/30"
                          : "bg-card/90 border border-primary/40 dark:bg-card/70 text-foreground hover:bg-primary/10 dark:hover:bg-primary/10"
                      }`}
                    whileHover={{
                      y: -3,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <category.icon
                      className={`h-5 w-5 ${selectedCategory === category.id ? "text-white" : "text-primary"}`}
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              className="space-y-4 "
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-primary  ">
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </h2>
              <FAQSection faqs={filteredFaqs} header={false} />
              
            </motion.div>
          </motion.div>
        </div>
        {/* Contact CTA */}
        <CTASection />
      </section>
    </div>
  );
}
