"use client";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Comprehensive academic assistance tailored to your needs. Explore our range of services designed to help you excel in your studies.
          </p>
        </div>
      </div>
    </section>
  );
}
