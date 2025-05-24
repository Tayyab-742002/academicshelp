"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

type FAQItem = {
  id: string | number;
  question: string;
  answer: string | React.ReactNode;
  category?: string;
};

export function FAQAccordion({
  items,
  defaultOpen = [],
  allowMultiple = true,
  showCategories = false,
}: {
  items: FAQItem[];
  defaultOpen?: Array<string | number>;
  allowMultiple?: boolean;
  showCategories?: boolean;
}) {
  const [openItems, setOpenItems] = useState<Array<string | number>>(defaultOpen);
  const [categories, setCategories] = useState<string[]>([]);

  // Extract unique categories
  React.useEffect(() => {
    if (showCategories && items.length > 0) {
      const uniqueCategories = Array.from(
        new Set(items.filter(item => item.category).map(item => item.category as string))
      );
      setCategories(uniqueCategories);
    }
  }, [items, showCategories]);

  const toggleItem = (id: string | number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      if (allowMultiple) {
        setOpenItems([...openItems, id]);
      } else {
        setOpenItems([id]);
      }
    }
  };

  // Filter items by category or show all if no categories
  const renderItems = (category?: string) => {
    const filteredItems = category 
      ? items.filter(item => item.category === category)
      : (categories.length > 0 ? [] : items);

    return filteredItems.map((item) => (
      <motion.div
        key={item.id}
        className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => toggleItem(item.id)}
          className="flex items-center justify-between w-full py-5 px-2 text-left transition-all duration-200 focus:outline-none"
          aria-expanded={openItems.includes(item.id)}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4 group-hover:text-primary transition-colors duration-200">
            {item.question}
          </h3>
          <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
            openItems.includes(item.id) 
              ? "bg-primary text-white" 
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          }`}>
            {openItems.includes(item.id) ? (
              <Minus className="h-3.5 w-3.5" />
            ) : (
              <Plus className="h-3.5 w-3.5" />
            )}
          </div>
        </button>
        <AnimatePresence>
          {openItems.includes(item.id) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pb-5 px-2 text-muted-foreground prose prose-sm dark:prose-invert max-w-none">
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Category tabs */}
      {showCategories && categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-card border border-primary/20 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={() => {
                  // Implementation for category filtering would go here
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FAQ items */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-card shadow-sm">
        {categories.length > 0 && showCategories ? (
          categories.map((category) => (
            <React.Fragment key={category}>
              <div className="bg-gray-50 dark:bg-gray-900/60 px-6 py-3 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{category}</h2>
              </div>
              <div className="p-6 pt-3">
                {renderItems(category)}
              </div>
            </React.Fragment>
          ))
        ) : (
          <div className="p-6">{renderItems()}</div>
        )}
      </div>
    </div>
  );
}

export default FAQAccordion; 