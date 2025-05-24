"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, X } from "lucide-react";
import AnimatedServiceCard from "./animated-service-card";

type ServiceType = {
  id: string;
  title: string;
  description: string;
  image?: string;
  slug: string;
  features?: string[];
  price?: string;
  category: string;
  popular?: boolean;
  icon?: React.ReactNode;
};

export function ServicesGrid({
  services,
  showFilters = true,
  showSearch = true,
  defaultCategory = "all"
}: {
  services: ServiceType[];
  showFilters?: boolean;
  showSearch?: boolean;
  defaultCategory?: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState<ServiceType[]>(services);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [categories, setCategories] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique categories
  useEffect(() => {
    if (services.length > 0) {
      const allCategories = Array.from(
        new Set(services.map(service => service.category))
      );
      setCategories(["all", ...allCategories]);
    }
  }, [services]);

  // Filter services by category and search term
  useEffect(() => {
    let result = services;

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(service => service.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(
        service =>
          service.title.toLowerCase().includes(lowercasedTerm) ||
          service.description.toLowerCase().includes(lowercasedTerm)
      );
    }

    setFilteredServices(result);
  }, [services, selectedCategory, searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      transition: { 
        duration: 0.2 
      } 
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Mobile filter toggle */}
      {showFilters && (
        <div className="md:hidden mb-6 flex justify-between items-center">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-primary/20 text-sm font-medium"
          >
            <Filter size={16} />
            <span>Filters</span>
            {selectedCategory !== "all" && (
              <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                1
              </span>
            )}
          </button>
          
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg bg-card border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 w-full max-w-[200px] text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* Mobile filters panel */}
      <AnimatePresence>
        {showFilters && isMobileFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mb-6 overflow-hidden"
          >
            <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm">
              <div className="text-sm font-medium mb-3">Categories</div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop filters sidebar */}
        {showFilters && (
          <motion.aside
            className="hidden md:block w-64 flex-shrink-0"
            variants={filterVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-24 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full px-4 py-2 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-card/80 border border-primary/20 hover:border-primary/40"
                      }`}
                    >
                      {category === "all" ? "All Services" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {showSearch && (
                <div>
                  <h3 className="text-lg font-medium mb-3">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-10 py-2 rounded-lg bg-card border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        )}
        
        {/* Services grid */}
        <div className="flex-1">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm"
            >
              <div className="text-2xl font-bold text-foreground mb-2">No services found</div>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <AnimatedServiceCard
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      slug={service.slug}
                      features={service.features}
                      price={service.price}
                      icon={service.icon}
                      popular={service.popular}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesGrid; 