"use client";

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At Homework Help, we believe that every student deserves access to quality academic support. Our mission is to empower students to reach their full potential by providing expert assistance, valuable resources, and personalized guidance.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We&apos;re committed to maintaining the highest standards of academic integrity while helping students develop essential skills and knowledge for their future success.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/mission-image.jpg"
              alt="Our mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
