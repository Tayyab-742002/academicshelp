import { Metadata } from "next";

// Default metadata that will be used as fallback when no metadata is defined for a route
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://academic-help-service.com"),
  title: {
    default: "Academic Help Services | Professional Academic Assistance",
    template: "%s | Academic Help Services"
  },
  description: "Professional academic assistance for students. Get help with essays, research papers, dissertations, and more.",
  keywords: [
    "academic help",
    "essay writing",
    "research paper",
    "dissertation",
    "homework help",
    "academic assistance",
    "professional writing",
    "student services"
  ],
  authors: [
    {
      name: "Academic Help Services",
      url: "https://academic-help-service.com",
    },
  ],
  creator: "Academic Help Services",
  publisher: "Academic Help Services",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://academic-help-service.com",
    title: "Academic Help Services | Professional Academic Assistance",
    description: "Professional academic assistance for students. Get help with essays, research papers, dissertations, and more.",
    siteName: "Academic Help Services",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Help Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Help Services | Professional Academic Assistance",
    description: "Professional academic assistance for students. Get help with essays, research papers, dissertations, and more.",
    creator: "@academichelpservices",
    images: ["/og/twitter-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
    languages: {
      "en-US": "/en-US",
    },
  },
  category: "education",
}; 