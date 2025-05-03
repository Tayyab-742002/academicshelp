"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Choose the plan that works best for you or contact us for a custom solution tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-blue-600 font-medium text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 rounded-full border border-white hover:bg-blue-700 dark:hover:bg-blue-900 text-white font-medium text-center transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
