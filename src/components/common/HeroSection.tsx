"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,


} from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { useRef } from "react";

export default function HeroSection() {

  const heroRef = useRef<HTMLDivElement>(null);





  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.4)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background to-muted/30"
    >
      {/* Enhanced background gradient for better light mode appearance */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/90 to-background dark:from-primary/10 dark:via-background/80 dark:to-background z-0" />

      {/* Animated gradient overlay with improved contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-accent/10 to-transparent dark:from-primary/20 dark:via-accent/15 dark:to-transparent opacity-70 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient lines with better visibility in light mode */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent dark:via-primary/70" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent dark:via-accent/70" />

        {/* Animated particles with improved visibility in light mode */}
        <div className="absolute inset-0 opacity-40 dark:opacity-40">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/90 dark:bg-primary/90"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left content section */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-8 shadow-md dark:bg-card/60 dark:border-primary/40"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">
                Trusted by 10,000+ students worldwide
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight tracking-tight"
              variants={itemVariants}
            >
              <motion.span
                className="block mb-2 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Elevate Your
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Academic&nbsp; <br />
                <Highlight>Success</Highlight>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg"
              variants={itemVariants}
            >
              Get premium assistance with essays, research papers, and
              assignments from our elite team of academic experts. Achieve the
              excellence you deserve.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 mb-16"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-center transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                <Link href="/contact" className="inline-flex items-center">
                  <span>Get Started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card border-2 border-primary/50 text-foreground font-medium text-center transition-all duration-300 hover:border-primary hover:bg-primary/10 w-full sm:w-auto shadow-sm"
              >
                <Link href="/services">
                  <span>View Services</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats section with improved light mode visibility */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-5"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-md p-5 rounded-2xl border border-primary/30 shadow-lg overflow-hidden relative group dark:from-card/80 dark:to-card/50"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(var(--primary-rgb), 0.15), 0 10px 10px -5px rgba(var(--primary-rgb), 0.08)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-all duration-300" />
                <div className="text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Success Rate
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-md p-5 rounded-2xl border border-primary/30 shadow-lg overflow-hidden relative group dark:from-card/80 dark:to-card/50"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(var(--primary-rgb), 0.15), 0 10px 10px -5px rgba(var(--primary-rgb), 0.08)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-all duration-300" />
                <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Expert Support
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-md p-5 rounded-2xl border border-primary/30 shadow-lg overflow-hidden relative group dark:from-card/80 dark:to-card/50"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(var(--primary-rgb), 0.15), 0 10px 10px -5px rgba(var(--primary-rgb), 0.08)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-all duration-300" />
                <div className="text-4xl font-bold text-primary mb-1">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Customer Rating
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image section with improved light mode contrast */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 relative w-full"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto sm:max-w-lg">
              {/* Image container with better light mode styling */}
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden z-10 bg-card/40 dark:bg-card/20 border border-primary/20 shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/hero-image.svg"
                  alt="Students getting academic help"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain p-4 z-20"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
