"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, DollarSign, Clock, Shield, BookOpen } from "lucide-react";
import Link from "next/link";
import FAQSchema from "@/components/structured-data/FAQSchema";

interface FaqItem {
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
      question: "What services do you offer?",
      answer: "We provide a range of academic assistance services including essay writing, research paper help, homework assistance, editing and proofreading, dissertation services, and more. Our goal is to support students in their academic journey with high-quality, personalized help.",
      category: "general"
    },
    {
      question: "How do I place an order?",
      answer: "To place an order, simply navigate to the specific service page you're interested in, fill out the order form with your requirements, and proceed to checkout. You can also contact our customer support team for assistance with placing your order.",
      category: "general"
    },
    {
      question: "What academic levels do you support?",
      answer: "We support students at all academic levels, from high school to doctoral studies. Our writers are matched to your academic level to ensure appropriate content and quality.",
      category: "general"
    },
    {
      question: "How do you ensure quality?",
      answer: "We have a rigorous quality assurance process that includes writer selection, multiple rounds of editing, plagiarism checks, and final review before delivery. Additionally, we provide free revisions if you're not completely satisfied with the initial work.",
      category: "general"
    },
    
    // Pricing & Payment
    {
      question: "How is pricing determined?",
      answer: "Our pricing is based on several factors, including the type of service, academic level, deadline, and complexity of the assignment. We strive to keep our prices competitive while ensuring high-quality work. You can get an instant quote by filling out the order form.",
      category: "pricing"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover. All payments are processed securely through industry-standard encryption and secure payment gateways.",
      category: "pricing"
    },
    {
      question: "Do you offer any discounts?",
      answer: "Yes, we offer various discounts including first-time customer discounts, volume discounts for larger orders, and seasonal promotions. We also have a loyalty program for returning customers. Check our website or contact customer support for current offers.",
      category: "pricing"
    },
    {
      question: "What is your refund policy?",
      answer: "We have a fair refund policy. If you're not satisfied with the quality of work, if we miss your deadline, or if we're unable to find a suitable writer for your project, you may be eligible for a partial or full refund. Please refer to our Terms of Service for detailed information.",
      category: "pricing"
    },
    
    // Process & Delivery
    {
      question: "How quickly can you complete my assignment?",
      answer: "Our turnaround times vary depending on the complexity and length of the assignment. We can handle urgent requests with deadlines as short as 24 hours for most assignments, though complex projects like dissertations require more time. We always strive to deliver before your deadline.",
      category: "process"
    },
    {
      question: "Can I communicate with my writer?",
      answer: "Yes, you can communicate with your assigned writer through our messaging system. This allows you to provide additional information, ask questions, and receive updates on the progress of your assignment.",
      category: "process"
    },
    {
      question: "How do revisions work?",
      answer: "We offer free revisions within a specified time period after delivery (usually 7-30 days, depending on the service). Simply let us know what changes you need, and your writer will make the necessary adjustments to ensure your complete satisfaction.",
      category: "process"
    },
    {
      question: "What happens if my deadline is missed?",
      answer: "We have a strong track record of meeting deadlines. However, in the rare case of a late delivery, you may be eligible for a partial or full refund according to our money-back guarantee policy.",
      category: "process"
    },
    
    // Privacy & Security
    {
      question: "Is your service confidential?",
      answer: "Absolutely. We maintain strict confidentiality regarding your personal information and assignment details. Your privacy is our priority, and we never share your information with third parties. We use secure, encrypted connections for all communications and transactions.",
      category: "privacy"
    },
    {
      question: "Do you keep my assignments on file?",
      answer: "We retain completed assignments in our secure system for a limited time to assist with any revision requests. After this period, or upon your request, we can completely remove your assignments from our system.",
      category: "privacy"
    },
    {
      question: "How do you protect my payment information?",
      answer: "We use industry-standard encryption and secure payment processors to handle all transactions. We do not store your payment card details on our servers.",
      category: "privacy"
    },
    {
      question: "Can my school find out I've used your service?",
      answer: "We maintain complete confidentiality about our clients. We never disclose your identity or the fact that you've used our services to any third parties, including educational institutions.",
      category: "privacy"
    },
    
    // Academic Integrity
    {
      question: "How should I use the materials you provide?",
      answer: "The materials we provide are intended to be used as reference sources and learning aids. They should help you understand the subject matter better, serve as examples of proper research and writing techniques, and guide you in creating your own original work.",
      category: "integrity"
    },
    {
      question: "Is using your service considered cheating?",
      answer: "Our service is designed to provide academic assistance and learning support. We encourage our clients to use our materials ethically, as research and reference tools to enhance their understanding and improve their own work. The proper use of our service aligns with academic integrity principles.",
      category: "integrity"
    },
    {
      question: "Do you write completely original papers?",
      answer: "Yes, all our papers are written from scratch based on your specific requirements. We conduct thorough research and properly cite all sources. Every paper undergoes a plagiarism check before delivery to ensure 100% originality.",
      category: "integrity"
    },
    {
      question: "What citation styles do you support?",
      answer: "We support all major citation styles, including APA, MLA, Chicago, Harvard, Vancouver, and others. Our writers are skilled in formatting papers according to any style guide you require.",
      category: "integrity"
    }
  ];

  const filteredFaqs = faqItems.filter(faq => faq.category === selectedCategory);
  
  const categories = [
    { id: "general", name: "General Questions", icon: HelpCircle },
    { id: "pricing", name: "Pricing & Payment", icon: DollarSign },
    { id: "process", name: "Process & Delivery", icon: Clock },
    { id: "privacy", name: "Privacy & Security", icon: Shield },
    { id: "integrity", name: "Academic Integrity", icon: BookOpen }
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-8 shadow-md dark:bg-card/60 dark:border-primary/40">
                <HelpCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Knowledge Base
                </span>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
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
                Find answers to common questions about our academic help services, policies, and processes.
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
                    className={`px-4 py-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-2 
                      ${selectedCategory === category.id 
                        ? "bg-gradient-to-br from-primary/90 to-accent/90 text-white dark:text-white shadow-lg shadow-primary/30"
                        : "bg-card/90 border border-primary/20 dark:bg-card/70 text-foreground hover:bg-primary/10 dark:hover:bg-primary/10"
                      }`}
                    whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <category.icon className={`h-5 w-5 ${selectedCategory === category.id ? "text-white" : "text-primary"}`} />
                    <span className="text-sm font-medium">{category.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
            
            {/* FAQ Accordion */}
            <motion.div 
              className="space-y-4 bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-2xl p-6 shadow-lg"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    className={`flex justify-between items-center w-full px-6 py-4 text-left font-medium focus:outline-none transition-colors duration-300 ${
                      openFaqIndex === index 
                        ? "bg-primary/10 text-primary" 
                        : "bg-card/80 hover:bg-card/90"
                    }`}
                    whileHover={{ 
                      scale: 1.01,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    <span className="text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ml-2"
                    >
                      <ChevronDown className="h-4 w-4 text-primary" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          marginTop: 0
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          marginTop: 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-5 bg-card/50 border-t border-primary/10">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Contact CTA */}
            <motion.div
              className="mt-16 p-8 bg-gradient-to-r from-primary/90 via-primary to-accent/90 rounded-2xl text-center shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Animated overlay pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
              
              {/* Subtle light highlights */}
              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Still have questions?</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Can&apos;t find the answer you&apos;re looking for? Our friendly support team is here to help you with any queries you might have.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-primary font-medium text-center shadow-xl shadow-primary/20 relative overflow-hidden group"
                  >
                    {/* Button highlight effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                    <span className="flex items-center">
                      Contact Our Support Team
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 