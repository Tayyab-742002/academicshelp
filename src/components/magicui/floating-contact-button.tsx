"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export const FloatingContactButton = ({ 
  whatsappNumber = "+15559876543",
  message = "Hello! I'd like to know more about your academic services.",
  threshold = 300 // Scroll threshold to show the button
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Info popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-primary/20 dark:border-primary/30 max-w-xs"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Chat with us on WhatsApp</h4>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  Get instant help with your academic needs. Our support team is ready to assist you!
                </p>
                <button
                  onClick={openWhatsApp}
                  className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Chat
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                repeatType: "loop"
              }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
            
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-40"></span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton; 