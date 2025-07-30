// src/components/EducatorsList.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function EducatorsList({
  isDarkMode,
  toggleDarkMode,
  isMobileMenuOpen,
  toggleMobileMenu
}) {
  const navigate = useNavigate();
  const sampleEducators = [
     {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300&h=300&fit=crop&crop=face',
    name: 'Sarah Johnson',
    rating: 4.8,
    qualifications: 'M.Sc. Physics, B.Ed',
    location: 'New York, NY',
    subjects: ['Mathematics', 'Physics']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    name: 'Michael Chen',
    rating: 4.9,
    qualifications: 'Ph.D. Chemistry',
    location: 'San Francisco, CA',
    subjects: ['Chemistry', 'Biology']
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    name: 'Ayesha Patel',
    rating: 4.7,
    qualifications: 'M.A. English Literature, B.Ed',
    location: 'Chicago, IL',
    subjects: ['English', 'History']
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: 'David Martinez',
    rating: 4.6,
    qualifications: 'B.Tech Computer Science',
    location: 'Austin, TX',
    subjects: ['Computer Science', 'Mathematics']
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    name: 'Emily Nguyen',
    rating: 4.85,
    qualifications: 'M.Sc. Biology, M.Ed',
    location: 'Seattle, WA',
    subjects: ['Biology', 'Environmental Science']
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    name: 'Ravi Mehra',
    rating: 4.75,
    qualifications: 'Ph.D. Mathematics',
    location: 'Boston, MA',
    subjects: ['Mathematics', 'Statistics']
  }
   ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen`}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-gradient-to-br from-[#00E5D5] via-[#DAD024] to-[#FFAF85] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Find Your Perfect Educator</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl">Browse through our network of verified teachers and tutors</p>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search by name, subject, or keyword..."
            className={`w-full md:w-1/2 px-4 py-2 rounded-lg border focus:outline-none
              ${isDarkMode
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'}`}
          />

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <select
              className={`px-4 py-2 rounded-lg border focus:outline-none
                ${isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-emerald-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'}`}
            >
              <option>Subject</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>English</option>
            </select>

            <select
              className={`px-4 py-2 rounded-lg border focus:outline-none
                ${isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-emerald-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'}`}
            >
              <option>Location</option>
              <option>New York, NY</option>
              <option>San Francisco, CA</option>
              <option>Boston, MA</option>
              <option>Austin, TX</option>
            </select>

            <button
              className="px-4 py-2 bg-[#00E5D5] text-white rounded-lg hover:bg-[#00C4B4] transition"
            >
              Filter
            </button>
          </div>
        </div>

        <h2 className="mt-8 text-2xl sm:text-3xl font-bold">Available Educators</h2>

        {/* Educator Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleEducators.map((ed) => (
            <div
              key={ed.id}
              className={`p-6 rounded-lg shadow-md border
                ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <img
                src={ed.image}
                alt={ed.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto mb-4"
              />

              <div className="text-center mb-4">
                <h3 className={`text-lg sm:text-xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {ed.name}
                </h3>
                <div className="flex items-center justify-center text-yellow-400 mt-1">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{ed.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300">{ed.location}</p>
              </div>

              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {ed.qualifications}
              </p>

              <ul className="flex flex-wrap justify-center gap-2">
                {ed.subjects.map((subj) => (
                  <li
                    key={subj}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {subj}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
