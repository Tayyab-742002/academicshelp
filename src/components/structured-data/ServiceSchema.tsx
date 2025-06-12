export default function ServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Academic Assistance",
          "name": "Academic Help Services",
          "provider": {
            "@type": "Organization",
            "name": "AcademicsHelp"
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
          "description": "Professional academic assistance services including essay writing, research papers, homework help, assignments, and more. 24/7 expert support for all educational levels.",
          "termsOfService": "https://academicshelp.com/terms",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://academicshelp.com/contact"
          },
          "potentialAction": {
            "@type": "OrderAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://academicshelp.com/contact",
              "inLanguage": "en-US",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "ServiceOutput",
              "name": "Academic assistance"
            }
          }
        })
      }}
    />
  );
} 