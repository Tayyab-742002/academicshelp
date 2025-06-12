import { Metadata } from "next";

// Default metadata that will be used as fallback when no metadata is defined for a route
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://academicshelp.com"),
  title: {
    default: "AcademicsHelp | Professional Academic Assistance & Homework Help",
    template: "%s | AcademicsHelp.com"
  },
  description: "Expert academic assistance for students at all levels. Get professional help with essays, research papers, assignments, homework, dissertations, and more. 24/7 support available.",
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
  authors: [
    {
      name: "AcademicsHelp",
      url: "https://academicshelp.com",
    },
  ],
  creator: "AcademicsHelp",
  publisher: "AcademicsHelp",
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
    url: process.env.NEXT_PUBLIC_APP_URL || "https://academicshelp.com",
    title: "AcademicsHelp | Professional Academic Assistance & Homework Help",
    description: "Expert academic assistance for students at all levels. Get professional help with essays, research papers, assignments, homework, dissertations, and more. 24/7 support available.",
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
    title: "AcademicsHelp | Professional Academic Assistance & Homework Help",
    description: "Expert academic assistance for students at all levels. Get professional help with essays, research papers, assignments, homework, dissertations, and more. 24/7 support available.",
    creator: "@academicshelp",
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
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://academicshelp.com",
    languages: {
      "en-US": "/en-US",
    },
  },
  category: "education",
}; 