export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AcademicsHelp",
          "alternateName": "AcademicsHelp.com",
          "url": "https://academicshelp.com",
          "logo": "https://academicshelp.com/logo.png",
          "description": "Expert academic assistance and homework help for students at all educational levels. Professional writing services, tutoring, and assignment help.",
          "sameAs": [
            "https://www.facebook.com/academicshelp",
            "https://www.twitter.com/academicshelp",
            "https://www.linkedin.com/company/academicshelp",
            "https://www.instagram.com/academicshelp"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-0123",
              "contactType": "customer service",
              "email": "contact@academicshelp.com",
              "availableLanguage": ["English"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "keywords": "academic help, homework help, academics help, academic assistant, assignment help, essay writing, research papers"
        })
      }}
    />
  );
} 