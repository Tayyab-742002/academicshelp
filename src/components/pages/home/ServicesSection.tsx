"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pointer } from "@/components/magicui/pointer";
import { BookOpen } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

// Define the service type
interface Service {
  title: string;
  icon: string;
  description: string;
  href: string;
}

export default function ServicesSection() {
  // Services data
  const services: Service[] = [
    {
      title: "Essay Writing",
      icon: "pen-tool",
      description:
        "Professional essays tailored to your requirements with thorough research and proper citations.",
      href: "/services/essay-writing",
    },
    {
      title: "Research Papers",
      icon: "file-text",
      description:
        "In-depth research papers with proper methodology and academic rigor.",
      href: "/services/research-papers",
    },
    {
      title: "Homework Help",
      icon: "book-open",
      description:
        "Expert assistance with assignments across various subjects and difficulty levels.",
      href: "/services/homework-help",
    },
    {
      title: "Exam Preparation",
      icon: "award",
      description:
        "Comprehensive study materials and practice tests for exam success.",
      href: "/services/exam-preparation",
    },
    {
      title: "Dissertation Writing",
      icon: "book",
      description:
        "Full dissertation services from proposal to final defense preparation.",
      href: "/services/dissertation-writing",
    },
    {
      title: "Coding Assignments",
      icon: "code",
      description:
        "Programming help in various languages with detailed explanations.",
      href: "/services/coding-assignments",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="py-20 md:py-32 relative overflow-hidden bg-muted/20 dark:bg-transparent">
      {/* Enhanced background gradient for better light mode appearance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/30 dark:from-background dark:via-background/50 dark:to-background/0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-primary/15 dark:bg-primary/15 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Premium Services</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Academic Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive academic support services to help you excel in your
            studies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Pointer>
                <motion.div
                  animate={{
                    scale: [0.8, 1, 0.8],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
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
                        d={getIconPath(service.icon)}
                      />
                    </svg>
                  </svg>
                </motion.div>
              </Pointer>
              <div className="bg-card/95 backdrop-blur-sm border border-primary/20 hover:border-primary/30 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg dark:bg-card/90 dark:hover:shadow-primary/10 dark:hover:border-primary/20 relative z-10">
                <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      d={getIconPath(service.icon)}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-all duration-300 group-hover:translate-x-1"
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                {/* Animated border when hovered */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId="serviceBorder"
                  >
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/40 dark:border-primary/30" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/services">
            <ShimmerButton
              shimmerColor="rgba(255, 255, 255, 0.6)"
              background="var(--primary)"
              className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium text-primary-foreground rounded-full group shadow-md"
            >
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/30 to-transparent h-1/3"></span>
              <span className="relative text-primary-foreground font-medium text-base">
                View All Services
              </span>
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to get SVG path for icons
function getIconPath(icon: string): string {
  switch (icon) {
    case "pen-tool":
      return "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586";
    case "file-text":
      return "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8";
    case "book-open":
      return "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z";
    case "award":
      return "M8.21 13.89L7 23l5-3 5 3-1.21-9.12 M19 8.94a7 7 0 1 0-14 0a7 7 0 0 0 14 0z";
    case "book":
      return "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z";
    case "code":
      return "M16 18l6-6-6-6 M8 6l-6 6 6 6";
    default:
      return "";
  }
}
