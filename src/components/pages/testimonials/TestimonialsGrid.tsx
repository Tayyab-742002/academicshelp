"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getTestimonials } from "@/lib/testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Testimonial } from "@/lib/fallbackdata/testimonial";

export default function TestimonialsGrid() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch testimonials
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const allTestimonials = await getTestimonials();
        setTestimonials(allTestimonials);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

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
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    hover: { 
      scale: 1.03, 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };

  if (loading) {
    return (
      <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[400px] relative z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="text-muted-foreground">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />

      {/* Animated particles with improved visibility */}
      <div className="absolute inset-0 opacity-40 dark:opacity-40 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-6 shadow-md dark:bg-card/60 dark:border-primary/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="text-sm font-medium">
                Student Voices
              </span>
            </div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] 
                }
              }}
              viewport={{ once: true }}
            >
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">Students Say</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }
              }}
              viewport={{ once: true }}
            >
              Browse through feedback from students at different educational levels who have benefited from our services.
            </motion.p>
            
            {/* Animated decoration */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ 
                width: 120, 
                opacity: 1,
                transition: { 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1] 
                }
              }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Testimonials Masonry Grid with animation */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              variants={itemVariants}
              custom={index}
              className="relative break-inside-avoid mb-8"
            >
              <motion.div 
                className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg overflow-hidden transition-all duration-300 h-full"
                initial="rest"
                whileHover="hover"
                variants={cardHoverVariants}
                onMouseEnter={() => setHoveredIndex(testimonial._id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover glow effect */}
                {hoveredIndex === testimonial._id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 transform scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                <div className="p-6 relative z-10">
                  <div className="flex items-center mb-5">
                    <motion.div 
                      className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20 p-0.5"
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <Image
                        src={
                          testimonial.image?.asset.url || "/placeholder-avatar.png"
                        }
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            delay: 0.1 * i,
                            duration: 0.3,
                            type: "spring"
                          }
                        }}
                      >
                        <Star
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-muted-foreground/30"
                          }`}
                          strokeWidth={i < testimonial.rating ? 0 : 1.5}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-foreground/90 mb-4 italic text-base">
                  &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                    <span>{new Date().toLocaleDateString()}</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-xs font-medium text-primary">
                      {testimonial.serviceType?.title || "Other Service"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {testimonials.length === 0 && (
          <motion.div
            className="text-center py-12 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 dark:border-primary/30 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">
              No testimonials found. Please check back later.
            </p>
          </motion.div>
        )}
        
        {/* Animated decoration at the bottom */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7 }
          }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center relative">
            <motion.div 
              className="w-16 h-16 rounded-full border-2 border-accent/20 absolute"
              animate={{ 
                rotate: 360,
                transition: { 
                  duration: 20, 
                  ease: "linear", 
                  repeat: Infinity 
                }
              }}
            />
            <motion.div 
              className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 absolute"
              animate={{ 
                rotate: -360,
                transition: { 
                  duration: 15, 
                  ease: "linear", 
                  repeat: Infinity 
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
