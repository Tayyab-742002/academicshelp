export interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  image?: {
    asset: { _ref: string; url: string };
  };
  rating: number;
  serviceType?: { _ref: string; title?: string };
  quote: string;
  featured: boolean;
  videoUrl?: string;
}
export const fallbackTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Sarah Johnson",
    role: "Psychology Student, University of Michigan",
    image: {
      asset: {
        _ref: "image-1",
        url: "/testimonials/sarah.jpg",
      },
    },
    rating: 5,
    serviceType: {
      _ref: "service-essay",
      title: "Essay Writing",
    },
    quote:
      "The essay I received was well-researched and perfectly formatted. My professor was impressed with the quality!",
    featured: true,
  },
  {
    _id: "2",
    name: "Michael Chen",
    role: "Computer Science Major, Stanford University",
    image: {
      asset: {
        _ref: "image-2",
        url: "/testimonials/michael.jpg",
      },
    },
    rating: 5,
    serviceType: {
      _ref: "service-project",
      title: "Project Assistance",
    },
    quote:
      "I was struggling with a complex coding assignment until I found this service. The solution was elegant and well-documented.",
    featured: true,
  },
  {
    _id: "3",
    name: "Emily Rodriguez",
    role: "Business Administration, NYU",
    image: {
      asset: {
        _ref: "image-3",
        url: "/testimonials/emily.jpg",
      },
    },
    rating: 4,
    serviceType: {
      _ref: "service-dissertation",
      title: "Dissertation Help",
    },
    quote:
      "Their dissertation assistance helped me organize my research and present it in a coherent manner. Highly recommended!",
    featured: true,
  },
  {
    _id: "4",
    name: "David Wilson",
    role: "Engineering Student, MIT",
    image: {
      asset: {
        _ref: "image-4",
        url: "/testimonials/david.jpg",
      },
    },
    rating: 5,
    serviceType: {
      _ref: "service-homework",
      title: "Homework Help",
    },
    quote:
      "The tutoring I received helped me understand complex engineering concepts that I was struggling with.",
    featured: false,
  },
  {
    _id: "5",
    name: "Jennifer Lee",
    role: "Medical Student, Johns Hopkins",
    image: {
      asset: {
        _ref: "image-5",
        url: "/testimonials/jennifer.jpg",
      },
    },
    rating: 5,
    serviceType: {
      _ref: "service-research",
      title: "Research Paper",
    },
    quote:
      "My research paper was completed ahead of schedule and exceeded my expectations in terms of quality and depth.",
    featured: false,
  },
];
