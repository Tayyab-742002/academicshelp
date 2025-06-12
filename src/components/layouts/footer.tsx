"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";
import { getContactInfo } from "@/lib/contactinfo";
import { ContactInfo as ContactInfoType, Email, PhoneNumber, SocialMedia } from "@/types/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<
    {
      left: string;
      top: string;
      animY: number;
      duration: number;
      delay: number;
    }[]
  >([]);
  const [isClient, setIsClient] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfoType | null>(null);
  
  // Fetch contact info
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const info = await getContactInfo();
        // console.log("contact info :  ", info);
        setContactInfo(info);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchContactInfo();
  }, []);

  // Initialize client-side only after component mounts
  useEffect(() => {
    setIsClient(true);

    // Generate consistent particles
    const newParticles = Array.from({ length: 10 }).map((_, i) => {
      // Use consistent values based on index
      const seed = i / 10; // 0.0, 0.1, 0.2, etc.
      return {
        left: `${10 + seed * 80}%`,
        top: `${15 + seed * 70}%`,
        animY: 25 + i * 5,
        duration: 5 + i * 1.5,
        delay: i * 0.5,
      };
    });

    setParticles(newParticles);
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Parallax effects for decorative elements
  const y1 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const supportLinks = [
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  // Generate contact details from Sanity data
  const getContactDetails = () => {
    if (!contactInfo) return [];

    const details = [];

    // Primary email
    const primaryEmail = contactInfo?.emails?.find((email: Email) => email.primary) || contactInfo?.emails?.[0];
    if (primaryEmail) {
      details.push({
        icon: <Mail className="h-5 w-5" />,
        label:
          primaryEmail.emailType.charAt(0).toUpperCase() +
          primaryEmail.emailType.slice(1),
        value: primaryEmail.email,
        href: `mailto:${primaryEmail.email}`,
      });
    }

    // WhatsApp numbers - group them together
    const whatsappNumbers = contactInfo?.phoneNumbers?.filter(
      (phone: PhoneNumber) => phone.phoneType === "whatsapp"
    );
    
    if (whatsappNumbers && whatsappNumbers.length > 0) {
      details.push({
        icon: <MessageCircle className="h-5 w-5" />,
        label: "WhatsApp",
        value: whatsappNumbers.map(phone => phone.number).join(", "),
        href: `https://wa.me/${whatsappNumbers[0].number.replace(/\+|\s+|-|\(|\)/g, "")}`,
        allNumbers: whatsappNumbers,
      });
    }
    
    // Mobile numbers - group them together
    const mobileNumbers = contactInfo?.phoneNumbers?.filter(
      (phone: PhoneNumber) => phone.phoneType === "mobile"
    );
    
    if (mobileNumbers && mobileNumbers.length > 0) {
      details.push({
        icon: <Phone className="h-5 w-5" />,
        label: "Mobile",
        value: mobileNumbers.map(phone => phone.number).join(", "),
        href: `tel:${mobileNumbers[0].number.replace(/\s+/g, "")}`,
        allNumbers: mobileNumbers,
      });
    }

    // Address
    if (contactInfo?.address && contactInfo.address.showOnWebsite !== false) {
      const addressStr = [
        contactInfo.address.street,
        contactInfo.address.city,
        contactInfo.address.state,
        contactInfo.address.postalCode,
        contactInfo.address.country,
      ]
        .filter(Boolean)
        .join(", ");

      if (addressStr) {
        details.push({
          icon: <MapPin className="h-5 w-5" />,
          label: "Address",
          value: addressStr,
          href: `https://maps.google.com/?q=${encodeURIComponent(addressStr)}`,
        });
      }
    }

    return details;
  };

  const contactDetails = contactInfo ? getContactDetails() : [];

  // Get social media links from Sanity
  const getSocialLinks = (): SocialMedia[] => {
    if (!contactInfo?.socialMedia?.length) return [];
    
    return contactInfo.socialMedia.map((social: SocialMedia) => ({
      platform: social.platform,
      url: social.url,
      handle: social.handle,
    }));
  };

  const socialLinks = getSocialLinks();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />;
      case "twitter":
        return <Twitter className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />;
      case "instagram":
        return (
          <Instagram className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
        );
      case "linkedin":
        return <Linkedin className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />;
      default:
        return <Globe className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />;
    }
  };

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden border-t border-muted-foreground/60 dark:border-[#222222]/80 bg-[#F8E7F6] dark:bg-card/50"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, repeatType: "reverse" as const },
          opacity: { duration: 6, repeat: Infinity, repeatType: "reverse" as const },
        }}
      ></motion.div>

      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          scale: { duration: 10, repeat: Infinity, repeatType: "reverse" as const },
          opacity: { duration: 8, repeat: Infinity, repeatType: "reverse" as const },
        }}
      ></motion.div>

      {/* Animated particles - with fixed positions */}
      <div className="absolute inset-0 opacity-30">
        {isClient &&
          particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/80 dark:bg-primary/90"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.animY, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      {/* Main Footer */}
      <motion.div
        className="relative container mx-auto px-4 py-10 sm:py-16"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20">
                <motion.div transition={{ duration: 0.6, ease: "easeInOut" as const }}>
                  <Image
                    src="/images/Logo.svg"
                    alt="AcademicsHelp Logo"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <span className="font-bold text-xl">
                <span className="text-primary">Academics</span>
                <span className="text-gray-900 dark:text-white">Help</span>
              </span>
            </Link>

            <motion.p
              className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Professional academic assistance for students at all levels. Our
              experts help you achieve academic excellence with personalized
              support.
            </motion.p>

            <motion.div
              className="flex space-x-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(
                  (social, i) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={i + 5}
                      variants={itemVariants}
                      className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full dark:bg-card/20 border border-primary/50 dark:border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow"
                      whileHover={{ y: -3 }}
                    >
                      {getSocialIcon(social.platform)}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="sm:col-span-2 md:col-span-4 lg:col-span-4"
            variants={itemVariants}
          >
            <motion.h3
              className="text-base sm:text-lg font-semibold mb-4 sm:mb-5 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>

            <ul className="space-y-3 sm:space-y-4">
              {contactDetails.map((contact, index) => (
                <motion.li
                  key={contact.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  {contact.allNumbers ? (
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2 sm:mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {contact.label}
                        </p>
                        <div className="flex flex-col">
                          {contact.allNumbers.map((phone: PhoneNumber, idx: number) => (
                            <a
                              key={`${contact.label}-${idx}`}
                              href={contact.label === "WhatsApp" 
                                ? `https://wa.me/${phone.number.replace(/\+|\s+|-|\(|\)/g, "")}` 
                                : `tel:${phone.number.replace(/\s+/g, "")}`}
                              className="text-sm md:text-base text-gray-900 dark:text-gray-200 font-medium group-hover:text-primary transition-colors duration-200"
                              target={contact.label === "WhatsApp" ? "_blank" : undefined}
                              rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                            >
                              {phone.number}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={contact.href}
                      className="flex items-start group"
                      target={contact.label === "Address" ? "_blank" : undefined}
                      rel={
                        contact.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2 sm:mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {contact.label}
                        </p>
                        <p className="text-sm md:text-base text-gray-900 dark:text-gray-200 font-medium group-hover:text-primary transition-colors duration-200">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services and Support combined in one column on small screens, separate on larger */}
          <motion.div
            className="sm:col-span-2 md:col-span-4 lg:col-span-4"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Support */}
              <div>
                <motion.h3
                  className="text-base sm:text-lg font-semibold mb-3 sm:mb-5 text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Support
                </motion.h3>
                <ul className="space-y-2 sm:space-y-3">
                  {supportLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="relative border-t border-primary/5 dark:border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &copy; {currentYear}{" "}
              <span className="text-primary dark:text-primary-foreground">
                AcademicsHelp
              </span>
              . All rights reserved.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <motion.p
                className="backdrop-blur-sm bg-card/80 dark:bg-card/100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-accent/60 dark:border-accent/80 text-center w-full sm:w-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  boxShadow: "0 0 20px rgba(229,62,62,0.15)",
                  scale: 1.02,
                }}
              >
                <span className="font-medium text-primary dark:text-primary">
                  Disclaimer:
                </span>{" "}
                Services are for reference and guidance only.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {contactInfo && contactInfo.phoneNumbers && (
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 inline-block mr-1 mb-0.5" />{" "}
                    <span className="flex flex-wrap gap-2">
                      {contactInfo.phoneNumbers
                        ?.filter(phone => phone.phoneType === "mobile")
                        .map((phone, index, filteredArray) => (
                          <a
                            key={`mobile-${index}`}
                            href={`tel:${phone.number.replace(/\s+/g, "")}`}
                            className="hover:text-primary transition-colors duration-300"
                          >
                            {phone.number}{index < filteredArray.length - 1 ? "," : ""}
                          </a>
                        ))}
                    </span>
                  </div>
                )}
                <span className="hidden sm:inline mx-2">•</span>
                {contactInfo && contactInfo.phoneNumbers && (
                  <div className="flex items-center">
                    <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 inline-block mr-1 mb-0.5" />{" "}
                    <span className="flex flex-wrap gap-2">
                      {contactInfo.phoneNumbers
                        ?.filter(phone => phone.phoneType === "whatsapp")
                        .map((phone, index, filteredArray) => (
                          <a
                            key={`whatsapp-${index}`}
                            href={`https://wa.me/${phone.number.replace(/\+|\s+|-|\(|\)/g, "")}`}
                            className="hover:text-primary transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {phone.number}{index < filteredArray.length - 1 ? "," : ""}
                          </a>
                        ))}
                    </span>
                  </div>
                )}
                <span className="hidden sm:inline mx-2">•</span>
                {contactInfo && contactInfo.emails && contactInfo.emails[0] && (
                  <a
                    href={`mailto:${contactInfo.emails[0].email}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 inline-block mr-1 mb-0.5" />{" "}
                    {contactInfo.emails[0].email}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Copyright - hidden on larger screens since it's redundant */}
      <motion.div
        className="sm:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-xs text-gray-700 dark:text-gray-300">
          &copy; {currentYear} AcademicsHelp. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
