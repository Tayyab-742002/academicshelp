"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FlipText } from "@/components/magicui/flip-text";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse movement tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current?.getBoundingClientRect() || {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        };

      // Calculate mouse position relative to hero section
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section
      ref={heroRef}
      className="relative min-h-[50vh] py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-accent/5 to-transparent dark:from-primary/15 dark:via-accent/10 dark:to-transparent opacity-70 z-0" />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 dark:from-primary/20 dark:to-accent/10 blur-3xl"
        style={{ x: springX, y: springY }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 6, repeat: Infinity, repeatType: "reverse" },
        }}
      />

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

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 text-primary mb-8 shadow-lg"
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
            <span>We'd love to hear from you</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >

              Contact &nbsp; Us
            
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Have questions? We're here to help! Reach out to us through any of
            the channels below.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
