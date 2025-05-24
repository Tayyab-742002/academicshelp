"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
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


  const serviceLinks = [
    { name: "Essay Writing", href: "/services/essay-writing" },
    { name: "Research Papers", href: "/services/research-papers" },
    { name: "Homework Help", href: "/services/homework-help" },
    { name: "Dissertation Writing", href: "/services/dissertation-writing" },
    { name: "Coding Assignments", href: "/services/coding-assignments" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
    { name: "Twitter", icon: "twitter", href: "https://twitter.com" },
    { name: "Instagram", icon: "instagram", href: "https://instagram.com" },
    { name: "LinkedIn", icon: "linkedin", href: "https://linkedin.com" },
  ];

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
      className="relative overflow-hidden border-t border-gray-200 dark:border-accent/80 bg-gray-50 dark:bg-background"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
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
        className="relative container mx-auto px-4 py-16"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Logo and Description */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            variants={itemVariants}
          >
            <Link href="/" className="flex items-center gap-3 group transition-all duration-300 w-fit">
              <div className="relative h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-full p-0.5 shadow-xl shadow-primary/20 dark:shadow-primary/10 z-10 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950 rounded-full m-[2px] flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Image
                      src="/logo.svg"
                      alt="Academic Assist Logo"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </div>
              <span className="font-bold text-xl">
                <span className="text-primary">Academic</span>
                <span className="text-gray-900 dark:text-white">Assist</span>
              </span>
            </Link>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 max-w-md leading-relaxed"
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
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-gray-950 shadow-sm border border-gray-200 dark:border-gray-800 group overflow-hidden transition-all duration-300 hover:border-primary/20 dark:hover:border-primary/30 hover:shadow-md"
                  aria-label={link.name}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  custom={index}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  ></motion.div>
                  <span className="text-gray-600 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary-foreground transition-colors duration-300 relative z-10">
                    {link.icon === "facebook" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    )}
                    {link.icon === "twitter" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    )}
                    {link.icon === "instagram" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    )}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="lg:col-span-4"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-5 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>

            <ul className="space-y-4">
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
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</p>
                      <p className="text-gray-900 dark:text-gray-200 font-medium group-hover:text-primary transition-colors duration-200">{contact.value}</p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-5 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-5 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Support
            </motion.h3>
            <ul className="space-y-3">
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
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter or Call to Action - Optional */}
          <motion.div 
            className="lg:col-span-0"
            variants={itemVariants}
          ></motion.div>
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
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &copy; {currentYear} <span className="text-primary dark:text-primary-foreground">Academic Assist</span>. All rights reserved.
            </motion.p>
            
            <motion.div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <motion.p 
                className="backdrop-blur-sm bg-gray-50/30 dark:bg-gray-950/30 px-4 py-2 rounded-full border border-gray-100/50 dark:border-gray-800/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(229,62,62,0.15)",
                  scale: 1.02
                }}
              >
                <span className="font-medium text-primary dark:text-primary-foreground">Disclaimer:</span> Services are for reference and guidance only.
              </motion.p>
              
              <motion.p
                className="text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a href="tel:+15551234567" className="hover:text-primary transition-colors duration-300">
                  <Phone className="h-3.5 w-3.5 inline-block mr-1 mb-0.5" /> +1 (555) 123-4567
                </a>
                <span className="mx-2">•</span>
                <a href="mailto:support@academicassist.com" className="hover:text-primary transition-colors duration-300">
                  <Mail className="h-3.5 w-3.5 inline-block mr-1 mb-0.5" /> support@academicassist.com
                </a>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div 
        className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 dark:text-gray-300">
          &copy; {currentYear} Academic Assist. All rights reserved.
        </p>
      </motion.div>

      {/* Fixed WhatsApp Button */}
      <motion.a
        href="https://wa.me/15559876543"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/80 dark:border-gray-800/80"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact us on WhatsApp"
      >
        <span className="sr-only">Contact us on WhatsApp</span>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </motion.a>
    </motion.footer>
  );
};

export default Footer;
