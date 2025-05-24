"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { motion } from "framer-motion";

interface Guarantee {
  title: string;
  icon: string;
  description: string;
}

export default function GuaranteesSection() {
  // Guarantees data
  const guarantees: Guarantee[] = [
    {
      title: "24/7 Support",
      icon: "headphones",
      description:
        "Our team is available round the clock to assist you with any questions.",
    },
    {
      title: "100% Confidential",
      icon: "shield",
      description:
        "Your personal information is protected and never shared with third parties.",
    },
    {
      title: "Money-Back Promise",
      icon: "dollar-sign",
      description:
        "Not satisfied with our service? Get your money back, no questions asked.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-primary/15 dark:bg-primary/10 px-4 py-1.5 rounded-full ">
              <span className="w-2 h-2 rounded-full  bg-[#EC705E]  animate-pulse" />
              <span className="text-sm font-medium  ">Pease of Mind</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text ">
            Our Guarantees
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing you with the highest quality service
            and support.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
         

              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/40 hover:border-accent/50 rounded-2xl p-8 text-center h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,107,0.15)] z-10">
     

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#EC705E] group-hover:text-primary transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={getIconPath(guarantee.icon)}
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#EC705E] transition-colors duration-300">
                    {guarantee.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to get SVG path for icons
function getIconPath(icon: string): string {
  switch (icon) {
    case "headphones":
      return "M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z";
    case "shield":
      return "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z";
    case "dollar-sign":
      return "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6";
    default:
      return "";
  }
}
