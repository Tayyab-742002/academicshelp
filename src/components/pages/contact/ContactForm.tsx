"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setFormStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const formFieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" },
    tap: { scale: 0.98 },
    submitting: { scale: 0.98 },
  };

  return (
    <section ref={formRef} className="py-16 md:py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 dark:from-background dark:to-background/95 z-0" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] dark:bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
      
      <motion.div 
        className="max-w-2xl mx-auto px-4 relative z-10"
        initial="hidden"
        animate={isFormInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          variants={formFieldVariants}
          custom={0}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Send Us a Message
          </h2>
        </motion.div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={formFieldVariants} custom={1}>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/50 dark:bg-card/30 border border-card/30 dark:border-card/20 rounded-lg focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary/50 dark:focus:border-primary/30 focus:outline-none transition-all duration-200 placeholder-muted-foreground/50"
                placeholder="Your name"
                disabled={formStatus === 'submitting'}
                required
              />
              <div className="absolute inset-0 border border-foreground/5 dark:border-foreground/10 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
          
          <motion.div variants={formFieldVariants} custom={2}>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/50 dark:bg-card/30 border border-card/30 dark:border-card/20 rounded-lg focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary/50 dark:focus:border-primary/30 focus:outline-none transition-all duration-200 placeholder-muted-foreground/50"
                placeholder="your.email@example.com"
                disabled={formStatus === 'submitting'}
                required
              />
              <div className="absolute inset-0 border border-foreground/5 dark:border-foreground/10 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
          
          <motion.div variants={formFieldVariants} custom={3}>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card/50 dark:bg-card/30 border border-card/30 dark:border-card/20 rounded-lg focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary/50 dark:focus:border-primary/30 focus:outline-none transition-all duration-200 placeholder-muted-foreground/50"
                placeholder="What's this about?"
                disabled={formStatus === 'submitting'}
                required
              />
              <div className="absolute inset-0 border border-foreground/5 dark:border-foreground/10 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
          
          <motion.div variants={formFieldVariants} custom={4}>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-card/50 dark:bg-card/30 border border-card/30 dark:border-card/20 rounded-lg focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary/50 dark:focus:border-primary/30 focus:outline-none transition-all duration-200 placeholder-muted-foreground/50"
                placeholder="How can we help you?"
                disabled={formStatus === 'submitting'}
                required
              />
              <div className="absolute inset-0 border border-foreground/5 dark:border-foreground/10 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
          
          <motion.div variants={formFieldVariants} custom={5} className="pt-2">
            <motion.button
              type="submit"
              className="w-full relative overflow-hidden group"
              variants={buttonVariants}
              initial="initial"
              whileHover={formStatus !== 'submitting' ? "hover" : ""}
              whileTap={formStatus !== 'submitting' ? "tap" : ""}
              animate={formStatus === 'submitting' ? "submitting" : "initial"}
              disabled={formStatus === 'submitting'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent group-hover:bg-[length:200%_200%] group-hover:animate-[gradient_2s_ease_infinite] rounded-lg"></div>
              <div className="relative px-6 py-3.5 rounded-lg font-medium text-white flex items-center justify-center">
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'submitting' && (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                )}
                {formStatus === 'error' && 'Try Again'}
              </div>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
