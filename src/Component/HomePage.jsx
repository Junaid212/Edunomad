import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight, BookOpen, Users, Award } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Edunomad Connect</span>
          </div>
          <button 
            onClick={() => alert('Redirect to Sign In')}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Eduno
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect, learn, and grow with our comprehensive educational platform. 
            Join thousands of educators, students, and institutions transforming education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => alert('Redirect to Sign In')}
              className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/hero')}
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">Access high-quality educational content from verified educators and institutions.</p>
            </div>
            
            <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect & Learn</h3>
              <p className="text-gray-600">Build meaningful connections with educators, tutors, and fellow learners.</p>
            </div>
            
            <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Achieve Goals</h3>
              <p className="text-gray-600">Track progress and achieve your educational goals with personalized guidance.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;