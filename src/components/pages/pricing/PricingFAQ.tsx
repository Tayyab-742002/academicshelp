"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How do you determine the pricing for custom assignments?",
      answer: "Our pricing is based on several factors including academic level, deadline, complexity, and length of the assignment. More complex assignments or those with tight deadlines may cost more than simpler assignments with longer timeframes."
    },
    {
      question: "Do you offer any discounts?",
      answer: "Yes! We offer discounts for first-time customers, bulk orders, and returning clients. We also have seasonal promotions throughout the year. Additionally, our annual subscription plans offer a 20% discount compared to monthly billing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed through secure payment gateways to ensure your financial information remains protected."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a money-back guarantee if we fail to deliver your assignment on time or if the quality doesn't meet your requirements. Please refer to our refund policy for specific terms and conditions."
    },
    {
      question: "Can I upgrade my subscription plan later?",
      answer: "Absolutely! You can upgrade your subscription plan at any time. When you upgrade, we'll prorate the remaining days in your current billing cycle and apply them to your new plan."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. The price you see is the price you pay. There are no hidden fees or additional charges unless you request additional services not included in your original order."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10 z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-40 dark:opacity-40 z-0">
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
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-8 shadow-md dark:bg-card/60 dark:border-primary/40">
              <svg
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">
                Frequently Asked Questions
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">Questions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              Find answers to the most common questions about our pricing and payment options.
            </p>
            
            {/* Animated decoration */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full mx-auto"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: 120, 
                opacity: 1,
                transition: { 
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1] 
                }
              }}
            />
          </motion.div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-xl border border-primary/20 dark:border-primary/30 shadow-md overflow-hidden"
              >
                <motion.button
                  className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.05)" }}
                  whileTap={{ scale: 0.995 }}
                >
                  <h3 className={`text-base font-medium ${openIndex === index ? 'text-primary' : 'text-foreground'} transition-colors duration-200`}>
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary/80 flex-shrink-0 ml-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t border-primary/10 dark:border-primary/20 bg-primary/5 dark:bg-primary/10">
                        <p className="text-muted-foreground text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Still have questions? Our team is ready to help!
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 dark:shadow-primary/15 transition-all duration-200"
              >
                Contact Support
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
