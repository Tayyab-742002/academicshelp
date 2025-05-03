"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    title: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

interface ServiceDetailProps {
  service: ServiceDetail;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  
  const buttonVariants = {
    hover: { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 400 } },
    tap: { scale: 0.98 }
  };
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  // Section visibility
  const isOverviewVisible = useInView(overviewRef, { once: true, amount: 0.3 });
  const isFeaturesVisible = useInView(featuresRef, { once: true, amount: 0.3 });
  const isBenefitsVisible = useInView(benefitsRef, { once: true, amount: 0.3 });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />
        
        {/* Gradient accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />
        
        {/* Animated dots - client-side only */}
        {typeof window !== 'undefined' && (
          <div className="absolute inset-0 z-0 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/50"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 5 + (i % 5),
                  repeat: Infinity,
                  delay: i % 5,
                }}
              />
            ))}
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Expert Service</span>
                </div>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
                variants={itemVariants}
              >
                {service.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                variants={itemVariants}
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={buttonVariants.hover}
                  whileTap={buttonVariants.tap}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:bg-primary/30 transition-all duration-300"></div>
                  <Link
                    href="/contact"
                    className="relative block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium text-center shadow-xl shadow-primary/20 transition-all duration-300"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={buttonVariants.hover}
                  whileTap={buttonVariants.tap}
                >
                  <Link
                    href="/pricing"
                    className="px-8 py-3 rounded-full border border-primary/30 hover:border-primary/60 text-foreground font-medium text-center transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative h-[300px] md:h-[400px]"
              variants={itemVariants}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
              <motion.div 
                className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl border border-primary/10 dark:border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-50"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isOverviewVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-3 mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Service Overview</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Overview
            </h2>
            <div className="space-y-6">
              {service.longDescription.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isOverviewVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <div className="mt-10 bg-primary/5 dark:bg-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isOverviewVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background/90 dark:to-background z-0" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Benefits of Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={24} 
                    height={24} 
                    className="text-primary" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Our Approach</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We Work
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-6 mb-12 relative"
                initial={{ opacity: 0, x: -30 }}
                animate={isBenefitsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
              >
                {/* Line connecting steps */}
                {index < service.process.length - 1 && (
                  <div className="absolute left-[40px] top-[60px] w-[2px] h-[calc(100%+12px)] bg-gradient-to-b from-primary to-accent opacity-20"></div>
                )}
                
                <div className="w-20 h-20 rounded-full flex-shrink-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background/90 dark:to-background z-0" />
        <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Transparent Pricing</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your Plan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.pricing.map((plan, index) => (
              <motion.div 
                key={index}
                className={`rounded-2xl overflow-hidden border ${plan.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-border shadow-lg'} relative`}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-sm font-medium rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className={`block w-full py-3 rounded-full text-center ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-primary/10 hover:bg-primary/20 text-foreground'} font-medium transition-colors duration-300`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Questions & Answers</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faq.map((item, index) => (
              <div key={index} className="border border-border rounded-xl overflow-hidden">
                <button 
                  className="w-full p-6 text-left bg-card hover:bg-card/80 transition-colors flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-foreground">{item.question}</h3>
                  <span className="text-primary">
                    {openFaqIndex === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-muted-foreground"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 dark:from-primary/80 dark:to-accent/80 z-0" />
        
        {/* Animated particles - client-side only */}
        {typeof window !== 'undefined' && (
          <div className="absolute inset-0 z-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: `${(i * 5) % 100}%`,
                }}
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4 + (i % 6),
                  repeat: Infinity,
                  delay: i % 5,
                }}
              />
            ))}
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with Our Services?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their academic journey with our expert assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="block px-8 py-3 rounded-full bg-white text-primary font-medium text-center shadow-xl shadow-black/10 hover:bg-white/90 transition-all duration-300"
                >
                  Contact Us Today
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="block px-8 py-3 rounded-full border border-white/30 hover:border-white/60 text-white font-medium text-center transition-all duration-300"
                >
                  Explore More Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
