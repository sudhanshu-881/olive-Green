import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-olive-900 to-olive-700 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg')",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-olive-900 opacity-75"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Olive Greens Institute
          </h1>
          <h2 className="text-xl md:text-2xl text-army-200 mb-6 animate-fadeIn animation-delay-100">
            Premier SSB Interview Coaching for Defense Aspirants
          </h2>
          <p className="text-gray-200 mb-8 text-lg animate-fadeIn animation-delay-200">
            Transforming civilian mindsets into officer-like qualities. Join India's leading defense coaching institute with unparalleled selection records.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-300">
            <a 
              href="#courses" 
              className="bg-army-600 hover:bg-army-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Explore Courses
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-airforce-300 text-airforce-100 hover:bg-airforce-800 font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Animated arrow indicating scroll down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;