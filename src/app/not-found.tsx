"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  // Floating animations for decorative elements
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, custom, 0],
      rotate: [0, custom * 2, 0],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-60 dark:opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] opacity-60 dark:opacity-30" />

      {/* Decorative elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-0"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "30%",
            background: `rgba(var(--primary-rgb), ${0.1 + Math.random() * 0.2})`,
          }}
          custom={-10 + Math.random() * 20}
          variants={floatingVariants}
          animate="animate"
        />
      ))}

      {/* Main content */}
      <div className="container max-w-4xl px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Badge */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center px-6 py-3 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary shadow-md">
              <FileQuestion className="h-5 w-5 mr-2" />
              <span className="text-lg font-bold">Error 404</span>
            </div>
          </motion.div>

          {/* Main error message */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary/80">
              Page Not Found
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Oops! It seems the page you're looking for has been moved, deleted, or never existed.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/">
              <motion.div
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-center transition-all duration-200 shadow-lg shadow-primary/20 inline-block flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="h-5 w-5 mr-2" />
                Return Home
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                className="px-8 py-4 rounded-xl bg-card border border-primary/30 dark:border-primary/40 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 font-medium text-center transition-all duration-200 shadow-md inline-block flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Contact Support
              </motion.div>
            </Link>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="mt-16 max-w-md mx-auto relative"
            variants={itemVariants}
          >
            <div className="aspect-square max-h-[300px] mx-auto bg-card/70 backdrop-blur-md rounded-2xl p-6 border border-primary/20 dark:border-primary/30 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="relative">
                <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/70 to-accent/70">
                  404
                </div>
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-primary/10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-accent/20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Search suggestion */}
          <motion.div
            className="mt-12 bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-primary/20 dark:border-primary/30 max-w-xl mx-auto"
            variants={itemVariants}
          >
            <h3 className="text-lg font-medium mb-3">Looking for something specific?</h3>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Search our academic services..."
                />
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                Search
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
