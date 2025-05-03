"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/team/member1.jpg"
                alt="Team member 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Academic Director</p>
              <p className="text-gray-600 dark:text-gray-300">
                PhD in Education with 15 years of experience in academic support and curriculum development.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/team/member2.jpg"
                alt="Team member 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Michael Chen</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Technical Lead</p>
              <p className="text-gray-600 dark:text-gray-300">
                Master's in Computer Science with expertise in educational technology and online learning platforms.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/team/member3.jpg"
                alt="Team member 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Emily Rodriguez</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Student Support Manager</p>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor's in Psychology with extensive experience in student counseling and academic support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
