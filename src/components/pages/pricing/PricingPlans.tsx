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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="py-20 md:py-32 relative overflow-hidden">
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
        {/* Billing toggle */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-card/50 backdrop-blur-sm p-1.5 rounded-full inline-flex border border-border/50 shadow-lg relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-50"></div>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingPeriod === 'annually'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annually <span className="text-green-400 font-medium ml-1">Save 20%</span>
            </button>
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
              className="group relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.popular ? 'from-primary/20 to-accent/20' : 'from-primary/10 to-accent/10'} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10 transform group-hover:scale-105`} />
              
              <div className={`relative bg-card/80 backdrop-blur-sm border ${plan.popular ? 'border-primary/30' : 'border-border'} hover:border-primary/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,62,62,0.15)] z-10 h-full flex flex-col`}>
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white dark:text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Popular Choice
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{plan.name}</h3>
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                      ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annually}
                    </span>
                    <span className="text-muted-foreground ml-2">/ month</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">{plan.description}</p>
                  
                  <Link
                    href="/contact"
                    className={`relative inline-flex w-full items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full group ${plan.popular ? 'text-white' : 'text-foreground'}`}
                  >
                    <span className={`absolute inset-0 w-full h-full ${plan.popular ? 'bg-gradient-to-br from-primary to-accent' : 'bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20'} group-hover:opacity-90 transition duration-300 ease-out opacity-70`}></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/20 to-transparent h-1/3"></span>
                    <span className="relative font-medium text-base">Get Started</span>
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-card/90 to-card/50 dark:from-card/80 dark:to-card/40 px-8 py-6 border-t border-border/50 dark:border-border/30">
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
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
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
                
                {/* Animated border when hovered */}
                {hoveredPlan === index && (
                  <motion.div 
                    className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId="pricingBorder"
                  >
                    <div className={`absolute inset-0 rounded-2xl border-2 ${plan.popular ? 'border-primary/40' : 'border-primary/30'} animate-pulse`} />
                  </motion.div>
                )}
              </div>
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
        </motion.div>
      </div>
    </section>
  );
}
