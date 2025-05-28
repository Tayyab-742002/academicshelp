"use client";

import TagLine from "@/components/ui/TagLine";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPinned, PhoneCall, PhoneOutgoing, Twitter } from "lucide-react";

export default function ContactInfo() {
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
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const contactMethods = [
    {
      title: "Email",
      content: "support@example.com",
      icon: <Mail className="h-6 w-6 text-primary" />,
    },
    {
      title: "Phone",
      content: "+1 (555) 123-4567",
      icon: <PhoneOutgoing  className="h-6 w-6 text-primary" />,
    },
    {
      title: "Office",
      content: "123 Education Street, Academic City, AC 12345",
      icon: <MapPinned  className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background dark:from-muted/5 dark:to-background z-0" />

      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-10xl mx-auto  w-full flex flex-col place-items-center "
        >
          <motion.div
            variants={itemVariants}
            custom={0}
            className="text-center mb-12 "
          >
            <TagLine
              tagline="Ways to Reach Us"
              TagLineIcon={<PhoneCall className="h-4 w-4 mr-2" />}
            />

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ways to Reach Us
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Our team is available through multiple channels to ensure you get
              the assistance you need, when you need it.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-card/95  to-card/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-primary/60 dark:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary/20 group-hover:bg-accent/40 transition-all duration-300" />

                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative">
                    {method.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative">
                    {method.title}
                  </h3>

                  <p className="text-muted-foreground relative">
                    {method.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social media links - simplified and more professional */}
          <motion.div
            variants={itemVariants}
            custom={4}
            className="flex flex-col items-center"
          >
            

            <div className="flex justify-center space-x-5">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (platform, i) => (
                  <motion.a
                    key={platform}
                    href="#"
                    custom={i + 5}
                    variants={itemVariants}
                    className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-card/20 border border-primary/50 dark:border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow"
                    whileHover={{ y: -3 }}
                  >
                    {platform === "facebook" && (
                      <Facebook className="h-5 w-5" />
                    )}
                    {platform === "twitter" && (
                      <Twitter className="h-5 w-5" />
                    )}
                    {platform === "instagram" && (
                     <Instagram className="h-5 w-5" />
                    )}
                    {platform === "linkedin" && (
                      <Linkedin className="h-5 w-5" />
                    )}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
