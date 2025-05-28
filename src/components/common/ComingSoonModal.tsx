"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, CalendarClock } from "lucide-react";

interface ComingSoonModalProps {
  isVisible?: boolean;
  title?: string;
  message?: string;
  estimatedTime?: string;
}

export function ComingSoonModal({
  isVisible = true,
  title = "Coming Soon",
  message = "This feature is currently under development and will be available shortly.",
  estimatedTime,
}: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm pointer-events-auto"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          style={{ marginTop: "var(--navbar-height, 0px)" }}
        >
          <motion.div
            className="relative max-w-md w-full bg-card rounded-xl shadow-lg border border-primary/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Modal content */}
            <div className="p-6">
              {/* Visual indicator */}
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Timer className="h-10 w-10 text-primary" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h2
                  id="modal-title"
                  className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                >
                  {title}
                </h2>
                <p className="text-muted-foreground mb-6">{message}</p>

                {/* Estimated time if provided */}
                {estimatedTime && (
                  <div className="flex items-center justify-center mt-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <CalendarClock className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      Estimated arrival: {estimatedTime}
                    </span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Decorative bottom gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ComingSoonModal;
