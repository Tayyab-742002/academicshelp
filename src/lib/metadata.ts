import type { Metadata } from "next";

// Default website metadata
export const defaultMetadata: Metadata = {
  title: {
    default: "Academic Assist - Professional Academic Services",
    template: "%s | Academic Assist"
  },
  description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, homework, and more.",
  keywords: ["academic assistance", "essay writing", "research papers", "homework help", "academic services", "professional writers", "thesis writing", "dissertation help"],
  authors: [{ name: "Academic Assist Team" }],
  creator: "Academic Assist",
  publisher: "Academic Assist",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://www.academicassist.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.academicassist.com",
    title: "Academic Assist - Professional Academic Services",
    description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, homework, and more.",
    siteName: "Academic Assist",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Assist - Professional Academic Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Assist - Professional Academic Services",
    description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, homework, and more.",
    images: ["/images/twitter-image.jpg"],
    creator: "@academicassist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'verification_code',
  },
};

// Service page metadata
export const servicesMetadata: Metadata = {
  title: "Professional Academic Services | Academic Assist",
  description: "Explore our comprehensive range of academic services including essay writing, research papers, dissertations, and homework help.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Academic Services | Academic Assist",
    description: "Explore our comprehensive range of academic services including essay writing, research papers, dissertations, and homework help.",
    url: "https://www.academicassist.com/services",
    images: [
      {
        url: "/images/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Assist Services",
      },
    ],
  },
};

// Pricing page metadata
export const pricingMetadata: Metadata = {
  title: "Affordable Academic Services Pricing | Academic Assist",
  description: "View our transparent and competitive pricing for all academic services. Choose the plan that fits your needs and budget.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Affordable Academic Services Pricing | Academic Assist",
    description: "View our transparent and competitive pricing for all academic services. Choose the plan that fits your needs and budget.",
    url: "https://www.academicassist.com/pricing",
    images: [
      {
        url: "/images/pricing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Assist Pricing Plans",
      },
    ],
  },
};

// About page metadata
export const aboutMetadata: Metadata = {
  title: "About Our Expert Academic Team | Academic Assist",
  description: "Learn about our team of expert academic writers and researchers who are dedicated to helping students achieve academic excellence.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Expert Academic Team | Academic Assist",
    description: "Learn about our team of expert academic writers and researchers who are dedicated to helping students achieve academic excellence.",
    url: "https://www.academicassist.com/about",
    images: [
      {
        url: "/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Assist Team",
      },
    ],
  },
};

// Contact page metadata
export const contactMetadata: Metadata = {
  title: "Contact Us | Academic Assist",
  description: "Get in touch with our team for any questions about our academic services or to request a custom quote.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Academic Assist",
    description: "Get in touch with our team for any questions about our academic services or to request a custom quote.",
    url: "https://www.academicassist.com/contact",
    images: [
      {
        url: "/images/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Academic Assist",
      },
    ],
  },
};

// FAQs page metadata
export const faqsMetadata: Metadata = {
  title: "Frequently Asked Questions | Academic Assist",
  description: "Find answers to common questions about our academic services, processes, pricing, and guarantees.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Academic Assist",
    description: "Find answers to common questions about our academic services, processes, pricing, and guarantees.",
    url: "https://www.academicassist.com/faqs",
    images: [
      {
        url: "/images/faqs-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Assist FAQs",
      },
    ],
  },
};

// Testimonials page metadata
export const testimonialsMetadata: Metadata = {
  title: "Student Success Stories | Academic Assist",
  description: "Read testimonials from students who have achieved academic success with our professional assistance services.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Student Success Stories | Academic Assist",
    description: "Read testimonials from students who have achieved academic success with our professional assistance services.",
    url: "https://www.academicassist.com/testimonials",
    images: [
      {
        url: "/images/testimonials-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Assist Testimonials",
      },
    ],
  },
}; 