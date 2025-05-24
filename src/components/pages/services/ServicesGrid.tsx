"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getServices, Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch services
  useEffect(() => {
    async function loadServices() {
      try {
        const allServices = await getServices();
        setServices(allServices);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  // Dynamically import icons to prevent SSR issues
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = dynamic(
      () => import("lucide-react").then((mod) => mod[name as keyof typeof mod] as any),
      {
        loading: () => <div className="w-6 h-6 bg-primary/20 rounded-md animate-pulse" />,
        ssr: false
      }
    );

    return <LucideIcon className="w-6 h-6 text-primary" />;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card/50 rounded-xl p-8 h-64 animate-pulse">
              <div className="w-12 h-12 rounded-full bg-primary/20 mb-4"></div>
              <div className="h-6 bg-primary/20 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-primary/10 rounded w-full mb-2"></div>
              <div className="h-4 bg-primary/10 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={isClient ? { opacity: 0, y: 20 } : false}
            animate={isClient ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {service.icon ? (
                  <DynamicIcon name={service.icon} />
                ) : (
                  <div className="w-6 h-6 bg-primary/20 rounded-md" />
                )}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 line-clamp-3">
                {service.shortDescription}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">
                  From ${service.basePrice}/{service.pricingUnit}
                </div>

                <Link
                  href={`/services/${service.slug.current}`}
                  className="text-primary font-medium text-sm flex items-center group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
