export default function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AcademicsHelp",
          "alternateName": "AcademicsHelp.com",
          "url": "https://academicshelp.com",
          "description": "Expert academic assistance and homework help for students at all educational levels. Professional writing services, tutoring, and assignment help.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://academicshelp.com/services?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AcademicsHelp",
            "logo": {
              "@type": "ImageObject",
              "url": "https://academicshelp.com/logo.png"
            }
          },
          "keywords": [
            "academic help",
            "homework help",
            "academics help",
            "academic assistant",
            "assignment help",
            "essay writing",
            "research paper help",
            "dissertation writing"
          ],
          "inLanguage": "en-US",
          "copyrightYear": new Date().getFullYear(),
          "audience": {
            "@type": "Audience",
            "audienceType": "Students"
          }
        })
      }}
    />
  );
} 