"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PricingItem {
  service: string;
  description: string;
  priceRange: string;
}

export default function CustomPricing() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />
      
      {/* Red gradient accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-accent/5 dark:bg-accent/10 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Tailored Solutions</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            Custom Assignment Pricing
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help with a specific assignment? Check our per-service pricing below or contact us for a custom quote.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg overflow-hidden relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ boxShadow: "0 0 25px rgba(229,62,62,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 relative">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 dark:divide-border/30">
                {customPricing.map((item, index) => (
                  <motion.tr 
                    key={index} 
                    className="hover:bg-primary/5 transition-colors duration-200"
                    variants={itemVariants}
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
          <p className="text-muted-foreground mb-6 text-lg">
            Need a custom quote for your specific requirements?
          </p>
          
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium rounded-full group text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-80 group-hover:opacity-90 transition duration-300 ease-out"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/20 to-transparent h-1/3"></span>
              <span className="relative text-white font-medium text-base">Request a Custom Quote</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
