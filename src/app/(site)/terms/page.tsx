"use client";

import { motion, cubicBezier } from "framer-motion";
import { FileText, FileCheck, CreditCard, Copyright, AlertTriangle, Scale, MailCheck, Feather } from "lucide-react";

export default function TermsOfService() {
  // Animation variants with proper easing function
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: cubicBezier(0.22, 1, 0.36, 1) 
      }
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
    { id: "introduction", title: "Introduction", icon: <Feather className="h-5 w-5" /> },
    { id: "services", title: "Services & Use", icon: <FileCheck className="h-5 w-5" /> },
    { id: "payment", title: "Payment & No Refunds", icon: <CreditCard className="h-5 w-5" /> },
    { id: "intellectual", title: "Intellectual Property", icon: <Copyright className="h-5 w-5" /> },
    { id: "disclaimer", title: "Disclaimer", icon: <AlertTriangle className="h-5 w-5" /> },
    { id: "liability", title: "Limitation of Liability", icon: <Scale className="h-5 w-5" /> },
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
                <FileText className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Legal Agreement</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Terms of Service
                </span>
              </h1>
              
              <p className="text-sm text-muted-foreground">
                Last Updated: May 28, 2025 
              </p>
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
                      <Feather className="h-5 w-5 text-primary mr-2" />
                      Introduction
                    </h2>
                    <p>
                      Welcome to AcademicsHelp. These Terms of Service govern your access to and use of our website and services. By using our services, you agree to be bound by these Terms and our Privacy Policy.
                    </p>
                  </motion.section>
                  
                  <motion.section id="services" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <FileCheck className="h-5 w-5 text-primary mr-2" />
                      Services & Use
                    </h2>
                    <p>
                      Our Services provide academic assistance. Materials provided are for reference and learning purposes only. You agree not to:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Submit provided materials as your own work without proper attribution</li>
                      <li>• Use our Services to engage in academic dishonesty</li>
                      <li>• Distribute or sell any materials received through our Services</li>
                      <li>• Use our Services for any illegal purpose</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      To use our services, you need to contact us directly via email or phone number as provided in the Contact Us section.
                    </p>
                  </motion.section>
                  
                  <motion.section id="payment" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <CreditCard className="h-5 w-5 text-primary mr-2" />
                      Payment & No Refunds
                    </h2>
                    <p>
                      You agree to pay all fees for services ordered. <span className="font-medium">We have a strict NO REFUND POLICY.</span> All sales are final.
                    </p>
                    <p className="text-sm mt-2 font-medium">
                      Please carefully consider your purchase before placing an order as we do not provide refunds under any circumstances.
                    </p>
                  </motion.section>
                  
                  <motion.section id="intellectual" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Copyright className="h-5 w-5 text-primary mr-2" />
                      Intellectual Property
                    </h2>
                    <p>
                      All content and functionality of our Services are the property of AcademicsHelp. Upon payment, you receive a non-exclusive, non-transferable license to use the materials for reference purposes only.
                    </p>
                  </motion.section>
                  
                  <motion.section id="disclaimer" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                      Disclaimer
                    </h2>
                    <p className="text-sm font-medium">
                      OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                    </p>
                  </motion.section>
                  
                  <motion.section id="liability" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <Scale className="h-5 w-5 text-primary mr-2" />
                      Limitation of Liability
                    </h2>
                    <p className="text-sm">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, ACADEMICSHELP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM THE USE OR INABILITY TO USE OUR SERVICES.
                    </p>
                  </motion.section>
                  
                  <motion.section id="contact" variants={fadeIn} className="scroll-mt-24">
                    <h2 className="text-xl font-bold flex items-center">
                      <MailCheck className="h-5 w-5 text-primary mr-2" />
                      Contact Us
                    </h2>
                    <p>
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="flex items-center mt-2">
                      <MailCheck className="h-4 w-4 text-primary mr-2" />
                      <a href="mailto:academichelp0007@gmail.com" className="text-primary hover:underline text-sm">
                        academichelp0007@gmail.com
                      </a>
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
