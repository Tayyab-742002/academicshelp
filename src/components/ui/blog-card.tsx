"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  readingTime?: string;
  featuredImage?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  category?: string;
  tags?: string[];
  variant?: "default" | "featured" | "compact";
};

export function BlogCard({
  title,
  excerpt,
  slug,
  publishedAt,
  readingTime = "5 min read",
  featuredImage,
  author,
  category,
  tags = [],
  variant = "default"
}: BlogCardProps) {
  // Format the date
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // For featured variant, show a larger card with different layout
  if (variant === "featured") {
    return (
      <Link href={`/blog/${slug}`} className="block h-full">
        <motion.div 
          className="h-full overflow-hidden rounded-2xl border border-primary/20 dark:border-primary/30 bg-card relative group"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {/* Featured label */}
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              FEATURED
            </div>
          </div>
          
          {/* Image container - larger for featured posts */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            {featuredImage ? (
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          </div>
          
          {/* Content */}
          <div className="p-6 pt-5 relative">
            {/* Category pill */}
            {category && (
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 mb-3">
                {category}
              </div>
            )}
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {title}
            </h2>
            
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              {/* Author & Date */}
              <div className="flex items-center space-x-3">
                {author?.avatar ? (
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium">{author?.name}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formattedDate}
                  </div>
                </div>
              </div>
              
              {/* Reading time */}
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {readingTime}
              </div>
            </div>
          </div>
          
          {/* Read more button for featured posts */}
          <div className="px-6 pb-6 pt-0">
            <motion.div
              className="flex items-center text-primary font-medium text-sm mt-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Read Article <ArrowRight className="ml-1 h-4 w-4" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // For compact variant, show a minimal card with horizontal layout
  if (variant === "compact") {
    return (
      <Link href={`/blog/${slug}`} className="block h-full">
        <motion.div 
          className="h-full flex items-start gap-4 p-4 rounded-xl border border-primary/10 dark:border-primary/20 bg-card/60 backdrop-blur-sm hover:bg-card/90 transition-colors duration-200"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {/* Thumbnail image */}
          {featuredImage && (
            <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold mb-1 line-clamp-1">
              {title}
            </h3>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {formattedDate}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {readingTime}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <motion.div 
        className="h-full overflow-hidden rounded-xl border border-primary/20 dark:border-primary/30 bg-card relative group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image container */}
        <div className="relative h-48 overflow-hidden">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
          )}
          {/* Category pill positioned on the image */}
          {category && (
            <div className="absolute bottom-3 left-3 z-10">
              <div className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground shadow-sm">
                {category}
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h2>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {excerpt}
          </p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="inline-block px-2 py-0.5 rounded-md text-xs bg-primary/5 text-primary/90 dark:bg-primary/10">
                  #{tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="inline-block px-2 py-0.5 rounded-md text-xs bg-primary/5 text-primary/90 dark:bg-primary/10">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
          
          {/* Footer - date and read time */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-primary/10 dark:border-primary/20">
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {readingTime}
            </div>
          </div>
        </div>
        
        {/* Hover gradient border effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        </div>
      </motion.div>
    </Link>
  );
}

export default BlogCard; 