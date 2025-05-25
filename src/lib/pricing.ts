import { client } from "@/sanity/lib/client";

export interface PricingPlan {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  basePrice: number;
  featured: boolean;
  color?: string;
  icon?: string;
  features: {
    feature: string;
    included: boolean;
    highlight: boolean;
    tooltip?: string;
  }[];
  subjectPricing?: {
    subject: string;
    priceMultiplier: number;
  }[];
  ctaText: string;
  order: number;
}

// Calculate annual price (20% discount)
export function calculateAnnualPrice(basePrice: number): number {
  return Math.round(basePrice * 0.8);
}

// Get all pricing plans
export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const plans = await client.fetch(`
      *[_type == "pricing"] | order(order asc) {
        _id,
        title,
        slug,
        description,
        basePrice,
        featured,
        color,
        icon,
        features[] {
          feature,
          included,
          highlight,
          tooltip
        },
        subjectPricing[] {
          subject,
          priceMultiplier
        },
        ctaText,
        order
      }
    `);
    
    return plans;
  } catch (error) {
    console.error("Error fetching pricing plans from Sanity:", error);
    return [];
  }
}

// Get a specific pricing plan by slug
export async function getPricingPlanBySlug(slug: string): Promise<PricingPlan | null> {
  try {
    const plan = await client.fetch(`
      *[_type == "pricing" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        basePrice,
        featured,
        color,
        icon,
        features[] {
          feature,
          included,
          highlight,
          tooltip
        },
        subjectPricing[] {
          subject,
          priceMultiplier
        },
        ctaText,
        order
      }
    `, { slug });
    
    return plan;
  } catch (error) {
    console.error(`Error fetching pricing plan with slug ${slug}:`, error);
    return null;
  }
} 