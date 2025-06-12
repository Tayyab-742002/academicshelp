"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);




  // How it works steps
  const howItWorks: Step[] = [
    {
      step: 1,
      title: "Submit Details",
      description:
        "Fill out our simple form with your assignment requirements and deadline.",
      icon: "clipboard",
    },
    {
      step: 2,
      title: "Match with Expert",
      description:
        "We'll connect you with a subject matter expert who specializes in your topic.",
      icon: "users",
    },
    {
      step: 3,
      title: "Receive Solution",
      description:
        "Get your completed assignment delivered to your inbox before the deadline.",
      icon: "check-circle",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background/90 via-muted/10 to-background/80 dark:from-background dark:via-muted/5 dark:to-background"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background/80 to-background dark:from-primary/10 dark:via-background/60 dark:to-background opacity-80 z-0" />
      
      {/* Animated gradient accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent dark:via-accent/60" />

      <div className="container mx-auto px-4 relative z-10 ">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-primary/15 dark:bg-primary/20 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Simple Process</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting academic help has never been easier. Follow these simple
            steps:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting gradient line with improved visibility */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 dark:from-primary/20 dark:via-primary/50 dark:to-primary/20 rounded-full z-0"></div>

          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants as Variants}
              className="group relative "
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Step number indicator with improved visibility */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-card border border-primary/30 dark:border-primary/40 flex items-center justify-center text-lg font-bold text-primary shadow-lg z-20">
                {step.step}
              </div>

              <div className="bg-card/95 backdrop-blur-sm border border-primary/30 hover:border-primary/50 dark:border-primary/40 dark:hover:border-primary/60 rounded-2xl p-8 pt-12 text-center h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)] dark:hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.15)] relative z-10">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 dark:to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 bg-primary/15 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary group-hover:text-primary transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={getIconPath(step.icon)}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">{step.description}</p>

                {/* Enhanced animated dots */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 dark:bg-primary/70"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-0.5 bg-primary/5 dark:bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to get SVG path for icons
function getIconPath(icon: string): string {
  switch (icon) {
    case "clipboard":
      return "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M14 2h-4a2 2 0 0 0-2 2v2h8V4a2 2 0 0 0-2-2z M12 11h4 M12 16h4 M8 11h.01 M8 16h.01";
    case "users":
      return "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z";
    case "check-circle":
      return "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3";
    default:
      return "";
  }
}
