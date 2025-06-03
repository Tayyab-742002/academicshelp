"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import {  ArrowRight, Calendar, Award, Clock, FileText } from "lucide-react";
import { MotionProps } from "framer-motion";
import { Service } from "@/lib/fallbackdata/service";
import CTASection from "@/components/common/CTASection";
import FAQSection from "@/components/ui/faq-accordion";

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<{ left: string; top: string; animY: number; duration: number; delay: number }[]>([]);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
    
    // Generate deterministic particles
    const newParticles = Array.from({ length: 10 }).map((_, i) => {
      // Use deterministic values based on index
      const seed = i / 10; // 0.0, 0.1, 0.2, etc.
      return {
        left: `${5 + (seed * 90)}%`,
        top: `${10 + ((i % 5) * 20)}%`,
        animY: 20 + (i * 3),
        duration: 5 + (i * 0.7),
        delay: i * 0.4
      };
    });
    
    setParticles(newParticles);
  }, []);


  // Helper function for conditional animations
  const conditionalAnimation = (props: MotionProps): MotionProps => {
    if (!isClient) {
      return {};
    }
    return props;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />

        {/* Enhanced accent gradients */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40 z-0">
          {isClient && particles.map((particle, i) => (
            <motion.div
              key={`hero-${i}`}
              className="absolute w-1 h-1 rounded-full bg-primary/90 dark:bg-primary/90"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.animY, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              {...conditionalAnimation({
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5 },
              })}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-6 shadow-md dark:bg-card/60 dark:border-primary/40">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Premium Service
                  </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                {service.title}
              </h1>

              <div className="prose prose-lg dark:prose-invert mb-8 text-muted-foreground">
                {service.fullDescription && (
                  <PortableText value={service.fullDescription} />
                )}
              </div>
              
              {/* Service stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Expert Service</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Quality Assured</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Deadline Focused</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Link href="/contact" className="inline-flex items-center">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card border-2 border-primary/50 text-foreground font-medium transition-all duration-200 hover:border-primary hover:bg-primary/10 shadow-sm"
                >
                  <Link href="#features">
                    <span>View Features</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full"
              {...conditionalAnimation({
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 0.2 },
              })}
            >
              {service.mainImage ? (
                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
                  <motion.div
                    className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl border border-primary/10 dark:border-primary/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                  <Image
                    src={service.mainImage.asset.url}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    style={{ display: 'block', width: '100%', height: '100%' }}
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  </motion.div>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section id="overview" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
        
        {/* Subtle decorative gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">
                Service Overview
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
              About Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
                {service.title}
              </span> Service
            </motion.h2>
            
            {/* Animated decoration */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full mx-auto mb-10"
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

          <div className="bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Service Description</h3>
                <div className="prose prose-sm dark:prose-invert mb-6 text-muted-foreground">
                  {service.shortDescription && (
                    <p>{service.shortDescription}</p>
                  )}
                  {service.fullDescription && service.fullDescription.length > 0 && (
                    <div className="mt-4">
                      <PortableText value={service.fullDescription } />
                    </div>
                    )}
                  </div>
                </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Service Details</h3>
                <div className="space-y-4">
                  {service.academicLevels && service.academicLevels.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Academic Levels:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.academicLevels.map((level: { name: string }, index: number) => (
                          <span 
                            key={index}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                          >
                            {level.name}
                            </span>
                        ))}
                      </div>
                          </div>
                  )}
                  
                  {service.deliveryTimeframes && service.deliveryTimeframes.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Delivery Timeframes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliveryTimeframes.map((timeframe: { name: string; duration: string }, index: number) => (
                          <span 
                            key={index}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                          >
                            {timeframe.name} ({timeframe.duration})
                          </span>
                        ))}
                  </div>
                </div>
                  )}

                <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Pricing:</h4>
                    <div className="flex items-center gap-2 text-foreground">
                      <span className="text-xl font-bold">
                        ${service.basePrice}
                      </span>
                      <span className="text-muted-foreground">
                        per {service.pricingUnit}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      * Final price may vary based on academic level, deadline, and complexity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section id="features" className="py-16 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background/50 dark:from-muted/10 dark:to-background/30 z-0" />
        
        {/* Subtle decorative gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-40 dark:opacity-40 z-0">
          {isClient && particles.map((particle, i) => (
            <motion.div
              key={`features-${i}`}
              className="absolute w-1 h-1 rounded-full bg-primary/90 dark:bg-primary/90"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.animY, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-medium">
                Key Features
                    </span>
                  </div>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
                What Makes Our Service Special
                    </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6"
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
              Our {service.title.toLowerCase()} service is designed to help you achieve academic excellence
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

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.features && service.features.slice(0, 6).map((feature: string, index: number) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  </div>

                <p className="text-muted-foreground">{feature}</p>
              </motion.div>
            ))}
                  </div>

          {/* Additional Features - if service has more than 6 features */}
          {service.features && service.features.length > 6 && (
            <div className="mt-12 bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-foreground">Additional Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.slice(6).map((feature: string, index: number) => (
                  <motion.div 
                    key={index + 6}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <div className="mt-0.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary/10">
                        <svg 
                          className="h-3 w-3 text-primary" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                  </div>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section id="faq" className="py-16 relative overflow-hidden">


          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Common Questions
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
                Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">Questions</span>
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
                Find answers to common questions about our {service.title.toLowerCase()} service
              </motion.p>
              
          
            </motion.div>

             
            <section className="bg-gradient-to-b from-background/90 to-background relative">  
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={service.faqs.map((faq)=>({
              question: faq.question,
              answer: faq.answer.map((answer)=>answer.children[0].text).join(' ')
            }))} header={false} />
          </div> 
      </section>
           
            
           
          </div>
        </section>
      )}

      {/* Sample Works Section */}
      {service.sampleWorks && service.sampleWorks.length > 0 && (
        <section id="samples" className="py-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />
          
          {/* Subtle decorative gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Portfolio
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
                Sample <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">Works</span>
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
                Browse examples of our previous {service.title.toLowerCase()} projects
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.sampleWorks.map(
                (
                  work: {
                    title: string;
                    description?: string;
                    image?: {
                      asset: {
                        url: string;
                      };
                    };
                    fileUrl?: string;
                  },
                  index: number
                ) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    {work.image && (
                      <div className="relative h-[200px] w-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
                        <Image
                          src={work.image.asset.url}
                          alt={work.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          style={{ display: 'block', width: '100%', height: '100%' }}
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {work.title}
                      </h3>
                      {work.description && (
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {work.description}
                        </p>
                      )}

                      {work.fileUrl && (
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                        <a
                          href={work.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-medium hover:underline group"
                        >
                          Download Sample
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      
      {/* How It Works Section */}
      <section id="process" className="py-16 md:py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
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
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              <span className="text-sm font-medium">
                Our Process
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
              How Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">Process Works</span>
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
              A simple, transparent process designed for your academic success
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

          <div className="max-w-4xl mx-auto">
          

            {/* If no process data is available, show a default process */}
           
              <>
                <motion.div
                  className="flex items-start gap-6 mb-12 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute left-[40px] top-[60px] w-[2px] h-[calc(100%+12px)] bg-gradient-to-b from-primary to-accent opacity-20"></div>
                  <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-xl p-6 shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Submit Your Requirements
                    </h3>
                    <p className="text-muted-foreground">
                      Fill out our detailed order form with your specific requirements, academic level, deadline, and any additional instructions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-6 mb-12 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <div className="absolute left-[40px] top-[60px] w-[2px] h-[calc(100%+12px)] bg-gradient-to-b from-primary to-accent opacity-20"></div>
                  <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-xl p-6 shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Expert Assignment
                    </h3>
                    <p className="text-muted-foreground">
                      We match your project with a qualified expert who specializes in your subject area to ensure the highest quality work.
                    </p>
                  </div>
                </motion.div>

            <motion.div
                  className="flex items-start gap-6 mb-12 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute left-[40px] top-[60px] w-[2px] h-[calc(100%+12px)] bg-gradient-to-b from-primary to-accent opacity-20"></div>
                  <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-xl p-6 shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Work in Progress
                    </h3>
                    <p className="text-muted-foreground">
                      Your expert works diligently on your project, following your requirements exactly. You can request updates or track progress at any time.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-xl p-6 shadow-md flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Delivery & Revisions
                    </h3>
                    <p className="text-muted-foreground">
                      Receive your completed work before your deadline. If needed, request revisions to ensure your complete satisfaction with the final product.
                    </p>
                  </div>
            </motion.div>
              </>
           
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
