import React, { useState } from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';
import SubmitRequest from './SubmitRequest';
import BrowseRequests from './BrowsRequest';
import Header from './Header';
import Footer from './Footer';

export default function ParentRequest() {
  const [activeTab, setActiveTab] = useState('submit');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <Header/>
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            {/* Logo and Title */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    TutorConnect
                  </h1>
                  <p className="text-sm text-gray-500 font-medium">Parents' Request Platform</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with qualified teachers for your child's educational needs. Submit your
                requirements or browse available tutoring opportunities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Active Parents</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Qualified Teachers</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Successful Matches</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab('submit')}
              className={`flex-1 flex items-center justify-center py-4 px-6 text-center font-semibold rounded-xl transition-all duration-200 ${
                activeTab === 'submit'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Submit Request
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 flex items-center justify-center py-4 px-6 text-center font-semibold rounded-xl transition-all duration-200 ${
                activeTab === 'browse'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Browse Requests (Teachers)
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'submit' ? <SubmitRequest /> : <BrowseRequests />}
      </div>
      <Footer/>
    </div>
  );
}
