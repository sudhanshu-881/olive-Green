import { NavItem, Course, Testimonial, Instructor, GalleryImage, BlogPost } from '../types';

export const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Courses', path: '/courses' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Success Stories', path: '/success-stories' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'SSB Interview Preparation - Comprehensive Course',
    description: 'Complete preparation for Services Selection Board interviews covering all aspects of the 5-day testing process including screening tests, psychology tests, GTO tasks, and personal interview.',
    duration: '4 Weeks',
    features: [
      'Intensive GTO task practice',
      'Psychological test preparation',
      'Personal Interview training',
      'Daily mock SSB exercises',
      'Personality development'
    ],
    image: 'https://images.pexels.com/photos/8961491/pexels-photo-8961491.jpeg'
  },
  {
    id: '2',
    title: 'CDS Exam Preparation',
    description: 'Comprehensive preparation for Combined Defence Services examination with focus on Mathematics, English, and General Knowledge.',
    duration: '3 Months',
    features: [
      'Subject matter expert faculty',
      'Regular mock tests',
      'Personalized attention',
      'Study material provided',
      'Previous years\' papers discussion'
    ],
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg'
  },
  {
    id: '3',
    title: 'NDA Exam Coaching',
    description: 'Complete preparation for National Defence Academy examination covering Mathematics, General Ability Test, and SSB interview training.',
    duration: '6 Months',
    features: [
      'Specialized Mathematics faculty',
      'GAT comprehensive coverage',
      'Weekly test series',
      'SSB interview preparation',
      'Physical training guidance'
    ],
    image: 'https://images.pexels.com/photos/8961454/pexels-photo-8961454.jpeg'
  },
  {
    id: '4',
    title: 'Short-Term SSB Interview Crash Course',
    description: 'Intensive short-term preparation for candidates with upcoming SSB interviews, focusing on all aspects of the selection process.',
    duration: '10 Days',
    features: [
      'Concentrated SSB process training',
      'Quick improvement techniques',
      'Last-minute preparation strategy',
      'Individual attention',
      'Mock SSB board sessions'
    ],
    image: 'https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lt. Arjun Singh',
    rank: 'Indian Army',
    message: 'The training I received at Olive Greens Institute was instrumental in my selection. The mock SSB sessions and personalized feedback helped me identify and improve my weaknesses.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  },
  {
    id: '2',
    name: 'S/Lt. Priya Sharma',
    rank: 'Indian Navy',
    message: 'Olive Greens provided me with the confidence and skills needed to clear the SSB interview. Their methodology and attention to detail is unmatched.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  },
  {
    id: '3',
    name: 'Fg Offr. Rajat Verma',
    rank: 'Indian Air Force',
    message: 'The faculty at Olive Greens Institute understand exactly what the SSB looks for. Their guidance was crucial in helping me realize my dream of joining the Air Force.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: '4',
    name: 'Capt. Ananya Reddy',
    rank: 'Indian Army',
    message: 'From day one, the institute\'s structured approach to SSB preparation set me on the right path. The continuous feedback and improvement system works wonders.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  }
];

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Col. Rajesh Kumar (Retd.)',
    position: 'Director & Chief Instructor',
    experience: '25+ years in Indian Army, former SSB interviewer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    id: '2',
    name: 'Wg Cdr. Vikram Singh (Retd.)',
    position: 'Psychology Test Expert',
    experience: '18+ years in Indian Air Force, specialized in psychological assessments',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg'
  },
  {
    id: '3',
    name: 'Capt. Meera Nair (Retd.)',
    position: 'GTO Expert',
    experience: '12+ years experience, specialized in group tasks and outdoor training',
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg'
  },
  {
    id: '4',
    name: 'Maj. Siddharth Khanna (Retd.)',
    position: 'Interview & Communication Skills Trainer',
    experience: '15+ years experience, expert in personality development',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/8961491/pexels-photo-8961491.jpeg',
    alt: 'Candidates participating in group discussion'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    alt: 'Outdoor training activities'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/8961523/pexels-photo-8961523.jpeg',
    alt: 'Classroom session'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg',
    alt: 'Exam preparation class'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg',
    alt: 'One-on-one counseling session'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/8961466/pexels-photo-8961466.jpeg',
    alt: 'Physical training session'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Prepare for Psychological Tests in SSB',
    excerpt: 'Learn the key strategies to approach psychological tests like TAT, WAT, and SRT to showcase your officer-like qualities effectively.',
    date: 'June 15, 2025',
    author: 'Wg Cdr. Vikram Singh (Retd.)',
    image: 'https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg'
  },
  {
    id: '2',
    title: 'Physical Fitness Tips for Defense Aspirants',
    excerpt: 'Discover the essential fitness routine that every defense aspirant should follow to excel in physical tests and maintain peak performance.',
    date: 'May 28, 2025',
    author: 'Capt. Meera Nair (Retd.)',
    image: 'https://images.pexels.com/photos/8961395/pexels-photo-8961395.jpeg'
  },
  {
    id: '3',
    title: 'Latest Changes in CDS Examination Pattern',
    excerpt: 'Stay updated with the recent modifications in the CDS examination pattern and adjust your preparation strategy accordingly.',
    date: 'May 10, 2025',
    author: 'Col. Rajesh Kumar (Retd.)',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg'
  },
  {
    id: '4',
    title: 'Leadership Qualities the SSB Looks For',
    excerpt: 'Understanding the core leadership traits that Services Selection Board assessors evaluate during the five-day testing process.',
    date: 'April 22, 2025',
    author: 'Maj. Siddharth Khanna (Retd.)',
    image: 'https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg'
  }
];