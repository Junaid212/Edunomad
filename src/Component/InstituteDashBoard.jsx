// src/components/InstituteDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Plus,
  Users,
  Eye,
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronRight
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function InstituteDashboard({
  isDarkMode,
  toggleDarkMode,
  isMobileMenuOpen,
  toggleMobileMenu
}) {
  const navigate = useNavigate();
  const [instituteData, setInstituteData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('instituteData');
    if (data) {
      setInstituteData(JSON.parse(data));
    } else {
      navigate('/institute-dash');
    }
  }, [navigate]);

  if (!instituteData) {
    return (
      <div className={`min-h-screen flex items-center justify-center
        ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-700'}`}>
        <p>No data found</p>
      </div>
    );
  }

  const handleAddJobVacancy = () => navigate('/add-job-vacancy');
  const handleApplicantCard = () => navigate('/applicant-page');

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen flex flex-col`}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onJoinNowClick={() => navigate('/register')}
      />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 mb-2">
            <Building2 className="w-8 h-8 text-[#00E5D5]" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E5D5] to-[#FFAF85]">
              Institute Dashboard
            </h1>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
            Welcome to your institute management portal
          </p>
        </div>

        {/* Institute Info Card */}
        <section
          className={`rounded-lg overflow-hidden shadow-lg p-6
            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className={`border-b pb-4 mb-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h2 className="flex items-center text-3xl font-semibold">
                  <Building2 className="w-14 h-14 text-blue-600 mr-3" />
                  {instituteData.instituteName}
                </h2>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mt-1 text-sm space-x-2`}>
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-medium
                      ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                  >
                    {instituteData.instituteType}
                  </span>
                  <span>Established {instituteData.establishedYear}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              {/* <div className="flex items-center mb-3">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <strong className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Students:</strong>
                <span className="ml-1">{instituteData.studentCount || '—'}</span>
              </div> */}
              <div className="flex items-center mb-3">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <strong className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Email:</strong>
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>{instituteData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-2" />
                <strong className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Phone:</strong>
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>{instituteData.phone}</span>
              </div>
            </div>

            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              <div className="flex items-start mb-3">
                <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                <div>
                  <strong className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Location:</strong>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
                    {instituteData.location || `${instituteData.city}, ${instituteData.state}`}
                  </p>
                </div>
              </div>
              {instituteData.websiteUrl && (
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-[#00E5D5] mr-2" />
                  <strong className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Website:</strong>
                  <a
                    href={instituteData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-[#00E5D5] hover:underline"
                  >
                    Visit Site
                  </a>
                </div>
              )}
            </div>

            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              <strong className={`${isDarkMode ? 'text-white' : 'text-black'}`}>About Institute:</strong>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-1 whitespace-pre-line`}>
                {instituteData.description || 'No description provided.'}
              </p>
            </div>
          </div>
        </section>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={handleAddJobVacancy}
            className={`cursor-pointer rounded-lg shadow-lg p-6 transition hover:shadow-xl
              ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg mr-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                <Plus className="w-6 h-6 text-[#00E5D5]" />
              </div>
              <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Add Job Vacancy</h4>
              <ChevronRight className={`ml-auto w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              Post new job opportunities for students and alumni
            </p>
            <button className="w-full py-2 rounded-lg bg-[#DAD024] text-white">
              Create Job Posting
            </button>
          </div>

          <div
            onClick={handleApplicantCard}
            className={`cursor-pointer rounded-lg shadow-lg p-6 transition hover:shadow-xl
              ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg mr-4 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'}`}>
                <Eye className="w-6 h-6 text-[#00E5D5]" />
              </div>
              <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>View Applications</h4>
              <ChevronRight className={`ml-auto w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              Review and manage job applications from candidates
            </p>
            <button className="w-full py-2 rounded-lg border text-[#00E5D5] border-[#00E5D5]">
              View All Applications
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className={`rounded-lg shadow-lg p-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active Job Postings</div>
          </div>
          <div
            className={`rounded-lg shadow-lg p-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="text-2xl font-bold text-indigo-600">0</div>
            <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Applications</div>
          </div>
          <div
            className={`rounded-lg shadow-lg p-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Successful Placements</div>
          </div>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
