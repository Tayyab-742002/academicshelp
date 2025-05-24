"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
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

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
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
          {Array.from({ length: 10 }).map((_, i) => (
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
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
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
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="text-sm font-medium">
              We respond within 24 hours
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
            variants={itemVariants}
          >
            <span className="block mb-2 text-foreground">
              Get in Touch
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
              With Our Team
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Have questions about our services or need help with an assignment?
            Our team of experts is here to assist you every step of the way.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Link href="#contact-form" className="inline-flex items-center">
                <span>Send Message</span>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card border-2 border-primary/50 text-foreground font-medium transition-all duration-200 hover:border-primary hover:bg-primary/10 shadow-sm"
            >
              <a href="tel:+15551234567">
                <span>Call Us Now</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
