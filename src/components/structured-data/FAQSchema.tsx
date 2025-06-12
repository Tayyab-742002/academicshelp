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
              "name": "What academic help services does AcademicsHelp offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AcademicsHelp offers comprehensive academic assistance including essay writing, research papers, dissertations, homework help, assignments, case studies, lab reports, and more. Our services cover all academic levels from high school to PhD with 24/7 expert support."
              }
            },
            {
              "@type": "Question",
              "name": "How can I get homework help from AcademicsHelp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To get homework help, simply fill out our contact form with your assignment details, including subject, deadline, and specific requirements. You'll be matched with an expert in your field who will provide step-by-step assistance with your homework or assignment."
              }
            },
            {
              "@type": "Question",
              "name": "What makes AcademicsHelp the best academic assistance service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AcademicsHelp stands out for its team of experts with advanced degrees, 24/7 support, guaranteed originality, on-time delivery, and confidential service. We provide personalized assistance tailored to your specific academic needs and learning style."
              }
            },
            {
              "@type": "Question",
              "name": "Is using academic assistance from AcademicsHelp ethical?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our services are designed to provide academic support, research assistance, and learning materials. We help students understand difficult concepts, improve their writing skills, and manage their workload effectively. Our goal is to enhance your learning experience and academic performance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you guarantee original, plagiarism-free work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all work completed by our academic experts is 100% original and plagiarism-free. We conduct thorough plagiarism checks before delivery and can provide a plagiarism report upon request to verify originality."
              }
            },
            {
              "@type": "Question",
              "name": "What subjects and assignment types do you cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AcademicsHelp covers virtually all subjects including Business, Nursing, Psychology, Literature, Science, Engineering, Computer Science, Mathematics, and more. We handle all types of assignments from essays and research papers to complex projects, programming assignments, and dissertations."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you complete my assignment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our turnaround times are flexible based on your needs. We can complete urgent assignments in as little as 6 hours, while standard assignments typically take 24-48 hours. Complex projects like dissertations require more time for thorough research and quality writing."
              }
            }
          ]
        })
      }}
    />
  );
} 