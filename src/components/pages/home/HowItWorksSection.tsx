"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // How it works steps
  const howItWorks: Step[] = [
    {
      step: 1,
      title: "Submit Details",
      description: "Fill out our simple form with your assignment requirements and deadline.",
      icon: "clipboard",
    },
    {
      step: 2,
      title: "Match with Expert",
      description: "We'll connect you with a subject matter expert who specializes in your topic.",
      icon: "users",
    },
    {
      step: 3,
      title: "Receive Solution",
      description: "Get your completed assignment delivered to your inbox before the deadline.",
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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 dark:from-background dark:to-background/95 z-0" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl z-0" 
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl z-0" 
        style={{ y: y2 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Simple Process</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting academic help has never been easier. Follow these simple steps:
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting gradient line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full z-0"></div>

          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Step number with gradient background */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 dark:shadow-primary/10 border-4 border-background dark:border-background">
                  {step.step}
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border hover:border-primary/20 rounded-2xl p-8 pt-12 text-center h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,62,62,0.15)] relative z-10">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300"
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
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                
                {/* Animated dots */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primary/50"
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
