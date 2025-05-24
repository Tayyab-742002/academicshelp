"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, BookOpen, PenTool, FileCheck, Bookmark, HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Define a map of icon names to components
const iconMap: Record<string, LucideIcon> = {
  'file-text': FileText,
  'book-open': BookOpen,
  'pen-tool': PenTool,
  'file-check': FileCheck,
  'bookmark': Bookmark,
  'help-circle': HelpCircle,
};

// Simple component to render icon by name
const IconComponent = ({ name }: { name?: string }) => {
  if (!name || !iconMap[name]) {
    return <FileText className="w-6 h-6 text-primary" />;
  }
  
  const Icon = iconMap[name];
  return <Icon className="w-6 h-6 text-primary" />;
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
  image,
  slug,
  features = [],
  price,
  icon,
  popular = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group h-full rounded-2xl overflow-hidden ${
        popular ? "border-2 border-primary" : "border border-primary/20 dark:border-primary/30"
      }`}
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
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg transform translate-x-0 -translate-y-0">
            POPULAR
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background z-0" />
      
      {/* Background image */}
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x400/334155/ffffff?text=Service";
            }}
          />
        </div>
      )}

      {/* Card content with glass effect */}
      <div className="relative h-full flex flex-col z-10 p-6 backdrop-blur-sm">
        <div className="flex-1">
          {/* Icon */}
          <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
            <IconComponent name={icon} />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-muted-foreground">
            {description}
          </p>

          {/* Features list */}
          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mt-1 mr-2 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-primary/80 font-medium">+ {features.length - 3} more features</li>
              )}
            </ul>
          )}
        </div>

        {/* Price and CTA */}
        <div className="mt-auto">
          {price && (
            <div className="mb-4">
              <div className="text-sm text-muted-foreground">Starting from</div>
              <div className="text-2xl font-bold text-foreground">{price}</div>
            </div>
          )}

          <Link href={`/services/${slug}`}>
            <motion.div
              className={`w-full py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-card border border-primary/30 dark:border-primary/40 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20"
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

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default AnimatedServiceCard; 