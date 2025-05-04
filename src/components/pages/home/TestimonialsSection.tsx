"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Psychology Student, University of Michigan",
      quote:
        "The essay I received was well-researched and perfectly formatted. My professor was impressed with the quality!",
      rating: 5,
      image: "/testimonials/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Computer Science Major, Stanford University",
      quote:
        "I was struggling with a complex coding assignment until I found this service. The solution was elegant and well-documented.",
      rating: 5,
      image: "/testimonials/michael.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Business Administration, NYU",
      quote:
        "Their dissertation assistance helped me organize my research and present it in a coherent manner. Highly recommended!",
      rating: 4,
      image: "/testimonials/emily.jpg",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
        style={{ opacity }}
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -top-20 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl z-0"
        style={{ y: y1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full ">
              <span className="w-2 h-2 rounded-full  dark:bg-[#EC705E] bg-accent animate-pulse" />
              <span className="text-sm font-medium  ">Student Success</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students who have achieved academic success with our help.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onHoverStart={() => setActiveIndex(index)}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10 transform group-hover:scale-105" />

              <div className="bg-card/80 backdrop-blur-sm border border-border hover:border-primary/20 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,62,62,0.15)] relative z-10">
                {/* Quote mark decoration */}
                <div className="absolute top-6 right-6 text-6xl leading-none text-primary/10 font-serif">
                  "
                </div>

                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={testimonial.image || "/placeholder-avatar.png"}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-400 group-hover:text-amber-500" : "text-gray-300 dark:text-gray-600"} transition-colors duration-300`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-foreground italic relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>

                {/* Animated particles */}
                {activeIndex === index &&
                  Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        opacity: 0,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -10, -20],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 1,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Link
            href="/testimonials"
            className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full group-hover:opacity-80 bg-[#EC705E] transition duration-300 ease-out"></span>
            <span className="relative text-white transition-colors duration-300 ">
              View All Testimonials
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
