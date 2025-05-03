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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      title: "Maths",
      href: "/services/maths",
      description:
        "Expert tutoring in advanced mathematical concepts for students of all levels.",
    },
    {
      title: "Statistics",
      href: "/services/statistics",
      description:
        "Comprehensive statistical analysis and data interpretation services.",
    },
    {
      title: "Calculus",
      href: "/services/calculus",
      description:
        "Specialized calculus tutoring covering derivatives, integrals, and differential equations.",
    },
    {
      title: "Nursing",
      href: "/services/nursing",
      description:
        "Professional nursing education and certification preparation.",
    },
    {
      title: "Biology",
      href: "/services/biology",
      description:
        "In-depth biology tutoring covering molecular, cellular, and ecosystem concepts.",
    },
    {
      title: "Physics",
      href: "/services/physics",
      description:
        "Comprehensive physics tutoring from mechanics to quantum physics.",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          {/* Custom NavItems with dropdown */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <NavigationMenu key={`desktop-dropdown-${idx}`}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center gap-1"
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {services.map((service) => (
                            <li key={service.title}>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                  className="text-base font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Get Quote</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
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
                    className="flex w-full items-center justify-between py-2 text-left text-neutral-600 dark:text-neutral-300"
                  >
                    <span>{item.name}</span>
                  </button>

                  {isServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((service, serviceIdx) => (
                        <Link
                          key={`mobile-service-${serviceIdx}`}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
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
                  className="py-2 text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </Link>
              )
            )}

            <div className="mt-4 flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
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
