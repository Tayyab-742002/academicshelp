export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution?: string;
  quote: string;
  rating: number;
  date: string;
  image: string;
  serviceType: 'essay' | 'research' | 'homework' | 'project' | 'other';
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Undergraduate Student',
    institution: 'Stanford University',
    quote: 'The essay writing service was exceptional. My paper was delivered ahead of schedule and exceeded my expectations. The writer clearly understood the assignment requirements and delivered a well-researched, articulate paper.',
    rating: 5,
    date: '2024-03-15',
    image: '/images/testimonials/student-1.jpg',
    serviceType: 'essay',
    featured: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Graduate Student',
    institution: 'MIT',
    quote: 'I was struggling with my research methodology until I found this service. The assistance I received was invaluable. My research paper was thoroughly analyzed and the feedback helped me improve my approach significantly.',
    rating: 5,
    date: '2024-02-28',
    image: '/images/testimonials/student-2.jpg',
    serviceType: 'research',
    featured: true
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'High School Student',
    institution: 'Westlake High School',
    quote: 'Math has always been challenging for me, but the homework help I received made complex concepts much easier to understand. My grades have improved dramatically since using this service.',
    rating: 4,
    date: '2024-04-02',
    image: '/images/testimonials/student-3.jpg',
    serviceType: 'homework'
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'Doctoral Candidate',
    institution: 'Columbia University',
    quote: 'The research assistance for my dissertation was exceptional. The team helped me refine my thesis and provided valuable insights that strengthened my arguments. Highly recommended for any PhD student.',
    rating: 5,
    date: '2024-01-20',
    image: '/images/testimonials/student-4.jpg',
    serviceType: 'research',
    featured: true
  },
  {
    id: '5',
    name: 'Olivia Thompson',
    role: 'Undergraduate Student',
    institution: 'UCLA',
    quote: 'I needed help with a complex project for my engineering course. The assistance I received was professional and thorough. The project was completed on time and I received an A.',
    rating: 5,
    date: '2024-03-05',
    image: '/images/testimonials/student-5.jpg',
    serviceType: 'project'
  },
  {
    id: '6',
    name: 'James Parker',
    role: 'MBA Student',
    institution: 'Wharton School of Business',
    quote: 'The case study analysis I received was comprehensive and insightful. It helped me understand the business concepts better and apply them effectively in my coursework.',
    rating: 4,
    date: '2024-02-15',
    image: '/images/testimonials/student-6.jpg',
    serviceType: 'essay'
  },
  {
    id: '7',
    name: 'Sophia Martinez',
    role: 'High School Student',
    institution: 'Oakridge High School',
    quote: 'The homework assistance service has been a lifesaver. The tutors are patient and explain concepts clearly. My understanding of chemistry has improved significantly.',
    rating: 5,
    date: '2024-04-10',
    image: '/images/testimonials/student-7.jpg',
    serviceType: 'homework'
  },
  {
    id: '8',
    name: 'Ethan Brown',
    role: 'Undergraduate Student',
    institution: 'University of Michigan',
    quote: 'I was struggling with my term paper until I found this service. The writer helped me organize my thoughts and create a coherent argument. The final paper was excellent.',
    rating: 4,
    date: '2024-03-22',
    image: '/images/testimonials/student-8.jpg',
    serviceType: 'essay'
  },
  {
    id: '9',
    name: 'Ava Williams',
    role: 'Graduate Student',
    institution: 'Johns Hopkins University',
    quote: 'The research assistance for my thesis was invaluable. The team helped me with data analysis and interpretation, which significantly improved the quality of my work.',
    rating: 5,
    date: '2024-02-05',
    image: '/images/testimonials/student-9.jpg',
    serviceType: 'research'
  },
  {
    id: '10',
    name: 'Noah Davis',
    role: 'High School Student',
    institution: 'Lincoln High School',
    quote: 'I needed help with my science project, and the guidance I received was excellent. The project turned out better than I expected and I received high praise from my teacher.',
    rating: 5,
    date: '2024-03-30',
    image: '/images/testimonials/student-10.jpg',
    serviceType: 'project'
  },
  {
    id: '11',
    name: 'Isabella Garcia',
    role: 'Undergraduate Student',
    institution: 'NYU',
    quote: 'The essay writing service exceeded my expectations. The writer captured my voice perfectly and delivered a compelling narrative that earned me an A+.',
    rating: 5,
    date: '2024-01-15',
    image: '/images/testimonials/student-11.jpg',
    serviceType: 'essay'
  },
  {
    id: '12',
    name: 'Lucas Taylor',
    role: 'Graduate Student',
    institution: 'University of Chicago',
    quote: 'The statistical analysis assistance for my research was exceptional. The team helped me interpret complex data and draw meaningful conclusions.',
    rating: 4,
    date: '2024-02-20',
    image: '/images/testimonials/student-12.jpg',
    serviceType: 'research'
  }
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialsByService(serviceType: Testimonial['serviceType']): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.serviceType === serviceType);
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.featured);
}
