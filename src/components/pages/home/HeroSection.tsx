"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {  Highlight } from "@/components/ui/hero-highlight";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect values - reduced intensity for better content visibility
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Spring animations for smoother mouse following
  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);
  // const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  // const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // useEffect(() => {
  //   setIsLoaded(true);

  //   const handleMouseMove = (e: MouseEvent) => {
  //     const { clientX, clientY } = e;
  //     const { left, top, width, height } =
  //       heroRef.current?.getBoundingClientRect() || {
  //         left: 0,
  //         top: 0,
  //         width: 0,
  //         height: 0,
  //       };

  //     // Calculate mouse position relative to hero section
  //     const x = (clientX - left) / width - 0.5;
  //     const y = (clientY - top) / height - 0.5;

  //     // mouseX.set(x * 100); // Convert to percentage for easier use
  //     // mouseY.set(y * 100);
  //     setMousePosition({ x, y });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, [mouseX, mouseY]);

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
      boxShadow: "0 10px 25px -5px rgba(229, 62, 62, 0.4)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24"
    >
      {/* Ultra-modern gradient background with reddish tones */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-background to-background dark:from-primary/10 dark:via-background/80 dark:to-background z-0" /> */}

      {/* Animated red gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-accent/5 to-transparent dark:from-primary/15 dark:via-accent/10 dark:to-transparent opacity-70 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">

      

        {/* Animated gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/80 dark:bg-primary/90"
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-card backdrop-blur-sm border border-primary/30 text-primary mb-8 shadow-lg"
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
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight tracking-tight"
              variants={itemVariants}
            >
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Elevate Your
              </motion.span>
              <motion.span
                className="bg-clip-text  bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Academic&nbsp; <br />
                <Highlight>Success</Highlight>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-10 max-w-lg"
              variants={itemVariants}
            >
              Get premium assistance with essays, research papers, and
              assignments from our elite team of academic experts. Achieve the
              excellence you deserve.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 mb-16 "
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full  text-foreground font-medium text-center transition-all duration-300 hover:text-primary  w-full sm:w-auto backdrop-blur-sm"
              >
                <Link href="/contact" className="inline-flex  items-center">
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
                className="inline-flex items-center justify-center px-4 py-2 rounded-full border-2 border-primary/50 text-foreground font-medium text-center transition-all duration-300 hover:text-primary  w-full sm:w-auto backdrop-blur-sm"
              >
                <Link href="/services">
                  <span>View Services</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats section */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-5"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-5 rounded-2xl border border-primary/20 shadow-lg overflow-hidden relative group"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(229, 62, 62, 0.1), 0 10px 10px -5px rgba(229, 62, 62, 0.04)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/10 group-hover:bg-accent/50 transition-all duration-300" />
                <div className="text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Success Rate
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-5 rounded-2xl border border-primary/20 shadow-lg overflow-hidden relative group"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(229, 62, 62, 0.1), 0 10px 10px -5px rgba(229, 62, 62, 0.04)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/10 group-hover:bg-accent/50 transition-all duration-300" />
                <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Expert Support
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-5 rounded-2xl border border-primary/20 shadow-lg overflow-hidden relative group"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(229, 62, 62, 0.1), 0 10px 10px -5px rgba(229, 62, 62, 0.04)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/10 group-hover:bg-accent/50 transition-all duration-300" />
                <div className="text-4xl font-bold text-primary mb-1">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Customer Rating
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Right image section */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 relative w-full"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto sm:max-w-lg">
              {/* Simple image container */}
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden z-10"
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
