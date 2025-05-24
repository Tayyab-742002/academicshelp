"use client";

import { motion } from "framer-motion";

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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
            variants={itemVariants}
          >
            <span className="block mb-2 text-foreground">
              Simple & Transparent
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
              Pricing Plans
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Affordable academic assistance tailored to your needs. Choose the
            plan that works best for you.
          </motion.p>
          
          {/* Animated decoration */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full mx-auto mb-10"
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: 120, 
              opacity: 1,
              transition: { 
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1] 
              }
            }}
          />

          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              <a href="#pricing-plans" className="inline-flex items-center">
                <span>View Plans</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card border-2 border-primary/50 text-foreground font-medium transition-all duration-200 hover:border-primary hover:bg-primary/10 shadow-sm"
            >
              <a href="#custom-pricing">
                <span>Custom Pricing</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
