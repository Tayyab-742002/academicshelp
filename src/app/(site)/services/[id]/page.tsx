"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getServiceById, ServiceDetail as ServiceDetailType } from "@/lib/services";
import ServiceDetail from "@/components/pages/services/ServiceDetail";
import { notFound } from "next/navigation";

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
