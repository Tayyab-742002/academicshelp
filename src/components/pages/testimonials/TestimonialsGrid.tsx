"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { getAllTestimonials, Testimonial } from "@/lib/testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsGrid() {
  const testimonials = getAllTestimonials();
  const [filter, setFilter] = useState<Testimonial["serviceType"] | "all">("all");
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.serviceType === filter);
    
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />
      
      {/* Red gradient accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-10">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Student Voices</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              What Our Students Say
            </h2>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <motion.div className="bg-card/50 backdrop-blur-sm p-1.5 rounded-full inline-flex border border-border/50 shadow-lg relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-50"></div>
              
              <motion.button
                onClick={() => setFilter("all")}
                className={`text-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${filter === "all" ? "bg-primary text-white dark:text-white shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              >
                All
              </motion.button>
              
              <motion.button
                onClick={() => setFilter("essay")}
                className={`text-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${filter === "essay" ? "bg-primary text-white dark:text-white shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              >
                Essay Writing
              </motion.button>
              
              <motion.button
                onClick={() => setFilter("research")}
                className={`text-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${filter === "research" ? "bg-primary text-white dark:text-white shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              >
                Research Papers
              </motion.button>
              
              <motion.button
                onClick={() => setFilter("homework")}
                className={`text-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${filter === "homework" ? "bg-primary text-white dark:text-white shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              >
                Homework Help
              </motion.button>
              
              <motion.button
                onClick={() => setFilter("project")}
                className={`text-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${filter === "project" ? "bg-primary text-white dark:text-white shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              >
                Projects
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg overflow-hidden transition-all duration-300 h-full"
              whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
              onMouseEnter={() => setHoveredIndex(testimonial.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
              
              {/* Hover glow effect */}
              {hoveredIndex === testimonial.id && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 transform scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                />
              )}
              <div className="flex items-center mb-5 relative z-10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20 p-0.5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.institution && `, ${testimonial.institution}`}
                  </p>
                </div>
              </div>

              <div className="flex mb-3 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                    strokeWidth={i < testimonial.rating ? 0 : 1.5}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="text-foreground/90 mb-4 italic relative z-10 text-base">
                "{testimonial.quote}"
              </p>

              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground relative z-10">
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-xs font-medium text-primary">
                  {testimonial.serviceType === "essay"
                    ? "Essay Writing"
                    : testimonial.serviceType === "research"
                    ? "Research Paper"
                    : testimonial.serviceType === "homework"
                    ? "Homework Help"
                    : testimonial.serviceType === "project"
                    ? "Project"
                    : "Other Service"}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredTestimonials.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">
              No testimonials found for this category. Please try another filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
