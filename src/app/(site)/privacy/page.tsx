"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ChevronRight, Info, FileText, Lock, Server, Users, Bell, MailCheck, Globe, Clock, Book, User, Phone, Mail } from "lucide-react";
import ComingSoonModal from "@/components/common/ComingSoonModal";

export default function PrivacyPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sections = [
    { id: "introduction", title: "Introduction", icon: <Info className="h-5 w-5" /> },
    { id: "information-we-collect", title: "Information We Collect", icon: <FileText className="h-5 w-5" /> },
    { id: "how-we-use", title: "How We Use Information", icon: <Server className="h-5 w-5" /> },
    { id: "data-sharing", title: "Data Sharing", icon: <Users className="h-5 w-5" /> },
    { id: "data-security", title: "Data Security", icon: <Lock className="h-5 w-5" /> },
    { id: "privacy-rights", title: "Your Rights", icon: <Shield className="h-5 w-5" /> },
    { id: "contact", title: "Contact Us", icon: <MailCheck className="h-5 w-5" /> }
  ];

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div className="mb-8 text-center" variants={fadeIn}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-card/90 border border-primary/40 text-primary mb-4">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Data Protection</span>
              </div>
              
              <motion.h1 className="text-3xl md:text-4xl font-bold mb-2" variants={fadeIn}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Privacy Policy
                </span>
              </motion.h1>
              
              <motion.p className="text-sm text-muted-foreground" variants={fadeIn}>
                Last Updated: May 28, 2025
              </motion.p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Table of Contents */}
              <motion.div className="lg:w-56 flex-shrink-0" variants={fadeIn}>
                <div className="sticky top-24 bg-card/60 rounded-xl p-4 border border-primary/20 shadow-sm">
                  <h3 className="text-base font-semibold mb-3 border-b border-primary/20 pb-2">Contents</h3>
                  <ul className="space-y-1.5">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className="flex items-center w-full text-left text-sm hover:text-primary transition-colors duration-200"
                        >
                          <div className="w-5 h-5 flex items-center justify-center mr-2 text-primary/70">
                            {section.icon}
                          </div>
                          <span>{section.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div className="lg:flex-1" variants={staggerChildren}>
                <div className="prose prose-sm max-w-none space-y-8 bg-card/50 p-6 rounded-xl border border-primary/20 shadow-md">
                  <motion.section id="introduction" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Info className="h-5 w-5 text-primary mr-2" />
                      Introduction
                    </h2>
                    <p>
                      At Academic Help Services, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                  </motion.section>
                  
                  <motion.section id="information-we-collect" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      Information We Collect
                    </h2>
                    <ul className="space-y-1 mt-2">
                      <li><strong className="text-primary">Personal Information</strong>: Name, email, phone number</li>
                      <li><strong className="text-primary">Academic Information</strong>: Assignment details, subject areas</li>
                      <li><strong className="text-primary">Payment Information</strong>: Payment methods, billing information</li>
                      <li><strong className="text-primary">Usage Information</strong>: Website interaction data, IP address</li>
                    </ul>
                  </motion.section>
                  
                  <motion.section id="how-we-use" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Server className="h-5 w-5 text-primary mr-2" />
                      How We Use Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm">
                      {[
                        "To provide our services",
                        "To process orders",
                        "To communicate with you",
                        "To improve our services",
                        "To personalize your experience",
                        "To detect and prevent fraud"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                  
                  <motion.section id="data-sharing" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      Data Sharing
                    </h2>
                    <p>We may share your information with service providers, business partners, and when legally required. We do not sell your personal information to third parties.</p>
                  </motion.section>
                  
                  <motion.section id="data-security" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Lock className="h-5 w-5 text-primary mr-2" />
                      Data Security
                    </h2>
                    <p>
                      We implement appropriate security measures to protect your personal information, including encryption, secure servers, regular security audits, and access controls.
                    </p>
                  </motion.section>
                  
                  <motion.section id="privacy-rights" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Your Rights
                    </h2>
                    <p>Depending on your location, you may have rights to access, rectify, delete, or restrict processing of your data. To exercise these rights, please contact us.</p>
                  </motion.section>
                  
                  <motion.section id="contact" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <MailCheck className="h-5 w-5 text-primary mr-2" />
                      Contact Us
                    </h2>
                    <p>
                      If you have questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-primary mr-2" />
                        <a href="mailto:privacy@academicassist.com" className="text-primary hover:underline text-sm">
                          privacy@academicassist.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-primary mr-2" />
                        <a href="tel:+15551234567" className="text-primary hover:underline text-sm">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
