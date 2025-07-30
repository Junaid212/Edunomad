// src/components/ApplicantsPage.jsx

import React, { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Eye,
  Check,
  X,
  Star,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  ArrowLeft
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function ApplicantsPage({
  isDarkMode,
  isMobileMenuOpen,
  toggleDarkMode,
  toggleMobileMenu
}) {
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
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100';
      case 'reviewed': return 'bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100';
      case 'shortlisted': return 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100';
      case 'rejected': return 'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-100';
      case 'hired': return 'bg-purple-100 text-purple-800 dark:bg-purple-600 dark:text-purple-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const updateApplicantStatus = (id, status) => {
    console.log(`Updating applicant ${id} status to ${status}`);
    // Replace this with actual API/state logic as needed.
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.subjects.some(subject =>
        subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={`min-h-screen flex flex-col ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onJoinNowClick={() => navigate('/register')}
      />

      {/* Hero */}
      <div className="w-full py-12 text-center bg-gradient-to-br from-[#00E5D5] via-[#DAD024] to-[#FFAF85] text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Job Applicants
        </h1>
        <p className="mt-2 text-base sm:text-lg">
          Manage and review applications for your institution
        </p>
        <button
          onClick={() => navigate('/institute-dash')}
          className="mt-4 inline-flex items-center text-sm font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Search & Filter */}
        <section className=" rounded-lg shadow p-6 ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, position, or subject…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent ${isDarkMode ? 'bg-white' : 'bg-gray-100'} `}
              />
            </div>
            <div className="relative w-full md:w-48">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent ${isDarkMode ? 'bg-white text-black' : 'bg-gray-100 text-black'}`}
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
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            {['Total', 'Pending', 'Reviewed', 'Shortlisted', 'Hired'].map(label => {
              const count =
                label === 'Total'
                  ? applicants.length
                  : applicants.filter(a => a.status === label.toLowerCase()).length;
              const colorClass = {
                Total: isDarkMode ? 'text-gray-200' : 'text-black',
                Pending: 'text-yellow-600 dark:text-yellow-400',
                Reviewed: 'text-blue-600 dark:text-blue-400',
                Shortlisted: 'text-green-600 dark:text-green-400',
                Hired: 'text-purple-600 dark:text-purple-400'
              }[label];
              return (
                <div key={label} className="text-center">
                  <div className={`text-2xl font-bold ${colorClass}`}>
                    {count}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Applicants Grid */}
        <section className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {filteredApplicants.map(applicant => (
            <article
              key={applicant.id}
              className={`rounded-lg border shadow-sm p-6 flex flex-col h-full
                `}
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={applicant.avatar}
                  alt={applicant.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-semibold truncate ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                    {applicant.name}
                  </h3>
                  <p className={`text-sm truncate ${isDarkMode ? 'dark:text-gray-400' : 'text-white'}`}>
                    {applicant.position}
                  </p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(applicant.status)}`}>
                      {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                    </span>
                    <div className="flex items-center text-sm text-yellow-400">
                      <Star className="w-4 h-4" />
                      <span className="ml-1">{applicant.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className={`flex-1 space-y-2 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span className="truncate">{applicant.education}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{applicant.experience} experience</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">{applicant.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="truncate">{applicant.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{applicant.phone}</span>
                </div>
              </div>

              {/* Subjects */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {applicant.subjects.slice(0, 3).map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-teal-700 rounded-full text-xs ">
                      {s}
                    </span>
                  ))}
                  {applicant.subjects.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs dark:bg-gray-700 dark:text-gray-200">
                      +{applicant.subjects.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-2">
                <button
                  onClick={() => setSelectedApplicant(applicant)}
                  className="w-full flex items-center justify-center px-3 py-2 rounded-lg text-sm bg-[#07E4CE]  text-white transition"
                >
                  <Eye className="w-4 h-4 mr-2" /> View Details
                </button>
                {applicant.status === 'pending' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateApplicantStatus(applicant.id, 'shortlisted')}
                      className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg text-sm bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-700 dark:hover:bg-green-600 dark:text-green-100 transition"
                    >
                      <Check className="w-4 h-4 mr-1" /> Accept
                    </button>
                    <button
                      onClick={() => updateApplicantStatus(applicant.id, 'rejected')}
                      className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg text-sm bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-700 dark:hover:bg-red-600 dark:text-red-100 transition"
                    >
                      <X className="w-4 h-4 mr-1" /> Reject
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {filteredApplicants.length === 0 && (
          <p className="text-center py-12 text-gray-500 dark:text-gray-400">
            No applicants match your criteria.
          </p>
        )}
      </main>

      {/* Detail Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className= {`rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-gray-900 text-gray-50' : 'bg-gray-100 text-gray-900'}`}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedApplicant.avatar}
                    alt={selectedApplicant.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h2 className={`text-2xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                      {selectedApplicant.name}
                    </h2>
                    <p className={`text-lg ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>
                      {selectedApplicant.position}
                    </p>
                    <div className="flex items-center mt-1 text-yellow-400">
                      <Star className="w-4 h-4" />
                      <span className="ml-1">{selectedApplicant.rating} rating</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedApplicant(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6 px-2">
                <section>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                    Contact Information
                  </h3>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>
                    <div className="flex items-center"><Mail className="w-4 h-4 mr-2" />{selectedApplicant.email}</div>
                    <div className="flex items-center"><Phone className="w-4 h-4 mr-2" />{selectedApplicant.phone}</div>
                    <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{selectedApplicant.location}</div>
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />Applied: {new Date(selectedApplicant.appliedDate).toLocaleDateString()}</div>
                  </div>
                </section>

                <section>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                    Qualifications
                  </h3>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>
                    <div><strong>Education:</strong><p>{selectedApplicant.education}</p></div>
                    <div><strong>Experience:</strong><p>{selectedApplicant.experience}</p></div>
                    <div><strong>Expected Salary:</strong><p>{selectedApplicant.expectedSalary}</p></div>
                  </div>
                </section>

                <section>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                    Subjects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplicant.subjects.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm dark:bg-teal-700 dark:text-teal-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                    Cover Letter
                  </h3>
                  <p className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-gray-700 dark:text-gray-200">
                    {selectedApplicant.coverLetter}
                  </p>
                </section>

                <section>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                    Resume
                  </h3>
                  <button className="inline-flex items-center px-4 py-2 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-lg dark:bg-teal-700 dark:hover:bg-teal-600 dark:text-teal-100 transition">
                    <Download className="w-4 h-4 mr-2" />
                    Download {selectedApplicant.resume}
                  </button>
                </section>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
                <button onClick={() => setSelectedApplicant(null)} className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition">
                  Close
                </button>
                {selectedApplicant.status === 'pending' && (
                  <>
                    <button
                      onClick={() => {
                        updateApplicantStatus(selectedApplicant.id, 'rejected');
                        setSelectedApplicant(null);
                      }}
                      className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg dark:bg-red-700 dark:hover:bg-red-600 dark:text-red-100 transition"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => {
                        updateApplicantStatus(selectedApplicant.id, 'shortlisted');
                        setSelectedApplicant(null);
                      }}
                      className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg dark:bg-green-700 dark:hover:bg-green-600 dark:text-green-100 transition"
                    >
                      Shortlist
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
