export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    title: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const services: ServiceDetail[] = [
  {
    id: "essay-writing",
    title: "Essay Writing",
    description: "Professional essays tailored to your requirements with thorough research and proper citations.",
    longDescription: [
      "Our essay writing service provides high-quality, custom-written essays that meet your specific requirements and academic standards. Whether you need help with a persuasive essay, analytical essay, descriptive essay, or any other type, our experienced writers are here to assist you.",
      "Each essay is crafted from scratch after thorough research on your topic. We ensure proper structure, coherent arguments, and appropriate citations in the required format (APA, MLA, Chicago, Harvard, etc.). Our writers pay special attention to your instructions and deliver a well-organized, plagiarism-free essay that will impress your professors."
    ],
    image: "/images/services/essay-writing.jpg",
    features: [
      "Custom-written essays tailored to your requirements",
      "Thorough research from credible academic sources",
      "Proper citations in any required format (APA, MLA, Chicago, etc.)",
      "Plagiarism-free content guaranteed",
      "On-time delivery, even for urgent deadlines",
      "Free revisions to ensure your satisfaction",
      "Expert writers with advanced degrees in various fields",
      "24/7 customer support"
    ],
    benefits: [
      {
        title: "Save Time",
        description: "Focus on other important tasks while our experts handle your essay writing needs.",
        icon: "/icons/clock.svg"
      },
      {
        title: "Improve Grades",
        description: "Learn from professionally written essays that meet high academic standards.",
        icon: "/icons/academic.svg"
      },
      {
        title: "Reduce Stress",
        description: "Eliminate the anxiety of tight deadlines and challenging topics.",
        icon: "/icons/check.svg"
      },
      {
        title: "Learn Effectively",
        description: "Use our essays as learning tools to improve your own writing skills.",
        icon: "/icons/star.svg"
      },
      {
        title: "Ensure Quality",
        description: "Receive well-researched, properly structured essays that meet academic requirements.",
        icon: "/icons/shield.svg"
      },
      {
        title: "Get Support",
        description: "Access our 24/7 customer support team for any questions or concerns.",
        icon: "/icons/chat.svg"
      }
    ],
    process: [
      {
        step: 1,
        title: "Submit Your Requirements",
        description: "Fill out our order form with your essay details, including topic, length, deadline, and any specific instructions."
      },
      {
        step: 2,
        title: "Writer Assignment",
        description: "We'll match you with an expert writer who specializes in your subject area and has the necessary qualifications."
      },
      {
        step: 3,
        title: "Research and Writing",
        description: "Your writer will conduct thorough research and craft a well-structured essay according to your requirements."
      },
      {
        step: 4,
        title: "Quality Check",
        description: "Our quality assurance team will review the essay for content, structure, grammar, and plagiarism."
      },
      {
        step: 5,
        title: "Delivery and Revisions",
        description: "You'll receive your completed essay before the deadline, with the option to request revisions if needed."
      }
    ],
    pricing: [
      {
        title: "Standard",
        price: "$15-20 per page",
        features: [
          "7+ days deadline",
          "Free title page and bibliography",
          "Standard writer quality",
          "Free revisions (within 7 days)"
        ]
      },
      {
        title: "Premium",
        price: "$20-25 per page",
        features: [
          "3-7 days deadline",
          "Free title page and bibliography",
          "Top 10% of writers",
          "Free revisions (within 14 days)",
          "Plagiarism report"
        ],
        popular: true
      },
      {
        title: "Platinum",
        price: "$25-30 per page",
        features: [
          "24-72 hour deadline",
          "Free title page and bibliography",
          "Top 5% of writers",
          "Free revisions (within 30 days)",
          "Plagiarism report",
          "Priority support"
        ]
      }
    ],
    faq: [
      {
        question: "How do you ensure the essays are plagiarism-free?",
        answer: "All our essays are written from scratch based on your specific requirements. We use plagiarism detection software to check every essay before delivery, ensuring 100% originality."
      },
      {
        question: "Can I request revisions if I'm not satisfied?",
        answer: "Yes, we offer free revisions within the specified timeframe after delivery. Simply let us know what changes you need, and your writer will make the necessary adjustments."
      },
      {
        question: "How do you select writers for my essay?",
        answer: "We match writers to your essay based on their academic background, expertise in the subject area, and experience with similar assignments. All our writers have advanced degrees and undergo a rigorous selection process."
      },
      {
        question: "What if my essay is delivered late?",
        answer: "We have a strong track record of meeting deadlines. However, in the rare case of a late delivery, you may be eligible for a partial or full refund according to our money-back guarantee policy."
      },
      {
        question: "Can I communicate with my writer during the process?",
        answer: "Yes, you can communicate with your writer through our messaging system. This allows you to provide additional information, ask questions, or check on the progress of your essay."
      },
      {
        question: "What citation styles do you support?",
        answer: "We support all major citation styles, including APA, MLA, Chicago, Harvard, Vancouver, and others. Just specify your required citation style when placing your order."
      }
    ]
  },
  {
    id: "research-papers",
    title: "Research Papers",
    description: "In-depth research papers with proper methodology and academic rigor.",
    longDescription: [
      "Our research paper writing service provides comprehensive, well-researched academic papers that meet the highest standards of scholarly work. We specialize in creating research papers that demonstrate critical thinking, analytical skills, and a deep understanding of the subject matter.",
      "Each research paper is written by an expert with advanced qualifications in the relevant field, ensuring that your paper includes current research, proper methodology, and insightful analysis. We follow all academic conventions and formatting requirements to deliver a polished, professional research paper."
    ],
    image: "/images/services/research-papers.jpg",
    features: [
      "In-depth research from scholarly sources",
      "Proper methodology and data analysis",
      "Clear thesis statement and supporting arguments",
      "Correct formatting and citations",
      "Original, plagiarism-free content",
      "Expert writers with advanced degrees",
      "On-time delivery guaranteed",
      "Free revisions"
    ],
    benefits: [
      {
        title: "Academic Excellence",
        description: "Receive research papers that meet the highest academic standards.",
        icon: "academic"
      },
      {
        title: "Expert Insights",
        description: "Benefit from the knowledge of specialists in your field of study.",
        icon: "star"
      },
      {
        title: "Time Management",
        description: "Focus on other priorities while we handle your research paper.",
        icon: "clock"
      },
      {
        title: "Learning Resource",
        description: "Use our papers as valuable learning tools for future research.",
        icon: "academic"
      },
      {
        title: "Stress Reduction",
        description: "Eliminate the pressure of complex research and tight deadlines.",
        icon: "check"
      },
      {
        title: "Continuous Support",
        description: "Get assistance throughout the entire research process.",
        icon: "chat"
      }
    ],
    process: [
      {
        step: 1,
        title: "Submit Research Requirements",
        description: "Provide details about your research paper, including topic, research questions, methodology, and any specific requirements."
      },
      {
        step: 2,
        title: "Expert Assignment",
        description: "We'll match you with a researcher who has expertise in your specific field and research methodology."
      },
      {
        step: 3,
        title: "Research and Analysis",
        description: "Your expert will conduct comprehensive research, gather data, and perform necessary analysis."
      },
      {
        step: 4,
        title: "Writing and Formatting",
        description: "The researcher will write your paper following academic conventions and your specified formatting requirements."
      },
      {
        step: 5,
        title: "Quality Assurance",
        description: "Our quality control team will review the paper for research quality, methodology, analysis, and adherence to requirements."
      },
      {
        step: 6,
        title: "Delivery and Feedback",
        description: "You'll receive your completed research paper with time to review and request any necessary revisions."
      }
    ],
    pricing: [
      {
        title: "Standard",
        price: "$18-25 per page",
        features: [
          "10+ days deadline",
          "Standard research sources",
          "Basic methodology",
          "Free revisions (within 7 days)"
        ]
      },
      {
        title: "Advanced",
        price: "$25-35 per page",
        features: [
          "7-10 days deadline",
          "Advanced research sources",
          "Comprehensive methodology",
          "Free revisions (within 14 days)",
          "Plagiarism report"
        ],
        popular: true
      },
      {
        title: "Expert",
        price: "$35-45 per page",
        features: [
          "3-7 days deadline",
          "Premium research sources",
          "Advanced methodology and analysis",
          "Free revisions (within 30 days)",
          "Plagiarism report",
          "Priority support",
          "Direct communication with researcher"
        ]
      }
    ],
    faq: [
      {
        question: "What types of research papers do you write?",
        answer: "We write all types of research papers, including empirical research, literature reviews, case studies, analytical papers, argumentative papers, and more. Our experts are familiar with various research methodologies and can adapt to your specific requirements."
      },
      {
        question: "How do you ensure the quality of research?",
        answer: "We use only credible academic sources, including peer-reviewed journals, scholarly books, and reputable databases. Our researchers have access to extensive academic resources and are trained in proper research methodologies."
      },
      {
        question: "Can you help with the data analysis portion of my research?",
        answer: "Yes, our experts are proficient in various data analysis methods, including statistical analysis, qualitative analysis, and mixed methods. We can help with data collection, analysis, and interpretation."
      },
      {
        question: "Do you provide assistance with research proposals?",
        answer: "Yes, we can help you develop a comprehensive research proposal, including research questions, literature review, methodology, and expected outcomes. This can serve as a solid foundation for your research project."
      },
      {
        question: "How do you handle citations and references?",
        answer: "We follow your specified citation style (APA, MLA, Chicago, etc.) meticulously. All sources are properly cited within the text and included in the references or bibliography section."
      },
      {
        question: "Can I request specific sources to be included in my research paper?",
        answer: "Absolutely. If you have specific sources you'd like us to include, simply provide the details when placing your order. Our researchers will incorporate these sources appropriately into your paper."
      }
    ]
  },
  {
    id: "homework-help",
    title: "Homework Help",
    description: "Expert assistance with assignments across various subjects and difficulty levels.",
    longDescription: [
      "Our homework help service provides expert assistance with assignments across a wide range of subjects and academic levels. Whether you're struggling with a difficult concept, need clarification on assignment requirements, or simply want to ensure you're on the right track, our qualified tutors are here to help.",
      "We offer personalized support tailored to your specific needs, helping you not only complete your homework but also understand the underlying concepts. Our goal is to enhance your learning experience and help you develop the skills needed for academic success."
    ],
    image: "/images/services/homework-help.jpg",
    features: [
      "Expert assistance in all academic subjects",
      "Step-by-step solutions with explanations",
      "24/7 availability for urgent assignments",
      "Qualified tutors with advanced degrees",
      "Personalized approach to your specific needs",
      "Timely delivery before your deadline",
      "Clear explanations of complex concepts",
      "Secure and confidential service"
    ],
    benefits: [
      {
        title: "Improve Understanding",
        description: "Gain a deeper understanding of difficult concepts and problem-solving methods.",
        icon: "academic"
      },
      {
        title: "Boost Grades",
        description: "Submit high-quality assignments that meet or exceed your professor's expectations.",
        icon: "star"
      },
      {
        title: "Meet Deadlines",
        description: "Get timely assistance even with last-minute assignments and tight deadlines.",
        icon: "clock"
      },
      {
        title: "Reduce Stress",
        description: "Eliminate the anxiety associated with challenging homework assignments.",
        icon: "check"
      },
      {
        title: "Learn Effectively",
        description: "Use our solutions as learning tools to improve your problem-solving skills.",
        icon: "academic"
      },
      {
        title: "Get Personalized Help",
        description: "Receive assistance tailored to your specific learning style and needs.",
        icon: "chat"
      }
    ],
    process: [
      {
        step: 1,
        title: "Submit Your Assignment",
        description: "Upload your homework assignment, including all instructions, requirements, and any relevant materials."
      },
      {
        step: 2,
        title: "Receive a Quote",
        description: "Based on the complexity, deadline, and subject matter, we'll provide you with a price quote."
      },
      {
        step: 3,
        title: "Expert Assignment",
        description: "Once you approve the quote, we'll assign your homework to a qualified expert in the relevant subject area."
      },
      {
        step: 4,
        title: "Work in Progress",
        description: "Your expert will work on your assignment, providing step-by-step solutions with clear explanations."
      },
      {
        step: 5,
        title: "Quality Check",
        description: "Our quality assurance team will review the completed homework for accuracy and clarity."
      },
      {
        step: 6,
        title: "Delivery and Support",
        description: "You'll receive your completed homework before the deadline, with the option to ask follow-up questions if needed."
      }
    ],
    pricing: [
      {
        title: "Basic",
        price: "$30-50 per assignment",
        features: [
          "48+ hours deadline",
          "High school to freshman level",
          "Basic explanations",
          "Email support"
        ]
      },
      {
        title: "Standard",
        price: "$50-100 per assignment",
        features: [
          "24-48 hours deadline",
          "Sophomore to senior level",
          "Detailed explanations",
          "Email and chat support",
          "One round of follow-up questions"
        ],
        popular: true
      },
      {
        title: "Advanced",
        price: "$100-200+ per assignment",
        features: [
          "12-24 hours deadline",
          "Graduate level",
          "Comprehensive explanations",
          "Priority support",
          "Multiple rounds of follow-up questions",
          "Additional learning resources"
        ]
      }
    ],
    faq: [
      {
        question: "What subjects do you cover for homework help?",
        answer: "We cover a wide range of subjects, including mathematics, physics, chemistry, biology, computer science, engineering, economics, business, humanities, social sciences, and more. If you don't see your subject listed, please contact us to check availability."
      },
      {
        question: "How quickly can you complete my homework?",
        answer: "Our turnaround time depends on the complexity and length of your assignment. We can handle urgent requests with deadlines as short as 12 hours, but we recommend providing more time when possible to ensure the highest quality."
      },
      {
        question: "Will I receive explanations with my homework solutions?",
        answer: "Yes, we provide step-by-step explanations with all homework solutions to help you understand the concepts and methodology. Our goal is to help you learn, not just provide answers."
      },
      {
        question: "Can I ask follow-up questions after receiving my homework?",
        answer: "Yes, depending on your package, you can ask follow-up questions if you need clarification on any part of the solution. We're committed to ensuring you fully understand the material."
      },
      {
        question: "How do you determine the price for homework help?",
        answer: "The price is based on several factors, including the subject, academic level, complexity, deadline, and length of the assignment. We provide a quote before proceeding, so you'll know the cost upfront."
      },
      {
        question: "Is your homework help service confidential?",
        answer: "Absolutely. We maintain strict confidentiality regarding your personal information and assignment details. Your privacy is our priority, and we never share your information with third parties."
      }
    ]
  }
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return services.find(service => service.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map(service => service.id);
}
