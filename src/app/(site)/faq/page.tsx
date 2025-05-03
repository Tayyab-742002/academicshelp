"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does your service work?",
      answer: "Our service is simple and straightforward. First, you submit your assignment requirements through our order form. Then, we match you with an expert writer who specializes in your subject area. The writer will complete your assignment according to your specifications and deliver it before the deadline. You can request revisions if needed, and we guarantee your satisfaction."
    },
    {
      question: "Are your writers qualified?",
      answer: "Yes, all our writers are highly qualified professionals with advanced degrees in their respective fields. They undergo a rigorous selection process and are required to demonstrate their expertise through writing samples and subject-specific tests. Many of our writers hold PhDs or Master's degrees from prestigious universities."
    },
    {
      question: "Is your service confidential?",
      answer: "Absolutely. We take your privacy very seriously. All your personal information and assignment details are kept strictly confidential. We never share your information with third parties, and all communication is encrypted. Your identity and the work we provide remain completely private."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We offer unlimited revisions until you're completely satisfied with the work. If you're not happy with the final product, you can request revisions at no additional cost. Our money-back guarantee ensures that you'll either get the quality work you need or receive a full refund."
    },
    {
      question: "How do you ensure the work is original?",
      answer: "We have a strict policy against plagiarism. All work is checked using advanced plagiarism detection software before delivery. Our writers create original content from scratch, properly citing all sources. You'll receive a plagiarism report with your completed assignment to verify its originality."
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover a wide range of academic subjects including but not limited to: Mathematics, Physics, Chemistry, Biology, Engineering, Computer Science, Business, Economics, Psychology, Sociology, History, Literature, and Languages. If you have a specific subject not listed here, please contact us to confirm availability."
    },
    {
      question: "How do you handle urgent assignments?",
      answer: "We understand that sometimes you need work completed quickly. We offer express delivery options for urgent assignments, with turnaround times as short as 3 hours. Our team is available 24/7 to handle urgent requests, and we maintain the same high quality standards regardless of the deadline."
    },
    {
      question: "Can I communicate with my writer?",
      answer: "Yes, you can communicate directly with your assigned writer through our secure messaging system. This allows you to provide additional instructions, ask questions, or request updates on your assignment's progress. Our support team is also available 24/7 to assist you with any concerns."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed through secure, encrypted channels to ensure your financial information remains protected."
    },
    {
      question: "Do you offer discounts for returning customers?",
      answer: "Yes, we value our returning customers and offer various loyalty programs and discounts. These include seasonal promotions, referral bonuses, and special discounts for bulk orders. You can also earn points with each order that can be redeemed for future discounts."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Find answers to common questions about our services and how we can help you succeed academically.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 