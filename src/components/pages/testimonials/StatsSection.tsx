"use client";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</h3>
            <p className="text-gray-600 dark:text-gray-300">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</h3>
            <p className="text-gray-600 dark:text-gray-300">Students Helped</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.8/5</h3>
            <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</h3>
            <p className="text-gray-600 dark:text-gray-300">Return Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
