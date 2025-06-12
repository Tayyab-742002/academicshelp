"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, cubicBezier, Variants } from "framer-motion";
import { getServices } from "@/lib/services";
import { ArrowRight, FileText, BookOpen, PenTool, FileCheck, Bookmark, HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Service } from "@/lib/fallbackdata/service";
import TagLine from "@/components/ui/TagLine";
import Loading from "@/components/common/loading";

// Define a map of icon names to components
const iconMap: Record<string, LucideIcon> = {
  'file-text': FileText,
  'book-open': BookOpen,
  'pen-tool': PenTool,
  'file-check': FileCheck,
  'bookmark': Bookmark,
  'help-circle': HelpCircle,
};

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);



  // Fetch services
  useEffect(() => {
    async function loadServices() {
      try {
        const allServices = await getServices();
        setServices(allServices);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: cubicBezier(0.22, 1, 0.36, 1)
      },
    },
  };

  // Simple component to render icon by name
  const IconComponent = ({ name }: { name?: string }) => {
    if (!name || !iconMap[name]) {
      return <FileText className="w-6 h-6 text-primary" />;
    }
    
    const Icon = iconMap[name];
    return <Icon className="w-6 h-6 text-primary" />;
  };

  if (loading) {
    return (
     <Loading />
    );
  }

  return (
    <section 
      id="services-grid" 
      ref={sectionRef} 
      className="py-16 md:py-24 relative overflow-hidden"
    >
   
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
         <TagLine
         tagline="Our Offerings"
         TagLineIcon={ <svg
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>} />
          
        
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }
            }}
            viewport={{ once: true }}
          >
            Explore our comprehensive range of academic services designed to help you excel in your studies
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
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] 
              }
            }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service._id}
              variants={cardVariants}
              className="relative"
              onMouseEnter={() => setHoveredService(service._id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/50 dark:border-primary/30 shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col p-8"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                {/* Hover glow effect */}
                {hoveredService === service._id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 transform scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <div className="flex-grow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center mb-6">
                    {service.icon ? (
                      <IconComponent name={service.icon} />
                    ) : (
                      <div className="w-6 h-6 bg-primary/20 rounded-md" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm font-medium text-primary">
                    From ${service.basePrice}/{service.pricingUnit}
                  </div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      href={`/services/${service.slug.current}`}
                      className="inline-flex items-center text-primary font-medium text-sm px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/15 transition-colors duration-200"
                    >
                      Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
