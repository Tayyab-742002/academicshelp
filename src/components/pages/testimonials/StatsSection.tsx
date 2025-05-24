"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background dark:from-muted/10 dark:to-background z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />
      
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 p-8 text-center shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl" />
              <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary mb-3">98%</h3>
              <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 p-8 text-center shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl" />
              <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary mb-3">10,000+</h3>
              <p className="text-muted-foreground font-medium">Students Helped</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 p-8 text-center shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl" />
              <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary mb-3">4.8/5</h3>
              <p className="text-muted-foreground font-medium">Average Rating</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 p-8 text-center shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl" />
              <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary mb-3">95%</h3>
              <p className="text-muted-foreground font-medium">Return Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
