// src/components/Footer.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer({ isDarkMode }) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center space-x-3">
          <div className="w-20 h-20  flex items-center justify-center">
            <img src='images/eduno/edonoLogo.png'/>
          </div>
          <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Edunomad Connect</span>
        </div>
        <div>
          <h3 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>For Educators</h3>
          <ul className="space-y-2">
            <li><a href="#" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Register as Teacher</a></li>
            <li><a href="#" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Become a Tutor</a></li>
            <li><a href="#" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Browse Profiles</a></li>
          </ul>
        </div>
        <div>
          <h3 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Help Center</a></li>
            <li><a href="#" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact Us</a></li>
            <li><a href="#" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <p className={`text-center text-sm py-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        © 2024 Edunomad Connect. All rights reserved.
      </p>
    </footer>
);
}
