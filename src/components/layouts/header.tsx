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
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.svg"
                  alt="Academic Assist Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Academic<span className="text-gray-800 dark:text-white">Assist</span></span>
            </Link>
          </div>

          {/* Custom NavItems with dropdown */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <NavigationMenu key={`desktop-dropdown-${idx}`}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center gap-1 bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800"
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {services.map((service) => (
                            <li key={service.title}>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                              >
                                <span className="text-sm font-medium leading-none">
                                  {service.title}
                                </span>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuViewport />
                </NavigationMenu>
              ) : (
                <Link
                  key={`desktop-link-${idx}`}
                  href={item.link}
                  className="text-base font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <NavbarButton variant="primary" className="bg-blue-600 hover:bg-blue-700 text-white">Get Quote</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <Image
                    src="/logo.svg"
                    alt="Academic Assist Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Academic<span className="text-gray-800 dark:text-white">Assist</span></span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
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
                    className="flex w-full items-center justify-between py-2 text-left text-gray-600 dark:text-gray-300"
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
                      className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {isServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((service, serviceIdx) => (
                        <Link
                          key={`mobile-service-${serviceIdx}`}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
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
                  className="py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="block">{item.name}</span>
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
