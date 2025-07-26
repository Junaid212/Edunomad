// src/components/EducatorsList.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function EducatorsList({ isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu  }) {
  const navigate = useNavigate();
  const sampleEducators = [
  {
    id: 1,
    image: 'https://example.com/images/michael-chen.jpg',
    name: 'Sarah Johnson',
    rating: 4.8,
    qualifications: 'M.Sc. Physics, B.Ed',
    location: 'New York, NY',
    subjects: ['Mathematics', 'Physics']
  },
  {
    id: 2,
    image: 'https://example.com/images/michael-chen.jpg',
    name: 'Michael Chen',
    rating: 4.9,
    qualifications: 'Ph.D. Chemistry',
    location: 'San Francisco, CA',
    subjects: ['Chemistry', 'Biology']
  },
  {
    id: 3,
    image: 'https://example.com/images/michael-chen.jpg',
    name: 'Ayesha Patel',
    rating: 4.7,
    qualifications: 'M.A. English Literature, B.Ed',
    location: 'Chicago, IL',
    subjects: ['English', 'History']
  },
  {
    id: 4,
    image: 'https://example.com/images/michael-chen.jpg',
    name: 'David Martinez',
    rating: 4.6,
    qualifications: 'B.Tech Computer Science',
    location: 'Austin, TX',
    subjects: ['Computer Science', 'Mathematics']
  },
  {
    id: 5,
    image: 'https://example.com/images/michael-chen.jpg',
    name: 'Emily Nguyen',
    rating: 4.85,
    qualifications: 'M.Sc. Biology, M.Ed',
    location: 'Seattle, WA',
    subjects: ['Biology', 'Environmental Science']
  },
  {
    id: 6,
    image: 'https://example.com/images/michael-chen.jpg',
    name: 'Ravi Mehra',
    rating: 4.75,
    qualifications: 'Ph.D. Mathematics',
    location: 'Boston, MA',
    subjects: ['Mathematics', 'Statistics']
  }
];

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
          <Header
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            onJoinNowClick={() => navigate('/register')}
          />
    <section className="py-12 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Find Your Perfect Educator
          </h1>
          <p className={`mt-2 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Browse through our network of verified teachers and tutors
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name, subject, or keyword..."
            className={`w-full md:w-1/2 px-4 py-3 rounded-lg border focus:outline-none ${
              isDarkMode
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
            }`}
          />
          <div className="flex space-x-4">
            <select
              className={`px-4 py-3 rounded-lg border focus:outline-none ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-emerald-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
              }`}
            >
              <option>Subject</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>English</option>
            </select>
            <select
              className={`px-4 py-3 rounded-lg border focus:outline-none ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-emerald-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
              }`}
            >
              <option>Location</option>
              <option>New York, NY</option>
              <option>San Francisco, CA</option>
              <option>Boston, MA</option>
              <option>Austin, TX</option>
            </select>
            <button
              className="px-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Educator Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sampleEducators.map((ed) => (
            <div
              key={ed.id}
              className={`p-6 rounded-2xl shadow-lg border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              {/* Educator Image */}
              {ed.image && (
                <img
                    src={ed.image}
                    alt={ed.name}
                    className="w-36 h-36 object-cover rounded-full mb-4 mx-auto  "
                />
                )}

             

              {/* Name & Rating */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {ed.name}
                  </h2>
                  <div className="flex items-center text-sm text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{ed.rating.toFixed(1)}</span>
                  </div>
                  <div className="text-sm whitespace-nowrap">
                  {ed.location}
                </div>
                </div>
                
              </div>

              {/* Qualifications */}
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {ed.qualifications}
              </p>

              {/* Subjects */}
              <ul className="flex flex-wrap gap-2 mb-6">
                {ed.subjects.map((subj) => (
                  <li
                    key={subj}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {subj}
                  </li>
                ))}
              </ul>

              
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
