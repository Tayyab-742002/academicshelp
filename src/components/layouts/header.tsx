"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "../magicui/scroll-progress";
import { getServices } from "@/lib/services";
import type { Service } from "@/lib/fallbackdata/service";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fetch services from Sanity
  useEffect(() => {
    async function loadServices() {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme change animation
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "#",
      dropdown: true,
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // Animation variants
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50  ${
        scrolled
          ? "bg-card/50 dark:bg-card/50 backdrop-blur-lg shadow-lg shadow-black/[0.03] dark:shadow-white/[0.02]"
          : "bg-card/50 dark:bg-card/50 backdrop-blur-sm"
      } transition-all duration-300 `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <ScrollProgress className="top-[65px] md:top-[80px] bg-accent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex shrink-0 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative  overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20">
                <motion.div
                  // animate={{ rotate: theme === "dark" ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src="images/Logo.svg"
                    alt="Academic Assist Logo"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <span className="font-bold text-xl">
                <span className="text-primary">Academic</span>
                <span className="text-gray-900 dark:text-white">Assist</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <motion.nav
            className="hidden md:flex  items-center space-x-1 lg:space-x-2"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <motion.div
                  key={`desktop-dropdown-${idx}`}
                  className="relative z-50"
                  variants={navItemVariants}
                  onMouseEnter={() => {
                    setIsServicesOpen(true);
                    setActiveDropdown(idx);
                  }}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  <button
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-gray-800 dark:text-gray-100 font-medium transition-all duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                      setActiveDropdown(isServicesOpen ? null : idx);
                    }}
                  >
                    <span>{item.name}</span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{
                        rotate:
                          isServicesOpen && activeDropdown === idx ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && activeDropdown === idx && (
                      <motion.div
                        className="absolute left-0 top-full mt-2 w-[550px] rounded-xl overflow-hidden bg-card/90 dark:bg-card/90 shadow-lg shadow-black/10 dark:shadow-black/20 border border-gray-200 dark:border-gray-800 z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative p-4">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-lg opacity-70 -z-10 rounded-xl"></div>

                          {loading ? (
                            <div className="grid grid-cols-2 gap-4">
                              {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="animate-pulse">
                                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-5/6 mt-1"></div>
                                </div>
                              ))}
                            </div>
                          ) : services && services.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4">
                              {services.map((service, serviceIdx) => (
                                <motion.div
                                  key={`service-item-${serviceIdx}`}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: 0.05 * serviceIdx,
                                    duration: 0.2,
                                  }}
                                  className="group"
                                >
                                  <Link
                                    href={`/services/${service.slug.current}`}
                                    onClick={() => {
                                      setIsServicesOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block rounded-lg p-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200"
                                  >
                                    <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">
                                      {service.title}
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                      {service.shortDescription}
                                    </p>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-4 text-center text-gray-500">
                              No services available
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={`desktop-link-${idx}`}
                  variants={navItemVariants}
                >
                  <Link
                    href={item.link}
                    className="relative px-4 py-2 rounded-full text-gray-800 dark:text-gray-100 font-medium   group inline-block"
                  >
                    <span>{item.name}</span>
                    <motion.span
                      className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r bg-accent opacity-0 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-300"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              )
            )}
          </motion.nav>

          {/* Right side items */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-card transition-colors duration-200 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted &&
                  (theme === "dark" ? (
                    <motion.svg
                      key="sun"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="moon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </motion.svg>
                  ))}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                className="relative cursor-pointer inline-flex h-10 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent px-6 py-0 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="relative z-10 flex h-full items-center justify-center"
                >
                  Get Quote
                </Link>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative h-6 w-6">
                  <AnimatePresence>
                    {!isMobileMenuOpen ? (
                      <motion.svg
                        key="menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="absolute inset-0 h-6 w-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="close"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="absolute inset-0 h-6 w-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-card/80 dark:bg-card/80 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-5 pt-2">
              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <div key={`mobile-dropdown-${idx}`}>
                    <motion.button
                      className="flex w-full items-center justify-between rounded-lg py-3 px-4 text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-primary/10 dark:hover:bg-primary/20"
                      onClick={() => {
                        setActiveDropdown(activeDropdown === idx ? null : idx);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <span>{item.name}</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ rotate: activeDropdown === idx ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === idx && (
                        <motion.div
                          className="mt-2 pl-4 border-l-2 border-primary/30 ml-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {loading ? (
                            <div className="py-2 px-3">
                              <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                              <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-5/6"></div>
                              <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                            </div>
                          ) : services && services.length > 0 ? (
                            services.map((service, serviceIdx) => (
                              <motion.div
                                key={`mobile-service-${serviceIdx}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * serviceIdx }}
                              >
                                <Link
                                  href={`/services/${service.slug.current}`}
                                  className="block py-2 px-3 text-base text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary rounded-md hover:bg-primary/5 dark:hover:bg-primary/10"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {service.title}
                                </Link>
                              </motion.div>
                            ))
                          ) : (
                            <div className="py-2 px-3 text-gray-500">
                              No services available
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={`mobile-link-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={item.link}
                      className="block rounded-lg py-3 px-4 text-base font-medium text-gray-800 dark:text-gray-100 "
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              )}

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  className="w-full rounded-lg bg-gradient-to-r from-accent to-accent py-3 px-4 font-medium text-white shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
