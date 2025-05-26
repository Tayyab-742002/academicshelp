"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Dynamic icon component that handles various formats from Sanity
const DynamicIcon = ({ iconName }: { iconName?: string }) => {
  if (!iconName) return <LucideIcons.FileText className="w-6 h-6" />;

  // Convert icon name to match Lucide's format (PascalCase)
  const formatIconName = (name: string): string => {
    // Handle different formats that might come from Sanity
    // Remove any prefix like 'lucide:' or 'icon:'
    const cleanName = name.replace(/^(lucide:|icon:)/, '');
    
    // Convert kebab-case or snake_case to camelCase
    const camelCase = cleanName.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
    
    // Convert first letter to uppercase for PascalCase
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };

  const iconKey = formatIconName(iconName);
  
  // @ts-expect-error - Dynamic access to Lucide icons
  const IconComponent = LucideIcons[iconKey] || LucideIcons.FileText;
  
  return <IconComponent className="w-6 h-6" />;
};

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image?: string;
  slug: string;
  features?: string[];
  price?: string;
  icon?: string;
  popular?: boolean;
};

export function AnimatedServiceCard({
  title,
  description,
  slug,
  features = [],
  price,
  icon,
  popular = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group h-full rounded-2xl transition-all duration-300 ${
        popular 
          ? "border-2 border-primary shadow-lg shadow-primary/10" 
          : "border border-primary/20 dark:border-primary/30 hover:border-primary/50"
      } bg-gradient-to-br from-background to-background/90`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Popular badge */}
      {popular && (
        <motion.div 
          className="absolute -top-3 -right-3 z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            POPULAR
          </div>
        </motion.div>
      )}

      {/* Card content with modern design */}
      <div className="relative h-full flex flex-col z-10 p-6">
        <div className="flex-1">
          {/* Icon with gradient background */}
          <div className="mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 via-primary/20 to-primary/5 dark:from-primary/20 dark:via-primary/30 dark:to-primary/10 flex items-center justify-center text-primary">
              <DynamicIcon iconName={icon} />
            </div>
          </div>

          {/* Title with animated underline on hover */}
          <div className="relative inline-block">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground transition-colors duration-200">
              {title}
            </h3>
            <motion.div 
              className="absolute bottom-2 left-0 h-[2px] bg-primary"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Description */}
          <p className="mb-6 text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Features list with improved animations */}
          {features.length > 0 && (
            <ul className="space-y-3 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-primary font-medium pl-8">+ {features.length - 3} more features</li>
              )}
            </ul>
          )}
        </div>

        {/* Price and CTA with improved design */}
        <div className="mt-auto">
          {price && (
            <div className="mb-4 flex items-baseline">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">{price}</div>
              <div className="text-sm text-muted-foreground ml-2">starting from</div>
            </div>
          )}

          <Link href={`/services/${slug}`} className="block">
            <motion.div
              className={`w-full py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                popular
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-md hover:shadow-primary/20"
                  : "bg-gradient-to-r from-card/80 to-card border border-primary/30 dark:border-primary/40 text-foreground hover:border-primary/60"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">View Details</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Modern decorative elements */}
      <div className="absolute -bottom-1 -right-1 w-20 h-20 rounded-full bg-primary/5 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="absolute -top-1 -left-1 w-10 h-10 rounded-full bg-primary/10 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
    </motion.div>
  );
}

export default AnimatedServiceCard; 