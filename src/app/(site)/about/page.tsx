"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              We're dedicated to helping students achieve academic excellence through professional support and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
                We're committed to maintaining the highest standards of academic integrity while helping students develop essential skills and knowledge for their future success.
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

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, from the quality of our work to our customer service.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards of academic integrity and ethical conduct in all our services.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously innovate our services to provide the best possible support for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Students Helped</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Expert Writers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</h3>
              <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 