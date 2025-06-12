import type { Metadata } from "next";

// Default website metadata
export const defaultMetadata: Metadata = {
  title: {
    default: "AcademicsHelp | Expert Academic Assistance & Homework Help",
    template: "%s | AcademicsHelp.com"
  },
  description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, assignments, homework, dissertations, and more. 24/7 support available.",
  keywords: [
    "academic help",
    "homework help", 
    "academics help", 
    "academic assistant", 
    "assignment help", 
    "essay writing", 
    "research paper help", 
    "dissertation writing", 
    "thesis help", 
    "online tutoring", 
    "academic writing service", 
    "professional writing", 
    "student services", 
    "college homework help", 
    "university assignment help"
  ],
  authors: [{ name: "AcademicsHelp" }],
  creator: "AcademicsHelp",
  publisher: "AcademicsHelp",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://academicshelp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academicshelp.com",
    title: "AcademicsHelp | Expert Academic Assistance & Homework Help",
    description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, assignments, homework, dissertations, and more. 24/7 support available.",
    siteName: "AcademicsHelp",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcademicsHelp - Your Academic Success Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AcademicsHelp | Expert Academic Assistance & Homework Help",
    description: "Get top grades with our professional academic assistance services. Expert help with essays, research papers, assignments, homework, dissertations, and more. 24/7 support available.",
    images: ["/og/twitter-image.jpg"],
    creator: "@academicshelp",
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
  title: "Academic Services | AcademicsHelp.com",
  description: "Explore our comprehensive range of academic services including essay writing, research papers, homework help, assignments, dissertations, and more. Expert assistance for all subjects.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Academic Services | AcademicsHelp.com",
    description: "Explore our comprehensive range of academic services including essay writing, research papers, homework help, assignments, dissertations, and more. Expert assistance for all subjects.",
    url: "https://academicshelp.com/services",
    images: [
      {
        url: "/images/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcademicsHelp Services",
      },
    ],
  },
};

// Pricing page metadata
export const pricingMetadata: Metadata = {
  title: "Affordable Pricing | AcademicsHelp.com",
  description: "View our transparent and affordable pricing for academic assistance services. Student-friendly rates with discounts available for returning customers.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Affordable Pricing | AcademicsHelp.com",
    description: "View our transparent and affordable pricing for academic assistance services. Student-friendly rates with discounts available for returning customers.",
    url: "https://academicshelp.com/pricing",
    images: [
      {
        url: "/images/pricing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcademicsHelp Pricing Plans",
      },
    ],
  },
};

// About page metadata
export const aboutMetadata: Metadata = {
  title: "About Us | AcademicsHelp.com",
  description: "Learn about our team of academic experts with advanced degrees dedicated to helping students succeed in their academic journey. Quality assistance for all educational levels.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | AcademicsHelp.com",
    description: "Learn about our team of academic experts with advanced degrees dedicated to helping students succeed in their academic journey. Quality assistance for all educational levels.",
    url: "https://academicshelp.com/about",
    images: [
      {
        url: "/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcademicsHelp Team",
      },
    ],
  },
};

// Contact page metadata
export const contactMetadata: Metadata = {
  title: "Contact Us | AcademicsHelp.com",
  description: "Get in touch with our 24/7 support team for any questions or to place an order for academic assistance. Quick response guaranteed.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | AcademicsHelp.com",
    description: "Get in touch with our 24/7 support team for any questions or to place an order for academic assistance. Quick response guaranteed.",
    url: "https://academicshelp.com/contact",
    images: [
      {
        url: "/images/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AcademicsHelp",
      },
    ],
  },
};

// FAQs page metadata
export const faqsMetadata: Metadata = {
  title: "Frequently Asked Questions | AcademicsHelp.com",
  description: "Find answers to common questions about our academic assistance services, process, guarantees, confidentiality, and more.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | AcademicsHelp.com",
    description: "Find answers to common questions about our academic assistance services, process, guarantees, confidentiality, and more.",
    url: "https://academicshelp.com/faqs",
    images: [
      {
        url: "/images/faqs-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcademicsHelp FAQs",
      },
    ],
  },
};

// Testimonials page metadata
export const testimonialsMetadata: Metadata = {
  title: "Student Testimonials | AcademicsHelp.com",
  description: "Read genuine reviews and testimonials from students who have used our academic assistance services and improved their grades.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Student Testimonials | AcademicsHelp.com",
    description: "Read genuine reviews and testimonials from students who have used our academic assistance services and improved their grades.",
    url: "https://academicshelp.com/testimonials",
    images: [
      {
        url: "/images/testimonials-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcademicsHelp Testimonials",
      },
    ],
  },
}; 