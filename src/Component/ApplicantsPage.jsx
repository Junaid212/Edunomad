import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Check, X, Star, MapPin, Calendar, GraduationCap, Briefcase, Mail, Phone, ArrowLeft } from 'lucide-react';
import Header from './Header';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';


const ApplicantsPage = (isDarkMode, isMobileMenuOpen, toggleDarkMode, toggleMobileMenu) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const navigate = useNavigate();

  const applicants = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      position: 'Mathematics Teacher',
      experience: '5 years',
      education: 'MSc Mathematics, MIT',
      location: 'New York, NY',
      appliedDate: '2024-01-15',
      status: 'pending',
      rating: 4.9,
      subjects: ['Mathematics', 'Statistics', 'Calculus'],
      resume: 'sarah_johnson_resume.pdf',
      coverLetter: 'Passionate mathematics educator with 5 years of experience...',
      expectedSalary: '$65,000'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 234-5678',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      position: 'Chemistry Teacher',
      experience: '8 years',
      education: 'PhD Chemistry, Stanford',
      location: 'San Francisco, CA',
      appliedDate: '2024-01-12',
      status: 'shortlisted',
      rating: 4.8,
      subjects: ['Chemistry', 'Organic Chemistry', 'Biochemistry'],
      resume: 'michael_chen_resume.pdf',
      coverLetter: 'Experienced chemistry educator with research background...',
      expectedSalary: '$75,000'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '+1 (555) 345-6789',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      position: 'English Literature Teacher',
      experience: '6 years',
      education: 'MA English Literature, Harvard',
      location: 'Austin, TX',
      appliedDate: '2024-01-10',
      status: 'reviewed',
      rating: 4.7,
      subjects: ['English Literature', 'Creative Writing', 'Grammar'],
      resume: 'emily_rodriguez_resume.pdf',
      coverLetter: 'Creative and dedicated English literature teacher...',
      expectedSalary: '$58,000'
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+1 (555) 456-7890',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      position: 'Physics Teacher',
      experience: '4 years',
      education: 'MSc Physics, Caltech',
      location: 'Los Angeles, CA',
      appliedDate: '2024-01-08',
      status: 'rejected',
      rating: 4.5,
      subjects: ['Physics', 'Quantum Mechanics', 'Thermodynamics'],
      resume: 'david_kim_resume.pdf',
      coverLetter: 'Physics enthusiast with strong theoretical background...',
      expectedSalary: '$62,000'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@email.com',
      phone: '+1 (555) 567-8901',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      position: 'Biology Teacher',
      experience: '7 years',
      education: 'PhD Biology, Yale',
      location: 'New Haven, CT',
      appliedDate: '2024-01-05',
      status: 'hired',
      rating: 4.9,
      subjects: ['Biology', 'Genetics', 'Ecology'],
      resume: 'lisa_thompson_resume.pdf',
      coverLetter: 'Experienced biology educator with research expertise...',
      expectedSalary: '$70,000'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'hired': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateApplicantStatus = (applicantId, newStatus ) => {
    // In a real app, this would make an API call
    console.log(`Updating applicant ${applicantId} status to ${newStatus}`);
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         applicant.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         applicant.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    
    <div className={isDarkMode ? 'bg-white text-gray-900' : 'bg-white text-gray-900'}>
              <Header
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                onJoinNowClick={() => navigate('/register')}
              />
      {/* Header */}
      <div className="text-center  w-full p-20  text-white bg-gradient-to-br from-[#00E5D5] via-[#DAD024] to-[#FFAF85] opacity-90">
          <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>
           Job Applicants
          </h1>
          <p className={`mt-2 text-xl ${isDarkMode ? 'text-white' : 'text-white'}`}>
           Manage and review applications for your institution
          </p>
          <button
            onClick={() => navigate('/institute-dash')}
            className={`flex items-center space-x-2 mb-6 text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      {/* <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Job Applicants</h1>
              <p className="text-gray-600 mt-1">Manage and review applications for your institution</p>
            </div>
            {/* <div className="flex space-x-3">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
            </div> 
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, position, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
                <option value="hired">Hired</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{applicants.length}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{applicants.filter(a => a.status === 'pending').length}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{applicants.filter(a => a.status === 'reviewed').length}</div>
              <div className="text-sm text-gray-600">Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{applicants.filter(a => a.status === 'shortlisted').length}</div>
              <div className="text-sm text-gray-600">Shortlisted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{applicants.filter(a => a.status === 'hired').length}</div>
              <div className="text-sm text-gray-600">Hired</div>
            </div>
          </div>
        </div>

        {/* Applicants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApplicants.map((applicant) => (
            <div key={applicant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-fit">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={applicant.avatar}
                    alt={applicant.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{applicant.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{applicant.position}</p>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(applicant.status)}`}>
                            {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                          </span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 ml-1">{applicant.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600 mb-4 flex-1">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{applicant.education}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{applicant.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{applicant.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{applicant.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{applicant.phone}</span>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {applicant.subjects.slice(0, 3).map((subject, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs"
                      >
                        {subject}
                      </span>
                    ))}
                    {applicant.subjects.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{applicant.subjects.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 mt-auto">
                  <button
                    onClick={() => setSelectedApplicant(applicant)}
                    className="w-full flex items-center justify-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                  
                  {applicant.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateApplicantStatus(applicant.id, 'shortlisted')}
                        className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Accept
                      </button>
                      <button
                        onClick={() => updateApplicantStatus(applicant.id, 'rejected')}
                        className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredApplicants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No applicants found matching your criteria.</div>
          </div>
        )}
      </div>

      {/* Applicant Detail Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedApplicant.avatar}
                    alt={selectedApplicant.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedApplicant.name}</h2>
                    <p className="text-lg text-gray-600">{selectedApplicant.position}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600 ml-1">{selectedApplicant.rating} rating</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{selectedApplicant.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{selectedApplicant.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{selectedApplicant.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Applied: {new Date(selectedApplicant.appliedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Education:</span>
                      <p className="text-gray-600">{selectedApplicant.education}</p>
                    </div>
                    <div>
                      <span className="font-medium">Experience:</span>
                      <p className="text-gray-600">{selectedApplicant.experience}</p>
                    </div>
                    <div>
                      <span className="font-medium">Expected Salary:</span>
                      <p className="text-gray-600">{selectedApplicant.expectedSalary}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplicant.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cover Letter</h3>
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{selectedApplicant.coverLetter}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Resume</h3>
                  <button className="flex items-center px-4 py-2 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download {selectedApplicant.resume}
                  </button>
                </div>

                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedApplicant(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Close
                  </button>
                  {selectedApplicant.status === 'pending' && (
                    <>
                      <button
                        onClick={() => {
                          updateApplicantStatus(selectedApplicant.id, 'rejected');
                          setSelectedApplicant(null);
                        }}
                        className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => {
                          updateApplicantStatus(selectedApplicant.id, 'shortlisted');
                          setSelectedApplicant(null);
                        }}
                        className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
                      >
                        Shortlist
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
   
    <Footer isDarkMode={isDarkMode} />
    </div>

  );
};

export default ApplicantsPage;