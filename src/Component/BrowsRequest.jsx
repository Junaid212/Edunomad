import React, { useState } from 'react';
import { Filter, MapPin, Clock, User, BookOpen, Calendar, MessageCircle, Star, Search } from 'lucide-react';

// Mock data for tutoring requests
const mockRequests = [
  {
    id: 'PR001',
    postedBy: 'Priya Sharma',
    grade: 'Class 10',
    location: 'Mumbai, Andheri',
    mode: 'Online',
    timing: 'Weekdays 4-6 PM',
    subjects: ['Mathematics', 'Physics'],
    notes: 'Student needs help with board exam preparation. Looking for experienced teacher with proven track record.',
    curriculum: 'CBSE',
    postedDate: '2 days ago',
    urgency: 'High',
    budget: '₹800-1200/hour'
  },
  {
    id: 'PR002',
    postedBy: 'Rajesh Kumar',
    grade: 'Class 8',
    location: 'Delhi, CP',
    mode: 'Offline',
    timing: 'Weekdays 6-8 PM',
    subjects: ['English', 'Social Studies'],
    notes: 'Looking for experienced teacher for language skills improvement and conceptual clarity.',
    curriculum: 'ICSE',
    postedDate: '1 day ago',
    urgency: 'Medium',
    budget: '₹600-900/hour'
  },
  {
    id: 'PR003',
    postedBy: 'Meera Patel',
    grade: 'Class 12',
    location: 'Bangalore, Koramangala',
    mode: 'Online',
    timing: 'Weekdays 6-8 PM',
    subjects: ['Chemistry', 'Biology'],
    notes: 'Urgent help needed for competitive exam preparation. Student is preparing for NEET.',
    curriculum: 'IB',
    postedDate: '3 hours ago',
    urgency: 'High',
    budget: '₹1000-1500/hour'
  },
  {
    id: 'PR004',
    postedBy: 'Amit Singh',
    grade: 'Class 9',
    location: 'Pune, Baner',
    mode: 'Offline',
    timing: 'Weekends 10-12 PM',
    subjects: ['Mathematics', 'Science'],
    notes: 'Student needs foundational support in core subjects. Patient teacher preferred.',
    curriculum: 'State Board',
    postedDate: '5 days ago',
    urgency: 'Low',
    budget: '₹500-700/hour'
  }
];

const BrowseRequests = () => {
  const [filters, setFilters] = useState({
    subject: 'All Subjects',
    grade: 'All Grades',
    mode: 'All Modes',
    location: 'All Locations',
    curriculum: 'All Curricula'
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [requests] = useState(Array.isArray(mockRequests) ? mockRequests : []);



  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getCurriculumColor = (curriculum) => {
    const colors = {
      'CBSE': 'bg-blue-100 text-blue-800 border-blue-200',
      'ICSE': 'bg-green-100 text-green-800 border-green-200',
      'IB': 'bg-orange-100 text-orange-800 border-orange-200',
      'State Board': 'bg-purple-100 text-purple-800 border-purple-200',
      'IGCSE': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[curriculum] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      'High': 'bg-red-100 text-red-800 border-red-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[urgency] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-sm shadow-lg  overflow-hidden">
        {/* Header */}
        <div className="bg-white px-6 py-4">
          <div className="flex items-center">
            <Filter className="w-6 h-6 text-black mr-3" />
            <div>
              <h2 className="text-xl font-bold text-black">Filter & Search Requests</h2>
              <p className="text-black text-sm mt-1">Find the perfect tutoring opportunity</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by subject, location, or notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                value={filters.subject}
                onChange={(e) => handleFilterChange('subject', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
              >
                <option value="All Subjects">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>

            <div>
              <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-2">
                Grade
              </label>
              <select
                id="grade"
                value={filters.grade}
                onChange={(e) => handleFilterChange('grade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
              >
                <option value="All Grades">All Grades</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>

            <div>
              <label htmlFor="mode" className="block text-sm font-semibold text-gray-700 mb-2">
                Mode
              </label>
              <select
                id="mode"
                value={filters.mode}
                onChange={(e) => handleFilterChange('mode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
              >
                <option value="All Modes">All Modes</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <select
                id="location"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
              >
                <option value="All Locations">All Locations</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>

            <div>
              <label htmlFor="curriculum" className="block text-sm font-semibold text-gray-700 mb-2">
                Curriculum
              </label>
              <select
                id="curriculum"
                value={filters.curriculum}
                onChange={(e) => handleFilterChange('curriculum', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200"
              >
                <option value="All Curricula">All Curricula</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="IB">IB</option>
                <option value="State Board">State Board</option>
                <option value="IGCSE">IGCSE</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-gray-600">
          <span className="font-semibold text-gray-900">{requests.length}</span> tutoring requests found
        </div>
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-600">Sort by relevance</span>
        </div>
      </div>

      {/* Requests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{request.id.slice(-2)}</span>
                  </div> */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{request.id}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <User className="w-4 h-4 mr-1" />
                      {request.postedBy}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCurriculumColor(request.curriculum)}`}>
                    {request.curriculum}
                  </span>
                  {/* <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyColor(request.urgency)}`}>
                    {request.urgency} Priority
                  </span> */}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="font-medium">{request.grade}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-2 text-green-500" />
                  <span>{request.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-4 h-4 mr-2 text-purple-500" />
                  <span>{request.timing}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                  <span>{request.postedDate}</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              {/* Mode Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.mode === 'Online' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  📍 {request.mode}
                </span>
                <span className="text-sm font-semibold text-gray-900">{request.budget}</span>
              </div>

              {/* Subjects */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Subjects Required:</p>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(request.subjects) && request.subjects.map((subject, index) =>(
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 text-sm rounded-lg border border-indigo-200 font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Requirements:</p>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
                  {request.notes}
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                <MessageCircle className="w-5 h-5" />
                <span>Express Interest</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-md font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Load More Requests
        </button>
      </div>
    </div>
  );
};

export default BrowseRequests;
