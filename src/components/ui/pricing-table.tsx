"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, HelpCircle, ArrowRight, Sparkles } from "lucide-react";

type PricingFeature = {
  name: string;
  included: boolean;
  tooltip?: string;
  highlight?: boolean;
};

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  features: PricingFeature[];
  cta: {
    text: string;
    href: string;
  };
  popular?: boolean;
  badge?: string;
  discount?: string;
};

export function PricingTable({
  plans,
  showYearly = true,
}: {
  plans: PricingPlan[];
  showYearly?: boolean;
}) {
  const [isYearly, setIsYearly] = useState(showYearly);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  // Filter all unique feature names for the comparison table
  const allFeatures = Array.from(
    new Set(
      plans.flatMap(plan => 
        plan.features.map(feature => feature.name)
      )
    )
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="relative flex items-center p-1 rounded-full border border-primary/20 bg-card/70 backdrop-blur-sm shadow-sm">
          <button
            onClick={() => setIsYearly(false)}
            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              !isYearly
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              isYearly
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Yearly
            {showYearly && (
              <div className="absolute -top-3 -right-8 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Save 20%
              </div>
            )}
          </button>
          {/* Active indicator pill */}
          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-primary transition-all duration-200 z-0 ${
              isYearly ? "left-1/2" : "left-1"
            }`}
          />
        </div>
      </div>

      {/* Plans - Card view for mobile */}
      <div className="grid grid-cols-1 gap-6 lg:hidden">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className={`relative overflow-hidden rounded-2xl border ${
              plan.popular
                ? "border-primary/50 dark:border-primary/70"
                : "border-primary/20 dark:border-primary/30"
            } bg-card p-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="h-20 w-20 overflow-hidden">
                  <div className="absolute top-0 right-0 h-8 w-32 -translate-y-2 translate-x-8 rotate-45 bg-primary text-center text-xs font-semibold leading-8 text-primary-foreground shadow-sm">
                    Popular
                  </div>
                </div>
              </div>
            )}
            
            {/* Badge */}
            {plan.badge && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                {plan.badge}
              </div>
            )}

            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
            
            <div className="mt-4 flex items-baseline text-foreground">
              <span className="text-3xl font-bold tracking-tight">
                {isYearly ? plan.price.yearly : plan.price.monthly}
              </span>
              <span className="ml-1 text-sm text-muted-foreground">
                {isYearly ? "/year" : "/month"}
              </span>
            </div>
            
            {/* Discount */}
            {isYearly && plan.discount && (
              <div className="mt-1 text-sm text-green-600 dark:text-green-400">
                {plan.discount}
              </div>
            )}
            
            {/* CTA Button */}
            <div className="mt-6">
              <Link href={plan.cta.href}>
                <motion.div
                  className={`w-full py-3 px-4 rounded-xl flex items-center justify-center ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-card border border-primary/30 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20"
                  } text-center font-medium transition-colors duration-200`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.popular && <Sparkles className="mr-2 h-4 w-4" />}
                  {plan.cta.text}
                </motion.div>
              </Link>
            </div>
            
            {/* Features */}
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 ${feature.included ? "text-green-500 dark:text-green-400" : "text-gray-400"}`}>
                    {feature.included ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <X className="h-5 w-5" />
                    )}
                  </div>
                  <span className={`text-sm ${feature.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                    {feature.name}
                    {feature.tooltip && (
                      <button 
                        className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 inline-flex"
                        title={feature.tooltip}
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Plans - Table view for desktop */}
      <div className="hidden lg:block overflow-hidden">
        <div className="relative rounded-2xl border border-primary/20 dark:border-primary/30 bg-card overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-1 divide-y divide-primary/10 lg:grid-cols-[1fr_repeat(3,minmax(0,1fr))] lg:divide-y-0 lg:divide-x">
            {/* Empty cell for features column */}
            <div className="px-6 py-8 bg-card/50">
              <div className="font-medium text-lg">
                Compare plans
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Choose the plan that works best for you
              </div>
            </div>
            
            {/* Plan headers */}
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`px-6 py-8 relative ${
                  plan.popular ? "bg-primary/5 dark:bg-primary/10" : "bg-card/50"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="h-20 w-20 overflow-hidden">
                      <div className="absolute top-0 right-0 h-8 w-32 -translate-y-2 translate-x-8 rotate-45 bg-primary text-center text-xs font-semibold leading-8 text-primary-foreground shadow-sm">
                        Popular
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Badge */}
                {plan.badge && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl font-bold tracking-tight">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
                
                {/* Discount */}
                {isYearly && plan.discount && (
                  <div className="mt-1 text-sm text-green-600 dark:text-green-400">
                    {plan.discount}
                  </div>
                )}
                
                {/* CTA Button */}
                <div className="mt-6">
                  <Link href={plan.cta.href}>
                    <motion.div
                      className={`w-full py-3 px-4 rounded-xl flex items-center justify-center ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-card border border-primary/30 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20"
                      } text-center font-medium transition-colors duration-200`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.popular && <Sparkles className="mr-2 h-4 w-4" />}
                      {plan.cta.text}
                    </motion.div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Table features */}
          <div className="divide-y divide-primary/10">
            {allFeatures.map((featureName) => (
              <div
                key={featureName}
                className={`grid grid-cols-1 lg:grid-cols-[1fr_repeat(3,minmax(0,1fr))] lg:divide-x lg:divide-primary/10 divide-y divide-primary/10 lg:divide-y-0 ${
                  hoveredFeature === featureName ? "bg-primary/5 dark:bg-primary/10" : ""
                }`}
                onMouseEnter={() => setHoveredFeature(featureName)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="px-6 py-4 flex items-center">
                  <span className="text-sm font-medium">{featureName}</span>
                </div>
                
                {plans.map((plan) => {
                  // Find if this feature exists in this plan
                  const feature = plan.features.find(f => f.name === featureName);
                  const isIncluded = feature?.included || false;
                  const isHighlighted = feature?.highlight || false;
                  
                  return (
                    <div
                      key={`${plan.id}-${featureName}`}
                      className={`px-6 py-4 flex items-center justify-center ${
                        plan.popular ? "bg-primary/5 dark:bg-primary/10" : ""
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${isIncluded}-${featureName}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className={`${isHighlighted ? "text-primary dark:text-primary-foreground font-medium" : isIncluded ? "text-green-500 dark:text-green-400" : "text-gray-400"}`}
                        >
                          {isIncluded ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            <X className="h-5 w-5" />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTable; 