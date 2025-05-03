"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Animation utility function
function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

export default function Home() {
  const scrollY = useScrollAnimation();

  // Services data
  const services = [
    {
      title: "Essay Writing",
      icon: "pen-tool",
      description: "Professional essays tailored to your requirements with thorough research and proper citations.",
      href: "/services/essay-writing",
    },
    {
      title: "Research Papers",
      icon: "file-text",
      description: "In-depth research papers with proper methodology and academic rigor.",
      href: "/services/research-papers",
    },
    {
      title: "Homework Help",
      icon: "book-open",
      description: "Expert assistance with assignments across various subjects and difficulty levels.",
      href: "/services/homework-help",
    },
    {
      title: "Exam Preparation",
      icon: "award",
      description: "Comprehensive study materials and practice tests for exam success.",
      href: "/services/exam-preparation",
    },
    {
      title: "Dissertation Writing",
      icon: "book",
      description: "Full dissertation services from proposal to final defense preparation.",
      href: "/services/dissertation-writing",
    },
    {
      title: "Coding Assignments",
      icon: "code",
      description: "Programming help in various languages with detailed explanations.",
      href: "/services/coding-assignments",
    },
  ];

  // Guarantees data
  const guarantees = [
    {
      title: "24/7 Support",
      icon: "headphones",
      description: "Our team is available round the clock to assist you with any questions.",
    },
    {
      title: "100% Confidential",
      icon: "shield",
      description: "Your personal information is protected and never shared with third parties.",
    },
    {
      title: "Money-Back Promise",
      icon: "dollar-sign",
      description: "Not satisfied with our service? Get your money back, no questions asked.",
    },
  ];

  // How it works steps
  const howItWorks = [
    {
      step: 1,
      title: "Submit Details",
      description: "Fill out our simple form with your assignment requirements and deadline.",
      icon: "clipboard",
    },
    {
      step: 2,
      title: "Match with Expert",
      description: "We'll connect you with a subject matter expert who specializes in your topic.",
      icon: "users",
    },
    {
      step: 3,
      title: "Receive Solution",
      description: "Get your completed assignment delivered to your inbox before the deadline.",
      icon: "check-circle",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Psychology Student, University of Michigan",
      quote: "The essay I received was well-researched and perfectly formatted. My professor was impressed with the quality!",
      rating: 5,
      image: "/testimonials/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Computer Science Major, Stanford University",
      quote: "I was struggling with a complex coding assignment until I found this service. The solution was elegant and well-documented.",
      rating: 5,
      image: "/testimonials/michael.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Business Administration, NYU",
      quote: "Their dissertation assistance helped me organize my research and present it in a coherent manner. Highly recommended!",
      rating: 4,
      image: "/testimonials/emily.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div 
              className="md:w-1/2 mb-10 md:mb-0 transition-all duration-700 transform"
              style={{
                opacity: 1 - Math.min(scrollY / 500, 0.3),
                transform: `translateY(${Math.min(scrollY / 10, 20)}px)`,
              }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Get <span className="text-blue-600 dark:text-blue-400">Top Grades</span>, Stress-Free
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                Professional academic assistance for students at all levels. Our experts help you achieve academic excellence with personalized support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Order Now
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-800 dark:text-white font-medium text-center transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div 
                className="relative w-full h-[400px] transition-all duration-700"
                style={{
                  transform: `translateY(${-Math.min(scrollY / 15, 30)}px)`,
                }}
              >
                <Image
                  src="/hero-image.png"
                  alt="Students studying with academic assistance"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-50 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100 dark:bg-blue-900/20 rounded-tr-full opacity-50 dark:opacity-30"></div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Academic Services</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive academic assistance tailored to your specific needs and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-blue-600 dark:text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {service.icon === "pen-tool" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    )}
                    {service.icon === "file-text" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    )}
                    {service.icon === "book-open" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                    {service.icon === "award" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {service.icon === "book" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                    {service.icon === "code" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Guarantees</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to providing the highest quality academic assistance with these promises.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 max-w-xs w-full transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-blue-600 dark:text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {guarantee.icon === "headphones" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    )}
                    {guarantee.icon === "shield" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {guarantee.icon === "dollar-sign" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{guarantee.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our simple three-step process to get the academic assistance you need.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3 px-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-center transition-all duration-300 inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what students have to say about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 dark:bg-gray-700">
                    <div className="relative w-full h-full">
                      <Image
                        src={testimonial.image || "/placeholder-avatar.png"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-800 dark:text-white font-medium text-center transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 inline-block"
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your Academic Performance?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students who have achieved academic success with our expert assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-blue-600 font-medium text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
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

      {/* Disclaimer Section */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Our services are intended for reference and guidance purposes only. We encourage ethical use of our materials in accordance with academic integrity policies.
          </p>
        </div>
      </section>
    </div>
  );
}
