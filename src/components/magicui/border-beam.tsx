"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  className?: string;
  containerClassName?: string;
  size?: number;
  delay?: number;
}

export function BorderBeam({
  children,
  className,
  containerClassName,
  size = 2,
  duration = 15,
  delay = 0,
  ...props
}: BorderBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  // Generate a random degree for the gradient rotation
  const initialDeg = Math.floor(Math.random() * 360);

  useEffect(() => {
    if (!initialized.current && containerRef.current && borderRef.current) {
      initialized.current = true;
      const container = containerRef.current;
      const border = borderRef.current;

      // Initialize positions and animation
      setTimeout(() => {
        // Apply the animation with JavaScript to ensure proper timing
        border.style.transition = `transform ${duration}s linear infinite`;
        border.style.transform = `rotate(${initialDeg}deg)`;
        
        // Force a reflow to ensure the initial transform is applied before the animation
        void border.offsetWidth;
        
        // Start the animation
        border.style.transform = `rotate(${initialDeg + 360}deg)`;
      }, delay * 1000);
      
      // Set up continuous rotation every duration seconds
      const interval = setInterval(() => {
        const currentRotation = getComputedRotation(border);
        border.style.transition = "none";
        border.style.transform = `rotate(${currentRotation}deg)`;
        
        // Force a reflow to ensure the transform reset is applied
        void border.offsetWidth;
        
        // Continue the animation
        border.style.transition = `transform ${duration}s linear infinite`;
        border.style.transform = `rotate(${currentRotation + 360}deg)`;
      }, duration * 1000);
      
      return () => clearInterval(interval);
    }
  }, [duration, initialDeg, delay]);

  // Helper function to get the current rotation value
  const getComputedRotation = (element: HTMLElement) => {
    const st = window.getComputedStyle(element);
    const matrix = st.transform || st.webkitTransform || st.mozTransform;
    
    if (matrix === 'none' || typeof matrix === 'undefined') {
      return 0;
    }
    
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    
    return angle < 0 ? angle + 360 : angle;
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative rounded-[inherit] p-[1px] overflow-hidden", containerClassName)}
      {...props}
    >
      <div
        ref={borderRef}
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `conic-gradient(from ${initialDeg}deg at 50% 50%, 
                        rgba(var(--primary-rgb), 0.8) 0%, 
                        rgba(var(--primary-rgb), 0.5) 10%, 
                        rgba(var(--primary-rgb), 0) 40%, 
                        rgba(var(--primary-rgb), 0) 60%, 
                        rgba(var(--primary-rgb), 0.5) 90%, 
                        rgba(var(--primary-rgb), 0.8) 100%)`,
          borderRadius: "inherit",
          maskImage: `radial-gradient(100% 100% at 50% 50%, transparent calc(100% - ${size}px), black calc(100% - ${size}px + 1px))`,
          WebkitMaskImage: `radial-gradient(100% 100% at 50% 50%, transparent calc(100% - ${size}px), black calc(100% - ${size}px + 1px))`,
        }}
      />
      <div className={cn("relative z-[2] rounded-[inherit] bg-background", className)}>
        {children}
      </div>
    </div>
  );
}

export default BorderBeam;
