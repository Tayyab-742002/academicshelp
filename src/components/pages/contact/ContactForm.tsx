"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
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

  // Animation variants
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-background/90 z-0" />
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-70 z-0" />
      
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/60" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 text-primary mb-6 shadow-md dark:bg-card/60 dark:border-primary/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">
                Send us a message
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in touch with our team
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Fill out the form below and we'll get back to you as soon as possible to discuss how we can help with your academic needs.
            </p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md rounded-2xl border border-primary/20 dark:border-primary/30 shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/80 dark:bg-background/40 border border-primary/20 dark:border-primary/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/30 focus:outline-none transition-all duration-200"
                    placeholder="Your name"
                    disabled={formStatus === 'submitting'}
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/80 dark:bg-background/40 border border-primary/20 dark:border-primary/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/30 focus:outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                    disabled={formStatus === 'submitting'}
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/80 dark:bg-background/40 border border-primary/20 dark:border-primary/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/30 focus:outline-none transition-all duration-200"
                  placeholder="What's this about?"
                  disabled={formStatus === 'submitting'}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background/80 dark:bg-background/40 border border-primary/20 dark:border-primary/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/30 focus:outline-none transition-all duration-200 resize-none"
                  placeholder="How can we help you?"
                  disabled={formStatus === 'submitting'}
                  required
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="pt-2"
              >
                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 shadow-lg shadow-primary/20 dark:shadow-primary/15 flex items-center justify-center disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'submitting' && (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </div>
                  )}
                  {formStatus === 'success' && (
                    <div className="flex items-center justify-center">
                      <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </div>
                  )}
                  {formStatus === 'error' && 'Try Again'}
                </motion.button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
