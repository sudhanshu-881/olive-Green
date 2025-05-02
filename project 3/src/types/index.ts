export interface NavItem {
  title: string;
  path: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rank?: string;
  message: string;
  image: string;
}

export interface Instructor {
  id: string;
  name: string;
  position: string;
  experience: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}