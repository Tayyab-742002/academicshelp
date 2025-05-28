import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/services";
import ServiceDetailPage from "@/components/pages/services/ServiceDetailPage";
import ComingSoonModal from "@/components/common/ComingSoonModal";
import { Service } from "@/lib/fallbackdata/service";

interface PageProps {
  params: Promise<{slug: string}>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Academic Assist`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Academic Assist`,
      description: service.shortDescription,
      images: service.mainImage ? [service.mainImage.asset.url] : [],
    },
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  return(
    <ComingSoonModal
      title="Service Page"
      message="This page is currently under construction."
      estimatedTime="Q3 2025"
    />
  )

  const {slug} = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service as Service} />;
}
