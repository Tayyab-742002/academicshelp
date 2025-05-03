"use client";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Student Testimonials
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Hear from students who have achieved academic success with our expert assistance. These testimonials reflect real experiences from students at various academic levels.
          </p>
        </div>
      </div>
    </section>
  );
}
