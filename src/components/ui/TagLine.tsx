import { motion, Variants } from "motion/react";
import React from "react";

interface TagLineProps {
  tagline: string;
  TagLineIcon: React.ReactNode;
  className?: string;
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 10 
    }
  }
};

const TagLine = ({ tagline, TagLineIcon, className }: TagLineProps) => {
  return (
    <motion.div
      
      variants={itemVariants}
    >
      <div
        className={`inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-6 shadow-md dark:bg-card/60 dark:border-primary/40 ${className}`}
      >
        {TagLineIcon}
        <span className="text-sm font-medium">{tagline}</span>
      </div>
    </motion.div>
  );
};

export default TagLine;
