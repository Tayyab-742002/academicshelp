import type { Metadata } from "next";

// Default website metadata
export const defaultMetadata: Metadata = {
  title: {
    default: "Academic Help Services | Professional Academic Assistance",
    template: "%s | Academic Help Services"
  },
  description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, homework, and more.",
  keywords: ["academic assistance", "essay writing", "research papers", "homework help", "academic services", "professional writers", "thesis writing", "dissertation help"],
  authors: [{ name: "Academic Help Services" }],
  creator: "Academic Help Services",
  publisher: "Academic Help Services",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://academic-help-service.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academic-help-service.com",
    title: "Academic Help Services | Professional Academic Assistance",
    description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, homework, and more.",
    siteName: "Academic Help Services",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services - Professional Academic Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Help Services | Professional Academic Assistance",
    description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, homework, and more.",
    images: ["/og/twitter-image.jpg"],
    creator: "@academichelpservices",
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
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'verification_code',
  },
};

// Service page metadata
export const servicesMetadata: Metadata = {
  title: "Our Services | Academic Help Services",
  description: "Explore our comprehensive range of academic services including essay writing, research papers, dissertations, and more.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Academic Help Services",
    description: "Explore our comprehensive range of academic services including essay writing, research papers, dissertations, and more.",
    url: "https://academic-help-service.com/services",
    images: [
      {
        url: "/images/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services Services",
      },
    ],
  },
};

// Pricing page metadata
export const pricingMetadata: Metadata = {
  title: "Pricing | Academic Help Services",
  description: "View our transparent pricing for academic writing services. Affordable rates for students with discounts available.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Academic Help Services",
    description: "View our transparent pricing for academic writing services. Affordable rates for students with discounts available.",
    url: "https://academic-help-service.com/pricing",
    images: [
      {
        url: "/images/pricing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services Pricing Plans",
      },
    ],
  },
};

// About page metadata
export const aboutMetadata: Metadata = {
  title: "About Us | Academic Help Services",
  description: "Learn about our team of academic experts dedicated to helping students succeed in their academic journey.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Academic Help Services",
    description: "Learn about our team of academic experts dedicated to helping students succeed in their academic journey.",
    url: "https://academic-help-service.com/about",
    images: [
      {
        url: "/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services Team",
      },
    ],
  },
};

// Contact page metadata
export const contactMetadata: Metadata = {
  title: "Contact Us | Academic Help Services",
  description: "Get in touch with our team for any questions or to place an order for academic assistance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Academic Help Services",
    description: "Get in touch with our team for any questions or to place an order for academic assistance.",
    url: "https://academic-help-service.com/contact",
    images: [
      {
        url: "/images/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Academic Help Services",
      },
    ],
  },
};

// FAQs page metadata
export const faqsMetadata: Metadata = {
  title: "Frequently Asked Questions | Academic Help Services",
  description: "Find answers to common questions about our academic services, process, guarantees, and more.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Academic Help Services",
    description: "Find answers to common questions about our academic services, process, guarantees, and more.",
    url: "https://academic-help-service.com/faqs",
    images: [
      {
        url: "/images/faqs-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services FAQs",
      },
    ],
  },
};

// Testimonials page metadata
export const testimonialsMetadata: Metadata = {
  title: "Testimonials | Academic Help Services",
  description: "Read what our customers say about our academic services and their experience working with us.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Testimonials | Academic Help Services",
    description: "Read what our customers say about our academic services and their experience working with us.",
    url: "https://academic-help-service.com/testimonials",
    images: [
      {
        url: "/images/testimonials-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services Testimonials",
      },
    ],
  },
}; 