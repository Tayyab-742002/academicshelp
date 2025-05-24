"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-accent/90 z-0">
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>
      
      {/* Subtle light highlights */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(8px)",
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm font-medium">
              Take Action Now
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready to Get Professional Academic Help?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            Join thousands of students who have achieved academic success with our expert assistance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-primary font-medium text-center shadow-xl shadow-primary/20 relative overflow-hidden group"
              >
                {/* Button highlight effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                <span className="flex items-center">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white/80 hover:bg-white/10 text-white font-medium text-center relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                <span className="flex items-center">
                  Explore Services
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
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
                </span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Animated decoration */}
          <motion.div
            className="flex justify-center mt-16 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center relative"
              animate={{ 
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <motion.div 
                className="w-8 h-8 rounded-full border border-white/30 absolute"
                animate={{ 
                  rotate: -360,
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-white/70 absolute"
                animate={{ 
                  scale: [1, 1.5, 1],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
