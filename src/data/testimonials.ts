export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    review: "Anjela delivered an exceptional project that exceeded our expectations. Her attention to detail and technical expertise are outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    review:
      "Working with Anjela was a pleasure from start to finish. She took a very vague initial concept and guided our team through refining the requirements, proposing thoughtful UX improvements and technical trade‑offs along the way. Throughout the project she communicated clearly, proactively flagged risks, and delivered features in small, reviewable increments. The final product not only met our functional needs but also felt incredibly polished, with attention to performance, accessibility, and long‑term maintainability. It’s rare to find a developer who combines deep technical skill with such a strong product mindset.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    review: "Anjela's frontend skills are top-notch. She brings designs to life with pixel-perfect implementation and smooth animations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Founder",
    company: "InnovateLabs",
    review: "The backend architecture Anjela built is robust and scalable. Her problem-solving skills and code quality are impressive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Project Director",
    company: "DigitalAgency",
    review: "Anjela is a talented full-stack developer who consistently delivers high-quality work on time. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Engineering Manager",
    company: "CloudTech",
    review: "Outstanding developer with excellent communication skills. Anjela understands requirements quickly and implements them flawlessly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

