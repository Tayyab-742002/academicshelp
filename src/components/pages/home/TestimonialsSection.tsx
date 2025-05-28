"use client";

import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Testimonial } from "@/lib/fallbackdata/testimonial";
import { getFeaturedTestimonials } from "@/lib/testimonials";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Loading from "@/components/common/loading";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  // Fetch testimonials
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const featuredTestimonials = await getFeaturedTestimonials();
        setTestimonials(featuredTestimonials);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // If no featured testimonials, don't render the section
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative "
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
            <div className="flex items-center justify-center space-x-2 bg-primary/20 dark:bg-primary/15 px-4 py-1.5 rounded-full ">
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

        <AnimatedTestimonials testimonials={testimonials} />
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/testimonials">
            <button className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium bg-[#ec705e]  rounded-full group cursor-pointer">
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/20 to-transparent h-1/3"></span>
              <span className="relative text-white font-medium text-base">
                View All Testimonials
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
