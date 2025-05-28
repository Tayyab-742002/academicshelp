"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ChevronRight, Info, FileText, Lock, Server, Users, Bell, MailCheck, Globe, Clock, Book, User, Phone, Mail } from "lucide-react";
import ComingSoonModal from "@/components/common/ComingSoonModal";

export default function PrivacyPolicy() {
  return(
    <ComingSoonModal
      title="Privacy Policy Page"
      message="This page is currently under construction."
      estimatedTime="Q3 2025"
    />
  )
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
        delayChildren: 0.3,
      },
    },
  };

  const sections = [
    { id: "introduction", title: "Introduction", icon: <Info className="h-5 w-5" /> },
    { id: "information-we-collect", title: "Information We Collect", icon: <FileText className="h-5 w-5" /> },
    { id: "how-we-use", title: "How We Use Your Information", icon: <Server className="h-5 w-5" /> },
    { id: "data-sharing", title: "Data Sharing and Disclosure", icon: <Users className="h-5 w-5" /> },
    { id: "data-security", title: "Data Security", icon: <Lock className="h-5 w-5" /> },
    { id: "privacy-rights", title: "Your Privacy Rights", icon: <Shield className="h-5 w-5" /> },
    { id: "cookies", title: "Cookies and Tracking", icon: <Bell className="h-5 w-5" /> },
    { id: "childrens-privacy", title: "Children's Privacy", icon: <User className="h-5 w-5" /> },
    { id: "international", title: "International Data Transfers", icon: <Globe className="h-5 w-5" /> },
    { id: "changes", title: "Changes to Policy", icon: <Clock className="h-5 w-5" /> },
    { id: "contact", title: "Contact Us", icon: <MailCheck className="h-5 w-5" /> },
    { id: "glossary", title: "Glossary of Terms", icon: <Book className="h-5 w-5" /> }
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
      {/* Hero Section */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />
        
        {/* Gradient accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40 z-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/90 dark:bg-primary/90"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            {/* Header with badge */}
            <motion.div 
              className="mb-12 text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-8 shadow-md dark:bg-card/60 dark:border-primary/40">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Data Protection</span>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={fadeIn}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
                  Privacy Policy
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground"
                variants={fadeIn}
              >
                Last Updated: May 4, 2025
              </motion.p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Table of Contents */}
              <motion.div 
                className="lg:w-64 flex-shrink-0"
                variants={fadeIn}
              >
                <div className="sticky top-24 bg-card/60 backdrop-blur-sm rounded-xl p-5 border border-primary/20 dark:border-primary/30 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 border-b border-primary/20 pb-2">Contents</h3>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id} className="group">
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className="flex items-center w-full text-left text-sm hover:text-primary transition-colors duration-200 group-hover:pl-1 group-hover:font-medium"
                        >
                          <div className="w-6 h-6 flex items-center justify-center mr-2 text-primary/70 group-hover:text-primary">
                            {section.icon}
                          </div>
                          <span>{section.title}</span>
                          <ChevronRight className="ml-auto h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-200" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div 
                className="lg:flex-1"
                variants={staggerChildren}
              >
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg">
                  <motion.section id="introduction" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Info className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Introduction</h2>
                    </div>
                    <p>
                      Welcome to Academic Help Services. At Academic Help Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p>
                      By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy. We reserve the right to change this Privacy Policy at any time, and we will notify you of any significant changes by posting the new policy on our website.
                    </p>
                  </motion.section>
                  
                  <motion.section id="information-we-collect" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Information We Collect</h2>
                    </div>
                    <p>We may collect different types of information from or about you, including:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <span className="text-xs font-medium text-primary">1</span>
                        </div>
                        <div>
                          <strong className="text-primary">Personal Information</strong>: Name, email address, phone number, and other contact details you provide when registering or ordering services.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <span className="text-xs font-medium text-primary">2</span>
                        </div>
                        <div>
                          <strong className="text-primary">Academic Information</strong>: Details about your assignments, educational level, subject areas, and deadlines.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <span className="text-xs font-medium text-primary">3</span>
                        </div>
                        <div>
                          <strong className="text-primary">Payment Information</strong>: Payment method details, billing address, and transaction history.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <span className="text-xs font-medium text-primary">4</span>
                        </div>
                        <div>
                          <strong className="text-primary">Usage Information</strong>: Data about how you interact with our website, including IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <span className="text-xs font-medium text-primary">5</span>
                        </div>
                        <div>
                          <strong className="text-primary">Communications</strong>: Records of your interactions with us, including emails, chat logs, and support requests.
                        </div>
                      </li>
                    </ul>
                  </motion.section>
                  
                  <motion.section id="how-we-use" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Server className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                    </div>
                    <p>We may use the information we collect for various purposes, including:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {[
                        "To provide and maintain our services",
                        "To process and fulfill your orders",
                        "To communicate with you about your account or services",
                        "To improve our website and services",
                        "To personalize your experience",
                        "To assist with customer service",
                        "To send promotional materials (if you opt-in)",
                        "To detect and prevent fraud or abuse",
                        "To comply with legal obligations"
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className="p-3 bg-primary/5 dark:bg-primary/10 rounded-lg flex items-center border border-primary/10"
                        >
                          <ChevronRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                  
                  <motion.section id="data-sharing" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
                    </div>
                    <p>We may share your information with:</p>
                    <ul className="space-y-4 mt-4">
                      <li className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm">
                        <div className="font-medium text-primary mb-1">Service Providers</div>
                        <p className="text-muted-foreground">Third-party vendors who assist us in providing our services, such as payment processors, tutors, writers, and IT support.</p>
                      </li>
                      <li className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm">
                        <div className="font-medium text-primary mb-1">Business Partners</div>
                        <p className="text-muted-foreground">Trusted partners who help us deliver our services or enhance your experience.</p>
                      </li>
                      <li className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm">
                        <div className="font-medium text-primary mb-1">Legal Requirements</div>
                        <p className="text-muted-foreground">In response to legal processes, court orders, or governmental regulations.</p>
                      </li>
                      <li className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm">
                        <div className="font-medium text-primary mb-1">Protection of Rights</div>
                        <p className="text-muted-foreground">To enforce our terms, prevent fraud, or protect our rights, property, or safety, or that of our users or others.</p>
                      </li>
                    </ul>
                    <p className="mt-4 font-medium">
                      We do not sell your personal information to third parties.
                    </p>
                  </motion.section>
                  
                  <motion.section id="data-security" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Lock className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Data Security</h2>
                    </div>
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                    <div className="mt-4 p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg">
                      <p className="text-sm">
                        <strong>Security Measures We Implement:</strong> Encryption, secure servers, regular security audits, staff training, access controls, and data minimization practices.
                      </p>
                    </div>
                  </motion.section>
                  
                  <motion.section id="privacy-rights" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
                    </div>
                    <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {[
                        "The right to access your personal information",
                        "The right to rectify inaccurate information",
                        "The right to delete your personal information",
                        "The right to restrict or object to processing",
                        "The right to data portability",
                        "The right to withdraw consent at any time"
                      ].map((right, i) => (
                        <div key={i} className="flex items-center p-3 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-xs font-medium text-primary">{i+1}</span>
                          </div>
                          {right}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4">
                      To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
                    </p>
                  </motion.section>
                  
                  {/* Continue with more sections... */}
                  <motion.section id="cookies" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Bell className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
                    </div>
                    <p>
                      We use cookies and similar tracking technologies to collect information about your browsing activities and to understand how you use our website. You can manage your cookie preferences through your browser settings.
                    </p>
                  </motion.section>
                  
                  <motion.section id="childrens-privacy" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Children&apos;s Privacy</h2>
                    </div>
                    <p>
                      Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information.
                    </p>
                  </motion.section>
                  
                  <motion.section id="international" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">International Data Transfers</h2>
                    </div>
                    <p>
                      Your information may be transferred to and processed in countries other than your own, where our servers are located or our service providers operate. We ensure that appropriate safeguards are in place to protect your information in compliance with applicable data protection laws.
                    </p>
                  </motion.section>
                  
                  <motion.section id="changes" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                    </div>
                    <p>
                      We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date at the top of this page. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>
                  </motion.section>
                  
                  <motion.section id="contact" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <MailCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Contact Us</h2>
                    </div>
                    <p>
                      If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-card/90 backdrop-blur-sm rounded-lg border border-primary/20 flex items-start">
                        <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">Email</div>
                          <a href="mailto:privacy@academicassist.com" className="text-primary hover:underline font-medium">
                            privacy@academicassist.com
                          </a>
                        </div>
                      </div>
                      <div className="p-4 bg-card/90 backdrop-blur-sm rounded-lg border border-primary/20 flex items-start">
                        <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground">Phone</div>
                          <a href="tel:+15551234567" className="text-primary hover:underline font-medium">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4">
                      Or visit our <Link href="/contact" className="text-primary hover:underline font-medium">Contact Page</Link>.
                    </p>
                  </motion.section>
                  
                  <motion.section id="glossary" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Book className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Glossary of Terms</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/10">
                        <div className="font-medium text-primary">Personal Data</div>
                        <p className="text-sm text-muted-foreground">Any information relating to an identified or identifiable natural person.</p>
                      </div>
                      <div className="p-3 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/10">
                        <div className="font-medium text-primary">Processing</div>
                        <p className="text-sm text-muted-foreground">Any operation performed on personal data, such as collection, recording, organization, storage, etc.</p>
                      </div>
                      <div className="p-3 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/10">
                        <div className="font-medium text-primary">Data Controller</div>
                        <p className="text-sm text-muted-foreground">The entity that determines the purposes and means of processing personal data (in this case, Academic Help Services).</p>
                      </div>
                      <div className="p-3 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/10">
                        <div className="font-medium text-primary">Data Subject</div>
                        <p className="text-sm text-muted-foreground">The individual to whom the personal data relates (you, our user).</p>
                      </div>
                      <div className="p-3 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/10">
                        <div className="font-medium text-primary">Cookies</div>
                        <p className="text-sm text-muted-foreground">Small text files placed on your device that allow websites to remember your preferences and actions.</p>
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
