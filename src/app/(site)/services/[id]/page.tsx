"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getServiceById, ServiceDetail as ServiceDetailType } from "@/lib/services";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

// Import ServiceDetail component with no SSR to prevent hydration errors
const ServiceDetail = dynamic(
  () => import("@/components/pages/services/ServiceDetail"),
  { ssr: false }
);

export default function ServicePage() {
  const params = useParams();
  const [service, setService] = useState<ServiceDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const serviceId = Array.isArray(params.id) ? params.id[0] : params.id;
      const serviceData = getServiceById(serviceId);

      if (serviceData) {
        setService(serviceData);
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary">.</div>
      </div>
    );
  }

  if (!service) {
    notFound();
  }

  // Using key={Date.now()} here ensures the component remounts with fresh random values
  // This is a workaround for hydration errors caused by Math.random()
  return <ServiceDetail service={service} key={service.id} />;
}
