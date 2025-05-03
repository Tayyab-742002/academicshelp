"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl z-0" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">98%</h3>
              <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl z-0" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">10,000+</h3>
              <p className="text-muted-foreground font-medium">Students Helped</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl z-0" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">4.8/5</h3>
              <p className="text-muted-foreground font-medium">Average Rating</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl z-0" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">95%</h3>
              <p className="text-muted-foreground font-medium">Return Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
