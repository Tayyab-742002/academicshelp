"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

type TestimonialType = {
  id: string | number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
  company?: string;
};

export function AnimatedCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
}: {
  testimonials: TestimonialType[];
  autoPlay?: boolean;
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  // Calculate slide width for proper transitions
  const slideWidth = useMotionValue(0);
  useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        const width = containerRef.current?.clientWidth || 0;
        slideWidth.set(width);
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [slideWidth]);

  // Transforms for parallax effect
  const contentX = useTransform(x, [0, slideWidth.get()], [0, -50]);
  const contentOpacity = useTransform(x, [0, slideWidth.get() * 0.5, slideWidth.get()], [1, 0.5, 0]);
  const imageScale = useTransform(x, [0, slideWidth.get()], [1, 0.8]);
  const nextContentOpacity = useTransform(x, [0, slideWidth.get() * 0.5, slideWidth.get()], [0, 0.5, 1]);
  const nextContentX = useTransform(x, [0, slideWidth.get()], [50, 0]);
  const nextImageScale = useTransform(x, [0, slideWidth.get()], [0.8, 1]);
  
  // Spring for smoother animation
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isPaused) {
      timer.current = setTimeout(() => {
        nextSlide();
      }, interval);
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [autoPlay, current, interval, isPaused]);

  // Handle the slide animation when current changes
  useEffect(() => {
    if (direction === "right") {
      x.set(0);
      x.set(slideWidth.get());
      springX.set(0);
    } else {
      x.set(slideWidth.get());
      x.set(0);
      springX.set(slideWidth.get());
    }
  }, [current, direction, slideWidth, x, springX]);

  // Get the current and next testimonial
  const currentTestimonial = testimonials[current];
  const nextIndex = current === testimonials.length - 1 ? 0 : current + 1;
  const nextTestimonial = testimonials[nextIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[300px] md:min-h-[350px]">
        <div className="absolute inset-0 flex overflow-hidden">
          {/* Current slide */}
          <motion.div 
            className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6"
            style={{ 
              x: contentX,
              opacity: contentOpacity
            }}
          >
            <div className="relative flex-shrink-0">
              <motion.div 
                className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg"
                style={{ scale: imageScale }}
              >
                {currentTestimonial.avatar ? (
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{currentTestimonial.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 rounded-full border border-white/10 shadow-inner"></div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Quote className="h-4 w-4" />
              </motion.div>
            </div>
            
            <div className="flex flex-col flex-1">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: currentTestimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 italic">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="font-semibold text-gray-900 dark:text-white">{currentTestimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>{currentTestimonial.role}</span>
                  {currentTestimonial.company && (
                    <>
                      <span className="inline-block h-1 w-1 rounded-full bg-gray-500"></span>
                      <span>{currentTestimonial.company}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next slide - positioned for transition */}
          <motion.div 
            className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6"
            style={{ 
              x: nextContentX,
              opacity: nextContentOpacity
            }}
          >
            <div className="relative flex-shrink-0">
              <motion.div 
                className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg"
                style={{ scale: nextImageScale }}
              >
                {nextTestimonial.avatar ? (
                  <Image
                    src={nextTestimonial.avatar}
                    alt={nextTestimonial.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{nextTestimonial.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 rounded-full border border-white/10 shadow-inner"></div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Quote className="h-4 w-4" />
              </motion.div>
            </div>
            
            <div className="flex flex-col flex-1">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: nextTestimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 italic">
                "{nextTestimonial.content}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="font-semibold text-gray-900 dark:text-white">{nextTestimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>{nextTestimonial.role}</span>
                  {nextTestimonial.company && (
                    <>
                      <span className="inline-block h-1 w-1 rounded-full bg-gray-500"></span>
                      <span>{nextTestimonial.company}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 px-4">
        <motion.button
          className="h-10 w-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          className="h-10 w-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? "right" : "left");
              setCurrent(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 bg-primary"
                : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-primary/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimatedCarousel; 