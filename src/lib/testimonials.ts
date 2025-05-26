import { client } from "@/sanity/lib/client";
import { fallbackTestimonials, Testimonial } from "./fallbackdata/testimonial";
import { urlFor } from "@/sanity/lib/image";

// Sanity query to get all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonials = await client.fetch(`
      *[_type == "testimonial"] {
        _id,
        name,
        role,
        image {
          asset-> {
            _ref,
            url
          }
        },
        rating,
        serviceType-> {
          _ref,
          title
        },
        quote,
        featured,
        videoUrl
      }
    `);

    // Process image URLs if needed
    return testimonials.map((testimonial: {
      image: {
        asset: {
          _ref: string;
          url: string;
        };
      };
    }) => ({
      ...testimonial,
      image: testimonial.image
        ? {
            ...testimonial.image,
            asset: {
              ...testimonial.image.asset,
              url: testimonial.image.asset._ref
                ? urlFor(testimonial.image).url()
                : testimonial.image.asset.url,
            },
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return fallbackTestimonials;
  }
}

// Get featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonials = await getTestimonials();
    return testimonials.filter((testimonial) => testimonial.featured);
  } catch (error) {
    console.error("Error getting featured testimonials:", error);
    return fallbackTestimonials.filter((testimonial) => testimonial.featured);
  }
}

// Get testimonial by ID
export async function getTestimonialById(
  id: string
): Promise<Testimonial | null> {
  try {
    const testimonials = await getTestimonials();
    return testimonials.find((testimonial) => testimonial._id === id) || null;
  } catch (error) {
    console.error("Error getting testimonial by ID:", error);
    return (
      fallbackTestimonials.find((testimonial) => testimonial._id === id) || null
    );
  }
}
