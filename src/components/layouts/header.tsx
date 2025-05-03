"use client";
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const services = [
    {
      title: "Essay Writing",
      href: "/services/essay-writing",
      description:
        "Professional essay writing services for all academic levels and subjects.",
    },
    {
      title: "Research Papers",
      href: "/services/research-papers",
      description:
        "In-depth research and well-structured papers with proper citations and references.",
    },
    {
      title: "Homework Help",
      href: "/services/homework-help",
      description:
        "Expert assistance with assignments across various subjects and difficulty levels.",
    },
    {
      title: "Exam Preparation",
      href: "/services/exam-preparation",
      description:
        "Comprehensive study materials and practice tests for exam success.",
    },
    {
      title: "Dissertation Writing",
      href: "/services/dissertation-writing",
      description:
        "Full dissertation services from proposal to final defense preparation.",
    },
    {
      title: "Coding Assignments",
      href: "/services/coding-assignments",
      description:
        "Programming help in various languages with detailed explanations and documentation.",
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center gap-2 group">
            <Link href="/" className="flex items-center gap-3 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-9 w-9 bg-gradient-to-br from-primary to-accent rounded-full p-0.5 shadow-lg shadow-primary/30 dark:shadow-primary/20 z-10">
                <div className="h-full w-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.svg"
                    alt="Academic Assist Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent relative z-10">Academic<span className="text-gray-800 dark:text-white">Assist</span></span>
            </Link>
          </div>

          {/* Custom NavItems with dropdown */}
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <NavigationMenu key={`desktop-dropdown-${idx}`}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center gap-1 bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full px-4 py-2 text-gray-700 dark:text-gray-200 font-medium transition-all duration-200"
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white dark:bg-gray-900 p-1 mt-2">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-md opacity-80 -z-10"></div>
                          <ul className="grid w-[400px] gap-1 p-3 md:w-[550px] md:grid-cols-2 lg:w-[600px]">
                            {services.map((service) => (
                              <li key={service.title}>
                                <Link
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:scale-[1.02] hover:shadow-sm"
                                >
                                  <span className="text-sm font-medium leading-none text-gray-800 dark:text-gray-200">
                                    {service.title}
                                  </span>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                    {service.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuViewport />
                </NavigationMenu>
              ) : (
                <Link
                  key={`desktop-link-${idx}`}
                  href={item.link}
                  className="relative text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 relative group"
              aria-label="Toggle theme"
            >
              <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-300"></span>
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 relative z-10">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary relative z-10">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <NavbarButton 
                variant="primary" 
                className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium rounded-full px-5 py-2 shadow-lg shadow-primary/30 hover:shadow-accent/40 transition-all duration-300 z-10"
              >
                Get Quote
              </NavbarButton>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-full p-0.5 shadow-md shadow-primary/20 dark:shadow-primary/10">
                  <div className="h-full w-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <Image
                      src="/logo.svg"
                      alt="Academic Assist Logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Academic<span className="text-gray-800 dark:text-white">Assist</span></span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 relative group"
                aria-label="Toggle theme"
              >
                <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-300"></span>
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 relative z-10">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary relative z-10">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
              <div className="relative p-1.5 rounded-md hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-200 cursor-pointer">
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={`mobile-dropdown-${idx}`} className="w-full">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex w-full items-center justify-between py-3 px-2 text-left text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200"
                  >
                    <span>{item.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 text-primary ${isServicesOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {isServicesOpen && (
                    <div className="ml-3 mt-1 mb-2 flex flex-col gap-1 border-l-2 border-primary/20 pl-3">
                      {services.map((service, serviceIdx) => (
                        <Link
                          key={`mobile-service-${serviceIdx}`}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2 px-2 text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary rounded-md hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-2 text-gray-700 dark:text-gray-200 font-medium hover:text-primary dark:hover:text-primary rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200"
                >
                  {item.name}
                </Link>
              )
            )}

            <div className="mt-4 flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Quote
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
