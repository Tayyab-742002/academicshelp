"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  LightbulbIcon,
  Award,
} from "lucide-react";

import TagLine from "./TagLine";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Type for our academic quotes
type AcademicQuote = {
  text: string;
  author: string;
  LottieAnimation: React.ReactNode;
  icon: React.ReactNode;
};

export function AnimatedHero({
  tagline = "Top-Rated Academic Services",
  TagLineIcon = <Sparkles className="h-4 w-4 mr-2" />,
  title = "Excel in Your Academic Journey",
  subtitle = "Professional assistance with essays, research papers, and assignments to help you achieve academic success.",
  primaryCta = "Get Started",
  primaryCtaLink = "/contact",
  secondaryCta = "Learn More",
  secondaryCtaLink = "/services",
  benefits = [
    "24/7 Expert Support",
    "Plagiarism-Free Guarantee",
    "On-time Delivery",
    "Confidential Service",
  ],
}) {
  const [hovered, setHovered] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Animation cycle duration (in seconds)
  const ANIMATION_CYCLE = 5000; // 5 seconds total cycle

  // Collection of academic quotes with their matching Lottie animations
  const academicQuotes: AcademicQuote[] = [
    {
      text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      author: "Malcolm X",
      LottieAnimation: (
        <DotLottieReact
          src="/lotties/animated-study.json"
          autoplay
          loop={true}
        />
      ),
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      text: "The beautiful thing about learning is that no one can take it away from you.",
      author: "B.B. King",
      LottieAnimation: (
        <DotLottieReact
          src="/lotties/animated-graduation.json"
          autoplay
          loop={true}
        />
      ),
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
    },
    {
      text: "An investment in knowledge pays the best interest.",
      author: "Benjamin Franklin",
      LottieAnimation: (
        <DotLottieReact
          src="/lotties/animated-book.json"
          autoplay
          loop={true}
        />
      ),
      icon: <LightbulbIcon className="h-6 w-6 text-primary" />,
    },
    {
      text: "The more that you read, the more things you will know, the more that you learn, the more places you'll go.",
      author: "Dr. Seuss",
      LottieAnimation: (
        <DotLottieReact
          src="/lotties/animated-research.json"
          autoplay
          loop={true}
        />
      ),
      icon: <Award className="h-6 w-6 text-accent" />,
    },
  ];

  // Synchronized animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      // Wait half the cycle to change the quote (when container is at its peak)
      const quoteTimer = setTimeout(() => {
        setCurrentQuoteIndex(
          (prevIndex) => (prevIndex + 1) % academicQuotes.length
        );
      }, ANIMATION_CYCLE / 2);

      return () => clearTimeout(quoteTimer);
    }, ANIMATION_CYCLE);

    return () => clearInterval(interval);
  }, [ANIMATION_CYCLE, academicQuotes.length]);

  const currentQuote = academicQuotes[currentQuoteIndex];

  type ContainerVariants = {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: {
        staggerChildren: number;
        delayChildren: number;
      };
    };
  };

  // Animation variants
  const containerVariants: ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  type ItemVariants = {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        type: string;
        stiffness: number;
        damping: number;
      };
    };
  };
  const itemVariants: ItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative  mt-12">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Tagline */}
          <TagLine tagline={tagline} TagLineIcon={TagLineIcon} />

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary/80">
              {title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center md:px-0 sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Link href={primaryCtaLink} className="w-[250px] sm:w-auto">
              <motion.div
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-center transition-all duration-200 shadow-lg shadow-primary/20 inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <span className="flex items-center justify-center">
                  {primaryCta}
                  <motion.span
                    animate={{ x: hovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
              </motion.div>
            </Link>

            <Link href={secondaryCtaLink} className="w-[250px] sm:w-auto">
              <motion.div
                className="w-full px-8 py-4 rounded-xl bg-card border border-primary/60 dark:border-primary/40 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 font-medium text-center transition-all duration-200 shadow-md inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryCta}
              </motion.div>
            </Link>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/40 shadow-sm"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated academic quotes with Lottie animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto relative"
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: ANIMATION_CYCLE / 1000,
              ease: "easeInOut",
              repeat: Infinity,
              times: [0, 0.5, 1],
              delay: 0.8, 
            }}
          >
            <div className="relative p-3 sm:p-4 rounded-2xl bg-card/70 backdrop-blur-md border border-primary/50 dark:border-primary/30 shadow-xl overflow-hidden z-10">
              <div className="h-auto sm:h-[200px] md:h-[250px] w-full bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-lg flex items-center justify-center py-4 sm:py-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 items-center w-full px-3 sm:px-4">
                  {/* Lottie animation */}
                  <div className="sm:col-span-1 md:col-span-2 flex justify-center items-center mb-3 sm:mb-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`lottie-${currentQuoteIndex}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                      >
                        {currentQuote.LottieAnimation}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Quote text */}
                  <div className="sm:col-span-2 md:col-span-3 text-left">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`quote-${currentQuoteIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center mb-2">
                          {currentQuote.icon}
                          <div className="ml-2 text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Academic Inspiration
                          </div>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic">
                          &quot;{currentQuote.text}&quot;
                        </p>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-right font-medium text-primary">
                          — {currentQuote.author}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 sm:-top-6 -right-1 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg bg-primary/20 dark:bg-primary/30 z-0"
              animate={{
                rotate: [0, 90],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: ANIMATION_CYCLE / 1000 * 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: 0.8, 
              }}
            />
            <motion.div
              className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-accent/30 dark:bg-accent/40 z-0"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: ANIMATION_CYCLE / 1000 * 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: 0.8, 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedHero;
