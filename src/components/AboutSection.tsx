import React from 'react';

const AboutSection: React.FC = () => {
  const highlights = [
    { number: '15+', text: 'Years of Experience' },
    { number: '5000+', text: 'Successful Selections' },
    { number: '80%', text: 'Selection Rate' },
    { number: '40+', text: 'Expert Instructors' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-olive-900 mb-6">About Olive Greens Institute</h2>
            <p className="text-gray-700 mb-4">
              Established in 2008, Olive Greens Institute has grown to become India's premier coaching institute for SSB interviews and defense examination preparation. Our mission is to transform defense aspirants into future officers of the Indian Armed Forces.
            </p>
            <p className="text-gray-700 mb-6">
              What sets us apart is our faculty of ex-servicemen and defense experts who bring real-world experience and insights to our training methodology. Our comprehensive approach addresses all aspects of the selection process, from psychological preparation to physical training.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                  <div className="text-3xl font-bold text-army-600 mb-2">{item.number}</div>
                  <div className="text-gray-600">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8961464/pexels-photo-8961464.jpeg" 
                alt="Olive Greens Institute Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 rounded-lg overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg" 
                alt="Training session at Olive Greens" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;