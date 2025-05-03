"use client";

import Link from "next/link";
import { useState } from "react";

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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                billingPeriod === 'monthly'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                billingPeriod === 'annually'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Annually <span className="text-green-500 font-medium">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border ${
                plan.popular 
                  ? 'border-blue-500 dark:border-blue-400 relative' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <Link
                  href="/contact"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-8 py-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  What's included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-green-500 mt-0.5 mr-2" 
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
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
