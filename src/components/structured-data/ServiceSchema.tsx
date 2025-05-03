export default function ServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Academic Services",
          "provider": {
            "@type": "Organization",
            "name": "Academic Assist"
          },
          "offers": {
            "@type": "AggregateOffer",
            "highPrice": "99",
            "lowPrice": "29", 
            "priceCurrency": "USD",
            "offerCount": "3",
            "offers": [
              {
                "@type": "Offer",
                "name": "Basic",
                "price": "29",
                "priceCurrency": "USD",
                "description": "Perfect for occasional homework help and basic assignments."
              },
              {
                "@type": "Offer",
                "name": "Standard",
                "price": "59",
                "priceCurrency": "USD",
                "description": "Ideal for regular academic assistance throughout the semester."
              },
              {
                "@type": "Offer",
                "name": "Premium",
                "price": "99",
                "priceCurrency": "USD",
                "description": "Comprehensive support for demanding academic schedules."
              }
            ]
          },
          "description": "Professional academic services including essay writing, research papers, homework help, and more.",
          "termsOfService": "https://www.academicassist.com/terms"
        })
      }}
    />
  );
} 