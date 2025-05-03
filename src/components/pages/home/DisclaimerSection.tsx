"use client";

import { motion } from "framer-motion";

export default function DisclaimerSection() {
  return (
    <section className="py-10 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 dark:from-background dark:to-background/90 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Disclaimer:</span> Our services are intended for reference and guidance purposes only. 
            We encourage ethical use of our materials in accordance with academic integrity policies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
