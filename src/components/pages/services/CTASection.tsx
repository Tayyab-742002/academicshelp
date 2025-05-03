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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  
  const buttonVariants = {
    hover: { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 400 } },
    tap: { scale: 0.98 }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 dark:from-primary/80 dark:to-accent/80 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating gradient blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 6, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ 
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/80"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Need Academic Assistance?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Our team of experts is ready to help you achieve academic excellence. Contact us today to discuss your specific needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={buttonVariants.hover}
              whileTap={buttonVariants.tap}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md group-hover:bg-white/30 transition-all duration-300"></div>
              <Link
                href="/contact"
                className="relative block px-8 py-3 rounded-full bg-white text-primary font-medium text-center shadow-xl shadow-primary/20 transition-all duration-300"
              >
                <span className="relative z-10">Get a Free Quote</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={buttonVariants.hover}
              whileTap={buttonVariants.tap}
            >
              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/80 hover:border-white hover:bg-white/10 text-white font-medium text-center transition-all duration-300"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
