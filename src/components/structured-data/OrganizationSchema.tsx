export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Academic Assist",
          "url": "https://www.academicassist.com",
          "logo": "https://www.academicassist.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/academicassist",
            "https://www.twitter.com/academicassist",
            "https://www.linkedin.com/company/academicassist",
            "https://www.instagram.com/academicassist"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-0123",
              "contactType": "customer service",
              "email": "contact@academicassist.com",
              "availableLanguage": ["English"]
            }
          ]
        })
      }}
    />
  );
} 