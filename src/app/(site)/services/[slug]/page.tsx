import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/services";
import ServiceDetailPage from "@/components/pages/services/ServiceDetailPage";

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

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

export default async function ServicePage({ params }: Props) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
