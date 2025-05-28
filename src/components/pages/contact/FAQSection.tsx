"use client";

import FAQSectionComponent  from "@/components/ui/faq-accordion";

export default function FAQSection() {
  
  const faqs = [
    {
      id: 1,
      question: "How quickly can I expect a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend using our phone support for immediate assistance.",
      category: "general"
    },
    {
      id: 2,
      question: "What information should I include in my message?",
      answer: "To help us assist you more efficiently, please include your full name, contact information, and a detailed description of your inquiry or request. If related to a specific assignment, include the assignment details and deadline.",
      category: "general"
    },
    {
      id: 3,
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support through our chat system. Phone and email support are available during business hours (Monday to Friday, 8am-8pm EST).",
      category: "general"
    },
    {
      id: 4,
      question: "Can I schedule a video consultation?",
      answer: "Absolutely! You can request a video consultation through our contact form. Our team will follow up within 24 hours to schedule a convenient time. Video consultations are available for complex assignments and tutoring sessions.",
      category: "general"
    },
    {
      id: 5,
      question: "What are your response time guarantees?",
      answer: "For standard inquiries, we guarantee a response within 24 hours. Premium support subscribers receive priority response within 4 hours during business hours.",
      category: "general"
    }
  ];
  

  


  return (
    <section className="bg-gradient-to-b from-background/90 to-background relative">  
    <div className="max-w-3xl mx-auto">
      <FAQSectionComponent faqs={faqs} />
    </div> 
</section>
  );
}
