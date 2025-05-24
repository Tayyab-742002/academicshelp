import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { fallbackServices, type Service } from "./fallbackdata/service";

// Fetch all services from Sanity
export async function getServices(): Promise<Service[]> {
  try {
    const services = await client.fetch(`
      *[_type == "service"] | order(order asc) {
        _id,
        title,
        slug,
        icon,
        category,
        features,
        shortDescription,
        fullDescription,
        featured,
        mainImage,
        sampleWorks,
        deliveryTimeframes,
        academicLevels,
        basePrice,
        pricingUnit,
        faqs,
        order
      }
    `);

    // Process image URLs
    return services.map((service: any) => ({
      ...service,
      mainImage: service.mainImage
        ? {
            ...service.mainImage,
            asset: {
              ...service.mainImage.asset,
              url: urlFor(service.mainImage).url(),
            },
          }
        : undefined,
      sampleWorks: service.sampleWorks
        ? service.sampleWorks.map((work: any) => ({
            ...work,
            image: work.image
              ? {
                  ...work.image,
                  asset: {
                    ...work.image.asset,
                    url: urlFor(work.image).url(),
                  },
                }
              : undefined,
          }))
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching services from Sanity:", error);
    return fallbackServices;
  }
}

// Get a single service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const service = await client.fetch(
      `*[_type == "service" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        icon,
        category,
        features,
        shortDescription,
        fullDescription,
        featured,
        mainImage,
        sampleWorks,
        deliveryTimeframes,
        academicLevels,
        basePrice,
        pricingUnit,
        faqs,
        order
      }`,
      { slug }
    );

    if (!service) {
      // Try to find in fallback data
      const fallbackService = fallbackServices.find(
        (s) => s.slug.current === slug
      );
      return fallbackService || null;
    }

    // Process image URLs
    return {
      ...service,
      mainImage: service.mainImage
        ? {
            ...service.mainImage,
            asset: {
              ...service.mainImage.asset,
              url: urlFor(service.mainImage).url(),
            },
          }
        : undefined,
      sampleWorks: service.sampleWorks
        ? service.sampleWorks.map((work: any) => ({
            ...work,
            image: work.image
              ? {
                  ...work.image,
                  asset: {
                    ...work.image.asset,
                    url: urlFor(work.image).url(),
                  },
                }
              : undefined,
          }))
        : undefined,
    };
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    // Try to find in fallback data
    const fallbackService = fallbackServices.find(
      (s) => s.slug.current === slug
    );
    return fallbackService || null;
  }
}

// Get featured services
export async function getFeaturedServices(): Promise<Service[]> {
  try {
    const services = await client.fetch(`
      *[_type == "service" && featured == true] | order(order asc) {
        _id,
        title,
        slug,
        icon,
        category,
        features,
        shortDescription,
        featured,
        mainImage,
        basePrice,
        pricingUnit,
        order
      }
    `);

    // Process image URLs
    return services.map((service: any) => ({
      ...service,
      mainImage: service.mainImage
        ? {
            ...service.mainImage,
            asset: {
              ...service.mainImage.asset,
              url: urlFor(service.mainImage).url(),
            },
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching featured services from Sanity:", error);
    return fallbackServices.filter((service) => service.featured);
  }
}

// Calculate price based on service parameters
export function calculatePrice(
  service: Service,
  academicLevel: string,
  deliveryTimeframe: string,
  quantity: number = 1
): number {
  const basePrice = service.basePrice;

  // Find academic level multiplier
  const levelMultiplier =
    service.academicLevels.find((level) => level.name === academicLevel)
      ?.priceMultiplier || 1.0;

  // Find delivery timeframe multiplier
  const timeframeMultiplier =
    service.deliveryTimeframes.find(
      (timeframe) => timeframe.name === deliveryTimeframe
    )?.priceMultiplier || 1.0;

  // Calculate final price
  const finalPrice =
    basePrice * levelMultiplier * timeframeMultiplier * quantity;

  return Math.round(finalPrice * 100) / 100; // Round to 2 decimal places
}
