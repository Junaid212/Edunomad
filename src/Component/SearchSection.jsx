import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchSection= () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const subjects = [
    'Mathematics', 'English', 'Science', 'Physics', 'Chemistry', 
    'Biology', 'History', 'Geography'
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find the Perfect Educator
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search through our network of verified teachers and tutors to find the perfect match for your educational needs.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by subject, name, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-turquoise-400 focus:border-transparent outline-none"
              />
            </div>

            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full md:w-48 pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-turquoise-400 focus:border-transparent outline-none"
              />
            </div>

            {/* Search Button */}
            <button className="bg-turquoise-400 bg-green-300 text-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Subject Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {subjects.map((subject, index) => (
            <button
              key={index}
              className="px-4 py-1 bg-gray-200 border border-gray-200 rounded-full text-gray-700 hover:bg-turquoise-50 hover:border-turquoise-200 hover:text-turquoise-700 transition-colors"
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;