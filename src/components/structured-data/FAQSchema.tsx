export default function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Academic Assist offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Academic Assist offers a wide range of services including essay writing, research papers, dissertations, homework help, case studies, lab reports, and more. Our services cover all academic levels from high school to PhD."
              }
            },
            {
              "@type": "Question",
              "name": "How do I place an order for academic assistance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To place an order, simply fill out our order form with your assignment details, including topic, length, deadline, and specific requirements. After submitting, you'll be matched with an expert writer who will complete your assignment."
              }
            },
            {
              "@type": "Question",
              "name": "What are your pricing plans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer three pricing tiers: Basic ($29/month), Standard ($59/month), and Premium ($99/month). Each plan offers different levels of support based on your academic needs. We also offer custom pricing for specialized assignments."
              }
            },
            {
              "@type": "Question",
              "name": "Is using academic assistance services ethical?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our services are designed to provide academic support, research assistance, and learning materials. We promote educational growth by helping students understand difficult concepts and improve their writing skills. It's important to use our services responsibly as learning tools."
              }
            },
            {
              "@type": "Question",
              "name": "Do you guarantee originality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all work completed by our writers is 100% original and plagiarism-free. We provide a plagiarism report with Premium and some Standard plan assignments to verify originality."
              }
            }
          ]
        })
      }}
    />
  );
} 