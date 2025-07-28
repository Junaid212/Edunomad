import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, GraduationCap, ArrowRight, CheckCircle, Star, Globe, Zap, Building2, Heart, CheckCircle2, User, Building } from 'lucide-react';

const MainPage = () => {
//   const features = [
//     {
//       icon: Users,
//       title: 'Expert Educators',
//       description: 'Connect with qualified teachers, tutors, and institutions worldwide.'
//     },
//     {
//       icon: Globe,
//       title: 'Global Learning',
//       description: 'Access education from anywhere, breaking geographical boundaries.'
//     },
//     {
//       icon: Zap,
//       title: 'Instant Connection',
//       description: 'Find the perfect learning match with our smart matching system.'
//     }
//   ];

  // const [activeTab, setActiveTab] = useState('educators');
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // const [selectedJobType, setSelectedJobType] = useState('all');

  // const jobOpenings = [
  //   {
  //     title: "High School Mathematics Teacher",
  //     institution: "Greenwood Academy",
  //     location: "New York, NY",
  //     salary: "$45,000 - $65,000",
  //     type: "Full-time",
  //     posted: "2 days ago",
  //     applicants: 23,
  //     requirements: ["Bachelor's in Mathematics", "Teaching License", "2+ years experience"]
  //   },
  //   {
  //     title: "Elementary Science Teacher",
  //     institution: "Sunrise Elementary",
  //     location: "Los Angeles, CA",
  //     salary: "$40,000 - $55,000",
  //     type: "Full-time",
  //     posted: "1 week ago",
  //     applicants: 18,
  //     requirements: ["Education Degree", "Elementary Teaching Cert", "Classroom Management"]
  //   },
  //   {
  //     title: "Online English Tutor",
  //     institution: "EduTech Solutions",
  //     location: "Remote",
  //     salary: "$25 - $40/hour",
  //     type: "Part-time",
  //     posted: "3 days ago",
  //     applicants: 31,
  //     requirements: ["English Degree", "Online Teaching Experience", "Tech Savvy"]
  //   }
  // ];

  const stats = [
    { number: '10K+', label: 'Active Learners' },
    { number: '2K+', label: 'Expert Educators' },
    { number: '500+', label: 'Institutions' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Edunomad Connect
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Sign In
            </button>
            <Link 
              to="/combined"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10,000+ learners worldwide
            </div> */}
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
              Edunomad
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in">
              Bridge the gap between educators and learners. Whether you're a teacher, tutor, 
              institute, or student, Eduno provides the perfect platform to grow, learn, and succeed together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
              <Link 
                to="/combined"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-10 m-40 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Educators</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-left">
                    Discover your next teaching opportunity with our comprehensive job marketplace. 
                    Browse thousands of positions, apply with ease, and track your applications all in one place.
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Browse unlimited job openings from verified institutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>One-click application with saved profile and documents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Real-time application status tracking and notifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Direct communication with hiring managers</span>
                    </li>
                  </ul>
                  {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Start Job Search
                  </button> */}
               
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Tutors</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-left">
                    Build your tutoring business with our comprehensive platform. Create your profile, 
                    showcase your expertise, and connect directly with parents seeking quality education for their children.
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Create detailed profile with qualifications and specialties</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Set your rates, availability, and teaching preferences</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Direct messaging with parents and students</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Integrated scheduling and payment processing</span>
                    </li>
                  </ul>
                  {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Create Tutor Profile
                  </button> */}
                </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-left">
                    Streamline your hiring process with our institutional dashboard. Post job openings, 
                    manage applications, and find the perfect educators for your institution.
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Post unlimited job openings with detailed requirements</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Advanced filtering and sorting of applications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Collaborative hiring with team member access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Interview scheduling and candidate communication</span>
                    </li>
                  </ul>
                  {/* <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                    Post Job Opening
                  </button> */}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Parents</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-left">
                    Find the perfect tutor for your child's educational needs. Browse verified profiles, 
                    read reviews, and connect directly with qualified educators who can help your child succeed.
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Browse verified tutor profiles with detailed qualifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Read authentic reviews from other parents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Direct messaging and consultation booking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Track your child's progress and session history</span>
                    </li>
                  </ul>
                  {/* <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    Find Tutors
                  </button> */}
            </div> 
        </div>

            {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Education Professional
            </h2>
            <p className="text-xl text-gray-600">
              Tailored features for educators, tutors, institutions, and parents
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2 shadow-md">
              {['educators', 'tutors', 'institutions', 'parents'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            {activeTab === 'educators' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">For Educators</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover your next teaching opportunity with our comprehensive job marketplace. 
                    Browse thousands of positions, apply with ease, and track your applications all in one place.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Browse unlimited job openings from verified institutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>One-click application with saved profile and documents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Real-time application status tracking and notifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Direct communication with hiring managers</span>
                    </li>
                  </ul>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Start Job Search
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Job Matches</h4>
                  <div className="space-y-4">
                    {jobOpenings.slice(0, 2).map((job, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900">{job.title}</h5>
                        <p className="text-sm text-gray-600">{job.institution}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-green-600 font-medium">{job.salary}</span>
                          <span className="text-xs text-gray-500">{job.posted}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tutors' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <User className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">For Tutors</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Build your tutoring business with our comprehensive platform. Create your profile, 
                    showcase your expertise, and connect directly with parents seeking quality education for their children.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Create detailed profile with qualifications and specialties</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Set your rates, availability, and teaching preferences</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Direct messaging with parents and students</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Integrated scheduling and payment processing</span>
                    </li>
                  </ul>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Create Tutor Profile
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-4">Tutor Dashboard Preview</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Active Students</span>
                      <span className="text-lg font-bold text-green-600">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">This Month's Earnings</span>
                      <span className="text-lg font-bold text-blue-600">$2,340</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">Average Rating</span>
                      <span className="text-lg font-bold text-purple-600">4.9 ⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'institutions' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Streamline your hiring process with our institutional dashboard. Post job openings, 
                    manage applications, and find the perfect educators for your institution.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Post unlimited job openings with detailed requirements</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Advanced filtering and sorting of applications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Collaborative hiring with team member access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Interview scheduling and candidate communication</span>
                    </li>
                  </ul>
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                    Post Job Opening
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-4">Hiring Analytics</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                      <span className="text-sm font-medium">Active Job Posts</span>
                      <span className="text-lg font-bold text-teal-600">8</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Total Applications</span>
                      <span className="text-lg font-bold text-orange-600">156</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Interviews Scheduled</span>
                      <span className="text-lg font-bold text-green-600">23</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'parents' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">For Parents</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Find the perfect tutor for your child's educational needs. Browse verified profiles, 
                    read reviews, and connect directly with qualified educators who can help your child succeed.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Browse verified tutor profiles with detailed qualifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Read authentic reviews from other parents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Direct messaging and consultation booking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      <span>Track your child's progress and session history</span>
                    </li>
                  </ul>
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    Find Tutors
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-4">Popular Subjects</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Mathematics', 'Science', 'English', 'History', 'Languages', 'Music'].map((subject, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="text-sm font-medium text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section> */}

         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl  text-center text-white animate-fade-in mt-10 p-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of educators and learners who are already experiencing 
              the future of education with Eduno.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/combined"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Journey
              </Link>
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                <span>Free to get started</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full opacity-5 animate-spin-slow"></div>
      </div>
    </div>


  );
};

export default MainPage;