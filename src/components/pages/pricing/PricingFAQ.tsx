"use client";

import { useState } from "react";

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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 py-4 bg-gray-50 dark:bg-gray-900 transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
