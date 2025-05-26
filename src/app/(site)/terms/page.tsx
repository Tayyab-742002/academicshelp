"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ChevronRight, BookOpen, UserPlus, FileCheck, CreditCard, Copyright, AlertTriangle, ShieldAlert, XCircle, RefreshCw, Scale, MailCheck, Feather, Users, BookMarked } from "lucide-react";

export default function TermsOfService() {
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
    { id: "introduction", title: "Introduction", icon: <Feather className="h-5 w-5" /> },
    { id: "definitions", title: "Definitions", icon: <BookMarked className="h-5 w-5" /> },
    { id: "account", title: "Account Registration", icon: <UserPlus className="h-5 w-5" /> },
    { id: "services", title: "Services & Use Guidelines", icon: <FileCheck className="h-5 w-5" /> },
    { id: "payment", title: "Payment & Refunds", icon: <CreditCard className="h-5 w-5" /> },
    { id: "intellectual", title: "Intellectual Property", icon: <Copyright className="h-5 w-5" /> },
    { id: "privacy", title: "Privacy", icon: <ShieldAlert className="h-5 w-5" /> },
    { id: "disclaimer", title: "Disclaimer of Warranties", icon: <AlertTriangle className="h-5 w-5" /> },
    { id: "liability", title: "Limitation of Liability", icon: <Scale className="h-5 w-5" /> },
    { id: "indemnification", title: "Indemnification", icon: <Users className="h-5 w-5" /> },
    { id: "termination", title: "Termination", icon: <XCircle className="h-5 w-5" /> },
    { id: "changes", title: "Changes to Terms", icon: <RefreshCw className="h-5 w-5" /> },
    { id: "governing", title: "Governing Law", icon: <BookOpen className="h-5 w-5" /> },
    { id: "contact", title: "Contact Us", icon: <MailCheck className="h-5 w-5" /> },
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
                <FileText className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Legal Agreement</span>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={fadeIn}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary dark:from-primary dark:via-accent dark:to-primary">
                  Terms of Service
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
                        <Feather className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Introduction</h2>
                    </div>
                    <p>
                      Welcome to Academic Help Services. These Terms of Service &quot;Terms&quot; govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                    </p>
                    <div className="p-4 my-4 border border-primary/20 rounded-lg bg-primary/5">
                      <p className="text-foreground mb-0 font-medium">
                        Please read these Terms carefully before using our services. If you do not agree to these Terms, you may not access or use our services.
                      </p>
                    </div>
                  </motion.section>
                  
                  <motion.section id="definitions" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <BookMarked className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Definitions</h2>
                    </div>
                    <p>In these Terms:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="font-medium text-primary">&quot;Services&quot;</div>
                        <p className="text-muted-foreground text-sm mt-1">
                          Refers to all products, services, content, features, technologies, or functions offered by Academic Help Services.
                        </p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="font-medium text-primary">&quot;You&quot; or &quot;User&quot;</div>
                        <p className="text-muted-foreground text-sm mt-1">
                          Refers to the individual or entity that accesses or uses our Services.
                        </p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="font-medium text-primary">&quot;Content&quot;</div>
                        <p className="text-muted-foreground text-sm mt-1">
                          Refers to any text, data, information, images, videos, materials, or other content provided through our Services.
                        </p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="font-medium text-primary">&quot;Academic Materials&quot;</div>
                        <p className="text-muted-foreground text-sm mt-1">
                          Refers to essays, research papers, homework solutions, or other academic content delivered through our Services.
                        </p>
                      </div>
                    </div>
                  </motion.section>
                  
                  <motion.section id="account" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <UserPlus className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Account Registration</h2>
                    </div>
                    <p>
                      To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete.
                    </p>
                    <p>
                      You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                    </p>
                  </motion.section>
                  
                  <motion.section id="services" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <FileCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Services and Use Guidelines</h2>
                    </div>
                    <p>
                      Our Services provide academic assistance, including essay writing, research papers, and homework help. You agree to use our Services only for lawful purposes and in accordance with these Terms.
                    </p>
                    <p>
                      The Academic Materials we provide are intended to be used for reference, research, and learning purposes only. You agree not to:
                    </p>
                    <div className="space-y-3 mt-4">
                      {[
                        "Submit any Academic Materials we provide as your own work without proper attribution",
                        "Use our Services to engage in academic dishonesty or violate any academic institution&apos;s honor code or policies",
                        "Distribute, publish, or sell any Academic Materials received through our Services",
                        "Use our Services for any illegal or unauthorized purpose",
                        "Attempt to access areas of our Services or systems that you are not authorized to access"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start bg-card/70 backdrop-blur-sm rounded-lg p-3 border border-primary/10">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">{i+1}</span>
                          </div>
                          <p className="m-0 text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                  
                  <motion.section id="payment" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Payment and Refunds</h2>
                    </div>
                    <p>
                      You agree to pay all fees associated with the Services you order. All payments are processed through secure third-party payment processors.
                    </p>
                    <p>
                      Refunds may be issued under certain circumstances, as outlined in our Refund Policy. In general, refunds may be considered when:
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      <div className="flex items-center bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                        <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center mr-3 text-primary shadow-sm">
                          <span className="font-medium">1</span>
                        </div>
                        <p className="m-0 text-foreground">The Academic Materials delivered do not meet the specified requirements</p>
                      </div>
                      <div className="flex items-center bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                        <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center mr-3 text-primary shadow-sm">
                          <span className="font-medium">2</span>
                        </div>
                        <p className="m-0 text-foreground">The Academic Materials are delivered after the agreed-upon deadline</p>
                      </div>
                      <div className="flex items-center bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                        <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center mr-3 text-primary shadow-sm">
                          <span className="font-medium">3</span>
                        </div>
                        <p className="m-0 text-foreground">The quality of the Academic Materials does not meet our standard of excellence</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20">
                      <p className="text-foreground font-medium m-0">
                        Refund requests must be submitted within 7 days of delivery. All refund requests are evaluated on a case-by-case basis.
                      </p>
                    </div>
                  </motion.section>
                  
                  <motion.section id="intellectual" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Copyright className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Intellectual Property</h2>
                    </div>
                    <p>
                      All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Academic Help Services or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mt-4">
                      <p className="m-0 text-foreground">
                        <span className="font-medium">License:</span> Upon full payment, you are granted a non-exclusive, non-transferable license to use the Academic Materials for reference and research purposes only. We retain all right, title, and interest in and to the Academic Materials.
                      </p>
                    </div>
                  </motion.section>
                  
                  <motion.section id="privacy" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <ShieldAlert className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Privacy</h2>
                    </div>
                    <p>
                      Your privacy is important to us. Please review our <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>, which explains how we collect, use, and disclose information about you.
                    </p>
                  </motion.section>
                  
                  <motion.section id="disclaimer" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
                    </div>
                    <div className="p-4 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/20 font-medium">
                      <p>
                        OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                      </p>
                      <p className="m-0">
                        WE DO NOT GUARANTEE THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                      </p>
                    </div>
                  </motion.section>
                  
                  <motion.section id="liability" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Scale className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                    </div>
                    <div className="p-4 bg-card/70 backdrop-blur-sm rounded-lg border border-primary/20">
                      <p className="font-medium">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ACADEMIC HELP SERVICES, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES",
                          "ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES",
                          "ANY CONTENT OBTAINED FROM OUR SERVICES",
                          "UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium">{i+1}</span>
                            </div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.section>
                  
                  <motion.section id="indemnification" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Indemnification</h2>
                    </div>
                    <p>
                      You agree to indemnify, defend, and hold harmless Academic Help Services, its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) that such parties may incur as a result of or arising from your violation of these Terms.
                    </p>
                  </motion.section>
                  
                  <motion.section id="termination" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <XCircle className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Termination</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-card/70 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                        <h3 className="text-lg font-medium text-primary mb-2">Our Rights</h3>
                        <p className="text-muted-foreground text-sm">
                          We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                        </p>
                      </div>
                      <div className="bg-card/70 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                        <h3 className="text-lg font-medium text-primary mb-2">Survival</h3>
                        <p className="text-muted-foreground text-sm">
                          Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination.
                        </p>
                      </div>
                    </div>
                  </motion.section>
                  
                  <motion.section id="changes" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <RefreshCw className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Changes to Terms</h2>
                    </div>
                    <p>
                      We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <p>
                      By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised Terms.
                    </p>
                  </motion.section>
                  
                  <motion.section id="governing" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Governing Law</h2>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                      <p className="m-0 font-medium">
                        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                      </p>
                    </div>
                  </motion.section>
                  
                  <motion.section id="contact" variants={fadeIn} className="scroll-mt-24">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <MailCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Contact Us</h2>
                    </div>
                    <p>
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="p-4 mt-4 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <MailCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <a href="mailto:terms@academicassist.com" className="text-primary hover:underline font-medium">
                          terms@academicassist.com
                        </a>
                      </div>
                    </div>
                    <p className="mt-4">
                      Or visit our <Link href="/contact" className="text-primary hover:underline font-medium">Contact Page</Link>.
                    </p>
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
