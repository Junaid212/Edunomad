import React from 'react';
import { GraduationCap, Search, Filter } from 'lucide-react';

export default function JobHeader() {
  return (
    <div className="bg-gradient-to-br from-[#00E5D5] via-[#DAD024] to-[#FFAF85] text-white min-h-200 sm:min-h-auto">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Main Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              Teacher Job Vacancies
            </h1>
          </div>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-4 sm:px-0">
            Discover amazing teaching opportunities at top educational institutions
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg">
            <div className="flex flex-col gap-4 sm:gap-3 md:flex-row md:gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search for teaching positions..."
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 text-sm sm:text-base bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:[#68E2D5] focus:border-transparent backdrop-blur-sm transition-all duration-200"
                />
              </div>
              
              {/* Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-3">
                <select className="flex-1 sm:flex-none px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white focus:outline-none focus:ring-2 focus:[#68E2D5] focus:border-transparent backdrop-blur-sm min-w-0 sm:min-w-[140px] md:min-w-[160px] transition-all duration-200">
                  <option value="" className="text-gray-800 ">All Subjects</option>
                  <option value="mathematics" className="text-gray-800">Mathematics</option>
                  <option value="science" className="text-gray-800">Science</option>
                  <option value="english" className="text-gray-800">English</option>
                  <option value="history" className="text-gray-800">History</option>
                </select>
                
                <button className="px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 text-sm sm:text-base bg-[#00E5D5] hover:bg-[#00d4c4] active:bg-[#00c4b4] text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[44px] touch-manipulation">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
