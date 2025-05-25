import FAQSection from '@/components/ui/faq-accordion'
import React from 'react'

interface FAQItem {
  question: string;
  answer: string;
}
const PricingFAQ = () => {
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
  return (
    <FAQSection faqs={faqItems} />
  )
}

export default PricingFAQ