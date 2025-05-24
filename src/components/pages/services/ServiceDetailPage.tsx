"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { calculatePrice } from "@/lib/services";

import { ChevronDown, Check, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { MotionProps } from "framer-motion";
import { Service } from "@/lib/fallbackdata/service";

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const [selectedLevel, setSelectedLevel] = useState(
    service.academicLevels?.[0]?.name || ""
  );
  const [selectedTimeframe, setSelectedTimeframe] = useState(
    service.deliveryTimeframes?.[0]?.name || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate price based on selections
  const price = calculatePrice(
    service,
    selectedLevel,
    selectedTimeframe,
    quantity
  );

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Helper function for conditional animations
  const conditionalAnimation = (props: MotionProps): MotionProps => {
    if (!isClient) {
      return {};
    }
    return props;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background dark:from-background/95 dark:to-background z-0" />

        {/* Accent gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              {...conditionalAnimation({
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5 },
              })}
            >
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    Academic Services
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                {service.title}
              </h1>

              <div className="prose prose-lg dark:prose-invert mb-8 text-muted-foreground">
                {service.fullDescription && (
                  <PortableText value={service.fullDescription} />
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center">
                  Order Now <ArrowRight className="ml-2 w-4 h-4" />
                </button>

                <button className="px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              {...conditionalAnimation({
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 0.2 },
              })}
            >
              {service.mainImage ? (
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.mainImage.asset.url}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={isClient ? { opacity: 0, y: 20 } : false}
            animate={isClient ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Pricing Calculator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customize your order to get an instant price estimate. Final
              pricing may vary based on specific requirements.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Order Details</h3>

                {/* Academic Level Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Academic Level
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {service.academicLevels.map(
                      (level: { name: string; priceMultiplier: number }) => (
                        <button
                          key={level.name}
                          onClick={() => setSelectedLevel(level.name)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg border ${
                            selectedLevel === level.name
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border hover:border-primary/50"
                          } transition-colors`}
                        >
                          <span>{level.name}</span>
                          {selectedLevel === level.name && (
                            <Check className="w-5 h-5" />
                          )}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Delivery Timeframe Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Delivery Timeframe
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {service.deliveryTimeframes.map(
                      (timeframe: { name: string; duration: string }) => (
                        <button
                          key={timeframe.name}
                          onClick={() => setSelectedTimeframe(timeframe.name)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg border ${
                            selectedTimeframe === timeframe.name
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border hover:border-primary/50"
                          } transition-colors`}
                        >
                          <div>
                            <span className="font-medium">
                              {timeframe.name}
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              ({timeframe.duration})
                            </span>
                          </div>
                          {selectedTimeframe === timeframe.name && (
                            <Check className="w-5 h-5" />
                          )}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity (
                    {service.pricingUnit === "page"
                      ? "Pages"
                      : service.pricingUnit === "hour"
                        ? "Hours"
                        : "Units"}
                    )
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center rounded-l-lg bg-secondary border border-border"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-20 h-10 text-center border-y border-border bg-card"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-r-lg bg-secondary border border-border"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Price Summary</h3>

                <div className="flex-1 bg-secondary/50 rounded-xl p-6 mb-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">Base Price:</span>
                    <span>
                      ${service.basePrice.toFixed(2)}/{service.pricingUnit}
                    </span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">
                      Academic Level:
                    </span>
                    <span>{selectedLevel}</span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">
                      Delivery Timeframe:
                    </span>
                    <span>{selectedTimeframe}</span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span>
                      {quantity} {service.pricingUnit}
                      {quantity > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total Price:</span>
                      <span className="text-primary">${price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
                  Order Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={isClient ? { opacity: 0, y: 20 } : false}
              animate={isClient ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our{" "}
                {service.title.toLowerCase()} service.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {service.faqs.map(
                (faq: { question: string; answer: any[] }, index: number) => (
                  <motion.div
                    key={index}
                    className="mb-4"
                    initial={isClient ? { opacity: 0, y: 10 } : false}
                    animate={isClient ? { opacity: 1, y: 0 } : false}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className={`w-full flex items-center justify-between p-5 rounded-lg text-left ${
                        expandedFaq === index
                          ? "bg-primary/5 text-primary"
                          : "bg-card hover:bg-card/80"
                      } transition-colors border border-border/50`}
                    >
                      <span className="font-medium">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 bg-card/50 rounded-b-lg border-x border-b border-border/50 prose prose-sm dark:prose-invert max-w-none">
                            <PortableText value={faq.answer} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Sample Works Section */}
      {service.sampleWorks && service.sampleWorks.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={isClient ? { opacity: 0, y: 20 } : false}
              animate={isClient ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Sample Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse examples of our previous {service.title.toLowerCase()}{" "}
                projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.sampleWorks.map(
                (
                  work: {
                    title: string;
                    description: string;
                    image: { asset: { url: string } };
                    fileUrl: string;
                  },
                  index: number
                ) => (
                  <motion.div
                    key={index}
                    className="bg-card rounded-xl overflow-hidden shadow-md border border-border/50 hover:shadow-lg transition-shadow"
                    initial={isClient ? { opacity: 0, y: 20 } : false}
                    animate={isClient ? { opacity: 1, y: 0 } : false}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {work.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={work.image.asset.url}
                          alt={work.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {work.title}
                      </h3>
                      {work.description && (
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {work.description}
                        </p>
                      )}

                      {work.fileUrl && (
                        <a
                          href={work.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium flex items-center hover:underline"
                        >
                          Download Sample
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={isClient ? { opacity: 0, y: 20 } : false}
              animate={isClient ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5 }}
            >
              Ready to Get Started with Our {service.title} Service?
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={isClient ? { opacity: 0, y: 20 } : false}
              animate={isClient ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team of experts is ready to help you achieve academic success.
              Place your order now or contact us for more information.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={isClient ? { opacity: 0, y: 20 } : false}
              animate={isClient ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
                Order Now <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button className="px-8 py-4 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
