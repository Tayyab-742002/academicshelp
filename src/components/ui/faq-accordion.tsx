"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TagLine from "./TagLine";
import { FileQuestion, TagIcon } from "lucide-react";
interface FAQSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}
export default function FAQSection({ faqs }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  

  
  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  // Animation variants
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-background/90 z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
      
      {/* Animated gradient line */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/60" /> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            custom={0}
            className="text-center mb-12"
          >
            <TagLine
            
              tagline="Frequently Asked Questions"
              TagLineIcon={<FileQuestion className="h-4 w-4 mr-2" />}
            />
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Find answers to the most common questions about our services and support options.
            </p>
          </motion.div>
          
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index + 1}
                className="bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-md rounded-xl border border-primary/20 dark:border-primary/30 shadow-md overflow-hidden"
              >
                <motion.button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.05)" }}
                  whileTap={{ scale: 0.995 }}
                >
                  <h3 className={`text-base font-medium ${expandedIndex === index ? 'text-primary' : 'text-foreground'} transition-colors duration-200`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 45 : 0 }}
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
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t border-primary/10 dark:border-primary/20 bg-primary/5 dark:bg-primary/10">
                        <p className="text-muted-foreground text-sm">
                          {faq.answer}
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
            custom={faqs.length + 1}
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
                href="#contact-form"
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
