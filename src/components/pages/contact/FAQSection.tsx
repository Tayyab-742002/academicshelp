"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include your name, contact information, and a detailed description of your inquiry or request."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support through our live chat and email systems."
    },
    {
      question: "Can I schedule a video consultation?",
      answer: "Absolutely! You can request a video consultation through our contact form, and our team will follow up to schedule a convenient time."
    },
    {
      question: "Is there a phone number for urgent matters?",
      answer: "Yes, for urgent inquiries you can reach our priority support team at +1 (555) 987-6543."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  
  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/95 dark:from-background/95 dark:via-background dark:to-background/90 z-0" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] dark:bg-[url('/dots-pattern-dark.svg')] bg-repeat opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-foreground mb-12"
            variants={faqVariants}
            custom={0}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={faqVariants}
                className="border border-card/20 dark:border-card/10 bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <motion.button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                  whileHover={{ backgroundColor: "rgba(var(--card), 0.8)" }}
                  whileTap={{ scale: 0.995 }}
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-muted-foreground border-t border-card/20 dark:border-card/10 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            variants={faqVariants}
            custom={faqs.length + 1}
          >
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#contact-form" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg transition-colors duration-200"
            >
              <span>Contact Our Team</span>
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
