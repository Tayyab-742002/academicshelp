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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsLoaded(true);

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

      mouseX.set(x * 100); // Convert to percentage for easier use
      mouseY.set(y * 100);
      setMousePosition({ x, y });
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
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-accent/10 to-primary/5 dark:from-accent/20 dark:to-primary/10 blur-3xl"
          style={{ x: springX.get() * -0.5, y: springY.get() * -0.5 }}
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.8, 0.6, 0.8],
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 8, repeat: Infinity, repeatType: "reverse" },
          }}
        />

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
                <Link href="/contact" className="inline-flex">
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

              {/* <motion.div
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-5 rounded-2xl border border-accent/20 shadow-lg overflow-hidden relative group"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(255, 107, 107, 0.1), 0 10px 10px -5px rgba(255, 107, 107, 0.04)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300" />
                <div className="text-4xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Expert Support
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-5 rounded-2xl border border-primary/20 shadow-lg overflow-hidden relative group col-span-2 sm:col-span-1"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(229, 62, 62, 0.1), 0 10px 10px -5px rgba(229, 62, 62, 0.04)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300" />
                <div className="text-4xl font-bold text-accent mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Customer Rating
                </div>
              </motion.div> */}
            </motion.div>
          </div>

          {/* Right image section */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 relative w-full"
            variants={itemVariants}
            style={{ y: y1 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto sm:max-w-lg">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl dark:from-primary/20 dark:via-accent/15 dark:to-primary/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Animated circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-primary/20 z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-5 -left-5 w-32 h-32 rounded-full border border-accent/20 z-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Main image with modern frame */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-card/90 to-card/60 dark:from-card/70 dark:to-card/40 backdrop-blur-md border border-primary/20 shadow-[0_0_25px_rgba(229,62,62,0.15)] z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ boxShadow: "0 0 35px rgba(229,62,62,0.25)" }}
              >
                {/* Red gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10" />

                <Image
                  src="/images/hero-image.png"
                  alt="Students getting academic help"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain p-4 z-20 relative"
                  priority
                />

                {/* Floating elements */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-card/90 to-card/70 dark:from-card/70 dark:to-card/50 p-3 sm:p-4 rounded-xl shadow-xl border border-primary/20 backdrop-blur-md z-30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(229, 62, 62, 0.2)",
                  }}
                >
                  <div className="flex items-center">
                    <div className="mr-2 sm:mr-3 bg-gradient-to-br from-primary/30 to-primary/10 p-1.5 sm:p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
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
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-foreground">
                        Plagiarism-Free
                      </div>
                      <div className="text-xs text-muted-foreground hidden sm:block">
                        100% Original Content
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-card/90 to-card/70 dark:from-card/70 dark:to-card/50 p-3 sm:p-4 rounded-xl shadow-xl border border-accent/20 backdrop-blur-md z-30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(255, 107, 107, 0.2)",
                  }}
                >
                  <div className="flex items-center">
                    <div className="mr-2 sm:mr-3 bg-gradient-to-br from-accent/30 to-accent/10 p-1.5 sm:p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-foreground">
                        On-Time Delivery
                      </div>
                      <div className="text-xs text-muted-foreground hidden sm:block">
                        Never Miss a Deadline
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated notification */}
                <motion.div
                  className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-card/90 to-card/70 dark:from-card/70 dark:to-card/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl border border-primary/20 z-30 flex items-center backdrop-blur-md"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 mr-1.5 sm:mr-2 animate-pulse"></div>
                  <div className="text-[10px] sm:text-xs font-medium">
                    500+ Writers Online
                  </div>
                </motion.div>

                {/* Animated red dots */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary/80"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration with reddish gradient */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-background dark:text-background"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(229, 62, 62, 0.05)" />
              <stop offset="50%" stopColor="rgba(255, 107, 107, 0.1)" />
              <stop offset="100%" stopColor="rgba(229, 62, 62, 0.05)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          ></path>
        </svg>
      </div>
    </section>
  );
}
