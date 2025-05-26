export const fallbackServices = [
  {
    _id: "essay-writing",
    title: "Essay Writing",
    slug: { current: "essay-writing" },
    icon: "pen-tool",
    category: "writing",
    shortDescription:
      "Professional essays tailored to your requirements with thorough research and proper citations.",
    features: ["Professional writers", "Plagiarism-free", "On-time delivery", "All academic levels", "Free revisions"],
    featured: true,
    mainImage: {
      asset: {
        url: "/images/services/essay-writing.jpg",
      },
    },
    fullDescription: [
      {
        _type: "block",
        style: "normal",
        _key: "intro",
        children: [
          {
            _type: "span",
            text: "Our essay writing service provides high-quality, custom-written essays that meet your specific requirements and academic standards. Whether you need help with a persuasive essay, analytical essay, descriptive essay, or any other type, our experienced writers are here to assist you.",
          },
        ],
        markDefs: [],
      },
    ],
    basePrice: 15,
    pricingUnit: "page",
    deliveryTimeframes: [
      {
        name: "Standard",
        duration: "7+ days",
        priceMultiplier: 1.0,
      },
      {
        name: "Express",
        duration: "3-7 days",
        priceMultiplier: 1.5,
      },
      {
        name: "Urgent",
        duration: "24-72 hours",
        priceMultiplier: 2.0,
      },
    ],
    academicLevels: [
      {
        name: "High School",
        priceMultiplier: 1.0,
      },
      {
        name: "Undergraduate",
        priceMultiplier: 1.3,
      },
      {
        name: "Master's",
        priceMultiplier: 1.6,
      },
      {
        name: "PhD",
        priceMultiplier: 2.0,
      },
    ],
    faqs: [
      {
        question: "How do you ensure originality in your essays?",
        answer: [
          {
            _type: "block",
            style: "normal",
            _key: "answer1",
            children: [
              {
                _type: "span",
                text: "We use plagiarism detection software on all essays before delivery. Our writers create original content based on your requirements, and we provide plagiarism reports upon request.",
              },
            ],
            markDefs: [],
          },
        ],
      },
      {
        question: "Can I request revisions to my essay?",
        answer: [
          {
            _type: "block",
            style: "normal",
            _key: "answer2",
            children: [
              {
                _type: "span",
                text: "Yes, we offer free revisions within 7-30 days of delivery (depending on your package). We'll make changes according to your feedback until you're completely satisfied.",
              },
            ],
            markDefs: [],
          },
        ],
      },
    ],
    order: 1,
  },
  {
    _id: "research-papers",
    title: "Research Papers",
    slug: { current: "research-papers" },
    icon: "file-text",
    category: "writing",
    shortDescription:
      "In-depth research papers with proper methodology and academic rigor.",
    features: ["In-depth research", "All citation styles", "Expert researchers", "Quality assurance", "Data analysis"],
    featured: true,
    mainImage: {
      asset: {
        url: "/images/services/research-papers.jpg",
      },
    },
    fullDescription: [
      {
        _type: "block",
        style: "normal",
        _key: "intro",
        children: [
          {
            _type: "span",
            text: "Our research paper service delivers comprehensive, well-researched academic papers with proper citations, methodology, and analysis. We help you tackle complex research topics with confidence.",
          },
        ],
        markDefs: [],
      },
    ],
    basePrice: 18,
    pricingUnit: "page",
    deliveryTimeframes: [
      {
        name: "Standard",
        duration: "10+ days",
        priceMultiplier: 1.0,
      },
      {
        name: "Express",
        duration: "7-10 days",
        priceMultiplier: 1.5,
      },
      {
        name: "Urgent",
        duration: "3-7 days",
        priceMultiplier: 2.0,
      },
    ],
    academicLevels: [
      {
        name: "Undergraduate",
        priceMultiplier: 1.0,
      },
      {
        name: "Master's",
        priceMultiplier: 1.5,
      },
      {
        name: "PhD",
        priceMultiplier: 2.0,
      },
    ],
    faqs: [
      {
        question: "What citation styles do you support?",
        answer: [
          {
            _type: "block",
            style: "normal",
            _key: "answer1",
            children: [
              {
                _type: "span",
                text: "We support all major citation styles including APA, MLA, Chicago, Harvard, Vancouver, and more. Just specify your required style when placing your order.",
              },
            ],
            markDefs: [],
          },
        ],
      },
      {
        question: "Do you help with primary research?",
        answer: [
          {
            _type: "block",
            style: "normal",
            _key: "answer2",
            children: [
              {
                _type: "span",
                text: "Yes, we can assist with designing surveys, questionnaires, and analyzing primary data. Additional fees may apply depending on the complexity of the research.",
              },
            ],
            markDefs: [],
          },
        ],
      },
    ],
    order: 2,
  },
  {
    _id: "homework-help",
    title: "Homework Help",
    slug: { current: "homework-help" },
    icon: "book-open",
    category: "homework",
    shortDescription:
      "Expert assistance with assignments across various subjects and difficulty levels.",
    features: ["Step-by-step solutions", "All subjects covered", "24/7 support", "Detailed explanations", "Quick delivery"],
    featured: true,
    mainImage: {
      asset: {
        url: "/images/services/homework-help.jpg",
      },
    },
    fullDescription: [
      {
        _type: "block",
        style: "normal",
        _key: "intro",
        children: [
          {
            _type: "span",
            text: "Get expert help with your homework assignments in any subject. Our tutors provide step-by-step solutions with explanations to help you understand the material and improve your grades.",
          },
        ],
        markDefs: [],
      },
    ],
    basePrice: 30,
    pricingUnit: "hour",
    deliveryTimeframes: [
      {
        name: "Standard",
        duration: "48+ hours",
        priceMultiplier: 1.0,
      },
      {
        name: "Express",
        duration: "24-48 hours",
        priceMultiplier: 1.5,
      },
      {
        name: "Urgent",
        duration: "12-24 hours",
        priceMultiplier: 2.0,
      },
    ],
    academicLevels: [
      {
        name: "High School",
        priceMultiplier: 1.0,
      },
      {
        name: "Undergraduate",
        priceMultiplier: 1.2,
      },
      {
        name: "Master's",
        priceMultiplier: 1.5,
      },
    ],
    faqs: [
      {
        question: "What subjects do you cover?",
        answer: [
          {
            _type: "block",
            style: "normal",
            _key: "answer1",
            children: [
              {
                _type: "span",
                text: "We cover a wide range of subjects including Mathematics, Physics, Chemistry, Biology, Economics, Computer Science, Programming, Engineering, Literature, History, and more.",
              },
            ],
            markDefs: [],
          },
        ],
      },
      {
        question: "How quickly can I get help with my homework?",
        answer: [
          {
            _type: "block",
            style: "normal",
            _key: "answer2",
            children: [
              {
                _type: "span",
                text: "Our turnaround times vary depending on the complexity of the assignment. For most homework, we can provide solutions within 24-48 hours. For urgent requests, we offer expedited services.",
              },
            ],
            markDefs: [],
          },
        ],
      },
    ],
    order: 3,
  },
];

// Type definition for Service
export interface Service {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  icon?: string;
  category: string;
  shortDescription: string;
  fullDescription?: {
    _type: string;
    style: string;
    _key: string;
    children: {
      _type: string;
      text: string;
    }[];
    markDefs: unknown[];
  }[];
  features?: string[];
  featured: boolean;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  basePrice: number;
  pricingUnit: string;
  deliveryTimeframes: {
    name: string;
    duration: string;
    priceMultiplier: number;
  }[];
  academicLevels: {
    name: string;
    priceMultiplier: number;
  }[];
  faqs: {
    question: string;
    answer: {
      _type: string;
      style: string;
      _key: string;
      children: {
        _type: string;
        text: string;
      }[];
      markDefs: unknown[];
    }[];
  }[];
  order: number;
  sampleWorks?: {
    title: string;
    description?: string;
    image?: {
      asset: {
        url: string;
      };
    };
    fileUrl?: string;
  }[];
}
