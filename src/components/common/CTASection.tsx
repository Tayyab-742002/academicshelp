"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/90 to-accent/80 dark:from-card/90 dark:to-card/80 z-0" />
      
      {/* Glass morphism card effect */}
      {/* <div className="absolute inset-x-4 md:inset-x-12 lg:inset-x-24 top-8 bottom-8 rounded-3xl backdrop-blur-md bg-card/20 dark:bg-card-900/20 border border-accent/30 dark:border-accent-700/30 shadow-2xl z-0" /> */}
      
  

  

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-4">
            {/* Text content */}
            <motion.div 
              className="text-left lg:max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text  mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Ready to Boost Your Academic Performance?
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Join thousands of students who have achieved academic success with
                our expert assistance.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-xl bg-primary hover:from-primary/90 hover:to-primary text-white dark:text-accent font-medium text-center transition-all duration-300 shadow-lg shadow-primary/20 dark:shadow-primary/10 inline-block"
                  >
                    Get a Free Quote
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="/services"
                    className="px-8 py-4 rounded-xl bg-secondary border  text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-accent/70 font-medium text-center transition-all duration-300 shadow-md inline-block"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual element - Student success illustration */}
            <motion.div
              className="lg:w-1/2 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 z-0"
                  animate={{
                    rotate: [0, 90],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-secondary/20 dark:bg-secondary/30 z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative p-4 rounded-2xl bg-accent/10 dark:bg-accent/10 backdrop-blur-sm border border-accent/20  dark:border-black/10 shadow-xl">
                  <img 
                    src="/images/student-success.svg" 
                    alt="Student Success" 
                    className="w-full h-auto max-h-72 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/600x400/334155/ffffff?text=Student+Success";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
