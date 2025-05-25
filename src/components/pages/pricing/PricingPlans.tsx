"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PricingPlan, getPricingPlans, calculateAnnualPrice } from "@/lib/pricing";
import { Icons } from "@/components/ui/icons";

interface PricingPlansProps {
  initialPlans?: PricingPlan[];
}

export default function PricingPlans({ initialPlans = [] }: PricingPlansProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(initialPlans);
  const [loading, setLoading] = useState<boolean>(initialPlans.length === 0);
  
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

  // Fetch pricing plans from Sanity only if no initialPlans were provided
  useEffect(() => {
    async function fetchPricingPlans() {
      // Only fetch if we don't already have plans
      if (initialPlans.length === 0) {
        try {
          const plans = await getPricingPlans();
          setPricingPlans(plans);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching pricing plans:", error);
          setLoading(false);
        }
      }
    }
    
    fetchPricingPlans();
  }, [initialPlans]);

  // Function to get icon component
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    
    // @ts-ignore - dynamic icon name
    const IconComponent = Icons[iconName];
    
    if (IconComponent) {
      return <IconComponent className="h-5 w-5 mr-2" />;
    }
    
    return null;
  };

  // Loading skeleton
  if (loading) {
    return (
      <section id="pricing-plans" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-16">
            <div className="bg-card/90 backdrop-blur-sm p-1.5 rounded-full inline-flex animate-pulse w-64 h-12"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card/80 rounded-2xl border border-primary/20 shadow-lg overflow-hidden h-96 animate-pulse">
                <div className="p-8">
                  <div className="h-6 bg-muted/50 rounded mb-4 w-1/3"></div>
                  <div className="h-10 bg-muted/50 rounded mb-4 w-1/2"></div>
                  <div className="h-4 bg-muted/50 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-muted/50 rounded mb-8 w-2/3"></div>
                  <div className="h-12 bg-muted/50 rounded w-full"></div>
                </div>
                <div className="px-8 py-6 bg-muted/10 border-t border-primary/20">
                  <div className="h-4 bg-muted/50 rounded mb-4 w-1/2"></div>
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-start mb-3">
                      <div className="w-5 h-5 rounded-full bg-muted/50 mr-3"></div>
                      <div className="h-4 bg-muted/50 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
              key={plan._id}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <motion.div 
                className={`relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border ${plan.featured ? 'border-primary/30' : 'border-primary/20 dark:border-primary/30'} shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col`}
                style={plan.color ? { borderColor: `${plan.color}30` } : {}}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                {/* Hover glow effect */}
                {hoveredPlan === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.featured ? 'from-primary/15 to-accent/15' : 'from-primary/10 to-accent/10'}`}
                    style={plan.color ? { background: `linear-gradient(to right, ${plan.color}15, ${plan.color}10)` } : {}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white dark:text-white px-4 py-1 rounded-bl-lg text-sm font-medium"
                       style={plan.color ? { background: `linear-gradient(to right, ${plan.color}, ${plan.color}cc)` } : {}}>
                    Popular Choice
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    {plan.icon && getIconComponent(plan.icon)}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300"
                        style={plan.color ? { color: plan.color } : {}}>
                      {plan.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary"
                          style={plan.color ? { backgroundImage: `linear-gradient(to right, ${plan.color}, ${plan.color}aa, ${plan.color})` } : {}}>
                      ${billingPeriod === 'monthly' ? plan.basePrice : calculateAnnualPrice(plan.basePrice)}
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
                      className={`relative inline-flex w-full items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full shadow-md ${plan.featured ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20' : 'bg-card border-2 border-primary/50 text-foreground hover:border-primary hover:bg-primary/10'} transition-all duration-300`}
                      style={plan.featured && plan.color ? { 
                        backgroundColor: plan.color,
                        color: '#ffffff'
                      } : plan.color ? { 
                        borderColor: `${plan.color}50`,
                        color: plan.color,
                        '&:hover': { borderColor: plan.color, backgroundColor: `${plan.color}10` }
                      } : {}}
                    >
                      <span className="relative font-medium">{plan.ctaText || "Get Started"}</span>
                    </Link>
                  </motion.div>
                </div>
                
                <div className="bg-gradient-to-br from-card/90 to-card/50 dark:from-card/80 dark:to-card/40 px-8 py-6 border-t border-primary/20 dark:border-primary/30"
                     style={plan.color ? { borderColor: `${plan.color}20` } : {}}>
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
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? (plan.featured ? 'bg-primary/20' : 'bg-primary/10') : 'bg-muted/30'}`}
                               style={feature.included && plan.color ? { backgroundColor: `${plan.color}20` } : {}}>
                            {feature.included ? (
                              <svg 
                                className={`h-3 w-3 ${feature.highlight ? 'text-primary' : 'text-primary/80'}`}
                                style={plan.color ? { color: feature.highlight ? plan.color : `${plan.color}cc` } : {}}
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
                            ) : (
                              <svg 
                                className="h-3 w-3 text-muted-foreground" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M6 18L18 6M6 6l12 12" 
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="relative group">
                          <span className={`${feature.included ? (feature.highlight ? 'text-foreground font-medium' : 'text-muted-foreground') : 'text-muted-foreground/60 line-through'}`}>
                            {feature.feature}
                          </span>
                          
                          {feature.tooltip && (
                            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                              {feature.tooltip}
                              <div className="absolute top-full left-4 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-popover"></div>
                            </div>
                          )}
                        </div>
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
