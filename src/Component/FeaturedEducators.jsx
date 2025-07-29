import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const FeaturedEducators= () => {
  const educators = [
    {
      name: 'Sarah Johnson',
      rating: 4.9,
      subject: 'Mathematics',
      level: 'MSc Physics, MIT',
      location: 'New York, NY',
      experience: '5 years',
      subjects: ['Mathematics', 'Physics'],
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      rating: 4.8,
      subject: 'Chemistry',
      level: 'PhD Chemistry',
      location: 'San Francisco, CA',
      experience: '8 years',
      subjects: ['Chemistry', 'Biology'],
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      rating: 4.7,
      subject: 'English Literature',
      level: 'MA English Literature',
      location: 'Austin, TX',
      experience: '6 years',
      subjects: ['English', 'Literature'],
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Educators
          </h2>
          <p className="text-gray-600">
            Meet some of our top rated teachers and tutors
          </p>
        </div>

        {/* Educators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {educators.map((educator, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              {/* Avatar and Basic Info */}
              <div className="text-center mb-4">
                <img
                  src={educator.avatar}
                  alt={educator.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {educator.name}
                </h3>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-600 ml-1">{educator.rating}</span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Education:</span>
                  <span className="ml-2">{educator.level}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{educator.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Experience: {educator.experience}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {educator.subjects.map((subject, subIndex) => (
                    <span
                      key={subIndex}
                      className="px-3 py-2 bg-gray-200 text-turquoise-700 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-turquoise-400 bg-green-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Educators
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEducators;