"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getServices, Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  // Dynamically import icons to prevent SSR issues
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = dynamic(
      () => import("lucide-react").then((mod) => mod[name as keyof typeof mod] as any),
      {
        loading: () => <div className="w-6 h-6 bg-primary/20 rounded-md animate-pulse" />,
        ssr: false
      }
    );

    return <LucideIcon className="w-6 h-6 text-primary" />;
  };

  if (loading) {
    return (
      <section id="services-grid" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-6 shadow-md dark:bg-card/60 dark:border-primary/40 animate-pulse">
              <div className="h-4 w-32 bg-primary/20 rounded-full"></div>
            </div>
            <div className="h-12 bg-primary/10 dark:bg-primary/20 rounded-lg w-2/3 mx-auto mb-6 animate-pulse"></div>
            <div className="h-4 bg-primary/5 dark:bg-primary/10 rounded-lg w-1/2 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-2xl p-8 h-64 animate-pulse shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/20 mb-4"></div>
                <div className="h-6 bg-primary/20 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-primary/10 rounded w-full mb-2"></div>
                <div className="h-4 bg-primary/10 rounded w-5/6 mb-6"></div>
                <div className="flex justify-between items-center mt-8">
                  <div className="h-4 bg-primary/20 w-20 rounded"></div>
                  <div className="h-8 w-24 bg-primary/20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="services-grid" 
      ref={sectionRef} 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-40 dark:opacity-40 z-0">
        {Array.from({ length: 8 }).map((_, i) => (
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-8 shadow-md dark:bg-card/60 dark:border-primary/40">
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="text-sm font-medium">
              Our Offerings
            </span>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
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
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">Services</span>
          </motion.h2>
          
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
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              variants={cardVariants}
              className="relative"
              onMouseEnter={() => setHoveredService(service._id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col p-8"
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
                      <DynamicIcon name={service.icon} />
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
