import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-olive-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or need more information? Reach out to us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-olive-800 mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="course" className="block text-gray-700 mb-1">Interested In</label>
                <select 
                  id="course" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                >
                  <option value="">Select a Course</option>
                  <option value="ssb">SSB Interview Preparation</option>
                  <option value="cds">CDS Exam Coaching</option>
                  <option value="nda">NDA Exam Coaching</option>
                  <option value="crash">SSB Crash Course</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                  placeholder="Your questions or requirements..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-army-600 hover:bg-army-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-olive-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-army-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Our Location</p>
                    <p className="text-gray-600">123 Defense Colony, Near Military Station,<br />Chandigarh, India - 160001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-army-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Phone Numbers</p>
                    <p className="text-gray-600">+91 98765 43210 (Main)<br />+91 98765 43211 (Admissions)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-army-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Email Address</p>
                    <p className="text-gray-600">info@olivegreens.co.in<br />admissions@olivegreens.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-army-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Office Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-xl overflow-hidden shadow-md">
              {/* This would typically be a Google Maps iframe, but since we can't embed iframes in this context, 
                  we'll use a placeholder image */}
              <img 
                src="https://images.pexels.com/photos/439853/pexels-photo-439853.jpeg" 
                alt="Map location of Olive Greens Institute" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;