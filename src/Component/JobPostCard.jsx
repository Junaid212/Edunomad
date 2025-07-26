import React from 'react';
import { MapPin, Calendar, Clock, GraduationCap, Briefcase, IndianRupee, Send } from 'lucide-react';

export default function JobPostCard({
  title,
  school,
  location,
  type,
  postedDate,
  isLive,
  salary,
  qualification,
  experience,
  applyBefore,
  description
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            {isLive && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full animate-pulse">
                Live
              </span>
            )}
          </div>
          <p className="text-gray-600 font-medium mb-3">{school}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Briefcase className="w-4 h-4 text-blue-500" />
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4 text-blue-500" />
          <span>Posted: {postedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4 text-red-500" />
          <span>Apply before: {applyBefore}</span>
        </div>
      </div>

      {/* Salary and Requirements */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <IndianRupee className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Salary</span>
          </div>
          <p className="text-sm font-bold text-gray-900">{salary}</p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Qualification</span>
          </div>
          <p className="text-sm font-bold text-gray-900">{qualification}</p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Experience</span>
          </div>
          <p className="text-sm font-bold text-gray-900">{experience}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">{description}</p>

      {/* Apply Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
        <Send className="w-4 h-4" />
        Apply Now
      </button>
    </div>
  );
}