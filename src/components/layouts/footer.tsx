"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const { theme } = useTheme();
  const footerRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<{ left: string; top: string; animY: number; duration: number; delay: number }[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side only after component mounts
  useEffect(() => {
    setIsClient(true);
    
    // Generate consistent particles
    const newParticles = Array.from({ length: 10 }).map((_, i) => {
      // Use consistent values based on index
      const seed = i / 10; // 0.0, 0.1, 0.2, etc.
      return {
        left: `${10 + (seed * 80)}%`,
        top: `${15 + (seed * 70)}%`,
        animY: 25 + (i * 5),
        duration: 5 + (i * 1.5),
        delay: i * 0.5
      };
    });
    
    setParticles(newParticles);
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  // Parallax effects for decorative elements
  const y1 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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


  // const serviceLinks = [
  //   { name: "Essay Writing", href: "/services/essay-writing" },
  //   { name: "Research Papers", href: "/services/research-papers" },
  //   { name: "Homework Help", href: "/services/homework-help" },
  //   { name: "Dissertation Writing", href: "/services/dissertation-writing" },
  //   { name: "Coding Assignments", href: "/services/coding-assignments" },
  // ];

  const supportLinks = [
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  // const socialLinks = [
  //   { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
  //   { name: "Twitter", icon: "twitter", href: "https://twitter.com" },
  //   { name: "Instagram", icon: "instagram", href: "https://instagram.com" },
  //   { name: "LinkedIn", icon: "linkedin", href: "https://linkedin.com" },
  // ];

  const contactDetails = [
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    { 
      icon: <MessageCircle className="h-5 w-5" />, 
      label: "WhatsApp", 
      value: "+1 (555) 987-6543",
      href: "https://wa.me/15559876543"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "Email", 
      value: "support@academicassist.com",
      href: "mailto:support@academicassist.com"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      label: "Address", 
      value: "123 Education St, Academic City",
      href: "https://maps.google.com/?q=123+Education+St,+Academic+City"
    }
  ];

  return (
    <motion.footer 
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden border-t border-muted-foreground/60 dark:border-[#222222]/80 bg-[#F8E7F6] dark:bg-card/50"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 6, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ 
          scale: { duration: 10, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 8, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>
      
      {/* Animated particles - with fixed positions */}
      <div className="absolute inset-0 opacity-30">
        {isClient && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/80 dark:bg-primary/90"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, particle.animY, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      {/* Main Footer */}
      <motion.div 
        className="relative container mx-auto px-4 py-10 sm:py-16"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <motion.div 
            className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
           <Link href="/" className="group flex items-center gap-2">
              <div className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20">
                <motion.div
                  // animate={{ rotate: theme === "dark" ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/Logo.svg"
                    alt="Academic Assist Logo"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <span className="font-bold text-xl">
                <span className="text-primary">Academic</span>
                <span className="text-gray-900 dark:text-white">Assist</span>
              </span>
            </Link>
            
            <motion.p 
              className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Professional academic assistance for students at all levels. Our experts help you achieve academic excellence with personalized support.
            </motion.p>
            
            <motion.div 
              className="flex space-x-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (platform, i) => (
                  <motion.a
                    key={platform}
                    href="#"
                    custom={i + 5}
                    variants={itemVariants}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full dark:bg-card/20 border border-primary/50 dark:border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow"
                    whileHover={{ y: -3 }}
                  >
                    {platform === "facebook" && (
                      <Facebook className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                    )}
                    {platform === "twitter" && (
                      <Twitter className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                    )}
                    {platform === "instagram" && (
                     <Instagram className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                    )}
                    {platform === "linkedin" && (
                      <Linkedin className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                    )}
                  </motion.a>
                )
              )}
            </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="sm:col-span-2 md:col-span-4 lg:col-span-4"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-base sm:text-lg font-semibold mb-4 sm:mb-5 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>

            <ul className="space-y-3 sm:space-y-4">
              {contactDetails.map((contact, index) => (
                <motion.li 
                  key={contact.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <a 
                    href={contact.href}
                    className="flex items-start group"
                    target={contact.label === "Address" ? "_blank" : undefined}
                    rel={contact.label === "Address" ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2 sm:mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{contact.label}</p>
                      <p className="text-sm md:text-base text-gray-900 dark:text-gray-200 font-medium group-hover:text-primary transition-colors duration-200">{contact.value}</p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services and Support combined in one column on small screens, separate on larger */}
          <motion.div 
            className="sm:col-span-2 md:col-span-4 lg:col-span-4"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Services */}
              {/* Support */}
              <div>
                <motion.h3 
                  className="text-base sm:text-lg font-semibold mb-3 sm:mb-5 text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Support
                </motion.h3>
                <ul className="space-y-2 sm:space-y-3">
                  {supportLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div 
        className="relative border-t border-primary/5 dark:border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &copy; {currentYear} <span className="text-primary dark:text-primary-foreground">Academic Assist</span>. All rights reserved.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <motion.p 
                className="backdrop-blur-sm bg-card/80 dark:bg-card/100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-accent/60 dark:border-accent/80 text-center w-full sm:w-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(229,62,62,0.15)",
                  scale: 1.02
                }}
              >
                <span className="font-medium text-primary dark:text-primary">Disclaimer:</span> Services are for reference and guidance only.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a href="tel:+15551234567" className="hover:text-primary transition-colors duration-300">
                  <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 inline-block mr-1 mb-0.5" /> +1 (555) 123-4567
                </a>
                <span className="hidden sm:inline mx-2">•</span>
                <a href="mailto:support@academicassist.com" className="hover:text-primary transition-colors duration-300">
                  <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 inline-block mr-1 mb-0.5" /> support@academicassist.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Copyright - hidden on larger screens since it's redundant */}
      <motion.div 
        className="sm:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-xs text-gray-700 dark:text-gray-300">
          &copy; {currentYear} Academic Assist. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
