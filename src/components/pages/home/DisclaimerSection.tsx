"use client";

import { motion } from "framer-motion";

export default function DisclaimerSection() {
  return (
    <section className="py-10 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-muted/10 dark:from-background dark:via-background/70 dark:to-background/90 z-0" />
      
      {/* Decorative elements with improved visibility */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-primary/30 opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent dark:via-border/80 opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground px-4 py-3 rounded-lg bg-card/80 dark:bg-card/40 backdrop-blur-sm border border-primary/10 dark:border-primary/20 shadow-sm">
            <span className="font-semibold text-foreground dark:text-foreground">Disclaimer:</span> Our services are intended for reference and guidance purposes only. 
            We encourage ethical use of our materials in accordance with academic integrity policies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
