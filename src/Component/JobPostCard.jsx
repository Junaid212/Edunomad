import React from 'react';
import {
  MapPin,
  Calendar,
  Clock,
  GraduationCap,
  Briefcase,
  IndianRupee,
  Send
} from 'lucide-react';

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
    
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
            {/* {isLive && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full animate-pulse">
                Live
              </span>
            )} */}
          </div>
          <p className="text-gray-600 text-sm sm:text-base font-medium">{school}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
        {/* {salary && (
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <IndianRupee className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Salary</span>
            </div>
            <p className="text-sm font-bold text-gray-900">{salary}</p>
          </div>
        )} */}

        <div className="bg-[#FCFCE8] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Qualification</span>
          </div>
          <p className="text-sm text-gray-900">{qualification}</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Experience</span>
          </div>
          <p className="text-sm text-gray-900">{experience}</p>
        </div>
      </div>

      {/* Description */}
      {/* {description && (
        <p className="text-gray-700 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      )} */}

      {/* Apply Button */}
      <button className="w-full bg-gradient-to-r from-[#00E5D5] to-[#00E5D5] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
        <Send className="w-4 h-4" />
        Apply Now
      </button>
    </div>
  );
}
