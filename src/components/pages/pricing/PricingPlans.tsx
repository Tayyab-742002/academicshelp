"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic",
      price: {
        monthly: 29,
        annually: 24,
      },
      description: "Perfect for occasional homework help and basic assignments.",
      features: [
        "Up to 3 assignments per month",
        "48-hour turnaround time",
        "Email support",
        "Basic revisions",
        "Access to learning resources"
      ]
    },
    {
      name: "Standard",
      price: {
        monthly: 59,
        annually: 49,
      },
      description: "Ideal for regular academic assistance throughout the semester.",
      features: [
        "Up to 8 assignments per month",
        "24-hour turnaround time",
        "Email and chat support",
        "Multiple revisions",
        "Access to learning resources",
        "Plagiarism report included"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: {
        monthly: 99,
        annually: 79,
      },
      description: "Comprehensive support for demanding academic schedules.",
      features: [
        "Unlimited assignments",
        "12-hour turnaround time",
        "Priority email, chat, and phone support",
        "Unlimited revisions",
        "Access to premium learning resources",
        "Plagiarism report included",
        "Dedicated academic advisor"
      ]
    }
  ];

  return (
    <section id="pricing-plans" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
      
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/60" />
      
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
        {/* Billing toggle */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-card/90 backdrop-blur-sm p-1.5 rounded-full inline-flex border border-primary/20 dark:border-primary/30 shadow-md overflow-hidden relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-50"></div>
            
            <motion.button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Monthly
            </motion.button>
            
            <motion.button
              onClick={() => setBillingPeriod('annually')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingPeriod === 'annually'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Annually <span className="text-green-400 font-medium ml-1">Save 20%</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <motion.div 
                className={`relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border ${plan.popular ? 'border-primary/30' : 'border-primary/20 dark:border-primary/30'} shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col`}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                {/* Hover glow effect */}
                {hoveredPlan === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.popular ? 'from-primary/15 to-accent/15' : 'from-primary/10 to-accent/10'} rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 transform scale-105`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white dark:text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Popular Choice
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{plan.name}</h3>
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
                      ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annually}
                    </span>
                    <span className="text-muted-foreground ml-2">/ month</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">{plan.description}</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className={`relative inline-flex w-full items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full shadow-md ${plan.popular ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20' : 'bg-card border-2 border-primary/50 text-foreground hover:border-primary hover:bg-primary/10'} transition-all duration-300`}
                    >
                      <span className="relative font-medium">Get Started</span>
                    </Link>
                  </motion.div>
                </div>
                
                <div className="bg-gradient-to-br from-card/90 to-card/50 dark:from-card/80 dark:to-card/40 px-8 py-6 border-t border-primary/20 dark:border-primary/30">
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground/80">
                    What's included
                  </h4>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        <div className="mr-3 mt-0.5">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-primary/20' : 'bg-primary/10'}`}>
                            <svg 
                              className="h-3 w-3 text-primary" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                              />
                            </svg>
                          </div>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="text-muted-foreground mb-4">All plans include unlimited revisions and 24/7 support</p>
          
          {/* Animated decoration */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full mx-auto mt-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ 
              width: 120, 
              opacity: 1,
              transition: { 
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }
            }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}
