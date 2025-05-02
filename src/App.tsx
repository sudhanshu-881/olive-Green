import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CourseSection from './components/CourseSection';
import TestimonialSection from './components/TestimonialSection';
import InstructorSection from './components/InstructorSection';
import GallerySection from './components/GallerySection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Olive Greens Institute - Premier SSB Interview Coaching';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <CourseSection />
      <TestimonialSection />
      <InstructorSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;