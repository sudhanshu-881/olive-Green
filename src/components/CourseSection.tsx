import React from 'react';
import { courses } from '../data';

const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-olive-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-olive-900 mb-4">Our Specialized Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed by defense experts to prepare you for every aspect of the selection process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-olive-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <span className="bg-army-100 text-army-700 px-3 py-1 rounded-full text-sm font-medium">
                    Duration: {course.duration}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-army-500 mr-2">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-block bg-olive-700 hover:bg-olive-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-army-600 hover:bg-army-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Request Course Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;