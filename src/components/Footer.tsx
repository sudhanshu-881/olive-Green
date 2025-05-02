import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-olive-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Olive Greens Institute</h3>
            <p className="text-gray-300 mb-4">
              Transforming defense aspirants into future officers of the Indian Armed Forces since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors duration-300">Our Courses</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">SSB Interview Preparation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">CDS Exam Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">NDA Exam Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">AFCAT Preparation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Personality Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Physical Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on courses, events, and defense news.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-olive-800 border border-olive-700 rounded-md focus:ring-2 focus:ring-army-500 focus:border-army-500 text-white placeholder-gray-400"
              />
              <button 
                type="submit" 
                className="w-full bg-army-600 hover:bg-army-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-olive-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Olive Greens Institute. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;