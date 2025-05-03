"use client";

import Link from "next/link";

interface PricingItem {
  service: string;
  description: string;
  priceRange: string;
}

export default function CustomPricing() {
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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Custom Assignment Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Need help with a specific assignment? Check our per-service pricing below or contact us for a custom quote.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {customPricing.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.service}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{item.description}</td>
                    <td className="px-6 py-4 text-sm text-right font-medium text-gray-900 dark:text-white">{item.priceRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom quote for your specific requirements?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
