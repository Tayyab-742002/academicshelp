"use client";

import Link from "next/link";
import { motion, cubicBezier, Variants } from "framer-motion";

interface PricingItem {
  service: string;
  description: string;
  priceRange: string;
}

export default function CustomPricing() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, 
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    }
  };
  
  const customPricing: PricingItem[] = [
    {
      service: "Essay Writing",
      description: "Custom essays written from scratch, tailored to your requirements.",
      priceRange: "$15-25 per page"
    },
    {
      service: "Research Papers",
      description: "In-depth research papers with proper citations and formatting.",
      priceRange: "$18-30 per page"
    },
    {
      service: "Dissertation Chapters",
      description: "Professional assistance with dissertation chapters.",
      priceRange: "$25-40 per page"
    },
    {
      service: "Case Studies",
      description: "Detailed case study analysis with practical insights.",
      priceRange: "$20-35 per page"
    },
    {
      service: "Programming Assignments",
      description: "Coding help in various programming languages with documentation.",
      priceRange: "$50-120 per assignment"
    },
    {
      service: "Math Problems",
      description: "Step-by-step solutions for math problems with explanations.",
      priceRange: "$15-30 per problem"
    }
  ];

  return (
    <section id="custom-pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
      
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
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-accent/40 text-accent mb-8 shadow-md dark:bg-card/60 dark:border-accent/40">
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span className="text-sm font-medium">
              Tailored Solutions
            </span>
          </div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block mb-2 text-foreground">
              Custom Assignment
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
              Pricing
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Need help with a specific assignment? Check our per-service pricing below or contact us for a custom quote.
          </motion.p>
          
          {/* Animated decoration */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ 
              width: 120, 
              opacity: 1,
              transition: { 
                duration: 0.8,
                delay: 0.3,
                ease: cubicBezier(0.22, 1, 0.36, 1) 
              }
            }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg overflow-hidden relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/15 dark:to-accent/15">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 dark:divide-primary/20">
                {customPricing.map((item, index) => (
                  <motion.tr 
                    key={index} 
                    className="hover:bg-primary/5 transition-colors duration-200"
                    variants={itemVariants}
                    custom={index}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{item.service}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{item.description}</td>
                    <td className="px-6 py-4 text-sm text-right font-medium text-primary">{item.priceRange}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="text-muted-foreground mb-8 text-lg">
            Need a custom quote for your specific requirements?
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              Request a Custom Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
