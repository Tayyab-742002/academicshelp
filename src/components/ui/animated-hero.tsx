"use client";

import React, { useState } from "react";
import Link from "next/link";
import {  motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import TagLine from "./TagLine";

export function AnimatedHero({
  tagline = "Top-Rated Academic Services",
  TagLineIcon = <Sparkles className="h-4 w-4 mr-2" />,
  title = "Excel in Your Academic Journey",
  subtitle = "Professional assistance with essays, research papers, and assignments to help you achieve academic success.",
  primaryCta = "Get Started",
  primaryCtaLink = "/contact",
  secondaryCta = "Learn More",
  secondaryCtaLink = "/services",
  benefits = [
    "24/7 Expert Support",
    "Plagiarism-Free Guarantee",
    "On-time Delivery",
    "Confidential Service"
  ]
}) {
  const [hovered, setHovered] = useState(false);

  type ContainerVariants = {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: {
        staggerChildren: number;
        delayChildren: number;
      };
    };
  };
  
  // Animation variants
  const containerVariants: ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  type ItemVariants = {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        type: string;
        stiffness: number;
        damping: number;
      };
    };
  };
  const itemVariants: ItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };





  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 z-0" />
      
      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-60 dark:opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-60 dark:opacity-30" />
      
      {/* Animated Sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-0"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          custom={i}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Sparkles 
            className="text-primary/30 dark:text-primary/50" 
            size={10 + Math.random() * 15} 
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Tagline */}
          <TagLine
            tagline={tagline}
            TagLineIcon={TagLineIcon}
          />
          
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary/80">
              {title}
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Link href={primaryCtaLink}>
              <BorderBeam
                duration={20}
                className="relative"
                containerClassName="bg-background dark:bg-background"
                size={1}
                delay={2}
              >
                <motion.div
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-center transition-all duration-200 shadow-lg shadow-primary/20 inline-block"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                >
                  <span className="flex items-center justify-center">
                    {primaryCta}
                    <motion.span
                      animate={{ x: hovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </span>
                </motion.div>
              </BorderBeam>
            </Link>
            
            <Link href={secondaryCtaLink}>
              <motion.div
                className="px-8 py-4 rounded-xl bg-card border border-primary/30 dark:border-primary/40 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 font-medium text-center transition-all duration-200 shadow-md inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryCta}
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 shadow-sm"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Floating illustration */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto relative hidden md:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: 1, 
            y: [0, -10, 0] 
          }}
          transition={{ 
            delay: 0.5, 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          // animate="animate"
        >
          <div className="relative p-4 rounded-2xl bg-card/70 backdrop-blur-md border border-primary/20 dark:border-primary/30 shadow-xl overflow-hidden z-10">
        
           
            
            {/* Content placeholder - replace with your actual illustration */}
            <div className="h-[250px] w-full bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-lg flex items-center justify-center ">
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                  Academic Excellence
                </div>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Visualization of your academic success journey
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-20 h-20 rounded-lg bg-primary/20 dark:bg-primary/30 z-0"
            animate={{
              rotate: [0, 90],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/30 dark:bg-accent/40 z-0"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedHero; 