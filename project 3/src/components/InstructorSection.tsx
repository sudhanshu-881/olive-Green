import React from 'react';
import { instructors } from '../data';

const InstructorSection: React.FC = () => {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-olive-900 mb-4">Our Expert Instructors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from experienced ex-servicemen and defense experts who have been part of the selection process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-olive-800 mb-1">{instructor.name}</h3>
                <p className="text-army-600 font-medium mb-2">{instructor.position}</p>
                <p className="text-gray-600 text-sm">{instructor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;